# Nick Solicitors — Website

Astro website for Nick Solicitors.

---

## Development

```bash
npm run dev        # start dev server
npm run build      # production build
npm run test       # run tests
npm run test:watch # run tests in watch mode
```

---

## Adding New Pages

When creating a new content page (e.g. a new service, a landing page), add structured data so Google can index the business correctly:

```astro
import { getLawFirmStructuredData } from "../config/structured-data";
const structuredData = getLawFirmStructuredData();
```

Then pass it to `BaseLayout`:

```astro
<BaseLayout ... structuredData={structuredData}>
```

You don't need this on legal/policy pages (privacy, terms, cookie policy, etc.) — only on real content pages.

---

## Going Live — Security Headers

Browsers support a set of HTTP response headers that protect users from common attacks. These should be added to `netlify.toml` before the site goes live. They are free, require no code changes, and Lighthouse will flag their absence.

### Why each one matters

**X-Frame-Options (XFO)**
Prevents your site from being embedded inside an `<iframe>` on another website. Without it, an attacker can overlay your site invisibly and trick users into clicking things they didn't intend to — known as clickjacking. A user could think they're clicking your contact form but actually clicking something on the attacker's page underneath.

**X-Content-Type-Options**
Stops the browser from guessing the file type of a response. Without it, a browser might execute a file as a script even if the server said it was an image. A simple one-liner that closes a real attack vector.

**Referrer-Policy**
Controls what URL information is sent when a user clicks a link to another site. Without it, the full URL of the page they were on (including any query strings) is sent to the destination site. Setting this to `strict-origin-when-cross-origin` sends only the domain name, not the full path.

**Permissions-Policy**
Tells the browser which device features your site is allowed to use. Since this site doesn't use the camera, microphone, or geolocation, you can explicitly disable them — so even if a malicious script were somehow injected, it couldn't access them.

**COOP (Cross-Origin-Opener-Policy)**
Prevents other websites from getting a reference to your browser window if your site is opened via a popup or link. Closes a class of cross-site attacks where a malicious page can interact with yours.

**HSTS (Strict-Transport-Security)**
Forces the browser to always use HTTPS for your domain, even if someone types `http://`. After the first visit, the browser will refuse to connect over plain HTTP. This only works if the site is on HTTPS (which Netlify/Vercel handle automatically).

### How to add them

In `netlify.toml`, add a `[[headers]]` block:

```toml
[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-Content-Type-Options = "nosniff"
    Referrer-Policy = "strict-origin-when-cross-origin"
    Permissions-Policy = "camera=(), microphone=(), geolocation=()"
    Cross-Origin-Opener-Policy = "same-origin"
    Strict-Transport-Security = "max-age=63072000; includeSubDomains; preload"
```

### CSP (Content Security Policy) — add last

CSP is the most powerful header but also the most complex. It tells the browser exactly which sources are allowed to load scripts, styles, fonts, and images. Any source not listed is blocked — this stops injected malicious scripts from running.

The reason to add it last: you need to know every third-party resource the site loads (Google Fonts, Google Analytics, GTM, Facebook Pixel, Resend etc.) before writing the policy, otherwise you will break things. Add CSP once the cookie consent and tracking setup is complete and you know exactly what's on the page.

A starting point once you know your external services:

```toml
Content-Security-Policy = "default-src 'self'; script-src 'self' https://www.googletagmanager.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data:; connect-src 'self';"
```

Adjust the allowed sources to match whatever is actually on the page. Test thoroughly after adding — a wrong CSP will silently break scripts and styles.

---

## TODO — Before Launch

- [ ] **Delete `src/sections/`** — this folder was used for the mock/placeholder layout only and will likely not be needed once the real homepage is built.

- [ ] **Firm email address** — replace the placeholder `email` value in `src/config/firm.ts` with the real firm email address.
- [ ] **OG images** — create and add a default Open Graph image. Currently using placeholder/default values. The default image is set in `firm.seo.defaultOgImage` (`src/config/firm.ts`) and should be placed in `public/images/open-graph/`. A single good default image is fine for all pages — per-page OG images are optional and can be passed via the `ogImage` and `ogImageAlt` props on `BaseLayout` if you ever want a specific image for a particular page (e.g. a services page).

---

## Going Live — Cookie Consent & Tracking Setup

The site will need cookie consent management for GDPR compliance if running Google or Facebook ads.

### What you need

Two tools working together:

- **Google Tag Manager (GTM)** — fires tracking scripts (Google Analytics, Facebook Pixel etc.). Free, no limits.
- **Cookiebot** — shows the consent banner, stores whether the user consented. Free up to 100 pages (more than enough for this site).

They work as a pair: Cookiebot captures consent, GTM only fires tags when Cookiebot confirms the user has agreed. You cannot use one without the other — GTM alone would fire tracking immediately (GDPR violation), Cookiebot alone has nothing to manage.

### Cookies this site will likely need consent for

- `_ga`, `_gid`, `_gcl_au` — Google Analytics / Google Ads
- `_fbp`, `_fbc` — Facebook Pixel
- Session/functional cookies — these are usually exempt from consent

### Account setup

Both services require their own account per domain. The recommended handoff process:

1. Client creates a **Google account** (or uses an existing one)
2. Client signs up for **Cookiebot** at [cookiebot.com](https://www.cookiebot.com)
3. Developer logs in to both accounts to configure everything
4. Client adds developer as a **GTM/GA4 user** with admin access (cleaner than sharing passwords — developer uses their own Google account)
5. Once setup is complete, developer is removed as a user; Cookiebot credentials are handed back and password changed

### Setup steps

1. **Cookiebot** — add the domain, copy the script tag it provides
2. **GTM** — create a container, add the Cookiebot tag via the built-in GTM template (no code needed), then add Google Analytics and Facebook Pixel as tags set to fire on Cookiebot consent
3. Add the **GTM snippet** to the site's `<head>` — this is the only code change required

Once GTM is in place, all future tracking changes are made in the GTM dashboard, not in the codebase.

---

## Going Live — Switch Adapter to Vercel

The site currently uses `@astrojs/netlify` as a temporary adapter during development. Before going live on Vercel, swap it out:

1. Uninstall the Netlify adapter:
   ```bash
   npm uninstall @astrojs/netlify
   ```

2. Install the Vercel adapter:
   ```bash
   npx astro add vercel
   ```

3. In `astro.config.mjs`, replace:
   ```js
   import netlify from "@astrojs/netlify";
   adapter: netlify(),
   ```
   with:
   ```js
   import vercel from "@astrojs/vercel";
   adapter: vercel(),
   ```

---

## Going Live — Email Setup (Resend)

The contact form uses [Resend](https://resend.com) to send emails. During development it runs in **sandbox mode**, which only allows sending to the email address you signed up to Resend with.

Before going live you must verify a domain so that emails can be delivered to any recipient (e.g. the solicitor's work inbox).

### Steps

1. **Log in to Resend** at [resend.com](https://resend.com)

2. **Add your domain**
   - Go to **Domains → Add Domain**
   - Enter the domain the site will be hosted on (e.g. `nicksolicitors.ie`)

3. **Add the DNS records**
   - Resend will show you a set of DNS records (MX, TXT, DKIM)
   - Add these in your domain registrar (e.g. Cloudflare, GoDaddy, Namecheap)
   - Click **Verify** in Resend once they're added — DNS can take up to 24 hours to propagate but is usually much faster

4. **Update `deliverContact.ts`**

   Open `src/features/contact-form/service/deliverContact.ts` and update these two lines:

   ```ts
   const FROM = "contact@nicksolicitors.ie"; // must use your verified domain
   const TO = "nick@nicksolicitors.ie";       // the solicitor's actual email
   ```

5. **Set the production API key**

   Make sure the `RESEND_API_KEY` environment variable is set in your hosting platform (e.g. Netlify, Vercel) using the API key from your Resend account.

Once the domain is verified and these values are updated, the contact form will deliver directly to the solicitor's inbox.

---

## Contact Form — Spam Protection

The form currently has two layers of protection:

- **Honeypot field** — a hidden input that bots tend to fill in; submissions with it filled are silently discarded
- **Zod validation** — all fields are validated server-side before the email is sent

This is sufficient for a low-traffic site. If the client reports a spam problem in the future, the recommended next step is **rate limiting** via [Upstash Redis](https://upstash.com) (free tier covers thousands of requests per day, works with Vercel). This would limit submissions per IP to e.g. 3 per hour.

---

## Testing Structured Data

After adding or changing structured data, validate it with Google's Rich Results Test:

1. Run the site locally: `npm run dev`
2. Go to [search.google.com/test/rich-results](https://search.google.com/test/rich-results)
3. Enter your local URL or paste the page HTML directly
4. Google will validate the JSON-LD and highlight any errors

Alternatively, use the [Schema.org Validator](https://validator.schema.org) to paste the raw JSON output directly.

---

# Accessibility Statement

An accessibility statement page is included as part of the standard legal pages.

## How it is generated
- The content is generated with the [W3C Accessibility Statement Generator](https://www.w3.org/WAI/planning/statements/generator/#create).
- The statement aligns with WCAG 2.1 Level AA guidance.

## Dynamic firm details
- Contact details (phone, address, contact form link) are populated from the firm configuration file.

## Default feedback channels
- Public phone number
- Office address
- Website contact form (choose **General Enquiry**)

## Important
⚠️ If the firm wants to publish a public email address, add that address to the statement and confirm the preferred accessibility contact method before launch.
