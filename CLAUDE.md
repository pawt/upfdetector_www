# UPF Detector Website

## Project Overview
Static website for **UPF Detector**, a freemium iOS app (App ID: `6738797472`) that scans food barcodes to identify ultra-processed foods using the NOVA classification system. Hosted on GitHub Pages at `upfdetector.com`.

## Tech Stack
- **Pure HTML** - no build tools, no static site generator
- **TailwindCSS** via CDN (`https://cdn.tailwindcss.com`)
- **Inter font** via `https://rsms.me/inter/inter.css`
- **Component system** - navbar/footer loaded dynamically via `/components/include.js`
- **Google Analytics** - `G-4KF9E5Q4HB`

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

## App Store Link
Always use this exact URL for download CTAs:
```
https://apps.apple.com/pl/app/upf-detector-food-scanner/id6738797472
```

## Contact
- Email: `hello@upfdetector.com`
