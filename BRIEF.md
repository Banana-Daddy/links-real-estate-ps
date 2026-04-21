# Links Real Estate — Design Brief

## Brand Synopsis

Links Real Estate is a boutique, four-broker firm operating a narrow but lucrative corridor between the Coachella Valley and Greater Los Angeles. Active inventory runs from a $579K Palm Springs condo to a $3.995M Hollywood Hills property, with agents representing architectural homes, midcentury Palm Springs modernism, and classic Hollywood-Hills residential.

The team reads almost like a magazine feature: a London-trained founder with 120+ Central London sales, a 25-year LA legend with $200M+ on the board, a Modernism Week tour guide who sits on three preservation boards, and a Swedish ex-handyman whose prior life makes him unusually qualified to read what's wrong with a house before the inspector does.

Their current site is a generic GoDaddy template — it does not match the quality of the inventory, the sophistication of the markets they serve, or the clients they want to attract. The goal of this mockup is to present an editorial-grade first impression that feels as considered as the properties themselves.

---

## Design Decisions

### Direction: Editorial Modernism (Palm Springs × Hollywood)

- **Mood**: Editorial architecture magazine. Calm authority. Desert heat meets Hollywood cool.
- **Fonts**: **Fraunces** (display — optical sizing, serif with personality) + **DM Sans** (body — geometric, legible at all sizes) + **DM Mono** (eyebrows, labels, DRE numbers). All Google Fonts.
- **Colors**:
  - Background `#F5F1EA` — warm ivory, desert sand undertone
  - Paper `#FAF7F1` — slightly whiter frame for image mats
  - Ink `#1A1613` — near-black, warm undertone like oiled walnut
  - Terra `#C75D2C` — burnt terracotta, Palm Springs desert sunset
  - Brass `#A68A5B` — warm metallic, Hollywood golden hour
  - Stone `#DCD3C3` — soft divider tone
  - Muted `#6B6157` — body-text muted
- **Layout**: Asymmetric 12-column editorial grid, oversized Fraunces display headlines (clamp up to 20vw on hero), generous whitespace, thin rule dividers, numbered section anchors ("— INDEX 01" through 05), magazine-frame image mats with 10px inset padding.
- **Signature element**: Palm Springs ↔ Los Angeles "market dial" ribbon at the top of hero + a full-width kinetic marquee of outlined editorial type scrolling between sections.
- **Trends used** (from TRENDS_QUICK_REFERENCE.md):
  1. **Editorial / Vintage** — cream background, serif display, thin 1px rules, drop cap on the philosophy section, film-grain overlay at 3.5% opacity
  2. **Kinetic typography — horizontal marquee** with outlined letters between sections
  3. **Oversized display number/letter** — numbered section anchors, giant "2nd" outline-letter behind Axel's Arsenal callout
  4. **Signature: Floating pill glass nav** — rounded-full, backdrop-blur, pill-style sticky nav
- **Inspirations referenced (21st.dev Inspiration pass)**:
  - *Floating Header* — for the sticky pill nav (backdrop blur, rounded, small logo + ghost links + bold CTA)
  - *PropertyCard* — for the hover-scale image frame + price/specs layout on listings
  - *ProfileCard* (large square portrait + overlapping bio card) — informed Axel's portrait-forward page
- **Logos used (logo_search)**: None this pass — Instagram rendered as typographic link rather than iconography to keep the editorial feel.
- **What we killed**:
  - Generic GoDaddy theme, centered-everything layout, system fonts
  - Listing cards as a 4-up grid of identical tiles — replaced with an asymmetric 7/5 split so the hero listing dominates
  - "Click here" style CTAs — replaced with directional arrow links that extend on hover

### Axel's Dedicated Page — Personality-First

- Same visual system as the homepage.
- **Hero:** massive Fraunces name "Axel / Jonsson" (italic terracotta on last name), flanked by a ticker ribbon with a Swedish flag pip + live-pulsing red Arsenal pip.
- **Tagline:** "Stockholm to the Strip. Handyman to home-finder. Second in the league, first to close."
- **Signature callout:** a framed editorial panel with a giant outlined "2nd" in the background and the headline "My team always finishes second. My deals close first."
- **Scoreline card:** mock football scoreboard — "Your offer: Accepted / Arsenal (again): 0–0 · FT · Stoppage time · Heartbreak pending."
- **Fact file:** definition list with Swedish flag pip next to "Sverige" and a dedicated "Coffee order — Placeholder — Axel?" row so he knows he has edits coming.

### 21st.dev Component Provenance

| Mockup section | 21st.dev component | Search query | Source file | What we borrowed |
|---|---|---|---|---|
| Sticky pill nav | Floating Header | `nav sticky transparent minimal editorial` | `21st-sources/nav-floating-header.tsx` | rounded pill container, sticky top-5, backdrop-blur, small logo + ghost link row + primary CTA |
| Listing cards | PropertyCard (card-3) | `property listings cards real estate` | `21st-sources/listings-card.tsx` | group-hover image zoom, aspect-ratio frame, price-right / title-left split |
| Axel bio page | ProfileCard (large square portrait) | `team member cards portrait editorial` | `21st-sources/agent-profile-card.tsx` | portrait-first hero + overlapping content card on desktop, stacked on mobile |

---

## Content Inventory

### Images pulled (local `/images/`)
- `logo.png` — Links logo (wsimg CDN)
- `listing-hollyridge.png` — 3072 Hollyridge Dr hero shot (feature listing)
- `listing-gene-autry.jpg` — 2545 Gene Autry #E
- `listing-broadmoor.jpg` — 2557 Broadmoor Dr (Pending)
- `listing-beachwood.jpeg` — 2634 Beachwood Dr
- `headshot-nicholas.jpeg` · `headshot-axel.jpg` · `headshot-peter.jpeg` · `headshot-kenny.jpeg` — team portraits

### Key copy preserved verbatim
- "With decades of experience, we are dedicated to bringing you home."
- "Your dream home might be one post away."
- Axel's descriptor: "calm, honest, and focused on clarity"
- Nicholas's line about Frederik and London 2005–2015

### Links preserved
- All 4 MLS detail URLs (themls.com)
- Instagram @linksrealestateps
- `tel:7604226665` (office) + `tel:3236908270` (Axel direct)
- `mailto:Info@linksrealestateps.com`

---

## Image Generation Prompts

**None generated this build.** Source site had sufficient real photography (4 listings + 4 agent headshots + logo). Per brand accuracy rules, we deliberately did **not** generate images of the actual business, team members, or specific properties — the only assets used are real photos pulled from their CDN.

If a future build needs supplementary atmospheric imagery (abstract desert textures, generic modernist interior mood shots to break up long scrolls, Hollywood Hills dusk ambience for section dividers), generate via Grok Imagine (Tier 1) at 16:9 or 2:1 using the patterns in `GROK_IMAGE_PROMPTS.md`. Do not attempt to recreate any specific Links-associated property, office, or staff likeness.

---

## Suggested Next Mockups

1. **Individual pages for Nicholas, Peter, and Kenny** — matching Axel's treatment. Nicholas gets the London-to-desert founder origin story. Peter gets the 25-year LA legend angle with a $200M+ number front-and-center. Kenny gets midcentury-modern deep-cut + Modernism Week credibility.
2. **Architectural portfolio / "past sales" archive** — a case-study-style scroll of closed deals. Include the Pebble Beach dual-rep and any other above-ask wins. Turn the sales book into a reason to hire them.
3. **Proper IDX integration mockup** — instead of link-outs to `themls.com`, show what an embedded Showcase IDX or kvCORE feed would look like inside this design system (filter chips, map/grid toggle, saved search, alert signup). The UX bar for real estate sites is now an interactive map; we could design ours.
4. **Neighborhood guides** — "Living in the Coachella Valley" + "Living in the Hollywood Hills" microsites with photography, local knowledge, HOA notes, school districts, climate. Good SEO play.
5. **Buyer / seller flow pages** — "Thinking of selling?" walkthrough with form. Lead capture for the team.

---

## Production Notes

To build this into a production site, use **Claude Code (Opus, high effort)** with the `21st-sources/` React components as the starting point (see HANDOFF MODE in CLAUDE.md).

Recommended stack:
- **Next.js 15** (App Router) + **Tailwind CSS** — matches the 21st.dev source files directly, no reverse-engineering.
- **Sanity** or **Contentful** CMS for agent bios, active listings, and past sales. Keep the listing `View on MLS →` link pattern (cheapest feature parity with the current site), or upgrade to a real IDX provider (Showcase IDX or kvCORE) if the team wants in-site property detail pages and buyer signups.
- **Resend + simple contact form** for the "Get in touch" section.
- Host on **Vercel**. DNS from GoDaddy can point straight over.

Features that will need real dev work (not mockup-obvious):
- IDX / MLS integration (if upgrading from link-outs)
- Lead capture form + email routing (team inbox or per-agent)
- Saved search + alerts (only if going the IDX route)
- Analytics / GA4 + basic event tracking on listing card clicks
- A lightweight agent login / CMS role if the team wants to self-serve listing updates

---

## Build Timing

| Phase | Duration |
|---|---|
| Step 1: READ (site + 4 sub-pages + image download) | ~4 min |
| Step 2: DIRECTION (Pro-Max skill + 21st.dev inspiration ×4 + source caching) | ~3 min |
| Step 3a: BUILD index.html | ~6 min |
| Step 3b: BUILD axel-jonsson.html | ~5 min |
| Step 4: VERIFY (preview + ACCURACY.md) | ~3 min |
| Step 5: BRIEF | ~2 min |
| Step 6: PUBLISH (pending) | — |
| **Approx total prompt-to-delivery** | ~25 min |
