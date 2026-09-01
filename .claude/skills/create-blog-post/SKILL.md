---
name: create-blog-post
description: Create SEO-optimized blog posts for the UPF Detector blog. Use when the user asks to write a new blog post, create blog content, or add an article to the blog. Optimizes for both Google search and LLM discoverability (ChatGPT, Perplexity, Google AI Overview).
disable-model-invocation: true
---

# Blog Post Creation Skill

Create SEO-optimized blog posts that drive organic traffic and convert readers into app users.

## Quick Start

When creating a blog post:

1. **Confirm topic details** with the user (target keywords, search intent, angle)
2. **Create the HTML file** using the template at `templates/blog-post-template.html`
3. **Update blog index** - add entry to top of `blog/index.html`
4. **Update sitemap** - add URL to `sitemap.xml` and update blog index lastmod

## Good Blog Topics

Target these content types:
- **Educational**: UPFs, NOVA classification, food additives, ingredient labels
- **Deep dives**: "Is [food] ultra-processed?" (protein bars, yogurt, bread, etc.)
- **Health impact**: Studies on obesity, diabetes, gut health, mental health
- **Practical guides**: Grocery shopping, meal prep, reading labels, kids' food
- **Comparisons**: UPF vs whole food versions of popular products
- **News tie-ins**: Trending nutrition/food industry news related to UPFs

## File Naming Convention

Use kebab-case slugs: `blog/[slug].html`

Examples:
- `blog/is-protein-powder-ultra-processed.html`
- `blog/nova-classification-explained.html`
- `blog/reading-food-labels-guide.html`

## Content Guidelines

See detailed guidelines in:
- [references/seo-guidelines.md](references/seo-guidelines.md) - Google and LLM optimization
- [references/content-guidelines.md](references/content-guidelines.md) - Writing tone, structure, app integration

## Template

The complete blog post HTML template is at:
- [templates/blog-post-template.html](templates/blog-post-template.html)

## Workflow Checklist

After creating a post, verify:

### HTML File
- [ ] Created in `blog/` with descriptive slug
- [ ] Title tag under 60 chars with primary keyword — **counted, not estimated**, and with no "- UPF Detector Blog" suffix
- [ ] Meta description 150-160 chars with primary keyword
- [ ] Canonical, `og:url`, JSON-LD `@id`, sitemap `<loc>` and all internal links to this post use the identical `.html` URL (see "URL Form" above)
- [ ] OG tags complete (title, description, type=article, url, **image**)
- [ ] `og:image` and `twitter:image` set to an absolute URL of a real file in `/img/` — verify it exists, and that it is landscape (roughly 1.91:1 or 16:9). Portrait phone screenshots crop badly as share cards.
- [ ] Article schema JSON-LD with correct dates
- [ ] Apple Smart App Banner meta tag present
- [ ] `<script src="/analytics.js"></script>` present right after `include.js` (already in the template — don't add a separate GA/PostHog snippet, don't remove this one)

### Content Quality
- [ ] H1 includes primary keyword
- [ ] First paragraph includes primary keyword
- [ ] At least one CTA box ~60-70% through article
- [ ] Download button at end of article
- [ ] All images have descriptive alt text
- [ ] Academic citations with numbered references (if applicable)

### Site Updates
- [ ] Blog index (`blog/index.html`) updated with new entry at top
- [ ] Sitemap (`sitemap.xml`) updated with new URL
- [ ] Blog index lastmod updated in sitemap
- [ ] Content reads naturally (not keyword-stuffed)
- [ ] No broken internal links

## Key Design Elements

When creating blog posts, use these CSS classes and components:

- **Content sections**: `.content-section` - auto-spacing and bottom border
- **Highlighted blocks**: `.gradient-section` - orange gradient background
- **CTA boxes**: `.cta-box` - styled promotional sections
- **Download button**: `.download-btn` - gradient orange with hover effect
- **H2 headings**: `class="text-2xl font-semibold text-black mt-10 mb-4"`
- **H3 headings**: `class="text-xl font-semibold text-black mb-2"`

## App Store URL

Always use this exact URL (blog's Apple campaign token — `ct=www_blog` — lets App Store Connect show installs attributed to the blog as a whole):
```
https://apps.apple.com/app/apple-store/id6738797472?pt=126822266&amp;ct=www_blog&amp;mt=8
```
Already baked into `templates/blog-post-template.html` — don't swap it back to the untagged URL.

## Publication Date

Use **the actual current date** — read it from your environment context, don't copy a date out of this file or off an existing post. This section used to hardcode "February 19, 2026", which meant every post written months later shipped backdated.

Write it in both formats, and make sure all four places agree:
- `datePublished` and `dateModified` in the Article JSON-LD — `2026-09-01`
- the `<time datetime="...">` attribute — `2026-09-01`
- the visible date next to it — `September 1, 2026`
- the `<lastmod>` for this post's new `sitemap.xml` entry — `2026-09-01`

## URL Form: Pick One and Use It Everywhere

The file is `blog/[slug].html`, but GitHub Pages serves it at both `/blog/[slug]` and `/blog/[slug].html`. Google will index whichever you point it at — and if your signals disagree, it indexes **both** and splits the post's ranking between two URLs. That happened to the NOVA post (2,902 impressions on one URL, 390 on the other) and was fixed in `3bf8124`.

**Use the `.html` form for new posts.** It matches the filename and the site's best-performing posts. Whatever you pick, these five must be byte-identical:

1. `<link rel="canonical">`
2. `<meta property="og:url">`
3. JSON-LD `mainEntityOfPage.@id`
4. the `<loc>` in `sitemap.xml`
5. every internal link pointing at the post

When linking **to** other posts, match that post's own canonical — they are not all the same form. Check before linking:

```bash
grep -o 'rel="canonical" href="[^"]*"' blog/[target].html
```
