# Blog Post Creation Skill

## When to Use
Use this guide whenever creating a new blog post for the UPF Detector blog. The goal of every post is to **drive organic traffic from Google and LLMs** and **convert readers into app users**.

## Step-by-Step Process

### 1. Topic & Keyword Research
Before writing, confirm with the user:
- **Target keyword(s)** - primary long-tail keyword + 2-3 secondary keywords
- **Search intent** - informational, comparison, or how-to
- **Angle** - what unique perspective ties this to the UPF Detector app

Good blog topics for this site:
- Educational content about UPFs, NOVA classification, food additives, ingredient labels
- "Is [food] ultra-processed?" deep dives (e.g., protein bars, yogurt, bread)
- Health impact articles backed by studies (obesity, diabetes, gut health, mental health)
- Practical guides (grocery shopping, meal prep, reading labels, kids' food)
- Comparisons (UPF vs whole food versions of popular products)
- Trending nutrition/food industry news tied to UPFs

### 2. Create the Blog Post HTML File

**Filename convention**: `blog/[slug].html` using lowercase kebab-case, descriptive, keyword-rich slugs.

**Use this exact HTML template** (adapted from existing posts):

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>[Post Title] - UPF Detector Blog</title>
        <meta name="description" content="[150-160 char description with primary keyword near the start]" />
        <meta name="keywords" content="[primary keyword], [secondary keywords], UPF detector app, ultra-processed foods, [topic-specific terms]" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="[Post Title]" />
        <meta property="og:description" content="[Compelling description for social sharing, can differ from meta description]" />
        <meta property="og:type" content="article" />
        <meta name="apple-itunes-app" content="app-id=6738797472, app-argument=https://upfdetector.com">

        <meta property="og:url" content="https://upfdetector.com/blog/[slug]" />
        <link rel="canonical" href="https://upfdetector.com/blog/[slug]" />

        <script src="https://cdn.tailwindcss.com"></script>
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css">
        <script src="/components/include.js"></script>

        <!-- Article Schema for Google/LLM discoverability -->
        <script type="application/ld+json">
        {
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "[Post Title]",
            "description": "[Meta description]",
            "datePublished": "[YYYY-MM-DD]",
            "dateModified": "[YYYY-MM-DD]",
            "author": {
                "@type": "Person",
                "name": "UPF Detector Team"
            },
            "publisher": {
                "@type": "Organization",
                "name": "UPF Detector",
                "url": "https://upfdetector.com"
            },
            "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": "https://upfdetector.com/blog/[slug]"
            },
            "about": {
                "@type": "Thing",
                "name": "Ultra-processed foods"
            }
        }
        </script>

        <style>
            body {
                font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
            }

            .prose p {
                margin-bottom: 1.5rem;
            }

            .prose ul li p, .prose ol li p {
                margin-bottom: 0.5rem;
            }

            .content-section {
                margin-bottom: 3rem;
                padding-bottom: 2rem;
                border-bottom: 1px solid #f3f4f6;
            }

            .gradient-section {
                background: linear-gradient(to right, rgba(255, 247, 237, 0.5), rgba(255, 247, 237, 0));
                padding: 1.5rem;
                border-radius: 0.75rem;
                margin: 2rem 0;
            }

            .cta-box {
                background: linear-gradient(135deg, #ffefe8 0%, #fff5f5 100%);
                border-radius: 1rem;
                padding: 2rem;
                margin: 2.5rem 0;
                box-shadow: 0 4px 6px rgba(255, 87, 51, 0.1);
            }

            .download-btn {
                background: linear-gradient(135deg, #FF5733 0%, #FF4444 100%);
                transition: all 0.3s ease;
            }

            .download-btn:hover {
                transform: translateY(-1px);
                box-shadow: 0 4px 12px rgba(255, 87, 51, 0.3);
            }

            /* Only include these if the post has academic citations */
            sup { font-size: 0.75em; line-height: 0; position: relative; vertical-align: baseline; top: -0.5em; }
            .citation { color: #2563eb; font-weight: 600; cursor: pointer; text-decoration: none; }
            .citation:hover { text-decoration: underline; }
            .references { font-size: 0.9rem; line-height: 1.5; }
            .references ol { padding-left: 1.5rem; }
            .references li { margin-bottom: 0.75rem; padding-left: 0.5rem; display: flex; align-items: baseline; }
            .ref-number { display: inline-block; min-width: 1.5rem; }

            html { scroll-behavior: smooth; }
        </style>
    </head>
    <body class="antialiased bg-white">
        <div data-include="/components/navbar.html"></div>

        <div class="max-w-3xl mx-auto px-6 sm:px-8 lg:px-12 pt-24 pb-16">
            <article class="prose lg:prose-lg">
                <header class="mb-10">
                    <time datetime="[YYYY-MM-DD]" class="text-gray-600">[Month DD, YYYY]</time>
                    <h1 class="text-4xl font-bold text-black mt-2 mb-4">[Post Title]</h1>
                    <div class="text-gray-700 text-lg">[Subtitle/tagline]</div>
                </header>

                <!-- Hero image (if applicable) -->
                <div class="mb-10">
                    <img src="/img/[image-file]" alt="[Descriptive alt text with keywords]" class="w-full rounded-xl shadow-lg">
                    <p class="text-sm text-gray-500 mt-2 text-center">[Image caption]</p>
                </div>

                <div class="space-y-6 text-gray-700">
                    <!-- POST CONTENT HERE -->
                    <!-- Use content-section divs for major sections -->
                    <!-- Use gradient-section divs for highlighted blocks -->
                    <!-- Use h2 with: class="text-2xl font-semibold text-black mt-10 mb-4" -->
                    <!-- Use h3 with: class="text-xl font-semibold text-black mb-2" -->

                    <!-- CTA box - place ~60-70% through the article -->
                    <div class="cta-box">
                        <h3 class="text-xl font-bold text-gray-900 mb-3">[CTA Headline related to post topic]</h3>
                        <p class="font-medium text-gray-700 mb-4">[CTA copy connecting post topic to app value]</p>
                        <div class="text-center">
                            <a href="https://apps.apple.com/pl/app/upf-detector-food-scanner/id6738797472"
                            class="download-btn inline-flex items-center px-8 py-4 rounded-xl text-white font-semibold shadow-lg">
                                <svg class="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M17.0754 12.3188C17.0954 10.7312 17.9177 9.35625 19.2627 8.41875C18.4427 7.275 17.2127 6.58125 15.6127 6.32625C14.1002 6.07875 12.4452 7.03125 11.6602 7.03125C10.8377 7.03125 9.38772 6.35625 8.16772 6.35625C6.01772 6.38625 3.71772 8.0625 3.71772 11.4688C3.71772 12.5812 3.91772 13.7313 4.31772 14.9188C4.85272 16.4813 6.71272 19.9688 8.66272 19.9062C9.81772 19.875 10.6427 19.0875 12.1177 19.0875C13.5427 19.0875 14.3127 19.9062 15.5927 19.9062C17.5652 19.875 19.2402 16.7063 19.7502 15.1375C17.1902 13.9125 17.0754 12.3938 17.0754 12.3188ZM14.7377 4.725C15.8402 3.4125 15.7377 2.2125 15.7127 1.875C14.7252 1.9375 13.5927 2.53125 12.9377 3.2625C12.2127 4.05 11.7502 5.0625 11.8502 6.30625C12.9227 6.39375 13.9127 5.7375 14.7377 4.725Z"/>
                                </svg>
                                Download on App Store
                            </a>
                        </div>
                    </div>

                    <!-- Continue content after CTA -->

                    <!-- References section (if post cites studies) -->
                    <div id="references" class="content-section bg-gray-50 p-6 rounded-xl">
                        <h2 class="text-2xl font-semibold text-black mb-4">References</h2>
                        <div class="references">
                            <ol class="list-none">
                                <li id="ref1" class="flex mb-4">
                                    <span class="ref-number mr-3 text-blue-600">1.</span>
                                    <span>[Author(s)] ([Year]). "[Title]." <em>[Journal]</em>, [Volume]([Issue]):[Pages].</span>
                                </li>
                            </ol>
                        </div>
                    </div>

                </div>
            </article>
        </div>

        <div data-include="/components/footer.html"></div>

        <script>
            window.addEventListener('load', includeHTML);
        </script>
    </body>
</html>
```

### 3. Content Writing Guidelines

**SEO for Google:**
- **Title tag**: Include primary keyword, keep under 60 characters, append "- UPF Detector Blog"
- **Meta description**: 150-160 chars, include primary keyword near the start, include a call-to-action
- **H1**: Match or closely mirror the title tag (without the "- UPF Detector Blog" suffix)
- **H2s**: Use for major sections, include secondary keywords naturally
- **First paragraph**: Include primary keyword within the first 100 words
- **Internal links**: Link to other blog posts and the homepage where relevant
- **Image alt text**: Descriptive, keyword-rich but natural alt text on every image
- **Content length**: Aim for 1500-2500 words for educational posts; quality over quantity
- **URL slug**: Short, descriptive, include primary keyword

**SEO for LLM discoverability (Google AI Overview, ChatGPT, Perplexity, etc.):**
- **Clear, factual statements** that can be directly quoted as answers
- **Structured data** via Article schema (included in template)
- **FAQ-style sections** with clear question headings (H2) and concise answers in the first sentence
- **Statistics with citations** - LLMs prioritize sourced claims
- **Definitive lists and categorizations** - easy for LLMs to extract and reference
- **"What is X?" and "How to Y" patterns** in headings - these match common LLM queries
- **Avoid fluff and filler** - every paragraph should contain extractable information
- **Include the app name "UPF Detector" naturally** so LLMs associate the brand with UPF-related answers

**Writing tone:**
- First person where personal experience is shared (the founder's voice)
- Authoritative but accessible - explain scientific concepts simply
- Cite academic studies with numbered references where possible
- Avoid clickbait; deliver genuine value
- No emojis in blog content

**App integration (non-pushy):**
- Mention the app naturally when relevant (e.g., "this is exactly what UPF Detector helps with")
- Place one CTA box approximately 60-70% through the article
- End with a download button after the conclusion
- The app solves a problem discussed in the article - frame it as a helpful tool, not an ad

### 4. Update the Blog Index

After creating the post, add a new entry to `blog/index.html` at the **top** of the `<div class="space-y-12">` container (newest first):

```html
<article class="border-b pb-8">
    <time datetime="[YYYY-MM-DD]" class="text-gray-500">[Month DD, YYYY]</time>
    <h2 class="text-2xl font-bold text-gray-900 mt-2 mb-4">
        <a href="[slug].html" class="hover:text-orange-500">
            [Post Title]
        </a>
    </h2>
    <p class="text-gray-600 mb-4">
        [2-3 sentence excerpt/description]
    </p>
    <a href="[slug].html" class="text-orange-500 hover:text-orange-600 font-medium">
        Read more &rarr;
    </a>
</article>
```

### 5. Update the Sitemap

Add a new `<url>` entry to `sitemap.xml`:

```xml
<url>
    <loc>https://upfdetector.com/blog/[slug].html</loc>
    <lastmod>[YYYY-MM-DD]</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
</url>
```

Also update the `<lastmod>` date on the blog index entry.

### 6. Pre-Publish Checklist

Before considering the post done, verify:

- [ ] HTML file created in `blog/` with correct slug
- [ ] Title tag under 60 chars with primary keyword
- [ ] Meta description 150-160 chars with primary keyword
- [ ] Canonical URL matches the filename
- [ ] OG tags filled in (title, description, type=article, url)
- [ ] Article schema JSON-LD included with correct dates
- [ ] Apple Smart App Banner meta tag present
- [ ] H1 includes primary keyword
- [ ] First paragraph includes primary keyword
- [ ] At least one CTA box with App Store download link
- [ ] Download button at end of article
- [ ] All images have descriptive alt text
- [ ] Academic citations with numbered references (if applicable)
- [ ] Blog index updated with new entry at the top
- [ ] Sitemap updated with new URL and blog index lastmod
- [ ] Content reads naturally - not keyword-stuffed
- [ ] No broken internal links
