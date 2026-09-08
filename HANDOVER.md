# Handover — SEO & Content, updated Sep 8, 2026

Continuation notes from the Search Console review of 2026-09-01 and the
content work of 2026-09-08. Companion to `NEXT_STEPS.md` (analytics/product
backlog from the Aug 29 PostHog review) — that file covers the app and
tracking, this one covers search, the blog, and the website's own pages.

Read `CLAUDE.md` first for conventions (campaign tokens, design system,
structure).

---

## What shipped Sep 8

**New post — [*Is Oat Milk Ultra-Processed?*](https://upfdetector.com/blog/is-oat-milk-ultra-processed.html)**,
~2,700 words, live on `main`. This was item 1 of the priority list below and
is now done.

| PR | What |
|---|---|
| [#1](https://github.com/pawt/upfdetector_www/pull/1) | The post, plus blog index card, sitemap entry, and the healthy-foods oat milk FAQ shortened and linked to it (hub and spoke) |
| [#2](https://github.com/pawt/upfdetector_www/pull/2) | Hero and in-article images wired in; hero `width`/`height` corrected to the file's real 1520×800 |

Notes for whoever measures this later:

- Title `Is Oat Milk Ultra-Processed? It Depends on 3 Ingredients` — 56 chars,
  counted. Meta description 156.
- Format is deliberately a copy of the bread post: direct answer, NOVA
  reasoning, ingredient comparison, additive breakdown, FAQ, reference table,
  7 citations. It is the third single-subject *"Is X ultra-processed?"* post.
- Two internal links in, from the healthy-foods post (FAQ + the oat milk
  section). Three internal links out.
- The images came from Midjourney and were placed by reading the files, not
  the prompts — the second render showed a jug of *finished* oat milk and a
  folded cloth, not straining in progress, and its alt text says so.
- A third image slot (an ingredient-list comparison) was cut rather than
  shipped broken. The green/red ingredient cards carry that section.

**Still to do on the owner's side:** re-scrape the post in Facebook's Sharing
Debugger so the card is primed before it gets shared anywhere.

---

## What shipped Sep 1

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

As of Sep 8 the owner expects to have these around **Sep 22** — that is the
3–4 week mark after the Sep 1 retitles, which is the earliest the numbers mean
anything. The oat milk post is too new to read at that point; give it its own
4 weeks (early-mid October) before judging it.

---

## Next piece of work, in priority order

### 1. Fix the cannibalisation between the two explainers

`what-are-ultra-processed-foods-nova-classification` (pos 18.5) and
`how-to-identify-ultra-processed-foods` (pos 47.8) are the same article twice:

- NOVA post: *The Four NOVA Groups* · *Why UPFs Are Harmful* · *How to Use NOVA Daily*
- How-to-identify: *The Four NOVA Categories* · *How to Spot a UPF* · *Why NOVA Matters*

Google is being asked to pick between them, and the weaker one sits on page
five. Either merge it into the stronger with a redirect, or differentiate them
sharply.

Its title also still reads **"(NOVA Guide 2025)"** — stale year in the one
line searchers actually see.

Note that both of these are extensionless-canonical posts, and the oat milk
post links out to the NOVA one. If you merge or redirect, fix the inbound
links in `is-oat-milk-ultra-processed.html` and
`healthy-foods-that-are-ultra-processed.html` in the same change.

### 2. Next post: peanut butter, then Greek yogurt

The single-subject *"Is X ultra-processed?"* format is the only one that has
reached page one here (Nutella 4.8, bread 8.7, oat milk TBD). Broad explainers
stall at 18–48. Personal narrative gets nothing. Keep replicating the winner.

**Peanut butter** is the strongest remaining candidate: high volume, and the
same clean ambiguity that made oat milk work — peanuts and salt is NOVA 1,
while the mainstream jars add hydrogenated oil, sugar and emulsifiers. Then
**Greek yogurt** (real strained yogurt vs. the thickened, sweetened tubs).

Unlike oat milk, neither has an existing home in the healthy-foods post —
that post's twelve items include low-fat yogurts but not Greek yogurt, and
peanut butter not at all. So there is no FAQ to shorten and point at; build
the inbound links by hand instead (the bread and Nutella posts both have
natural places to mention a peanut butter article).

### 3. Optional — blog `og:image` format

Six blog `og:image` files are `.webp`. Facebook renders these fine
(verified 2026-09-01). **Test LinkedIn's Post Inspector first**; only convert
to `.jpg` if cards are actually broken there. Don't do the work on suspicion.

The oat milk post (Sep 8) uses `.jpg`, so if you do test LinkedIn you have a
`.jpg` and a `.webp` post to compare directly.

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
  and cannot receive pasted images. Files must arrive via `git push`. Once
  they do, read the dimensions off the file rather than trusting the prompt —
  the Sep 8 hero came back 1520×800, not the 1200×630 it was asked for.
- **Never ship an `<img>` pointing at a file that isn't in the repo yet.**
  Write the post around the images you have. A third image was planned for the
  oat milk post and cut when it didn't get generated; had it stayed, the post
  would have gone live with a broken image.
- **Verify, don't assume.** Image conversions and title lengths are decided by
  measuring, not estimating. Alt text written from filenames was wrong twice,
  and on Sep 8 alt text written from the *Midjourney prompt* would have been
  wrong a third time — the render showed finished oat milk and a folded cloth,
  not the straining the prompt described. Open the image before describing it.

---

## Pending on the owner's side

- [ ] Re-scrape the oat milk post in **Facebook's Sharing Debugger** — it was
      published Sep 8 with the `og:image` in place, but if anything crawled it
      before the images landed, the card is cached wrong
- [ ] `www_nav` campaign shows no data in App Store Connect until **5+ installs
      from distinct Apple Accounts**
- [ ] GSC numbers for the Sep 1 retitles — due around **Sep 22** (3–4 weeks)
- [ ] LinkedIn Post Inspector check (gates item 3 above)
