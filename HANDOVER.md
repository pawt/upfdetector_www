# Handover — SEO & Content (updated September 10, 2026)

This file covers search, blog content, and the public website. `NEXT_STEPS.md`
contains the separate analytics and iOS product backlog. Read `CLAUDE.md` for
site conventions before editing pages.

## Current state

- The September 1 SEO pass shipped: canonical cleanup, new titles and meta
  descriptions for the Nutella and bread posts, homepage app-intent SEO,
  structured data, social cards, and the navbar download CTA.
- **Is Oat Milk Ultra-Processed?** shipped on September 8 and is linked from
  the healthy-foods article, blog index, and sitemap.
- The live oat-milk page uses both added photos successfully.
- The title changes are only nine days old. Do not draw conclusions from GSC
  yet and do not retitle the Nutella or bread posts again before measuring.

## Next steps

### 1. Resolve the two overlapping NOVA explainers

The next substantive SEO task is to address cannibalisation between:

- `what-are-ultra-processed-foods-nova-classification` (baseline position 18.5)
- `how-to-identify-ultra-processed-foods` (baseline position 47.8)

They cover much of the same ground. Use GSC query data for both URLs to decide
whether to merge the weaker page into the stronger one with a redirect or give
the weaker page a sharply distinct, practical ingredient-label/checklist
intent. In either case, remove **“NOVA Guide 2025”** from the weaker page's
title; it is stale.

Both posts use extensionless canonical URLs. If they are merged, update the
inbound links in `is-oat-milk-ultra-processed.html` and
`healthy-foods-that-are-ultra-processed.html` in the same change.

### 2. Measure the September 1 title changes

On or after **September 22** (three weeks), preferably around **September 29**
(four weeks), open GSC **Performance → Pages** and enable the **Position** and
**CTR** metric cards. Compare the same date-window length against the baseline
below. Nutella and bread are the key pages because both were already on page
one when their titles changed.

Do not change those two pages again until this comparison is recorded. Measure
the September 8 oat-milk article separately in early October.

### 3. Choose the next single-food article

Continue the winning “Is X ultra-processed?” format. **Peanut butter** is the
leading candidate, followed by **Greek yogurt**. Neither has an existing home
in the healthy-foods article, so add natural inbound links from related posts.

### Optional checks

- Re-scrape the oat-milk article in Facebook's Sharing Debugger.
- Test a `.webp` blog social image and the oat-milk `.jpg` with LinkedIn Post
  Inspector. Convert the `.webp` images only if LinkedIn fails to render them.
- Add explicit `og:image:alt` values. This is useful but low priority.

## GSC baseline — September 1, before the title changes

Keep these numbers as the comparison point.

| Page | Position | Impressions | Clicks | CTR |
|---|---:|---:|---:|---:|
| Homepage | 7.8 | 5,160 | 142 | 2.8% |
| Nutella post | **4.8** | 3,795 | 25 | 0.7% |
| Bread post | **8.7** | 3,025 | 8 | 0.3% |
| NOVA explainer | 18.5 | 2,902 | 7 | 0.2% |
| How-to-identify | 47.8 | 1,096 | 2 | 0.2% |
| Weight gain | 16.9 | 46 | 0 | 0% |

App-intent queries produced roughly 965 impressions/month, all landing on the
homepage:

```text
nova food classification app  378      upf checker                   76
upf app                       297      food detector                 67
upf scanner                    83      free processed food scanner   19
```

The `free`-prefixed queries converted at 15–37% CTR, versus 0.67% for
`upf app`; this is why “free” was added to the homepage title.

## Site conventions

- Keep each post's canonical URL, `og:url`, JSON-LD `@id`, sitemap `<loc>`, and
  inbound links byte-identical. Older posts use extensionless URLs; newer ones
  use `.html`. Check the target canonical before linking.
- Keep titles under 60 measured characters. Do not append
  `- UPF Detector Blog`.
- Use the App Store campaign tokens `www_home`, `www_blog`, and `www_nav`; do
  not use an untagged App Store URL.
- The navbar download button uses inline styles because `privacy.html` and
  `terms.html` do not load the blog's Tailwind classes.
- Inspect images before writing alt text and verify generated image references
  against files in `img/`.

## Waiting on external data

- App Store Connect does not show a campaign until it has at least five
  installs from distinct Apple Accounts.
- The September 1 CTR/title comparison should wait until September 22–29.
- The LinkedIn Post Inspector check gates any social-image conversion work.
