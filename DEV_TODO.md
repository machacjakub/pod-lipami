# DEV_TODO — SEO / visibility

Follow-up items from the SEO/GEO/AEO audit (2026-09-17). The high-impact **code**
fixes are already done (see bottom). What's left below either needs an action you
must perform in an external account, or a decision/missing info from you before I
can code it.

## ✅ Already fixed in code (context)
- **Service-page content is now crawlable.** All `<Accordion>` blocks were
  `client:only="react"`, so their content (indications, treatment methods) was
  **not** in the server-rendered HTML — Google and AI crawlers saw only ~100 words
  per service page. Switched to `client:visible`: content is now in the static HTML
  (fyzioterapie page went from ~100 → ~465 crawlable words) while hydration still
  defers until the user scrolls. Files: `Fyzioterapie.astro`, `ViscelarniTerapie.astro`,
  `FyzioterapieProDeti.astro`, `Podologie.astro`.
- Added `initial-scale=1` to the viewport meta in `Layout.astro`.

---

## 🔴 Owner actions — must be done by you (external accounts, need your Google login)

### 1. Create / claim a Google Business Profile  — highest off-site impact
For a local clinic this is the single biggest visibility win: it puts you on Google
Maps and in the local "3-pack" for searches like "fyzioterapie Kosmonosy / Mladá Boleslav".
- Go to https://business.google.com and create/claim the listing.
- Use the **exact same** Name / Address / Phone (NAP) as on the site and in the
  schema, so they match:
  - Name: `Fyzioterapie pod Lipami`
  - Address: `Pod koupalištěm 881, 293 06 Kosmonosy`
  - Phone: `+420 731 205 253`
- Add photos, opening hours (Mon–Fri 07:00–15:00), and the website URL.
- Ask satisfied patients for Google reviews — review count/quality strongly affects
  local ranking.

### 2. Register in Google Search Console + submit the sitemap  — one-time, ~15 min
This is the "submit your sitemap" step (the sitemap itself is already generated and
served automatically — nothing to upload manually).
- Go to https://search.google.com/search-console, add property `https://fyziopodlipami.cz`.
- Verify ownership (DNS TXT record at your domain registrar, or the HTML-file method).
- Under **Sitemaps**, submit: `https://fyziopodlipami.cz/sitemap-index.xml`
- After a few days, check **Pages** to confirm all 9 URLs are indexed, and use
  **Performance** to see which search queries bring visitors.

### 3. (Optional) Bing Webmaster Tools
Same idea for Bing / (indirectly) ChatGPT Search, which uses Bing's index.
- https://www.bing.com/webmasters — add site, submit the same sitemap.

---

## 🟠 Code — I can do these, but I need info/decisions from you

### 4. Add social + Google profile links (`sameAs`) to the schema
Strengthens entity recognition for Google and AI engines. I just need the URLs.
Reply with any of these that exist and I'll add a `sameAs: [...]` array to the
`MedicalBusiness` JSON-LD in `Layout.astro`:
- [ ] Facebook page URL: ______
- [ ] Instagram URL: ______
- [ ] Google Business Profile URL (available after item #1): ______

### 5. Accordion section titles are `<button>` text, not headings
Crawlers/AI see "Indikace", "Metody…" etc. as button labels, not as topic headings.
Wrapping them in a semantic heading (e.g. `<h2>`) would make the page's topic
structure clearer for search and AI-overview extraction. This is a small refactor
of `Accordion.jsx` — **decision needed:** do you want the visual design to stay
identical (I can keep it looking the same, just change the underlying tag)?

---

## 🟡 Optional / lower priority

### 6. FAQPage schema — deliberately NOT added
The audit suggested FAQ schema, but the accordion content (indications, methods) is
**not** genuine question-and-answer format, so adding `FAQPage` markup would risk
being invalid/spammy in Google's eyes (and Google now limits FAQ rich results to
health/gov authorities anyway). Better path if you want AEO/voice gains: add a real
short FAQ section to a page (e.g. "Jak se objednat?", "Hradí to pojišťovna?",
"Na jaké potíže fyzioterapie pomáhá?") with plain-text answers — then genuine FAQ
schema becomes appropriate. Tell me if you want this and I'll draft it.

### 7. Reservation button ("Rezervovat termín") is `client:only`
Not an SEO issue, but it means the button is absent for the (rare) no-JavaScript
visitor. Left as-is to keep this change focused — flag if you want it made a plain
link/anchor that works without JS.

### 8. Asset cleanup
`public/thumbnail.png` is ~3 MB and unused (the OG image uses `thumbnail.jpg`).
Safe to delete to slim the repo/build. Confirm and I'll remove it.
