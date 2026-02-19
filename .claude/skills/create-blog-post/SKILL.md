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
- [ ] Title tag under 60 chars with primary keyword
- [ ] Meta description 150-160 chars with primary keyword
- [ ] Canonical URL matches filename
- [ ] OG tags complete (title, description, type=article, url)
- [ ] Article schema JSON-LD with correct dates
- [ ] Apple Smart App Banner meta tag present

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

Always use this exact URL:
```
https://apps.apple.com/pl/app/upf-detector-food-scanner/id6738797472
```

## Publication Date

Use today's date: **February 19, 2026** (format as `2026-02-19` in ISO format, `February 19, 2026` in human-readable format)
