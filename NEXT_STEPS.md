# UPF Detector — Analytics & Growth: Next Steps

Continuation plan from the Aug 29, 2026 PostHog analytics review + website
instrumentation work. Two tracks: this repo (website tracking), and the
iOS app's product/analytics backlog (no code home yet — tracked here until
it gets one). Check items off as you go; each has enough context to pick
up cold.

**Reference material:**
- Full analytics report (charts, per-dashboard breakdown, experiment results): https://claude.ai/code/artifact/e267b372-223d-4fef-8aca-ea141f9c9a08
- PostHog org "Pawel T" — app project `UPF Detector` (id `42006`), website project `UPF Detector — Website` (key `phc_oVsiXN5gzebGieUFwdXE5fw2wsxZpJL5SWa4N5enh34q`, EU cloud)
- This repo's analytics setup: `analytics.js` (GA4 `G-4KF9E5Q4HB` + PostHog website project), wired into every page via one `<script src="/analytics.js">` tag
- Apple campaign links: provider id `126822266`, `ct=www_home` (homepage CTAs), `ct=www_blog` (all blog posts + template)
- Related commits: `4b55ed6` (analytics + Poland-locale fix), `59c31d1` (campaign links)

---

## Track 1 — Website tracking (this repo)

### Verify (do first, low effort)
- [ ] Confirm GitHub Pages rebuilt from both pushes and the live site's download buttons work and point at the new campaign URLs
- [ ] PostHog → "UPF Detector — Website" project → Activity: confirm `$pageview` events are actually arriving
- [ ] GA4 Realtime: confirm the `analytics.js` centralization didn't silently break the existing GA tracking
- [ ] Click through both campaign links (`www_home`, `www_blog`) once yourself to sanity-check they resolve correctly (they won't count toward App Store Connect's 5-account minimum from testing, but confirms the URLs aren't malformed)

### Wait on Apple
- [ ] App Store Connect → App Analytics → Acquisition: campaigns show **zero data until 5+ installs from distinct Apple Accounts** each — don't read anything into it before then
- [ ] Once both campaigns have data: compare `www_home` vs `www_blog` install volume — this is the first real signal on whether the blog is worth the content effort

### Follow-ups, roughly in priority order
- [ ] **Split `www_blog` into per-post campaigns** once/if the blog channel proves itself — same "Generate a Campaign Link" flow in App Store Connect, one link per post (`blog_bread`, `blog_nutella`, etc.), swap into that post's `href` only
- [ ] **UTM discipline for outbound links** — whenever posting a blog link to Twitter/Reddit/newsletter/a guest post, tag it (`?utm_source=twitter&utm_medium=social&utm_campaign=bread_post`). Never on internal links (navbar, `/#features` anchors) — that overwrites real session attribution
- [ ] **Deferred deep linking / MMP (AppsFlyer, Adjust, or Branch)** — the still-open, bigger gap. App Store Connect gives campaign-level install counts, but nothing joins a specific website visitor to their eventual app install inside PostHog itself. Worth it once paid acquisition starts or blog volume justifies the integration work; not worth it at ~25–35 installs/week. Rough shape: MMP SDK in the iOS app + smart links per campaign, then forward `install_source`/`install_campaign` as a property on the existing `Application Installed` PostHog event
- [ ] **Site nav/footer has no download CTA** — currently the only download buttons are in-page (hero, mid-content, blog CTA box). Decide if that's deliberate or a missed easy conversion point
- [ ] **`analytics.js` loads render-blocking** — currently a plain `<script src="/analytics.js">` in `<head>`, no `defer`/`async`. Fine at current traffic; revisit if page-speed ever becomes a concern
- [ ] Optional: centralize the App Store URL itself (not just analytics) into one place — would prevent a repeat of the Poland-locale-style bug where a hardcoded link diverges across pages

---

## Track 2 — App product/growth backlog (from the PostHog review)

No dedicated repo/tracker for these yet — pulled from the analytics review, ordered by leverage.

- [ ] **Quota-friction-vs-conversion gap** — since the week of Jul 13, quota-warning volume jumped ~10× (single digits → 34–69/week) but upgrade taps stayed flat at 0–1/week the entire time. Single biggest lever found in the whole review. Start by checking whether the "upgrade" tap target on the quota-warning/limit-overlay surface is actually reachable — likely related to the item below.
- [ ] **Verify `subscription.upgrade_clicked` wiring** — this event undercounted the real paywall conversion rate by 10× (showed 1.0% vs the true 10.1%, confirmed by cross-referencing the old dashboard's simpler funnel and "Purchase Outcome Mix"). Check every button that should fire it actually does.
- [ ] **Free Scan Quota experiment (5 vs 3 scans/day)** — still running, not statistically significant (129 users total, 2 purchases per arm as of Aug 29). Guardrail metric (scans/user) shows the tighter cap isn't visibly hurting engagement so far. Keep it running; re-check once purchase counts are large enough to read — likely several more weeks at ~5–9 exposures/day/arm. Experiment: https://eu.posthog.com/project/42006/experiments/89770
- [ ] **RevenueCat "Renewal" event — check back ~Sep 17–22, 2026** — the two known trial conversions (Aug 18 & 22) are due their first monthly renewal around then. Confirm `rc_renewal_event` starts flowing; if it doesn't, that's a real integration problem (until now, zero renewals was expected/normal, not a bug).
- [ ] **UK converts ~3× worse than US** on checkout-start rate (11.6% vs 31.9%) on similar user volumes (157 vs 174) — worth a look at pricing display, currency, or positioning for UK visitors specifically.
- [ ] **Two fully dead features** — swap/alternative suggestions (0 usage in 30 days, possibly uninstrumented) and in-app feedback/issue-report (0 submissions ever). Figure out whether each is broken, undiscoverable, or genuinely unwanted, then fix, promote, or cut.
- [ ] **OFF (Open Food Facts) alternatives come back empty 40% of the time** (32 of 80 lookups) — separate from the swaps feature being unused; this is a real data-coverage gap worth investigating.
- [ ] **The "None" flag-variant bucket** — 165 unique users evaluating `free-scan-daily-quota` with no assigned experiment variant, more than either arm (control 101, test 88). Likely an app-version gating issue on the flag; check minimum-version targeting.
- [ ] **General analytics trust pass** — this one review session surfaced a 10× funnel-measurement bug, a dashboard wrongly read as empty from stale cache, and a false alarm on RevenueCat that turned out to be expected behavior. Worth a slower, dedicated pass across the rest of the dashboard tiles at some point before leaning on any of them for a big decision.
