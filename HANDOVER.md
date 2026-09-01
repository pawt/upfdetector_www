# Handover — SEO & Content, session of Sep 1, 2026

Continuation notes from the Search Console review and content work of
2026-09-01. Companion to `NEXT_STEPS.md` (analytics/product backlog from the
Aug 29 PostHog review) — that file covers the app and tracking, this one
covers search, the blog, and the website's own pages.

Read `CLAUDE.md` first for conventions (campaign tokens, design system,
structure).

---

## What shipped last session

Nine commits, `3bf8124..3d6eff3`, all on `main` and pushed.

| Commit | What |
|---|---|
| `3bf8124` | Fixed canonical/sitemap mismatch that had the NOVA post indexed at **two** URLs (2,902 impressions on one, 390 on the other) |
| `f598330` | Rewrote title + meta description on the two page-one posts. Both were truncating past 60 chars on a `- UPF Detector Blog` suffix |
| `6fd4d45` | Homepage retitled for app-intent queries; removed dead `keywords` meta; added `FAQPage` JSON-LD; navbar download CTA (`ct=www_nav`); `og:image` + Twitter cards across 6 pages |
| `67fb7b0`, `9a5ae49` | New post — *12 "Healthy" Foods That Are Actually Ultra-Processed*, 2,254 words, with hero image |
| `3167f39` | Fixed 4 defects in the `create-blog-post` skill |
| `91b66aa`, `3d6eff3` | Replaced the site hero (was 612×408, now 1200×630 JPG) |

Both Facebook share cards (homepage and the new post) verified rendering
correctly after a re-scrape.

---

## GSC baseline — measured 2026-09-01, BEFORE the title changes

**This is the comparison point.** Nothing below had time to move before it was
recorded. Do not lose these numbers.

| Page | Position | Impressions | Clicks | CTR |
|---|---|---|---|---|
| Homepage | 7.8 | 5,160 | 142 | 2.8% |
| Nutella post | **4.8** | 3,795 | 25 | 0.7% |
| Bread post | **8.7** | 3,025 | 8 | 0.3% |
| NOVA explainer | 18.5 | 2,902 | 7 | 0.2% |
| How-to-identify | 47.8 | 1,096 | 2 | 0.2% |
| Weight gain | 16.9 | 46 | 0 | 0% |

App-intent queries — roughly 965 impressions/month, all landing on the homepage:

```
nova food classification app  378      upf checker                   76
upf app                       297      food detector                 67
upf scanner                    83      free processed food scanner   19
```

Note: the `free`-prefixed queries convert at 15–37% CTR against 0.67% for
`upf app`. "Free" is doing real work in click-through — that's why it went
into the homepage title.

---

## First thing to do next session

Ask the owner for fresh GSC numbers: **Performance → Pages**, with the
**Position** and **CTR** metric cards switched on (they are off by default —
click the cards above the tab bar, not the funnel icon, which only sorts).

Compare against the baseline above. **Nutella and bread are the tell** — both
were already on page one, so if the retitles worked it shows there first.

Do **not** change those two pages again before reading the numbers.

---

## Next piece of work, in priority order

### 1. New post: "Is Oat Milk Ultra-Processed?"

Use the `/create-blog-post` skill.

Single-subject *"Is X ultra-processed?"* is the **only** format that has
reached page one here (Nutella 4.8, bread 8.7). Broad explainers stall at
18–48. Personal narrative gets nothing. Replicate the winner.

The answer is genuinely "it depends on the ingredient list" — oats, water and
salt is not ultra-processed; add gellan gum, dipotassium phosphate and
rapeseed oil and it is. That ambiguity is an asset: the reader has to keep
reading to get their answer.

Link it from the existing oat milk FAQ in the healthy-foods post (keep that
answer short and point to the full article — hub and spoke, not duplication).

Runners-up if oat milk is already covered: **peanut butter** (high volume,
clean two-ingredients-vs-twelve story), **Greek yogurt**.

### 2. Fix the cannibalisation between the two explainers

`what-are-ultra-processed-foods-nova-classification` (pos 18.5) and
`how-to-identify-ultra-processed-foods` (pos 47.8) are the same article twice:

- NOVA post: *The Four NOVA Groups* · *Why UPFs Are Harmful* · *How to Use NOVA Daily*
- How-to-identify: *The Four NOVA Categories* · *How to Spot a UPF* · *Why NOVA Matters*

Google is being asked to pick between them, and the weaker one sits on page
five. Either merge it into the stronger with a redirect, or differentiate them
sharply.

Its title also still reads **"(NOVA Guide 2025)"** — stale year in the one
line searchers actually see.

### 3. Optional — blog `og:image` format

The six blog `og:image` files are `.webp`. Facebook renders these fine
(verified 2026-09-01). **Test LinkedIn's Post Inspector first**; only convert
to `.jpg` if cards are actually broken there. Don't do the work on suspicion.

### 4. Optional — explicit `og:image:alt`

Currently not set on any page. Facebook *infers* it from a matching in-page
`<img>` where one exists, which is why the blog post shows alt text and the
homepage does not. Explicit beats inferred, but this is low priority.

---

## Conventions that bit us — don't repeat

- **URL form.** Every post's `canonical`, `og:url`, JSON-LD `@id`, sitemap
  `<loc>` and inbound internal links must be byte-identical. Older posts are
  extensionless; newer ones use `.html`. Check a target's canonical before
  linking to it:
  ```bash
  grep -o 'rel="canonical" href="[^"]*"' blog/<target>.html
  ```
- **Titles.** Under 60 characters, counted not estimated. Never append
  `- UPF Detector Blog`.
- **Campaign tokens.** `www_home` / `www_blog` / `www_nav`. Never the untagged
  App Store URL. See `CLAUDE.md`.
- **The navbar download button uses inline styles on purpose.** It is injected
  by `include.js` into every page, and `privacy.html` / `terms.html` don't
  define `.download-btn`. Don't refactor it into Tailwind utility classes.
- **Images.** The remote sandbox cannot reach the live site (egress policy)
  and cannot receive pasted images. Files must arrive via `git push`.
- **Verify, don't assume.** Both image conversions and the title lengths this
  session were decided by measuring, not estimating. Alt text written from
  filenames was wrong twice — open the image before describing it.

---

## Pending on the owner's side

- [ ] `www_nav` campaign shows no data in App Store Connect until **5+ installs
      from distinct Apple Accounts**
- [ ] The CTR changes need **3–4 weeks** before the numbers mean anything
- [ ] LinkedIn Post Inspector check (gates item 3 above)
