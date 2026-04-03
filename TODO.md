# TODO

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
