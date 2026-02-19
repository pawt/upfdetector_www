# Content Guidelines for UPF Detector Blog

## Writing Tone

### Voice
- **First person** when sharing personal experience or the founder's perspective
- **Authoritative but accessible** - explain scientific concepts simply
- **Educational, not preachy** - inform and empower readers
- **Evidence-based** - cite academic studies where possible

### Style
- Clear, concise sentences
- Short paragraphs (2-4 sentences)
- Active voice preferred
- Conversational but professional
- No emojis in blog content
- Avoid clickbait - deliver genuine value

## Content Structure

### Opening (First 100 words)
- Hook the reader with a relatable question or scenario
- Include primary keyword naturally
- Promise clear value (what they'll learn)

### Body
- Use H2 headings to break up content into scannable sections
- Lead each section with the main point
- Follow with supporting details and examples
- Include practical, actionable information

### Academic Citations
When citing research:
- Use numbered superscript references: `<sup><a href="#ref1" class="citation">1</a></sup>`
- Include full citation at end of article in References section
- Format: Author(s) (Year). "Title." *Journal*, Volume(Issue):Pages.
- Link to study when possible (DOI or PubMed URL)

### Examples and Analogies
- Use real-world food examples readers recognize
- Compare complex concepts to everyday experiences
- Show, don't just tell

## App Integration (Non-Pushy)

### Natural Mentions
Mention UPF Detector when it genuinely helps:
- "This is exactly what UPF Detector helps with..."
- "Scan any product's barcode with UPF Detector to see..."
- "Instead of reading every label manually, UPF Detector instantly..."

### CTA Box Placement
- Place ONE CTA box approximately 60-70% through the article
- Position after delivering value, before conclusion
- Make headline relevant to post topic
- Connect post content to app benefit

**CTA Box Example:**
```html
<div class="cta-box">
    <h3 class="text-xl font-bold text-gray-900 mb-3">Instantly Identify Ultra-Processed Foods</h3>
    <p class="font-medium text-gray-700 mb-4">Stop reading confusing labels. UPF Detector scans any barcode and shows you the NOVA classification in seconds.</p>
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
```

### End-of-Article CTA
- Include download button after conclusion
- Brief reminder of key benefit
- Use the standard `.download-btn` class

## Content Types

### Educational Posts
- Explain concepts (NOVA classification, food additives, etc.)
- Define terms clearly
- Use examples and visuals
- Cite scientific sources

### "Is [Food] Ultra-Processed?" Posts
- Start with direct answer (yes/no/depends)
- Explain reasoning with NOVA criteria
- List common ingredients to watch for
- Provide healthier alternatives
- Show how UPF Detector helps

### Health Impact Posts
- Lead with key finding
- Cite multiple peer-reviewed studies
- Explain mechanism (how/why it happens)
- Include actionable takeaways
- Avoid fear-mongering - focus on empowerment

### Practical Guides
- Step-by-step instructions
- Numbered lists for processes
- Screenshots or examples where helpful
- Troubleshooting tips
- Clear outcomes/benefits

### Comparison Posts
- Side-by-side analysis
- Use tables or structured lists
- Fair and balanced perspective
- Clear winner/recommendation
- Explain trade-offs

## Visual Elements

### Content Sections
Use `.content-section` for major sections:
```html
<div class="content-section">
    <h2 class="text-2xl font-semibold text-black mt-10 mb-4">Section Title</h2>
    <p>Content here...</p>
</div>
```

### Highlighted Blocks
Use `.gradient-section` for important callouts:
```html
<div class="gradient-section">
    <p><strong>Key Takeaway:</strong> Important point that deserves emphasis.</p>
</div>
```

### Lists
- Use bullet points for unordered information
- Use numbered lists for steps or ranked items
- Keep list items concise (1-2 lines each)

### Tables
- Use for comparisons and data
- Keep simple (3-5 columns max)
- Include header row
- Use TailwindCSS table classes

## Quality Standards

### Before Publishing
- Read aloud - does it flow naturally?
- Check for keyword stuffing (feels forced?)
- Verify all citations are complete
- Test all links (internal and external)
- Review meta tags and schema
- Spell check and grammar check
- Mobile-friendly formatting

### Content Freshness
- Date articles accurately
- Update statistics as needed
- Reference recent studies (last 5 years when possible)
- Acknowledge emerging research

### Authenticity
- Share genuine insights, not generic advice
- Use real examples from the app/users (when applicable)
- Don't make claims you can't support
- Acknowledge limitations and nuance
