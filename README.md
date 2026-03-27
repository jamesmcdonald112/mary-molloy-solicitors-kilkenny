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

## TODO — Before Launch

- [ ] **OG images** — create and add real Open Graph images for each page. Currently using placeholder/default values. Update `src/config/seo/pages.ts` with the correct image paths and ensure images are placed in `public/`.

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
