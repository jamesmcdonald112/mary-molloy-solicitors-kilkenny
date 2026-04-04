# TODO

## Pages — remaining work
- [ ] Testimonials — add a section to the homepage and consider a standalone page; source reviews from Google Business Profile (see note below)

> **Business Place ID:** `ChIJeTRDMZ4wXUgRwZoAUIYc-30`
>
> **Google Reviews setup — what you need and why:**
>
> **What you need:**
> 1. **A Google Cloud account (yours, not Nick's)** — you're building and maintaining this, and you may do it for other clients too. One account, one project per client. Go to console.cloud.google.com and sign in with your Google account.
> 2. **A Places API key** — this is what lets the site talk to Google and fetch the reviews. Without it Google won't return anything. Free up to 150 requests/day, which is fine.
> 3. **The business Place ID** — a unique ID Google uses to identify the business. You can find it yourself without logging in — go to Google Maps, search for the business, and use Google's Place ID finder tool (search "Google Place ID finder").
>
> **What to do:**
> 1. Go to console.cloud.google.com → create a new project (e.g. "Mary Molloy Solicitors")
> 2. Enable the **Places API** on that project
> 3. Create an **API key** and restrict it to the Places API (so it can't be misused if leaked)
> 4. Find the **Place ID** for the business on Google Maps
> 5. Add the API key to **Netlify environment variables** (never put it in the code/repo — it would be public)
> 6. Build the fetch + cache logic in the site (cache for 24hrs so the API is only hit once a day regardless of traffic)

- [ ] About Us page — needs building
- [ ] Homepage — needs building (also needs a hero image)
- [ ] Review all service slug pages — make sure content and layout are complete
- [ ] Property page — decide whether to fold into `/services/[slug]` pattern or keep as standalone

## Design & Layout
- [ ] Experiment with the team section — try centering the image
- [ ] Decide on the buying and selling property page structure — move under `/services/[slug]` or keep as a standalone route
- [ ] Check `text-subtle` colour token — consider adding it back in

## Assets
- [ ] Find a better icon for Family & Childcare Law — current one is generic
- [ ] Source appropriate images for all services — portrait (3:4 or 2:3) for slug page heroes, same image used for card hover
- [ ] Once all 8 service images are in place, wire up per-service hero images in `src/pages/services/[slug].astro` — currently hardcoded to one image for all services
- [ ] Source a landscape (16:9) hero image for the homepage
- [ ] Credit photo artists on the site (check each image source for attribution requirements — Unsplash/Pexels don't require it but it is good practice)

## Content & Config
- [ ] Replace placeholder email in `src/config/firm.ts` — currently `info@YOURDOMAIN.ie`
- [ ] Update `siteUrl` in `src/config/firm.ts` — currently points to the Netlify test URL

## Font experiment
- [ ] Settle on final heading/body font pairing (currently Merriweather + Open Sans)

## Accessibility
- [ ] Check alt text for service hero images — currently `alt=""` (decorative) on card hover images and hero backgrounds; confirm this is correct or add descriptive alt where needed

## Cleanup
- [ ] Delete `src/sections/` — contains the old placeholder hero layout (`HeroTailwind.astro`), not part of the real site
- [ ] Delete `src/pages/test.astro` — test page, not for production
