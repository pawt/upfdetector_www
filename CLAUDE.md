# UPF Detector Website

## Project Overview
Static website for **UPF Detector**, a freemium iOS app (App ID: `6738797472`) that scans food barcodes to identify ultra-processed foods using the NOVA classification system. Hosted on GitHub Pages at `upfdetector.com`.

## Tech Stack
- **Pure HTML** - no build tools, no static site generator
- **TailwindCSS** via CDN (`https://cdn.tailwindcss.com`)
- **Inter font** via `https://rsms.me/inter/inter.css`
- **Component system** - navbar/footer loaded dynamically via `/components/include.js`
- **Analytics** - `/analytics.js` (one shared file, loaded by every page/post via `<script src="/analytics.js"></script>`) initializes both Google Analytics (`G-4KF9E5Q4HB`) and PostHog (separate "UPF Detector — Website" project, EU cloud). Never paste GA/PostHog init inline into a page again — add the one script tag instead, so a new page can't ship untracked.

## Project Structure
```
/
├── index.html              # Homepage
├── privacy.html            # Privacy policy (noindex)
├── terms.html              # Terms of use (noindex)
├── sitemap.xml             # SEO sitemap
├── CNAME                   # upfdetector.com
├── blog/
│   ├── index.html          # Blog listing page
│   └── *.html              # Individual blog posts
├── components/
│   ├── navbar.html         # Shared navigation bar
│   ├── footer.html         # Shared footer
│   └── include.js          # Dynamic component loader
└── img/                    # All images
```

## Design System
- **Primary color**: Orange `#FF5733` to `#FF4444` (gradient)
- **Hero gradient**: `#EEF2FF` to `#E0E7FF`
- **Font**: Inter with system fallbacks
- **Rounded corners**: `rounded-xl` on images/cards, `rounded-lg` on smaller elements
- **Shadows**: `shadow-lg` on images and CTA buttons
- **Download button**: gradient orange with hover lift effect (`translateY(-1px)`)

## App Store Links
Every download CTA carries an Apple campaign token (`ct=`) so App Store Connect → App Analytics → Acquisition can break out installs by surface. Use the one matching where the link lives — never the bare/untagged URL:

- **Homepage** (`index.html`) CTAs:
  ```
  https://apps.apple.com/app/apple-store/id6738797472?pt=126822266&ct=www_home&mt=8
  ```
- **Blog posts** (all of `blog/*.html`, and the `create-blog-post` template so every future post inherits it):
  ```
  https://apps.apple.com/app/apple-store/id6738797472?pt=126822266&ct=www_blog&mt=8
  ```
  (`&amp;` in the HTML `href` attribute, plain `&` everywhere else.)

The homepage's JSON-LD `downloadUrl` (structured data for crawlers, not a real click-through) intentionally stays on the plain untagged link: `https://apps.apple.com/app/upf-detector-food-scanner/id6738797472` — don't campaign-tag it, a bot reading schema markup isn't an attributable install.

Need finer-grained tracking (e.g. per blog post instead of one shared `www_blog`)? Generate a new link in App Store Connect → App Analytics → Acquisition → "Generate a Campaign Link" (just type a campaign name, under 30 chars, it fills in the rest) and swap it into that page's `href`. Note: a campaign shows no data in App Store Connect until it has at least 5 installs from distinct Apple Accounts.

## Contact
- Email: `hello@upfdetector.com`
