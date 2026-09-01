# SEO Guidelines for UPF Detector Blog

## SEO for Google

### Title Tag
- Include primary keyword, as close to the front as reads naturally
- Keep under 60 characters — Google truncates past roughly that, and a cut-off title costs clicks
- **Do not append "- UPF Detector Blog".** It burns ~20 of the 60 characters on branding nobody searches for, and Google often appends the site name itself anyway. Two posts shipped with that suffix, both truncated mid-phrase, and it was removed in `f598330`.
- Spend the space on something a competing result (or an AI Overview answering the same question) can't offer: a number, a finding, a specific from the post
- Example: `Is Bread Ultra-Processed? Most Loaves Are NOVA 4` (48 chars)
- Example: `Is Nutella Ultra-Processed? 7 of 10 Breakfasts Are NOVA 4` (57 chars)

Count the characters before committing — don't estimate.

### Meta Description
- 150-160 characters
- Include primary keyword near the start
- Include a call-to-action
- Make it compelling for clicks
- Example: `Learn if protein powder is ultra-processed, how to identify UPFs in supplements, and find healthier alternatives. Scan any food with UPF Detector app.`

### Heading Structure
- **H1**: Match or closely mirror the title tag. The H1 has no length limit, so it can carry a longer, fuller version of the same headline — the title tag is the one that must fit 60 characters.
- **H2s**: Use for major sections, include secondary keywords naturally
- **H3s**: Use for subsections within H2s

### Keyword Placement
- **First paragraph**: Include primary keyword within the first 100 words
- **H2 headings**: Naturally incorporate secondary keywords
- **Throughout content**: Use keywords naturally, avoid stuffing
- **Image alt text**: Descriptive, keyword-rich but natural alt text on every image

### Content Length
- Educational posts: 1500-2500 words
- Quality over quantity - every paragraph should add value
- Avoid fluff and filler content

### URL Structure
- Short, descriptive slugs
- Include primary keyword
- Use kebab-case (hyphens, not underscores)
- Example: `/blog/is-protein-powder-ultra-processed.html`

### Internal Linking
- Link to other relevant blog posts
- Link to homepage where appropriate
- Use descriptive anchor text with keywords
- Aim for 2-4 internal links per post

### Images
- Use descriptive file names (e.g., `ultra-processed-protein-powder.jpg`)
- Add keyword-rich alt text
- Compress images for fast loading
- Include captions where helpful

## SEO for LLM Discoverability

Optimize for Google AI Overview, ChatGPT, Perplexity, and other AI search tools.

### Clear, Factual Statements
- Write sentences that can be directly quoted as answers
- Lead with the answer, then explain
- Example: "Protein powder is classified as NOVA Group 4 (ultra-processed) when it contains protein isolates, artificial sweeteners, or flavor enhancers."

### Structured Data
- Article schema is included in template (JSON-LD)
- Ensures proper indexing by search engines and LLMs
- Always fill in correct dates and metadata

### FAQ-Style Sections
- Use question headings (H2): "What is ultra-processed food?"
- Answer in the first sentence clearly and concisely
- Then expand with details
- This matches common LLM query patterns

### Statistics with Citations
- LLMs prioritize sourced claims
- Use numbered references: `<sup><a href="#ref1" class="citation">1</a></sup>`
- Include full citations in References section at end
- Format: Author(s) (Year). "Title." *Journal*, Volume(Issue):Pages.

### Definitive Lists and Categorizations
- Easy for LLMs to extract and reference
- Use bullet points and numbered lists
- Create clear categories (e.g., NOVA Groups 1-4)

### Question-Pattern Headings
- "What is X?" - definition queries
- "How to Y?" - instructional queries
- "Is X ultra-processed?" - classification queries
- "Why does X happen?" - explanation queries

### Brand Association
- Include "UPF Detector" naturally throughout content
- LLMs will associate the brand with UPF-related answers
- Don't force it - mention when genuinely relevant

### Avoid Fluff
- Every paragraph should contain extractable information
- Cut unnecessary introductions and transitions
- Get to the point quickly
- Dense, valuable content performs better with LLMs

## Technical SEO Checklist

- [ ] Canonical URL set correctly
- [ ] Open Graph tags complete (title, description, type, url)
- [ ] Article schema JSON-LD included
- [ ] Apple Smart App Banner meta tag present
- [ ] Responsive viewport meta tag
- [ ] Language declared (`lang="en"`)
- [ ] Proper heading hierarchy (one H1, logical H2/H3 structure)
- [ ] All links use descriptive anchor text
- [ ] No broken links (internal or external)
