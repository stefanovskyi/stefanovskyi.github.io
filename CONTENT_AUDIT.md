# Content Audit — `index.html`

Illogical points, contradictions, and suggested fixes for the main landing page. Grouped by severity.

---

## 1. Content contradictions & logic issues

### 1.1 Page order contradicts the sales narrative
Current section order: **Hero → Reviews → Services → Footer**.

Visitors see *testimonials about unspecified work* before they learn what is being sold. The reviews reference roles and companies (Reprise, NineTwoThree, Intelliarts) that haven't been introduced, so the social proof lands in a vacuum.

**Fix:** Reorder to **Hero → Services → Reviews → Footer** (standard offer-then-proof flow). Update the nav order to match (currently `Services, Reviews, Blog, Projects` — already logical, only the page order is off).

---

### 1.2 "Intelliarts" appears in a review with no on-page context
Shaul Teplinsky's testimonial (`index.html:540`) says:

> *"I highly recommend **Intelliarts** and Oleksandr for AI-based software development."*

Intelliarts is never mentioned anywhere else in the visible content (only in a commented-out block, `index.html:388`). The positioning "Strategic Technology Partner" implies an independent operator, so endorsing "Intelliarts and Oleksandr" confuses the reader about whether they are hiring a person, an agency, or both.

**Fix options:**
- Trim the review to the Oleksandr-specific portion and note `[emphasis added]` or `[excerpt]`.
- Add a single line to the hero/about area clarifying past affiliations (e.g. "Previously Head of ML Engineering at NineTwoThree; AI lead at Intelliarts").
- Replace this testimonial with one that doesn't require external context.

---

### 1.3 Reviewer role raises a "why are they qualified?" question
Viacheslav Kucherenko's role is listed as **"Nuclear Physicist"** (`index.html:571`). Without context, a prospective AI client reading this will wonder why a nuclear physicist endorsing leadership style is relevant to an AI engineering engagement.

**Fix:** Either add the shared context (e.g. "Nuclear Physicist — former team member") or move this review further down / replace it with an AI-relevant voice.

---

### 1.4 Description vs. services intro — two different value props for "MVPs"
Hero (`index.html:314-322`): *"…deliver **reliable** MVPs."*
Services intro (`index.html:704-710`): *"…manage the delivery of **high-impact** MVPs."*

"Reliable" and "high-impact" are different promises. Not a contradiction, but the positioning drifts between the two paragraphs written minutes apart.

**Fix:** Pick one adjective and use it consistently (or deliberately pair them: "reliable, high-impact MVPs").

---

### 1.5 CTA label drift: "Schedule Call" vs "Schedule a Consultation"
- Nav CTA (`index.html:286`): `Schedule Call`
- Hero CTA (`index.html:342`): `Schedule a Consultation`
- Both link to the same Calendly URL (`/astefanovskiy/30min`).

Minor, but a returning visitor may wonder if these are two different offerings.

**Fix:** Use one label throughout (recommend `Schedule a Consultation` — it describes intent better).

---

### 1.6 Meta keywords list technologies that never appear in visible content
`<meta name="keywords">` at `index.html:82` includes `LangGraph, MCP, A2A`. None of these appear in the hero, services, or reviews copy. Search engines ignore the `keywords` meta, but it reflects a content gap: if these are core to the offering, they should be mentioned in the Services section; if not, they shouldn't be in the meta.

**Fix:** Either drop `LangGraph, MCP, A2A` from keywords, or add a concrete mention (e.g. in Service 02: "Agent orchestration with LangGraph, MCP, and A2A protocols").

---

## 2. Technical/behavioral contradictions

### 2.1 Hero headshot has conflicting load hints
`index.html:306-308`:
```html
<img src="/img/headshot.webp" … loading="lazy" fetchpriority="high" />
```
`loading="lazy"` tells the browser to defer loading until near the viewport; `fetchpriority="high"` tells it to load ASAP. The headshot is above the fold — it should load eagerly.

**Fix:** Remove `loading="lazy"`. Keep `fetchpriority="high"`.

---

### 2.2 Dead click handler for a missing element
`index.html:923`:
```js
document.getElementById("fb-link")?.addEventListener("click", …)
```
There is no element with `id="fb-link"` in the markup (social links only include LinkedIn, email, GitHub). The handler is dead code.

**Fix:** Remove the block, or add the Facebook social link back if it was intended.

---

## 3. Semantic/accessibility issues (not strictly contradictions, but worth noting)

### 3.1 Heading hierarchy skips levels
- `<h1>` author name
- `<h3>` intro ("Strategic Technology Partner") — skips `<h2>`
- `<h6>` footer copyright — jumps from `<h3>`/`<h2>` to `<h6>` with nothing in between

**Fix:** Use `<h2>` for the intro and `<p>` (or `<small>`) for the copyright.

---

## Priority summary

| # | Issue | Severity | Effort |
|---|---|---|---|
| 1.1 | Reviews before Services in page order | Medium (conversion) | 10 min |
| 1.2 | Unexplained "Intelliarts" reference | Medium | 5 min |
| 2.1 | `loading="lazy"` + `fetchpriority="high"` | Medium (LCP) | 30 sec |
| 2.2 | Dead `fb-link` handler | Low | 30 sec |
| 1.3 | Nuclear Physicist reviewer context | Low | 2 min |
| 1.4 | "reliable" vs "high-impact" MVPs | Low | 1 min |
| 1.5 | CTA label drift | Low | 30 sec |
| 1.6 | Keywords vs visible content mismatch | Low | 2 min |
| 3.1 | Heading hierarchy skips levels | Low | 5 min |
