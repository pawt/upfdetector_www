# Handover — SEO & Content (updated September 22, 2026)

This file covers search, blog content, and the public website. `NEXT_STEPS.md`
contains the separate analytics and iOS product backlog. Read `CLAUDE.md` for
site conventions before editing pages.

## Current state

### All blog posts (10)

Newest first. "Canonical" is the exact form to use in `og:url`, JSON-LD `@id`,
the sitemap and inbound links — two older posts are extensionless.

| Published | Post | File (`blog/`) | Canonical | Notes |
|---|---|---|---|---|
| 2026-09-22 | Is Greek Yogurt Ultra-Processed? FAGE, Oikos & Chobani | `is-greek-yogurt-ultra-processed.html` | `.html` | 6 products (UK/US/AU), checked Sept 22. Measure in October. |
| 2026-09-10 | Is Peanut Butter Ultra-Processed? Read the Label | `is-peanut-butter-ultra-processed.html` | `.html` | 7 products (UK/US/AU), checked Sept 10. Measure in October. |
| 2026-09-08 | Is Oat Milk Ultra-Processed? It Depends on 3 Ingredients | `is-oat-milk-ultra-processed.html` | `.html` | Measure in early October. |
| 2026-09-01 | 12 "Healthy" Foods That Are Actually Ultra-Processed | `healthy-foods-that-are-ultra-processed.html` | `.html` | Hub post; links to every single-food article. |
| 2026-05-19 | Is Bread Ultra-Processed? Most Loaves Are NOVA 4 | `is-bread-ultra-processed.html` | `.html` | Retitled Sept 1 — **frozen until the GSC comparison is recorded**. |
| 2026-04-08 | Do Ultra-Processed Foods Make You Gain Weight? | `ultra-processed-foods-and-weight-gain.html` | `.html` | `- UPF Detector Blog` suffix dropped Sept 22. Position ~19, very few impressions. |
| 2026-03-04 | Is Nutella Ultra-Processed? 7 of 10 Breakfasts Are NOVA 4 | `is-nutella-ultra-processed-breakfast-foods-scanned.html` | `.html` | Retitled Sept 1 — **frozen**. Body gained one Greek-yogurt link Sept 22 (title unchanged). |
| 2026-02-19 | What Are Ultra-Processed Foods? The NOVA System Explained | `what-are-ultra-processed-foods-nova-classification.html` | extensionless | New hero + label image Sept 12. Overlaps with how-to-identify (next step 1). |
| 2025-04-09 | How to Identify Ultra-Processed Foods (NOVA Guide 2025) | `how-to-identify-ultra-processed-foods.html` | extensionless | Stale "2025" title; overlaps with the NOVA explainer (next step 1). |
| 2025-03-11 | Why I Created an Ultra-Processed Food Scanner App for iOS | `why-ive-created-upf-detector.html` | extensionless | Founder story. Suffix dropped and grammar fixed Sept 22 (`og:title`/H1 still read “Why I've Created UPF Detector App”). |

All ten are in `sitemap.xml` and `blog/index.html`.

### What shipped recently

- **September 1 SEO pass:** canonical cleanup, new titles and meta
  descriptions for the Nutella and bread posts, homepage app-intent SEO,
  structured data, social cards, and the navbar download CTA.
- **September 8 — oat milk.** Linked from healthy-foods; both added photos
  render on the live page.
- **September 10 — peanut butter.** Hero `img/peanut-butter-ultra-processed.jpg`
  (1456 × 816) plus `peanut-butter-stirring.jpg`,
  `peanut-butter-reading-label.jpg` and `peanut-butter-smooth-vs-crunchy.jpg`.
  Linked from healthy-foods and weight-gain.
- **September 12 — NOVA explainer imagery:** hero
  `img/what-are-ultra-processed-foods-nova-hero.webp` (also the social image,
  with `og:image:alt`) and `img/tricky-cases-reading-food-label.webp`. Title
  unchanged.
- **September 22 — Greek yogurt.** Hero `img/greek-yogurt-ultra-processed.jpg`
  (1456 × 816), `greek-yogurt-plain-vs-flavored.jpg` (1344 × 896) and
  `greek-yogurt-milk-cultures-illustration.jpg` (1232 × 928). Has an
  at-a-glance table of the six products under the quick answer and a brand
  FAQ. Linked from healthy-foods, Nutella/breakfast and weight-gain. It was
  first published as "…? Check the Label" and retitled the same day
  ([PR #4](https://github.com/pawt/upfdetector_www/pull/4)) so it doesn't
  echo the peanut-butter title and matches brand searches. Label-reading and
  straining images were planned but not supplied.
- Image-generation prompts are no longer kept in the repo: anything under the
  site root is published by GitHub Pages. The `docs/` prompt files were
  removed in PR #4.

### Open fact-checks

- **Greek yogurt:** confirm Oikos Triple Zero Vanilla (US) no longer lists
  chicory root fiber, and that "milk solids" on Farmers Union High Protein
  Strawberry (AU) includes added milk protein, as the post suggests.
- **Peanut butter:** preserve the exact market and variant when updating.
  Jif Creamy and Jif Natural have different recipes, and Bega Light is a
  peanut spread with different ingredients from Bega Original.
- The classifications in all single-food posts are our ingredient-based
  assessments, not manufacturer ratings or reported app scans.

## Next steps

### 1. Resolve the two overlapping NOVA explainers

The next substantive SEO task is to address cannibalisation between:

- `what-are-ultra-processed-foods-nova-classification` (position 18.5 → 17.7 on Sept 22)
- `how-to-identify-ultra-processed-foods` (position 47.8 → 49.2 on Sept 22)

They cover much of the same ground. Use GSC query data for both URLs to decide
whether to merge the weaker page into the stronger one with a redirect or give
the weaker page a sharply distinct, practical ingredient-label/checklist
intent. In either case, remove **“NOVA Guide 2025”** from the weaker page's
title; it is stale.

Both posts use extensionless canonical URLs. If they are merged, update the
inbound links in the same change. As of September 22 these posts link to one
or both: healthy-foods, Greek yogurt, Nutella/breakfast, oat milk, peanut
butter, weight gain and why-I-created (`grep -l` for the two paths in
`blog/` to recheck).

### 2. Measure the September 1 title changes

A September 22 three-month snapshot is recorded below, but a three-month
window still mostly covers the old titles, so it can't settle the question.
Around **September 29**, open GSC **Performance → Pages**, choose
**Date → Compare → custom**, and compare **Sept 1–28** with **Aug 4–31**
(same length, same weekdays). Record position, CTR, clicks and impressions for
the Nutella and bread posts and the homepage here.

Do not change the Nutella or bread titles until that comparison is recorded.
Measure oat milk, peanut butter and Greek yogurt separately in October.

### 3. Choose the next single-food article

Continue the winning “Is X ultra-processed?” format. Oat milk, peanut butter
and Greek yogurt are now covered. Choose the next candidate from GSC query
demand rather than drafting blind. Follow the Greek yogurt post's pattern:
named products from the UK, US and Australia, a dated ingredient check, a
summary table near the top, and a title that doesn't reuse an earlier post's
second half ("Read the Label", "Check the Label"). Link the new post from the
healthy-foods hub and any post that already mentions the food.

### 4. Oat milk gets impressions but no clicks

In the September 22 snapshot the oat-milk post sat at average position 5.7
with 330 impressions and **0 clicks** in its first two weeks; about half those
impressions (159) were in AI features (AI Overviews). In October, open its
queries in GSC. If it is still ~0 clicks at a page-one position, test a title
that promises something the AI Overview can't give (named products or brands,
as the Greek yogurt title does). Also compare its average position with and
without AI features.

### 5. Homepage app-intent queries

`nova food classification app` (355 impressions, position 5.9) and `upf app`
(257, position 8.4) are the largest app-intent queries and both sit below
the top three. The `free`-prefixed queries already rank 1–3 and convert.
Consider homepage copy/headings that use the exact phrases “NOVA food
classification app” and “UPF app” naturally — without touching the title
again until the September comparison is done.

### Optional checks

- Re-scrape the oat-milk article in Facebook's Sharing Debugger.
- Test a `.webp` blog social image and the oat-milk `.jpg` with LinkedIn Post
  Inspector. Convert the `.webp` images only if LinkedIn fails to render them.
- Add explicit `og:image:alt` values. Done for Greek yogurt, peanut butter
  and the NOVA explainer; the other seven posts still lack it. Useful but low
  priority.

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

## GSC snapshot — September 22 (last 3 months, web search)

Site total: **206 clicks, 16.5k impressions, CTR 1.3%, average position 11.2.**
The daily chart has two impression spikes (around Aug 9 and Sept 6), both
driven mostly by AI-feature impressions; cause unknown.

| Page | Position | Impressions | Clicks | CTR | vs. Sept 1 baseline |
|---|---:|---:|---:|---:|---|
| Homepage | 7.4 | 5,142 | 157 | 3.1% | clicks +15, position 7.8 → 7.4 |
| Nutella post | 4.8 | 3,928 | 33 | 0.8% | clicks +8, CTR 0.7% → 0.8% |
| NOVA explainer | 17.7 | 3,013 | 7 | 0.2% | position 18.5 → 17.7 |
| Bread post | 8.6 | 3,011 | 5 | 0.2% | clicks −3, CTR 0.3% → 0.2% |
| How-to-identify | 49.2 | 947 | 3 | 0.3% | still page 5 |
| Oat milk (Sept 8) | 5.7 | 330 | 0 | 0% | new |
| Healthy foods (Sept 1) | 30.4 | 142 | 1 | 0.7% | new |
| Weight gain | 19.4 | 31 | 0 | 0% | flat |
| Peanut butter (Sept 10) | 10.8 | 26 | 0 | 0% | new |
| Blog index | 4.3 | 19 | 0 | 0% | — |

Both snapshots are rolling three-month windows, so the comparison column only
reflects the ~3 weeks that changed. Read it as a direction, not a result:
Nutella is tentatively up, and bread is flat to slightly down on single-digit
click counts.

**AI features (AI Overviews), same period:** 4.51k of the 16.5k impressions.
By page: Nutella 1,900 (about half of its impressions), homepage 1,602, NOVA
explainer 566, how-to-identify 162, oat milk 159, bread 113, healthy foods 15.
This is the likely reason Nutella's CTR stays under 1% at position 4.8, and
why `is nutella ultra processed` gets only 8 clicks from 198 impressions at
position 1.4: the AI Overview answers the question on the results page.

**Top queries by clicks:** `upf detector` 15 clicks (54 impressions, position
1.1); `is nutella ultra processed` 8 (198, position 1.4);
`nova food classification app` 5 (355, 5.9); `upf scanner` 3 (80, 8.0);
`upf checker` 3 (64, 7.2); `free processed food scanner` 3 (17, 3.2);
`free processed food scanner app` 2 (30, 1.2); `upf apps` 2 (25, 7.4);
`upf app` 1 (257, 8.4); `upf app free` 1 (62, 6.8).

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
- The September 1 title comparison: record the Sept 1–28 vs Aug 4–31
  comparison around September 29 (see next step 2).
- October: first separate measurements for oat milk, peanut butter and Greek
  yogurt.
- The LinkedIn Post Inspector check gates any social-image conversion work.
