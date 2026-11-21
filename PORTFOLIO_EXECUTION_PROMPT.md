# 🏛️ Master Execution Directive: Elektra Eliviana Portfolio Remodel & Polish

> **Target Workspace**: `c:\Data Elektra\Elektra's Interest\Computing Field\Web & Development\elektra-portfolio`  
> **Aesthetic Guardrails**: Obsidian dark surfaces, champagne gold accents (`#C5A059` / `#D4AF37`), subtle glassmorphism, 1200px luxury container, zero horizontal overflow.

---

## 📌 Executive Summary of Directives

| Task ID | Component / Area | Status | Primary Files |
| :--- | :--- | :--- | :--- |
| **TASK-CR-01** | Strategic & Kinetic Mastery Cards (Fix Flex Column & Layout Collapse) | **COMPLETED & VERIFIED** | `css/style.css`, `index.html` |
| **TASK-CR-02** | Tools Ecosystem Remodel (Google Workspace Floating Dock + High-Res Icons) | **COMPLETED & VERIFIED** | `css/style.css`, `index.html`, `js/app.js`, `assets/icons/` |
| **TASK-TL-03** | Tools Ecosystem Polish (Centered Titles, Spacing Calibration & Icon Fixes) | **COMPLETED & VERIFIED** | `css/style.css`, `index.html`, `assets/icons/` |
| **TASK-HR-04** | Hero Section Watermark Integration (Option 1: Ambient Backdrop) | **COMPLETED & VERIFIED** | `css/style.css`, `index.html` |
| **TASK-WK-05** | Works Grid Client Expansion: Portfolio Rizky Maulana Integration | **COMPLETED & VERIFIED** | `data/works.json` |
| **TASK-PN-06** | Acoustic Lounge Remodel: Dual-Pane Concert Salon & Urtext Manuscript Visualizer | **COMPLETED & VERIFIED** | `index.html`, `css/style.css`, `js/app.js`, `data/works.json` |
| **TASK-SK-07** | Strategic & Kinetic Theater Remodel (Interactive Media Console + Video Stage) | **COMPLETED & VERIFIED** | `index.html`, `css/style.css`, `js/app.js`, `data/profile.json` |
| **TASK-CS-08** | Trust & Safety Case Study Card & Token Compliance Refactor | **COMPLETED & VERIFIED** | `css/style.css`, `data/works.json`, `js/data.js` |
| **TASK-MD-09** | Modal UX & Mobile Micro-Fit Polish (Close-Button Spacing & Squeezed Icon) | **COMPLETED & VERIFIED** | `css/style.css` |
| **TASK-AN-10** | Global Kinetic Choreography & Visual Balance (Non-Destructive Motion System) | **COMPLETED & VERIFIED** | `css/style.css`, `js/app.js` |
| **TASK-SN-11** | Claude Sonnet 5.5 High Master Aesthetic, Kinetic & Responsive Polish | **COMPLETED & VERIFIED** | `index.html`, `css/style.css`, `js/app.js` |
| **TASK-SN-12** | Claude Sonnet 5.5 High Deep Audit: Dynamic Emoji Purge & Final Kinetic Directives | **COMPLETED & VERIFIED** | `js/app.js`, `data/profile.json`, `data/works.json`, `js/data.js`, `css/style.css`, `index.html` |
| **TASK-UX-13 (Phase A)** | Celestial Florilegium About Tree, Languages 3+2 Pyramid, Autoplay Theater & Precision UI Bug Fixes | **COMPLETED & VERIFIED** | `index.html`, `css/style.css`, `js/app.js`, `data/profile.json`, `data/works.json`, `js/data.js` |
| **TASK-RM-01 & 09 (Phase B)** | Academic Pedigree & Operational Leadership Dual-Ledger + Updated CV Sync (J&T Express & Dibimbing Finance Cert) | **COMPLETED & VERIFIED** | `index.html`, `data/profile.json`, `js/data.js`, `css/style.css`, `js/app.js` |
| **TASK-RM-02..08 (Phase C)** | Works Catalog Pruning, Dibimbing/UXfolio Case Study Modals, IAIPI Living Qur'an Platform, Blogspot Standby Toast, Hermit (`app.gethermit.com/books`) + Main Wattpad Literary Compendium, Fine Art 2024+Provenance Modal & Flagship YouTube Showcase (`youtu.be/XykyKbHISqs`) | **COMPLETED & VERIFIED** | `data/works.json`, `js/data.js`, `js/app.js`, `css/style.css`, `index.html` |

---

## 🛡️ Model Execution Protocols & Technical Guardrails

> **Critical Operational Mandate**: Every executing agent must adhere strictly to these model recommendations and negative constraints before touching any file in this repository.

### 1. Recommended Model & Reasoning Configuration

| Priority | Model | Reasoning Tier | Ideal Task Scope |
| :--- | :--- | :--- | :--- |
| **Primary (Recommended)** | **Claude Sonnet 5.5** | **Medium / High** | **Gold standard for CSS & frontend surgery.** Exceptional spatial awareness, zero layout regressions, and 100% adherence to negative constraints. |
| **Secondary** | **Gemini 4 Argon / Neon** | **Medium / High** | **Multi-file synthesis & large context.** Excellent for cross-referencing `index.html`, `style.css`, `app.js`, and data registries simultaneously. |
| **Third Choice** | **Claude Opus 5.5** | **Medium** | Deep analytical architectural reasoning. |
| **⚠️ Prohibited for CSS Surgery** | **Gemini 3.8 Flash** | *Do Not Use* | Lightweight models take aggressive shortcuts on 4,800+ line stylesheets, causing duplicate classes and ruined layouts. |

#### When to Use "High" vs. "Medium" Reasoning:
- **Use "High"**: Complex layout restructuring (e.g. dual-pane consoles, 16:9 theater plates), HTML5 canvas visualizer math, or multi-file cascading modifications.
- **Use "Medium"**: Component-isolated CSS polish, hover micro-interactions, or adding structured data entries to `works.json` and `profile.json`.

---

### 2. The 5 Immutable Execution Guardrails

1. **NO MONOLITHIC REWRITES (Targeted Surgery Only)**:
   - Never replace, clear, or rewrite entire existing CSS files.
   - Only modify or append the specific classes belonging to the designated Task ID.
   - Never alter global wrappers, container rules, or reset blocks without explicit directive.

2. **STRICT DESIGN TOKEN COMPLIANCE**:
   - All colors, fonts, borders, and transitions MUST strictly use existing CSS custom properties defined in `:root`:
     - Backgrounds: `var(--bg-base, #0d0d0f)`, `var(--bg-surface, #13131a)`, `var(--bg-elevated, #1a1a24)`
     - Accents: `var(--accent-primary, #c9a84c)`, `var(--accent-secondary, #8b6914)`, `var(--accent-link, #d4a853)`
     - Borders: `var(--border-gold)`, `var(--border-gold-hover)`
     - Typography: `var(--font-display)` (Cormorant Garamond), `var(--font-body)` (Inter), `var(--font-mono)` (JetBrains Mono)
   - Never introduce unapproved arbitrary hex values or un-tokenized inline colors.

3. **SPATIAL INTEGRITY & CONTAINER BOUNDARIES**:
   - Preserve the 1200px maximum layout container (`--container-max: 1200px;`).
   - Every container must enforce `box-sizing: border-box;` and zero horizontal overflow across all viewports from 375px to 1920px.
   - Ensure Cumulative Layout Shift remains zero (`CLS = 0`).

4. **RESTRAINED KINETIC MOTION STANDARDS**:
   - Animations must be subtle, high-taste, and majestic (transitions: `0.2s`–`0.4s` using `cubic-bezier(0.16, 1, 0.3, 1)`).
   - Translations on hover must be restrained to `translateY(-2px)` to `translateY(-4px)` with soft radial glows.
   - No aggressive jitter, rapid strobing, or layout-displacing keyframes.
   - Always honor `@media (prefers-reduced-motion: reduce)`.

5. **COMPONENT-BY-COMPONENT VERIFICATION**:
   - Execute only **ONE task at a time**.
   - Verify visually in the browser before staging git commits.
   - Run `git status` and test all interactive states before declaring a task completed.

---

## 🛠️ TASK-CR-01: Fix Strategic & Kinetic Mastery Cards Layout Collapse

### Context & Problem Statement
In `#credentials` under the `.strategic-mastery-subsection`, the 3 feature cards (`.strategic-card`) for Chess, GeoGuessr, and Rhythm Games were suffering from horizontal compression:
- `.strategic-card` was declared with `display: flex;` (defaulting to row direction).
- Direct child `.strategic-card-header` (containing the icon and the badge with `white-space: nowrap`) was placed horizontally alongside `.strategic-card-body`.
- This allocated ~65% of the card width to the header, leaving only ~90px for the title, description, and repertoire text, forcing words to wrap into single syllables while leaving a giant empty void on the left.

### Architectural Solution Implemented
1. **Vertical Card Flow**: `.strategic-card` converted to `display: flex; flex-direction: column; align-items: stretch; gap: 1.25rem;`.
2. **Full-Width Header**: `.strategic-card-header` configured as a 100% width row with `justify-content: space-between; align-items: center;`, placing the icon at top-left and the honor badge at top-right.
3. **Typography & Body Expansion**: `.strategic-card-body` given 100% width, letting titles, descriptions, and metadata breathe across the entire card container.
4. **Bespoke Themed Left Accents (Option A)**:
   - **Chess**: Cool Slate / Silver (`#78909c`)
   - **GeoGuessr**: Emerald Green (`#27ae60`)
   - **Rhythm Games**: Electric Champagne Gold (`#C5A059`)
5. **Inset Dossier Box for Repertoire (Option A)**:
   - Repertoire container converted to a dedicated dossier box with `background: rgba(201, 168, 76, 0.04);`, `border: 1px solid rgba(201, 168, 76, 0.15);`, and refined uppercase mono label.

### Technical Implementation

#### `css/style.css`
```css
/* ══ STRATEGIC SHOWCASE (CR-01) ═══════════════════════════ */
.strategic-card {
  background: var(--bg-surface);
  border: 1px solid var(--border-gold);
  border-radius: var(--radius-md);
  padding: clamp(1.5rem, 2.5vw, 2rem);
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  align-items: stretch;
  transition: transform var(--transition-base), box-shadow var(--transition-base);
  position: relative;
  overflow: hidden;
}

.strategic-card::before {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse at top left, rgba(201,168,76,0.05), transparent 70%);
  pointer-events: none;
}

.strategic-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 48px rgba(0,0,0,0.4);
}

/* Themed Left Accents */
.chess-card  { border-left: 3px solid #78909c; }
.geo-card    { border-left: 3px solid #27ae60; }
.rhythm-card { border-left: 3px solid var(--accent-primary, #C5A059); }

.strategic-card-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}

.strategic-card-icon {
  font-size: 2.2rem;
  line-height: 1;
  flex-shrink: 0;
  margin: 0;
}

.strategic-card-body {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  width: 100%;
}

.strategic-card-title {
  font-family: var(--font-display);
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--text-primary);
  line-height: 1.35;
  margin: 0;
}

.strategic-card-desc {
  font-family: var(--font-body);
  font-size: 0.88rem;
  color: var(--text-secondary);
  line-height: 1.6;
  margin: 0;
}

/* Dossier Inset Box */
.strategic-card-repertoire {
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
  margin-top: 0.5rem;
  padding: 0.75rem 1rem;
  background: rgba(201, 168, 76, 0.04);
  border: 1px solid rgba(201, 168, 76, 0.15);
  border-radius: var(--radius-sm, 6px);
}

.repertoire-label {
  font-family: var(--font-mono);
  font-size: 0.68rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--accent-primary, #C5A059);
  font-weight: 600;
}

.repertoire-line {
  font-family: var(--font-body);
  font-size: 0.84rem;
  color: var(--text-secondary);
  line-height: 1.5;
  font-style: normal;
}
```

### Verification & Acceptance Criteria
- [x] Cards display comfortably in a 3-column row on desktop (≥1024px) with ample breathing room.
- [x] Text wraps naturally across full card width; zero squished single-word lines.
- [x] Icon sits at top-left and badge sits at top-right in a balanced header bar.
- [x] Chess (slate `#78909c`), GeoGuessr (emerald `#27ae60`), and Rhythm (champagne `#C5A059`) carry distinct high-taste accent stripes.
- [x] Repertoire is rendered as a clean, luxurious dossier readout.
- [x] Responsive single-column reflow on mobile screens (<768px).

---

## 🛠️ TASK-CR-02: Tools Ecosystem Remodel (Google Workspace Floating Dock + High-Res Icons)

### Context & Problem Statement
In `#tools`, the computational tools were presented as heavy boxed cards with visible borders and descriptions cluttering the baseline view. The user wanted:
1. Seamless **float-in entrance animation from downside to upside** with staggered cascade.
2. Removal of card borders at rest, displaying only the **brand icon and tool title**.
3. On cursor hover, the icon and title elevate upward while unveiling the capability description with a smooth kinetic fade, modeled after the **Google Workspace interactive dock**.
4. Upgrade of all tool icons to official, high-resolution SVG/PNG brand assets, replacing all low-resolution rasters (Power Apps, MetaTrader, etc.) and filling missing icons.

### Architectural Solution Implemented
1. **Zero Layout-Shift Architecture**: `.tool-dock-item` holds a stable `min-height: 92px` in the CSS grid, while `.tool-popover` floats on `position: absolute` with upward transformation (`translateY(-14px) scale(1.04)`), ensuring zero Cumulative Layout Shift (CLS = 0).
2. **Progressive Disclosure**: Description is hidden at rest (`opacity: 0; max-height: 0; transform: translateY(8px)`) and unveils with a spring curve (`cubic-bezier(0.16, 1, 0.3, 1)`) when hovered or focused.
3. **Staggered Scroll Entrance**: Grid children cascade in from $+28\text{px}$ below using sequential transition delays (`0.05s` to `0.30s`) upon `.revealed`.
4. **Complete High-Res Icon Suite**: All 24 tools now utilize official, high-resolution vector SVGs or high-definition transparent PNGs (e.g. official Microsoft Power Platform SVG vectors, official Azure AI Foundry ribbon icon replacing VS Code, official 2023 Obsidian SVG, official 1000x1000 DaVinci Resolve PNG, official Desmos, GBIF, iNaturalist, NCBI BLAST, IMSLP, Krita, MuseScore SVGs).
5. **Touch & Mobile Support**: Integrated `initToolDockInteraction()` in `js/app.js` to allow mobile tapping to inspect tool capabilities without jumping the viewport.

---

## 🛠️ TASK-TL-03: Tools Ecosystem Spatial & Typography Polish (Centered Titles, Spacing Calibration & Icon Fixes)

### Context & Problem Statement
In `#tools` (`.tools-ecosystem`):
1. **Header Clutter**: Each category was preceded by an index badge (`Row 01`, `Row 02`, etc.) and an emoji (`⚡`, `📊`, `📐`, `🎼`), producing visual noise and clashing with classical *Cormorant Garamond* typography.
2. **Cramped Spacing**: The inter-row vertical spacing was only `2.5rem`, causing floating popovers (`translateY(-14px)`) to crowd the category boundaries. The gap between category titles and the icon grid was only `1.1rem`.
3. **Asset Visibility Bugs**:
   - **Desmos**: Rendered as a broken image or clipped wordmark (`Desm<`) due to wide banner proportions.
   - **IMSLP**: Uploaded vector had `fill: rgb(0%, 0%, 0%)` (pure black), rendering completely invisible on obsidian background `#0B0B0E`.
   - **GBIF Network**: Uploaded vector was a 1000×350 banner with dark text, shrinking to a tiny illegible smudge in a 48×48px frame.

### Architectural Solution Implemented
1. **Editorial Centered Category Headers (Option B)**:
   - Removed `[Row 0X]` badges and emoji icons across all 4 category groups.
   - Centered all category titles with full-width hairline dividers (`border-bottom: 1px solid rgba(201, 168, 76, 0.15); text-align: center;`).
2. **Generous Spacing Calibration**:
   - Row-to-row separation expanded to `gap: clamp(4rem, 6vw, 5.5rem)`.
   - Title-to-dock separation expanded to `gap: clamp(2rem, 3vw, 2.75rem)`.
   - Dock grid gap relaxed to `clamp(1.6rem, 2.5vw, 2.2rem) clamp(1rem, 2vw, 1.5rem)`.
3. **Complete Vector & Raster Asset Repair**:
   - **Desmos**: Isolated the iconic Desmos curve / 'd' glyph mark into a dedicated 128×128 square asset (`assets/icons/desmos.png`), displayed sharply without banner truncation.
   - **IMSLP**: Recycled SVG fill from `rgb(0%, 0%, 0%)` to `#E8E0D0` (obsidian ivory), making historical manuscript emblem glow against dark theme.
   - **GBIF Network**: Extracted the pure green leaf emblem paths (`#4c9c2e`), stripping all dark banner text and centering the viewBox (`40 50 230 220`) for full 48px square display.

### Technical Implementation

#### `css/style.css`
```css
/* 4. Automation & Data Tools Ecosystem (TL-03 Polish) */
.tools-ecosystem {
  display: flex;
  flex-direction: column;
  gap: clamp(4rem, 6vw, 5.5rem);
  margin-top: clamp(2rem, 3.5vw, 3rem);
}

.tools-row-group {
  display: flex;
  flex-direction: column;
  gap: clamp(2rem, 3vw, 2.75rem);
}

.tools-group-header {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  border-bottom: 1px solid rgba(201, 168, 76, 0.15);
  padding-bottom: 0.9rem;
  text-align: center;
}

.tools-group-heading {
  font-family: var(--font-display, 'Cormorant Garamond', Georgia, serif);
  font-size: clamp(1.25rem, 2vw, 1.55rem);
  font-weight: 500;
  color: var(--text-primary, #e8e0d0);
  letter-spacing: 0.02em;
  text-align: center;
  margin: 0;
}

/* ── Tools Grid & Google Workspace Floating Dock ──────────────── */
.tools-grid-6 {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: clamp(1.6rem, 2.5vw, 2.2rem) clamp(1rem, 2vw, 1.5rem);
  position: relative;
}
```

#### `index.html`
- Stripped `<span class="tools-group-badge">Row 0X</span>` and emoji characters from:
  - Row 1: `Automation & AI Systems`
  - Row 2: `Data Engineering & Empirical Analysis`
  - Row 3: `Mathematics & Bioscience`
  - Row 4: `Musicology, Creative Media & Knowledge Graphs`
- Updated Desmos tool image tag:
  `<img src="assets/icons/desmos.png" alt="Desmos Graphing" class="tool-brand-img" loading="lazy" />`

### Verification & Acceptance Criteria
- [x] All 4 category headings are centered with elegant full-width hairline dividers.
- [x] Row index badges (`Row 01`–`Row 04`) and emoji prefixes are completely removed.
- [x] Spacing between rows is expansive (`clamp(4rem, 6vw, 5.5rem)`), eliminating visual collision.
- [x] Desmos displays a crisp, centered square green curve mark.
- [x] IMSLP is crisp and luminous ivory `#E8E0D0` on the obsidian dark surface.
- [x] GBIF Network displays a bold, high-resolution green leaf emblem without dark text smudging.
- [x] Hover popover transitions float with zero visual clipping or header collision.

---

## 🛠️ TASK-HR-04: Hero Section Watermark Integration (Option 1: Ambient Backdrop)

### Context & Problem Statement
In `#hero`, the botanical-geometric leaf emblem (`.hero-deco` SVG) was previously unpositioned in CSS, acting as an in-flow flex item above `.hero-content` and causing awkward vertical displacement.

### Architectural Solution Implemented
1. **Absolute Atmospheric Watermark**: `.hero-deco` anchored directly behind `.hero-content` using `position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);` with `z-index: 0; pointer-events: none;`.
2. **Dimension Constraints**: Sized at `width: clamp(550px, 70vw, 850px); max-height: 85vh; height: auto;` ensuring no clipping and zero horizontal scrollbars across all screen widths.
3. **Calibrated Ambient Opacity**: Baseline opacity set between `0.06` and `0.08` so the Spencerian cursive calligraphy ("Elektra Eliviana"), badges, and CTA buttons remain the primary crisp focal point with 100% legibility.
4. **Subtle Kinetic Pulse**: Added `botanicalAmbientGaze` keyframe animation (14s cycle) creating a breathing depth effect, with reduced motion support.
5. **Mobile Responsiveness**: Scaled down on viewports ≤768px to `width: 90vw; max-width: 500px;` and softened opacity to `0.04` for flawless mobile badge readability.

### Technical Implementation

#### `css/style.css`
```css
/* ── Hero Botanical Watermark Backdrop (Option 1) ────────── */
.hero-deco {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: clamp(550px, 70vw, 850px);
  max-height: 85vh;
  height: auto;
  z-index: 0;
  pointer-events: none;
  opacity: 0.07;
  overflow: visible;
  animation: botanicalAmbientGaze 14s ease-in-out infinite;
  will-change: transform, opacity;
}

@keyframes botanicalAmbientGaze {
  0%, 100% {
    opacity: 0.06;
    transform: translate(-50%, -50%) scale(1);
  }
  50% {
    opacity: 0.085;
    transform: translate(-50%, -50%) scale(1.02);
  }
}

@media (max-width: 768px) {
  .hero-deco {
    width: 90vw;
    max-width: 500px;
    opacity: 0.04;
    animation: botanicalAmbientGazeMobile 14s ease-in-out infinite;
  }
}

@keyframes botanicalAmbientGazeMobile {
  0%, 100% {
    opacity: 0.04;
    transform: translate(-50%, -50%) scale(1);
  }
  50% {
    opacity: 0.06;
    transform: translate(-50%, -50%) scale(1.02);
  }
}

@media (prefers-reduced-motion: reduce) {
  .hero-deco {
    animation: none;
    opacity: 0.06;
    transform: translate(-50%, -50%);
  }
}
```

#### `index.html`
- Tuned `<svg class="hero-deco" ...>` strokes (`#C9A84C`, `0.75px` to `1px`, `stroke-linecap="round"`) and botanical ellipse nodes (`fill-opacity="0.35"` with `0.75px` stroke) to harmonize with the parent CSS opacity.

### Verification & Acceptance Criteria
- [x] Spencerian calligraphy ("Elektra Eliviana") is 100% crisp and readable without interference.
- [x] Botanical emblem remains perfectly centered behind the hero copy.
- [x] Zero hit-test interference on hero buttons or stat capsules (`pointer-events: none;`).
- [x] Responsive scaling without horizontal overflow on screens 375px to 1440px+.

---

## 🛠️ TASK-WK-05: Works Grid Client Expansion: Portfolio Rizky Maulana Integration

### Context & Strategic Rationale
In `#works`, the portfolio previously showcased only one live software engineering project (`polymath-portfolio-architecture`), while remaining code entries resided in roadmap status. Elektra designed and deployed a second production-grade digital platform for Systems Narrative Architect Rizky Maulana using Google Antigravity AI pair programming.

Integrating this platform provides:
1. **Real-World Client Execution Proof**: Demonstrates external deployment competence beyond self-portfolio authoring.
2. **Dual Flagship Live Anchor**: Pairs with Elektra's personal portfolio at the very top of the grid with `"featured": true`, `"status": "live"`, and dual direct action buttons (`Live Site ↗` and `Repository ↗`).

### Architectural Implementation

#### `data/works.json`
Inserted as the 2nd item directly alongside the lead portfolio project:
```json
  {
    "id": "portfolio-rizky-maulana",
    "title": "Portfolio Rizky Maulana",
    "subtitle": "Systems Narrative Architect",
    "type": "code",
    "category": "Web & Software Development",
    "status": "live",
    "role": "Lead Web Architect, UI/UX Designer & AI Systems Engineer",
    "year": 2026,
    "description": "Architected, designed, and deployed a bespoke digital platform for Systems Narrative Architect Rizky Maulana using Google Antigravity agentic AI workflows. Engineered with high-density epistemic narrative structures, sociological case study architectures, responsive typography, and automated CI/CD deployment via GitHub and Vercel.",
    "tags": [
      "Agentic AI",
      "Antigravity",
      "Systems Architecture",
      "UI/UX Design",
      "JavaScript",
      "Vercel CI/CD"
    ],
    "links": {
      "live": "https://rizki-portfolio-seven.vercel.app/",
      "github": "https://github.com/elektraeliviana/rizki-portfolio"
    },
    "featured": true
  }
```

### Verification & Acceptance Criteria
- [x] Entry is cleanly decoupled in `data/works.json` with valid JSON syntax.
- [x] Renders at position #2 in `#works-grid` under "All" and "Code & Software" filters.
- [x] Displays a glowing green `Live` status badge (`status-live`).
- [x] Features two working external action buttons: **Live Site ↗** (`https://rizki-portfolio-seven.vercel.app/`) and **Repository ↗** (`https://github.com/elektraeliviana/rizki-portfolio`).
- [x] Card click reveals full project dossier modal with tags, role breakdown, and external links.

---

## 🛠️ TASK-PN-06: Acoustic Lounge Remodel (Dual-Pane Concert Salon & Urtext Manuscript Visualizer)

### Context & Problem Statement
In `#piano` (`The Acoustic Lounge` / `Classical Repertoire`):
1. **Lopsided Layout & Horizontal Void**: `.piano-grid` was previously constrained to `flex-direction: column;`, pushing 4 narrow track cards to the far left and leaving an awkward ~65% empty black void across desktop viewports.
2. **Unstyled Player Elements**: `.audio-player-bar` was rendered in HTML without dedicated CSS styling rules.
3. **Asset Constraints**: The `.mp3` assets in `assets/audio/` were 16-byte dummy placeholders, requiring a resilient engine that seamlessly transitions between real audio playback and an interactive synthetic recital preview.
4. **Generic Visualizer Pitfall**: Standard EDM spectrum bars clash with classical piano aesthetics. The user required a visualizer imbued with true classical musicology and prestige.

### Architectural Solution Implemented
1. **Dual-Pane "Concert Salon" Architecture (Option A)**:
   - **Left Pane (42% — Recital Program Dossier)**: Elegant tracklist displaying Roman numerals (`I`–`IV`), work title, composer, opus, key signature, and active play indicators.
   - **Right Pane (58% — Active Recital Stage Plate)**: Radial-tinted obsidian glassmorphic plate functioning as the soloist stage. Displays the Laureate insignia, active piece metadata (key, era, tempo markings), description, and bespoke scrub/timeline controls.
2. **Urtext Manuscript Cadence Visualizer (Archetype 3)**:
   - Dynamic HTML5 `<canvas id="urtext-canvas">` rendering a classical 5-line grand staff in hairline champagne gold (`rgba(201, 168, 76, 0.28)`), classical treble clef (`𝄞`), time signatures, and measure barlines.
   - Living classical noteheads and harmonic ribbons pulse and travel rhythmically along the staff during playback, settling into a serene engraved score state when paused.
3. **Hybrid Live + Synthetic Audio Engine**:
   - Supports genuine `.mp3` playback when valid audio files are supplied.
   - Gracefully runs a seamless interactive simulated recital preview if placeholders are present: animates playback time, scrub progress, canvas cadence, and track completion cycling without silent browser stalls or audio exceptions.
4. **Laureate Soloist Plaque Integration**:
   - Gilded laurel badge embedded permanently atop the stage plate: *“Laureate Soloist · Pemain Piano Solo Terbaik SMP & SMA”*.

### Technical Implementation

#### `index.html`
- Replaced `.piano-grid` with semantic `.salon-console` containing `.salon-program` and `.salon-stage`.
- Integrated `#urtext-canvas`, `#stage-scrub-bar`, and `#stage-play-btn`.

#### `css/style.css`
- Added comprehensive styles for `.salon-console`, `.salon-program`, `.salon-track-item`, `.salon-stage`, `.salon-laureate-badge`, `.stage-urtext-container`, `.stage-scrub-bar`, and timeline controls.
- Enforced responsive single-column collapse on screens $\le 960\text{px}$.

#### `js/app.js`
- Replaced legacy piano controller with `renderPianoGrid(works)`, `selectSalonPiece(idx)`, `playSalonPiece()`, `pauseSalonPiece()`, `updateSalonTimeline()`, and `setupUrtextCanvas()` / `drawUrtextFrame(phase)`.

#### `data/works.json`
- Enriched all 4 canonical music works with `opus`, `key`, `tempo`, and `duration` metadata fields.

### Verification & Acceptance Criteria
- [x] Zero empty void on desktop: 42%/58% dual-pane console comfortably fills the 1200px container.
- [x] Urtext grand staff canvas animates live noteheads, barlines, and harmonic waves during playback.
- [x] Interactive scrubbing and play/pause controls function flawlessly.
- [x] Laureate Soloist medal badge is proudly integrated atop the recital plate.
- [x] Seamless responsive collapse to vertical flow on tablet and mobile viewports.

---

## 🛠️ TASK-SK-07: Strategic & Kinetic Theater Remodel (Interactive Media Console + Video Stage)

### Context & Strategic Rationale
In `#credentials` under the `.strategic-mastery-subsection`, the 3 disciplines (Chess, GeoGuessr, Rhythm Games) were previously displayed as static 3-column cards. The user provided an architectural wireframe blueprint to elevate this area into an **Interactive Strategic & Kinetic Theater**:
1. **Interactive Selector**: The user can switch between the 3 disciplines via clean selector tabs on the left.
2. **Dedicated Description & Attached Dossier Box**: The active discipline displays its title, operational game theory / deduction / kinetic description, and its specialized metadata box (*Favorite Repertoire*, *Domain Focus*, *Kinetic Link*) directly below on the left.
3. **16:9 Video Stage Plate**: The right-hand column houses a high-definition cinematic 16:9 video frame wired for local HTML5 MP4 footage (`assets/video/...`), complete with a bespoke luxury in-production standby poster state for videos currently in editing.
4. **Themed Ambient Accents**: Slate for Chess (`#78909c`), Emerald for GeoGuessr (`#27ae60`), and Electric Gold for Rhythm Games (`#C5A059`).

---

### Technical Specifications & Implementation Plan

#### 1. Markup Architecture (`index.html`)
In `#credentials`, replace the legacy `.strategic-grid-3` inside `.strategic-mastery-subsection` with:

```html
<!-- Subsection 2: Strategic & Kinetic Mastery (Interactive Theater Console) -->
<div class="subsection strategic-mastery-subsection">
  <div class="subsection-header text-center">
    <h3 class="subsection-title">Strategic &amp; Kinetic Mastery</h3>
    <p class="subsection-desc">Deep positional game theory, geospatial spatial inference, and high-BPM kinetic multi-finger reflexes.</p>
  </div>

  <!-- Theater Media Console -->
  <div class="strategic-theater-console reveal" id="strategic-theater" data-active-theme="chess">

    <!-- Left Column: Tab Selector + Attached Dossier (45%) -->
    <div class="theater-sidebar">
      
      <!-- Discipline Selector Tabs (Option B) -->
      <div class="theater-tab-selector" role="tablist">
        <button class="theater-tab-btn active" data-id="chess" role="tab" aria-selected="true" onclick="selectStrategicDiscipline('chess')">
          <span class="tab-icon">♟️</span>
          <span class="tab-label">Chess</span>
          <span class="tab-badge badge-slate">Campus &amp; IAPI Champion</span>
        </button>
        <button class="theater-tab-btn" data-id="geoguessr" role="tab" aria-selected="false" onclick="selectStrategicDiscipline('geoguessr')">
          <span class="tab-icon">🌍</span>
          <span class="tab-label">GeoGuessr</span>
          <span class="tab-badge badge-emerald">European Meta</span>
        </button>
        <button class="theater-tab-btn" data-id="rhythm" role="tab" aria-selected="false" onclick="selectStrategicDiscipline('rhythm')">
          <span class="tab-icon">⚡</span>
          <span class="tab-label">Rhythm Games</span>
          <span class="tab-badge badge-gold">High-BPM Reflexes</span>
        </button>
      </div>

      <!-- Active Discipline Dossier Body (Attached below tabs) -->
      <div class="theater-dossier-body">
        <div class="dossier-header">
          <span class="dossier-kicker" id="dossier-kicker">Competitive Strategy · Board Vision</span>
          <h4 class="dossier-title" id="dossier-title">Chess — Competitive Strategy</h4>
        </div>
        
        <p class="dossier-desc" id="dossier-desc">
          Deep positional play, dynamic tactical foresight, and sharp opening theoretical preparation. Campus and national competitive tournament champion.
        </p>

        <!-- Attached Metadata Dossier Box (Option 3) -->
        <div class="theater-repertoire-box">
          <span class="repertoire-label" id="repertoire-label">Favorite Repertoire:</span>
          <span class="repertoire-line" id="repertoire-line">Caro-Kann Defense · Queen's Gambit · Sicilian Najdorf Variation</span>
        </div>
      </div>

    </div>

    <!-- Right Column: 16:9 Video Theater Stage (55%) -->
    <div class="theater-screen-column">
      <div class="theater-screen-wrapper">
        
        <!-- Video Player (HTML5 MP4 - Option A) -->
        <video 
          id="strategic-video-player" 
          class="theater-video" 
          preload="metadata" 
          playsinline 
          controls
          style="display: none;"
        >
          <source id="strategic-video-source" src="assets/video/chess-analysis.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <!-- Luxury Standby / In-Editing Poster State -->
        <div class="theater-standby-poster" id="theater-standby-poster" onclick="handleTheaterPosterClick()">
          <div class="standby-backdrop-glow"></div>
          
          <div class="standby-content">
            <div class="standby-play-btn" aria-label="Play Analysis Video">
              <span class="standby-play-icon">▶</span>
            </div>
            
            <div class="standby-meta">
              <span class="standby-title" id="standby-title">Chess Analysis &amp; Tactical Repertoire</span>
              <span class="standby-badge">Footage Reel in Post-Production · 1080p 60fps</span>
            </div>
          </div>

          <!-- Bottom Telemetry Bar -->
          <div class="standby-telemetry">
            <span class="telemetry-item" id="telemetry-resolution">1920 × 1080 · 60 FPS</span>
            <span class="telemetry-item" id="telemetry-focus">Match Telemetry &amp; Analysis</span>
          </div>
        </div>

      </div>
    </div>

  </div>
</div>
```

---

#### 2. Styling System (`css/style.css`)
```css
/* ════════════════════════════════════════════════════════════
   STRATEGIC & KINETIC THEATER MEDIA CONSOLE (TASK-SK-07)
   ════════════════════════════════════════════════════════════ */
.strategic-mastery-subsection {
  margin-top: clamp(4.5rem, 7vw, 6.5rem);
}

.strategic-theater-console {
  display: grid;
  grid-template-columns: 45% 55%;
  gap: clamp(1.8rem, 3vw, 2.5rem);
  background: rgba(18, 17, 23, 0.7);
  border: 1px solid rgba(201, 168, 76, 0.25);
  border-radius: var(--radius-lg, 12px);
  padding: clamp(1.5rem, 2.5vw, 2.2rem);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  position: relative;
  overflow: hidden;
  box-shadow: 0 16px 48px rgba(0, 0, 0, 0.5);
  transition: border-color 0.35s ease, box-shadow 0.35s ease;
}

/* Dynamic Themed Accent Borders */
.strategic-theater-console[data-active-theme="chess"] {
  border-color: rgba(120, 144, 156, 0.45);
  box-shadow: 0 16px 48px rgba(0, 0, 0, 0.5), 0 0 30px rgba(120, 144, 156, 0.08);
}
.strategic-theater-console[data-active-theme="geoguessr"] {
  border-color: rgba(39, 174, 96, 0.45);
  box-shadow: 0 16px 48px rgba(0, 0, 0, 0.5), 0 0 30px rgba(39, 174, 96, 0.08);
}
.strategic-theater-console[data-active-theme="rhythm"] {
  border-color: rgba(201, 168, 76, 0.45);
  box-shadow: 0 16px 48px rgba(0, 0, 0, 0.5), 0 0 30px rgba(201, 168, 76, 0.08);
}

/* Left Sidebar & Tab Selector */
.theater-sidebar {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.theater-tab-selector {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.theater-tab-btn {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 1rem;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: var(--radius-md, 8px);
  cursor: pointer;
  transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
  text-align: left;
}

.theater-tab-btn:hover {
  background: rgba(255, 255, 255, 0.05);
  transform: translateX(4px);
}

.theater-tab-btn.active {
  background: rgba(201, 168, 76, 0.1);
  border-color: var(--accent-primary, #C5A059);
  box-shadow: inset 3px 0 0 var(--accent-primary, #C5A059);
}

.strategic-theater-console[data-active-theme="chess"] .theater-tab-btn.active {
  border-color: #78909c;
  box-shadow: inset 3px 0 0 #78909c;
}
.strategic-theater-console[data-active-theme="geoguessr"] .theater-tab-btn.active {
  border-color: #27ae60;
  box-shadow: inset 3px 0 0 #27ae60;
}
.strategic-theater-console[data-active-theme="rhythm"] .theater-tab-btn.active {
  border-color: #C5A059;
  box-shadow: inset 3px 0 0 #C5A059;
}

.tab-icon {
  font-size: 1.25rem;
  line-height: 1;
}

.tab-label {
  font-family: var(--font-display, serif);
  font-size: 1rem;
  font-weight: 600;
  color: var(--text-primary, #e8e0d0);
  flex: 1;
}

.tab-badge {
  font-family: var(--font-mono, monospace);
  font-size: 0.68rem;
  padding: 0.2rem 0.55rem;
  border-radius: var(--radius-full, 9999px);
  white-space: nowrap;
}

.badge-slate {
  background: rgba(120, 144, 156, 0.15);
  border: 1px solid rgba(120, 144, 156, 0.4);
  color: #b0bec5;
}
.badge-emerald {
  background: rgba(39, 174, 96, 0.15);
  border: 1px solid rgba(39, 174, 96, 0.4);
  color: #a8f0c2;
}
.badge-gold {
  background: rgba(201, 168, 76, 0.15);
  border: 1px solid rgba(201, 168, 76, 0.4);
  color: #f7eed7;
}

/* Dossier Body & Attached Repertoire Box */
.theater-dossier-body {
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
  padding-top: 0.5rem;
}

.dossier-kicker {
  font-family: var(--font-mono, monospace);
  font-size: 0.72rem;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: var(--accent-primary, #C5A059);
}

.dossier-title {
  font-family: var(--font-display, 'Cormorant Garamond', Georgia, serif);
  font-size: clamp(1.3rem, 1.8vw, 1.55rem);
  font-weight: 600;
  color: var(--text-primary, #e8e0d0);
  line-height: 1.3;
  margin: 0;
}

.dossier-desc {
  font-family: var(--font-body, sans-serif);
  font-size: 0.9rem;
  color: var(--text-secondary, #b8b0a2);
  line-height: 1.6;
  margin: 0;
}

.theater-repertoire-box {
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
  margin-top: 0.5rem;
  padding: 0.85rem 1.1rem;
  background: rgba(201, 168, 76, 0.04);
  border: 1px solid rgba(201, 168, 76, 0.18);
  border-radius: var(--radius-sm, 6px);
}

.repertoire-label {
  font-family: var(--font-mono, monospace);
  font-size: 0.68rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--accent-primary, #C5A059);
  font-weight: 600;
}

.repertoire-line {
  font-family: var(--font-body, sans-serif);
  font-size: 0.86rem;
  color: var(--text-secondary, #e8e0d0);
  line-height: 1.5;
}

/* Right Column: 16:9 Video Stage */
.theater-screen-column {
  display: flex;
  align-items: center;
}

.theater-screen-wrapper {
  width: 100%;
  aspect-ratio: 16 / 9;
  background: #08080a;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: var(--radius-md, 8px);
  position: relative;
  overflow: hidden;
  box-shadow: inset 0 0 20px rgba(0, 0, 0, 0.8);
}

.theater-video {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Standby Poster Frame */
.theater-standby-poster {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1.5rem;
  cursor: pointer;
  background: radial-gradient(circle at center, rgba(201, 168, 76, 0.08), rgba(8, 8, 10, 0.95) 75%);
}

.standby-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto;
  gap: 1rem;
  text-align: center;
}

.standby-play-btn {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: rgba(201, 168, 76, 0.18);
  border: 2px solid var(--accent-primary, #C5A059);
  color: #fffaf0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
  box-shadow: 0 0 24px rgba(201, 168, 76, 0.35);
  transition: transform 0.25s ease, background 0.25s ease;
}

.theater-standby-poster:hover .standby-play-btn {
  transform: scale(1.12);
  background: var(--accent-primary, #C5A059);
  color: #0b0b0e;
}

.standby-title {
  font-family: var(--font-display, serif);
  font-size: 1.15rem;
  font-weight: 600;
  color: #fffaf0;
}

.standby-badge {
  font-family: var(--font-mono, monospace);
  font-size: 0.72rem;
  letter-spacing: 0.08em;
  color: var(--accent-primary, #C5A059);
  text-transform: uppercase;
}

.standby-telemetry {
  display: flex;
  justify-content: space-between;
  font-family: var(--font-mono, monospace);
  font-size: 0.68rem;
  color: var(--text-muted, #8a8275);
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  padding-top: 0.5rem;
}

/* Responsive Collapse for Tablet & Mobile */
@media (max-width: 960px) {
  .strategic-theater-console {
    grid-template-columns: 1fr;
    gap: 1.8rem;
  }
}
```

---

#### 3. Interactive Logic (`js/app.js`)
Add the `initStrategicTheater()` controller:

```javascript
/**
 * Strategic & Kinetic Mastery Data Store (Fallback from profile.json)
 */
const STRATEGIC_DISCIPLINES = {
  chess: {
    id: "chess",
    theme: "chess",
    title: "Chess — Competitive Strategy",
    kicker: "Competitive Strategy · Board Vision",
    badge: "Campus & IAPI Champion",
    description: "Deep positional play, dynamic tactical foresight, and sharp opening theoretical preparation. Campus and national competitive tournament champion.",
    repertoireLabel: "Favorite Repertoire:",
    repertoireLine: "Caro-Kann Defense · Queen's Gambit · Sicilian Najdorf Variation",
    videoSrc: "assets/video/chess-analysis.mp4",
    videoTitle: "Chess Analysis & Tactical Repertoire",
    telemetry: "1920 × 1080 · 60 FPS · Tournament Replay"
  },
  geoguessr: {
    id: "geoguessr",
    theme: "geoguessr",
    title: "GeoGuessr — Regional Topography",
    kicker: "Geospatial Inference · Meta Deduction",
    badge: "European Meta Specialist",
    description: "High-accuracy regional deduction via architectural nuances, flora geography, utility infrastructure, road meta, and linguistic visual cues.",
    repertoireLabel: "Domain Focus:",
    repertoireLine: "European Meta · Regional Topography · High-Accuracy Location Inference",
    videoSrc: "assets/video/geoguessr-analysis.mp4",
    videoTitle: "GeoGuessr European Meta Deduction",
    telemetry: "1920 × 1080 · 60 FPS · NMPZ 5k Runs"
  },
  rhythm: {
    id: "rhythm",
    theme: "rhythm",
    title: "Rhythm Games — High-BPM Kinetic Reflexes",
    kicker: "Kinetic Multi-Finger Coordination",
    badge: "High-BPM Kinetic Reflexes",
    description: "Million Master in Cytus; elite multi-finger coordination across VOEZ, Deemo, Dynamix, BanG Dream!, and osu! Directly connects multi-finger kinetic speed to virtuoso classical piano mechanics.",
    repertoireLabel: "Kinetic Link:",
    repertoireLine: "Directly connects multi-finger kinetic speed & finger independence to virtuoso classical piano mechanics.",
    videoSrc: "assets/video/rhythm-gameplay.mp4",
    videoTitle: "High-BPM Multi-Finger Finger Cam & Play",
    telemetry: "1920 × 1080 · 60 FPS · Million Master"
  }
};

/**
 * selectStrategicDiscipline — switches tabs, updates dossier, and reloads theater video.
 * @param {string} id  'chess' | 'geoguessr' | 'rhythm'
 */
function selectStrategicDiscipline(id) {
  const data = STRATEGIC_DISCIPLINES[id];
  if (!data) return;

  const consoleEl = document.getElementById('strategic-theater');
  if (consoleEl) consoleEl.setAttribute('data-active-theme', data.theme);

  // 1. Update Tabs
  document.querySelectorAll('.theater-tab-btn').forEach(btn => {
    const isMatch = btn.dataset.id === id;
    btn.classList.toggle('active', isMatch);
    btn.setAttribute('aria-selected', isMatch ? 'true' : 'false');
  });

  // 2. Update Dossier Info
  const kicker = document.getElementById('dossier-kicker');
  const title = document.getElementById('dossier-title');
  const desc = document.getElementById('dossier-desc');
  const repLabel = document.getElementById('repertoire-label');
  const repLine = document.getElementById('repertoire-line');

  if (kicker) kicker.textContent = data.kicker;
  if (title) title.textContent = data.title;
  if (desc) desc.textContent = data.description;
  if (repLabel) repLabel.textContent = data.repertoireLabel;
  if (repLine) repLine.textContent = data.repertoireLine;

  // 3. Update Video & Standby Poster
  const video = document.getElementById('strategic-video-player');
  const source = document.getElementById('strategic-video-source');
  const poster = document.getElementById('theater-standby-poster');
  const standbyTitle = document.getElementById('standby-title');
  const telemetry = document.getElementById('telemetry-focus');

  if (video) {
    video.pause();
    video.style.display = 'none';
  }
  if (poster) poster.style.display = 'flex';
  if (source) source.src = data.videoSrc;
  if (video) video.load();
  if (standbyTitle) standbyTitle.textContent = data.videoTitle;
  if (telemetry) telemetry.textContent = data.telemetry;
}
window.selectStrategicDiscipline = selectStrategicDiscipline;

/**
 * handleTheaterPosterClick — attempts to play video or indicates standby status.
 */
function handleTheaterPosterClick() {
  const video = document.getElementById('strategic-video-player');
  const poster = document.getElementById('theater-standby-poster');

  if (video) {
    video.style.display = 'block';
    if (poster) poster.style.display = 'none';
    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        // Fallback: If video file isn't uploaded yet, revert to standby poster with notification
        if (poster) poster.style.display = 'flex';
        video.style.display = 'none';
        console.info('[Elektra Video] Video reel in post-production. Drop MP4 file into assets/video/');
      });
    }
  }
}
window.handleTheaterPosterClick = handleTheaterPosterClick;
```

---

### Verification & Acceptance Criteria
- [x] Section `#credentials` `.strategic-mastery-subsection` displays the 45%/55% dual-column Media Console.
- [x] Tab switching between Chess, GeoGuessr, and Rhythm updates text, attached repertoire box, and video state dynamically.
- [x] Left-hand dossier holds title, description, and attached specialized metadata box without layout shifting.
- [x] Right-hand 16:9 video frame displays a luxury standby poster with playhead when MP4 files are in editing.
- [x] Thematic tri-color ambient glow updates dynamically on selection (Slate, Emerald, Gold).
- [x] Reflows to a clean single column on mobile (<960px).

---

## 🛠️ TASK-CS-08: Trust & Safety Case Study Card & Design Token Compliance

### Context & Strategic Rationale
In `#works`, added a comprehensive 81-page Trust & Safety Platform Governance case study card with attached dual PDF reports. The initial commit (`6992ee9`) introduced raw hex values and un-tokenized transitions. Under the Model Execution Protocols, this was refactored in commit `42c003b` to achieve 100% design token compliance.

### Architectural Solution Implemented
1. **Design Token Standardization**: Replaced all raw hex colors (`#fff`, `#ddd`, `#ccc9be`, raw rgba) with `:root` tokens: `var(--text-primary)`, `var(--text-secondary)`, `var(--accent-primary)`, `var(--accent-link)`, and `var(--border-gold)`. Translucent gold highlights use CSS `color-mix()`.
2. **Restrained Motion**: Replaced linear transitions with `0.3s cubic-bezier(0.16, 1, 0.3, 1)` and `translateY(-2px)` lift.
3. **Accessibility**: Added `@media (prefers-reduced-motion: reduce)` to disable transitions and hover transforms for motion-sensitive users.
4. **Data Sync & Syntax Repair**: Fixed invalid multi-line string escaping in `js/data.js` and regenerated the offline fallback cache for 38 total works.
5. **Modal Header Clearance**: Added `padding-right: 3.5rem` to `.cs-modal-header` to guarantee zero collision between the green "Live" badge and the modal close button.

### Verification & Acceptance Criteria
- [x] All `.cs-*` classes use design tokens with zero raw hex or raw rgba values.
- [x] Tested and verified on preview at 375px, 768px, and 1280px with 0 overflow elements.
- [x] Flow chart SVG and badge elements fit cleanly inside modal boundaries.
- [x] Offline fallback in `js/data.js` parses cleanly with valid string escaping.

---

## 🛠️ TASK-MD-09: Modal UX & Mobile Micro-Fit Polish

### Context & Problem Statement
During visual auditing of the case study and detail modals, two minor visual edge-case bugs were identified:
1. **Squeezed Icon Bug at 375px**: In the second PDF download button on narrow mobile screens (375px), the icon (⚖️) gets compressed to ~13px wide due to default flex item shrinking.
2. **Global Modal Header Clearance**: The close button (`#modal-close`) can overlap with status badges on other modals if narrow viewports wrap the title text.

### Architectural Solution
1. **Icon Flex Protection**: Add `flex-shrink: 0;` to `.doc-icon` so metadata and document icons retain their crisp circular dimensions.
2. **Global Close-Button Safe Zone**: Ensure `.modal-header` has a guaranteed `padding-right: clamp(2.5rem, 5vw, 3.5rem);` so the absolute-positioned `#modal-close` button never collides with title badges or status indicators across any modal.

### Technical Implementation

#### `css/style.css`
```css
/* ── Modal Micro-Fit & Mobile Protection (TASK-MD-09) ────── */
.doc-icon,
.btn-doc-download .doc-icon {
  flex-shrink: 0;
}

.modal-header {
  padding-right: clamp(2.5rem, 5vw, 3.5rem);
}
```

### Verification & Acceptance Criteria
- [x] At 375px mobile viewport, document icons (📄, ⚖️) in `.btn-doc-download` maintain full width with zero compression (`flex-shrink: 0`).
- [x] Modal close button has safe clearance from badges and titles across all modal types.
- [x] Zero layout shift or overflow at 375px, 768px, and 1280px.

---

## 🛠️ TASK-AN-10: Global Kinetic Choreography & Visual Balance (Non-Destructive)

### Context & Problem Statement
The portfolio is structurally and textually complete. However, across the full scroll from Hero to Footer, certain sections feel static at rest. We need a cohesive, non-destructive kinetic system that adds living depth without altering any grid columns, fonts, or container widths.

### Architectural Solution
1. **Unified Physics Tokens in `:root`**:
   - `--ease-luxury: cubic-bezier(0.16, 1, 0.3, 1);`
   - `--duration-reveal: 0.65s;`
   - `--duration-hover: 0.28s;`
2. **Subtle Interactive Lift**:
   - Ensure all interactive cards (`.lang-card`, `.cert-card`, `.work-card`, `.companion-card`) share an identical, restrained hover elevation: `transform: translateY(-3px);` accompanied by a soft champagne border glow (`rgba(201, 168, 76, 0.45)`).
3. **Staggered Intersection Cascade**:
   - Enhance the IntersectionObserver stagger in `js/app.js` to ensure cards ripple into view sequentially (`--delay: calc(var(--index, 0) * 60ms)`) rather than appearing as a rigid wall.
4. **Watermark Breathing Cadence**:
   - Harmonize ambient background watermarks (`.hero-deco`, `.about-botanical-watermark`, `.pillar-watermark`) with ultra-slow, low-impact breathing opacity cycles (`12s`–`16s`).
5. **Universal Reduced Motion Safety**:
   - Wrap all continuous kinetic and transform rules inside `@media (prefers-reduced-motion: reduce)` to gracefully lock elements in their default restful states.

### Technical Implementation

#### `css/style.css`
```css
/* ══ GLOBAL KINETIC CHOREOGRAPHY (TASK-AN-10) ═══════════════ */
:root {
  --ease-luxury: cubic-bezier(0.16, 1, 0.3, 1);
  --duration-reveal: 0.65s;
  --duration-hover: 0.28s;
}

/* Unified Card Hover Elevation */
.work-card,
.cert-card,
.lang-card,
.companion-card,
.theater-tab-btn {
  transition: transform var(--duration-hover) var(--ease-luxury),
              border-color var(--duration-hover) var(--ease-luxury),
              box-shadow var(--duration-hover) var(--ease-luxury);
}

/* Reduced Motion Override */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

### Verification & Acceptance Criteria
- [x] No layout shifts (CLS = 0) or container resize events during hover or scroll.
- [x] All interactive cards feel responsive and tactile with uniform luxury easing.
- [x] Reduced-motion mode instantly disables all continuous animations and transitions.
- [x] Zero horizontal scrollbars introduced across all responsive breakpoints.

---

## 🛠️ TASK-SN-11: Claude Sonnet 5.5 High Master Aesthetic, Kinetic & Responsive Polish

> **Assigned Model**: **Claude Sonnet 5.5 (Reasoning Tier: High)**  
> **Target Files**: `index.html`, `css/style.css`, `js/app.js`  
> **Current Commit Base**: `2078f20` (Following Gemini 4 Argon High deployment `b4b36db`)  
> **Execution Mandate**: Surgical, high-precision aesthetic and kinetic polish. Do NOT perform monolithic rewrites. Refine micro-timings, eliminate visual friction, complete font imports, and harden mobile/tablet edge cases.

---

### 1. Executive Context & What Has Changed

In commit `b4b36db`, Gemini 4 Argon High established the master architectural overhaul across the portfolio:
1. **Hero Spencerian SVG Signature**: Calligraphic flourish branding with gold gradient (`.hero-spencerian-svg`).
2. **Gravitational Cursor System**: Ambient cursor and trail with hover states and magnetic typography pull (`#custom-cursor`).
3. **Section Void Compression**: Unified vertical spacing, compressing page height from ~18,028px down to 9,447px (eliminating 296px empty voids).
4. **Urtext Grand Staff Visualizer**: HTML5 2D canvas dynamically rendering 5-line classical staff and musical wave harmonics (`#urtext-canvas`).
5. **Interactive Strategic & Kinetic Theater**: 3-discipline switchable telemetry console (Chess Telemetry, Speed Geography, Rhythm Dynamics) with live statistics and video stage.
6. **Diplomatic Dispatch & Footer**: Wax seal compression button interaction and monoline etched SVG social pills.

Now, as Claude Sonnet 5.5 High takes over, the remaining work is the **haute-horlogerie level micro-polish**: calibrating physics, eliminating missing glyphs, safeguarding device performance, and smoothing out responsiveness.

---

### 2. Comprehensive Scope of Sonnet 5.5 High Polish Tasks

#### 2.1 Aksara Sunda (Sundanese) Missing Glyphs (Tofu Boxes) Repair
* **Files**: `index.html` & `css/style.css`
* **Defect**: On Windows Chromium (Chrome/Edge/Brave), the Sundanese language card renders `ᮘᮞ ᮞᮥᮔ᮪ᮓ` as empty tofu boxes (`▯▯ ▯▯▯▯▯`) because Windows does not ship with a native Sundanese font.
* **Exact Fix**:
  - In `index.html` `<head>`, add Google Font link for `Noto Sans Sundanese`:
    ```html
    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+Sundanese:wght@400;600;700&display=swap" rel="stylesheet" />
    ```
  - In `css/style.css`, update font-family cascade for language scripts:
    ```css
    .lang-native-watermark,
    .lang-native-label {
      font-family: 'Noto Sans Sundanese', var(--font-display), 'Cormorant Garamond', serif;
    }
    ```

#### 2.2 Spencerian Calligraphy Draw-in Path-by-Path Calibration
* **Files**: `css/style.css` & `index.html`
* **Defect**: The current draw-in uses a blanket `stroke-dasharray: 900;` on all paths. Shorter flourish paths (~100px–180px) finish their stroke in the first 0.3s and freeze, while the main text writes over 2.4s. Also, the terminal accent dots (`<circle>`) are rendered statically from frame 0 before the flourish arrives.
* **Exact Fix**:
  - Assign individual classes or IDs to each path in `index.html`:
    - `.spencerian-path-swash-top` (`d="M 280,38..."`): `stroke-dasharray: 450;` animation duration 1.6s.
    - `.spencerian-path-whip-left` (`d="M 120,115..."`): `stroke-dasharray: 380;` animation duration 1.8s.
    - `.spencerian-path-whip-sub` (`d="M 115,152..."`): `stroke-dasharray: 120;` animation duration 1.2s.
    - `.spencerian-path-baseline` (`d="M 160,156 C 320,164..."`): `stroke-dasharray: 750;` animation duration 2.2s.
    - `.spencerian-path-accent` (`d="M 580,150 Q 640,165..."`): `stroke-dasharray: 210;` animation duration 1.4s.
    - `.spencerian-terminal-dot` (`<circle ...>`): Hidden at start (`opacity: 0; transform: scale(0)`), blossoms softly at t = 2.0s (`animation: dotBloom 0.4s ease forwards 2.0s`).
  - Smooth organic ink opacity fade (`animation: spencerianInkBleed 2.0s cubic-bezier(0.16, 1, 0.3, 1) forwards`).

#### 2.3 Mobile & Hybrid Touch Guardrail for Gravitational Cursor
* **Files**: `css/style.css` & `js/app.js`
* **Defect**: On touch devices and touchscreen laptops (Surface, hybrid 2-in-1s), touch taps cause `#custom-cursor` to jump and stay frozen at the tap coordinate.
* **Exact Fix**:
  - In `css/style.css`:
    ```css
    @media (hover: none) and (pointer: coarse) {
      #custom-cursor,
      #custom-cursor-trail {
        display: none !important;
        opacity: 0 !important;
        visibility: hidden !important;
      }
    }
    ```
  - In `js/app.js` `initGravitationalCursor()`:
    - Add `touchstart` listener that sets `cursor.style.display = 'none'` and `trail.style.display = 'none'`.
    - Restore visibility on `mousemove` only if `e.sourceCapabilities?.firesTouchEvents !== true`.

#### 2.4 Floating Frosted Pill Navbar Tablet Scaling (768px–1024px)
* **File**: `css/style.css`
* **Defect**: `#navbar.scrolled` inherits `gap: var(--space-xl)` (2rem / 32px) on `.nav-links`. Across 8 navigation items plus brand name, tablet widths (768px–1024px) cause items to wrap into an awkward second line or collide with `ELEKTRA ELIVIANA`.
* **Exact Fix**:
  ```css
  #navbar.scrolled .nav-links {
    gap: clamp(0.55rem, 1.25vw, 1.15rem) !important;
  }
  #navbar.scrolled .nav-link {
    font-size: clamp(0.72rem, 1.05vw, 0.8rem) !important;
    white-space: nowrap !important;
    padding: 0.25rem 0.15rem !important;
  }
  #navbar.scrolled .nav-brand {
    font-size: clamp(0.68rem, 1vw, 0.74rem) !important;
    letter-spacing: 0.15em !important;
    white-space: nowrap !important;
  }
  ```

#### 2.5 Strategic Video Graceful Standby Toast & Zero 404 Guard
* **Files**: `js/app.js` & `css/style.css`
* **Defect**: Clicking the 16:9 video standby poster in `#credentials` attempts `video.play()` on `assets/video/chess-analysis.mp4`, generating an unhandled browser console `GET 404 (Not Found)` error because the video is in post-production.
* **Exact Fix**:
  - In `handleTheaterPosterClick()`, intercept clicks before network requests:
    ```javascript
    function showTheaterToast(msg) {
      let toast = document.querySelector('.theater-toast');
      if (!toast) {
        toast = document.createElement('div');
        toast.className = 'theater-toast';
        document.body.appendChild(toast);
      }
      toast.textContent = msg;
      toast.classList.add('is-visible');
      clearTimeout(toast._timeout);
      toast._timeout = setTimeout(() => toast.classList.remove('is-visible'), 3800);
    }
    ```
  - Show message: `"Match Telemetry & Analysis Reel currently in post-production (1080p 60fps). Full footage dropping soon."`
  - Style `.theater-toast` with obsidian glass (`background: rgba(13, 13, 15, 0.92); border: 1px solid rgba(197, 160, 89, 0.4); backdrop-filter: blur(16px); color: #dfc285; border-radius: 999px; font-family: var(--font-mono); box-shadow: 0 10px 30px rgba(0,0,0,0.7);` fixed at `bottom: 2rem; left: 50%; transform: translateX(-50%);`).

#### 2.6 Urtext Canvas 60fps GPU/Battery Conservation (IntersectionObserver)
* **File**: `js/app.js`
* **Defect**: `startUrtextAnimation()` runs `requestAnimationFrame` continuously in an infinite loop, rendering mathematical wave harmonics even when the user is looking at other sections.
* **Exact Fix**:
  - Connect `#piano` or `#urtext-canvas` to an `IntersectionObserver`:
    - When intersecting: start/resume `requestAnimationFrame(loop)`.
    - When not intersecting: cancel animation frame (`cancelAnimationFrame(_urtextAnimId)`).
  - Preserves laptop battery, mobile temperature, and GPU fill-rate.

#### 2.7 Horological Tumbler Mechanical Counter Animation
* **Files**: `js/app.js` & `css/style.css`
* **Defect**: In `index.html`, the 4 hero stat capsules (`100 WPM`, `C2 Proficient`, `European Topography`, `AI Engineering`) have class `.horological-tumbler`, but lack dynamic entry animation.
* **Exact Fix**:
  - Add staggered tumbler keyframe animation on reveal:
    ```css
    @keyframes horologicalTumblerRoll {
      0% { opacity: 0; transform: translateY(18px) rotateX(-25deg); }
      100% { opacity: 1; transform: translateY(0) rotateX(0deg); }
    }
    .horological-tumbler {
      animation: horologicalTumblerRoll 0.85s cubic-bezier(0.16, 1, 0.3, 1) backwards;
      animation-delay: calc(0.4s + var(--tumbler-idx, 0) * 0.12s);
    }
    ```

#### 2.8 CSS Specificity & Cascade Sanitization
* **File**: `css/style.css`
* **Defect**: Recent hotfixes used multiple `!important` tags on section padding and margins.
* **Exact Fix**:
  - Cleanly consolidate duplicate container declarations (`.section-container`) and unify section rules so the stylesheet remains clean, maintainable, and standards-compliant.

---

### 3. Step-by-Step Prompt to Paste into Claude Sonnet 5.5 High Chat

```text
Please read and execute TASK-SN-11 from PORTFOLIO_EXECUTION_PROMPT.md directly in the repository at c:\Users\ASUS PC\.gemini\antigravity\scratch\elektra-portfolio.

Target files:
1. index.html
2. css/style.css
3. js/app.js

Requirements:
- Implement all 8 points of TASK-SN-11 with surgical precision:
  1. Add Noto Sans Sundanese webfont link in index.html and update CSS font family to eliminate tofu boxes for ᮘᮞ ᮞᮥᮔ᮪ᮓ.
  2. Calibrate Spencerian SVG stroke-dasharray per path so short flourishes don't freeze early, and animate terminal dots at t=2.0s.
  3. Harden mobile/hybrid touchscreen guardrail for #custom-cursor with touchstart suppression.
  4. Calibrate scrolled pill navbar gap for 768px-1024px tablets (clamp gap: 0.55rem-1.15rem) to prevent link wrapping.
  5. Prevent video 404 in handleTheaterPosterClick and display the luxury champagne toast.
  6. Pause Urtext canvas animation when #piano is off-screen via IntersectionObserver.
  7. Add staggered mechanical roll-in animation to .horological-tumbler capsules in hero.
  8. Sanitize CSS !important specificity rules and consolidate section padding.

Do not break any existing functionality. Maintain CLS=0 and strict token compliance.
Commit and push the changes with message:
git commit -am "feat(polish): sonnet 5.5 master aesthetic, kinetic & responsive polish (TASK-SN-11)"
git push origin main
```

---

### 4. Verification & Acceptance Criteria
- [x] Gravitational cursor never appears or interferes on mobile touch screens (`pointer: coarse`) or during touch gestures.
- [x] Spencerian calligraphy draws on with organic fluid cadence; short flourishes do not snap or pop; terminal dots bloom at $t = 2.0\text{s}$.
- [x] Sundanese script `ᮘᮞ ᮞᮥᮔ᮪ᮓ` displays crisp native glyphs on Windows Chromium without tofu boxes.
- [x] Floating pill navbar scales seamlessly across 768px, 1024px, 1440px, and 1920px with zero text-wrapping.
- [x] Strategic theater standby click shows a refined gold toast message; zero 404 console errors.
- [x] Urtext canvas loop pauses when scrolled away from `#piano` section (GPU/battery safe).
- [x] Hero horological tumblers roll in smoothly with mechanical stagger.
- [x] Section vertical rhythm feels stately and unified.
- [x] Validated on local preview and deployed cleanly with commit message:  
  `git commit -am "feat(polish): sonnet 5.5 master aesthetic, kinetic & responsive polish (TASK-SN-11)"`

---

## 🛠️ TASK-SN-12: Claude Sonnet 5.5 High — Deep Audit of Unexecuted Conversation Directives & Dynamic Emoji Purge

> **Assigned Model**: **Claude Sonnet 5.5 (Reasoning Tier: High)**  
> **Target Files**: `js/app.js`, `data/profile.json`, `data/works.json`, `js/data.js`, `css/style.css`, `index.html`  
> **Current Commit Base**: `e5c17c1`  
> **Execution Mandate**: Complete the remaining 5 nuanced requirements from the 10-Phase Master Interview that were not yet touched or were only applied to static HTML rather than dynamic JS templates.

---

### 1. Audit of Remaining Unexecuted Directives from Our Conversation

#### 1.1 Dynamic JS Emoji Purge (`TYPE_ICONS`, `renderHonors`, Modal Buttons & Case Study Document Cards)
* **Conversation Directive (Phase 0, 1, 10)**:
  > *"about emoticons, I think it's too generic. I need more improvement"*  
  > *"Purge all color emojis. Replace them with bespoke, etched champagne gold (`#C5A059`) monoline SVG vector crests."*
* **What Remains Unexecuted**:
  While static emojis in `index.html` were replaced with etched SVGs, **four dynamic JS/JSON templates still inject multi-colored smartphone emojis**:
  1. **`TYPE_ICONS` in `js/app.js` (lines 403–414 & lines 449, 485, 650, 754)**:
     Every work card in `#works-grid` (38 cards) and the Detail Modal header still outputs raw OS emojis: `⚡`, `🔬`, `📖`, `✍️`, `🎨`, `🎹`, `♟️`, `🎬`, `⚖️`, `🛡️`, `📄` via `${escHtml(icon)}`.
     - **Exact Fix**: Replace `TYPE_ICONS` with etched `#C5A059` monoline inline `<svg>` strings (`width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"`), and insert `${icon}` (un-escaped SVG markup) inside `.card-type-icon` and `.modal-type-badge`.
  2. **Curated Achievements Grid (`renderHonors` in `js/app.js` lines 1016–1050 & `data/profile.json` lines 263–305 & `js/data.js`)**:
     The 8 cards in `#honors-list` still render cartoon emojis (`🪐` Saturn planet, `🌾` wheat stalk, `⚖️` scale, `🔬` microscope, `🎹` piano keys, `🏆` trophy).
     - **Exact Fix**: Create a helper `getHonorMonolineSvg(category, title)` in `js/app.js` returning bespoke `#C5A059` monoline SVGs (Chess Knight crest, Astrolabe/Celestial orbital rings for Astronomy, Geometric compass/Euler triangle for Mathematics, Scales of dialectic for Debate, Atomic/Optical prism for Natural Sciences, Grand staff/Lyre crest for Classical Piano) and render that SVG inside `.honor-card-icon` regardless of any legacy emoji string in `profile.json`.
  3. **Modal Action Buttons (`js/app.js` lines 704 & 713)**:
     Replace `📄 Download PDF` and `📖 Read Excerpt` with etched gold monoline SVG icons + text.
  4. **Trust & Safety Case Study PDF Download Cards (`data/works.json` & `js/data.js` inside `case_study_html`)**:
     Replace `<span class="doc-icon">📄</span>` and `<span class="doc-icon">⚖️</span>` with inline `#C5A059` monoline SVGs (archival codex scroll & scales of governance).

---

#### 1.2 Phase 3: Authentic Cultural Calligraphic Watermarks on Language Cards & Unified Parchment Unveiling
* **Conversation Directive (Phase 3)**:
  > *"emerge as a unified parchment engraving. It slowly rotate/drift on a continuous 60s harmonic axis"*  
  > *"do not put a colorful modern flags so rebase to cultural calligraphic watermarks as what we've discussed before"*
* **What Remains Unexecuted**:
  1. In `data/profile.json` (and `js/data.js`), the **English** card has `"native": "English"` and **Indonesian** has `"native": "Bahasa"`, which simply prints duplicate Latin text in the bottom-right corner rather than an authentic **cultural calligraphic watermark**:
     - For **English (`EN`)**: Render the `.lang-native-watermark` in Spencerian calligraphic script (`font-family: 'Great Vibes', 'Alex Brush', cursive; font-size: 3.8rem;`) or display `"Spencerian"` / `"Albion"` monogram flourish.
     - For **Indonesian (`ID`)**: Display a refined Nusantara calligraphic script / `"Nusantara"` in high-contrast italic calligraphic serif (`'Cormorant Garamond', italic`).
     - For **Arabic (`AR`)**, **Japanese (`JA`)**, and **Mandarin (`ZH`)**: Ensure `.lang-native-watermark` has dedicated script font-family support (`'Amiri', 'Noto Serif JP', 'Noto Serif SC'`) so each cultural watermark looks like an engraved manuscript seal.
  2. **Unified Parchment Engraving Wipe for `#about`**:
     Add a smooth parchment unmasking transition when `#about.revealed` enters the viewport (`clip-path` or vertical mask reveal accompanied by a subtle gold hairline sweep).

---

#### 1.3 Phase 8: Elastic Needle Tension Dragging on the Audio Scrubber
* **Conversation Directive (Phase 8)**:
  > *"elastic needle tension that springs precisely to the playhead"*
* **What Remains Unexecuted**:
  Currently, `initSalonControls()` in `js/app.js` (line 1323) only supports a single static `scrubBar.onclick` jump. Visitors cannot drag/scrub the needle across the timeline!
* **Exact Fix**:
  Upgrade `initSalonControls()` in `js/app.js` to support full **pointer drag scrubbing with elastic needle tension**:
  - On `pointerdown` on `#stage-scrub-bar`: capture pointer, set `.is-scrubbing` on `#stage-scrub-bar`.
  - On `pointermove`: smoothly interpolate the thumb position toward the pointer with subtle elastic tension (visual thumb follows cursor immediately while fill bar trails with critically damped spring easing), updating `#time-current` and `drawUrtextFrame(_urtextPhase)` in real time.
  - On `pointerup` / `pointercancel`: release pointer capture, snap playhead with spring overshoot (`cubic-bezier(0.34, 1.56, 0.64, 1)`), and commit `_salonSimSeconds` / `_salonAudio.currentTime`.

---

#### 1.4 Phase 6: True Origin-Card Coordinate Fold-Back on the Clerestory Glass Plate Modal
* **Conversation Directive (Phase 6)**:
  > *"it should emerges as an illuminated glass plate descending from the upper clerestory while the background dips into a soft 12px lens blur. Fold back into the card"*
* **What Remains Unexecuted**:
  Currently, `closeModal()` always translates straight down by a generic `translateY(20px) scale(0.92)` instead of folding back toward the specific card that opened it.
* **Exact Fix**:
  - In `openModal(work)` (or when clicking a `.work-card` / `.companion-card` / `.research-flagship-plaque`): find the DOM card matching `work.id` (`document.querySelector(\`[data-id="\${work.id}"]\`)`), compute the vector $(\Delta x, \Delta y)$ between the viewport center (modal panel center) and that card's bounding-box center, and store `--origin-dx: ${dx}px; --origin-dy: ${dy}px;` on `#modal-panel`.
  - In `css/style.css`:
    ```css
    #modal-overlay.closing .modal-panel {
      transform: translate3d(calc(var(--origin-dx, 0px) * 0.45), calc(var(--origin-dy, 24px) * 0.45), 0) scale(0.86) !important;
      opacity: 0 !important;
      transition: transform 0.34s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.32s cubic-bezier(0.4, 0, 0.2, 1) !important;
    }
    ```
  - This makes the Clerestory Glass Plate physically fold back toward the exact card that summoned it!

---

#### 1.5 Phase 0 & 1: Lateral Ink-Bleed Section Unveiling & Gravitational Hairline Divider Pull
* **Conversation Directive (Phase 0)**:
  > *"it has gravitational lens that subtly pulls nearby typography and hairline dividers toward it, be sure to make a differentiation in colors when cursor points at it"*  
  > *"Lateral unveiling like ink bleeding into water"*
* **What Remains Unexecuted**:
  1. **Lateral Ink-Bleed Unveiling**:
     Add a lateral ink-bleed reveal on `.section-title` and `.subsection-title` when their parent `.reveal.revealed` triggers: a smooth horizontal gradient mask / shimmer transition from champagne gold (`#dfc285`) into crisp parchment ivory (`#e8e0d0`).
  2. **Gravitational Hairline Divider Pull & Color Differentiation**:
     In `initGravitationalCursor()` (`js/app.js`), extend the magnetic proximity check to hairline dividers (`.tools-group-header`, `.dispatch-console-header`, `.salon-program-header`): when the cursor approaches within $80\text{px}$, subtly bow/translate the divider by $2\text{px}$ toward the cursor and shift its border/text color toward luminous `#dfc285`.

---

### 2. Step-by-Step Prompt to Paste into Claude Sonnet 5.5 High Chat

```text
Please read and execute TASK-SN-12 from PORTFOLIO_EXECUTION_PROMPT.md directly in the repository at c:\Users\ASUS PC\.gemini\antigravity\scratch\elektra-portfolio.

Target files:
1. js/app.js
2. css/style.css
3. data/profile.json & js/data.js
4. data/works.json
5. index.html

Requirements — Execute all 5 remaining items from our 10-Phase Master Interview with surgical precision:
1. Dynamic JS Emoji Purge:
   - Replace TYPE_ICONS and SOCIAL_ICONS in js/app.js with etched champagne gold (#C5A059) monoline inline SVGs and render them inside .card-type-icon and .modal-type-badge across all 38 works cards and modals.
   - Update renderHonors() in js/app.js to render bespoke etched #C5A059 monoline SVG crests for all 8 Curated Achievements cards in #honors-list (replacing 🪐, 🌾, ⚖️, 🔬, 🎹, 🏆).
   - Replace 📄 and 📖 in modal PDF/Excerpt buttons (js/app.js) and replace 📄 and ⚖️ in case_study_html (data/works.json & js/data.js) with inline #C5A059 monoline SVGs.
2. Phase 3 Cultural Calligraphic Watermarks & Parchment Unmasking:
   - Style .lang-native-watermark in css/style.css & renderLanguages() so English ('EN') renders in ornate Spencerian calligraphy ('Great Vibes' / 'Alex Brush'), Indonesian ('ID') renders in classical italic serif calligraphy, and SU/JA/AR/ZH render with sculptural archival watermark depth.
   - Add a unified parchment unveiling wipe to #about when revealed.
3. Phase 8 Elastic Needle Tension Dragging on the Audio Scrubber:
   - Upgrade initSalonControls() in js/app.js with pointerdown / pointermove / pointerup drag-scrubbing so visitors can smoothly drag the gilded scrubber needle with elastic spring tension and real-time Urtext canvas feedback.
4. Phase 6 True Origin-Card Coordinate Fold-Back on the Clerestory Modal:
   - In openModal(work) and closeModal(), compute --origin-dx and --origin-dy toward the originating [data-id] card so #modal-panel physically folds back into the card that opened it.
5. Phase 0 Lateral Ink-Bleed Unveiling & Gravitational Hairline Divider Pull:
   - Add lateral ink-bleed reveal animation on .section-title when revealed, and include hairline headers (.tools-group-header, .salon-program-header, .dispatch-console-header) in the gravitational cursor magnetic pull + gold color differentiation.

Maintain CLS=0, reduced-motion safety, and zero console errors. Bump asset cache-busting query strings in index.html to ?v=3.1.0.
Commit and push to GitHub:
git commit -am "feat(polish): complete TASK-SN-12 dynamic emoji purge & final kinetic directives"
git push origin main
```

---

## 🛠️ TASK-UX-13: Celestial Florilegium About Tree, Languages 3+2 Pyramid, Click-Driven Autoplay Theater & Precision UI Bug Fixes

> **Target Workspace**: `c:\Data Elektra\Elektra's Interest\Computing Field\Web & Development\elektra-portfolio`  
> **Target Files**: `index.html`, `css/style.css`, `js/app.js`, `data/profile.json`, `data/works.json`, `js/data.js`  
> **Current Commit Base**: `35276f0`  
> **Execution Mandate**: Surgical, targeted edits only — **DO NOT** rewrite or truncate `css/style.css` or unrelated sections. Keep `js/data.js` 100% synchronized with `data/profile.json` and `data/works.json`.

---

### 1. Professionalism & Perfection Guardrails (Mandatory)
1. **Luxury Token Compliance**: Use only existing `:root` obsidian & champagne gold tokens (`#0d0d0f`, `#13131a`, `#C5A059`, `#D4AF37`, `#e8e0d0`). No harsh neon or bright white surfaces.
2. **Dark-Mode Autofill Shield**: Enforce `color-scheme: dark;` and `:-webkit-autofill` inset overrides on all form controls so browsers never inject white/blue autofill backgrounds.
3. **Floating-Label Single-Line Rule**: Floated `.form-label` elements must use `white-space: nowrap` with `>= 12px` clearance above typed text.
4. **Minimum Breathing-Room Floor**: Every `.section-header` and `.subsection-desc` must maintain at least `clamp(1.75rem, 3vw, 2.75rem)` clearance above the card/console below it, with `text-wrap: balance` on multi-line descriptions.
5. **Navbar Symmetry & Contrast Floor**: Maintain symmetric pill padding and `>= 1.25rem` brand-to-link clearance in `#navbar.scrolled`; keep all pills/tags readable (`>= 4.5:1` contrast) and verify zero tofu boxes (`▯`) on non-Latin scripts.
6. **Zero Regression & Layout Safety**: Preserve `max-width: 1200px`, `CLS = 0`, zero horizontal overflow (`375px`–`4K`), zero console 404 errors, and `@media (prefers-reduced-motion: reduce)`.

---

### 2. Granular Task-by-Task Execution Specifications

#### 2.1 Languages Calibration, 3+2 Centered Pyramid & Sundanese Glyph Fix
* **Target Files**: `data/profile.json`, `js/data.js`, `css/style.css`, `index.html`
* **Data Updates (`data/profile.json` + mirror identically in `js/data.js`)**:
  - **English (`EN`)**: Set `"percent": 87` (keep `"level": "C2 Proficient / Professional"` and `"detail": "EF SET 71/100 · Oxford C2 Equivalent"`).
  - **Japanese (`JA`)**: Set `"level": "Elementary · JLPT N5"`, `"percent": 30`, `"detail": "JLPT N5 · EJU Mathematics Prep"`.
  - **Mandarin (`ZH`)**: Remove the entire `"code": "ZH"` object so exactly **5 languages** remain in order (`EN`, `ID`, `SU`, `JA`, `AR`).
* **Symmetric 3-over-2 Centered Pyramid Grid (`css/style.css`, ~line 4068)**:
  ```css
  .languages-grid {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: clamp(1rem, 2vw, 1.5rem);
    width: 100%;
    max-width: 980px;
    margin-inline: auto;
  }
  .languages-grid .lang-card { grid-column: span 2; }
  .languages-grid .lang-card:nth-child(4) { grid-column: 2 / span 2; }
  .languages-grid .lang-card:nth-child(5) { grid-column: 4 / span 2; }

  @media (max-width: 820px) {
    .languages-grid { grid-template-columns: repeat(4, 1fr); }
    .languages-grid .lang-card,
    .languages-grid .lang-card:nth-child(4) { grid-column: span 2; }
    .languages-grid .lang-card:nth-child(5) { grid-column: 2 / span 2; }
  }
  @media (max-width: 520px) {
    .languages-grid { grid-template-columns: 1fr; }
    .languages-grid .lang-card,
    .languages-grid .lang-card:nth-child(4),
    .languages-grid .lang-card:nth-child(5) { grid-column: auto; }
  }
  ```
* **Sundanese (`ᮘᮞ ᮞᮥᮔ᮪ᮓ`) Tofu Box Fix (`css/style.css` & `js/app.js`)**:
  - Verify the `Noto Sans Sundanese` Google Fonts link in `index.html` loads cleanly and explicitly apply `'Noto Sans Sundanese'` as the primary font on **both** the top-right native label (`.lang-native`, `.lang-native-label`) and bottom-right watermark (`.lang-native-watermark`) for `SU` so `ᮘᮞ ᮞᮥᮔ᮪ᮓ` renders crisp Aksara Sunda glyphs with zero tofu boxes (`▯`).

---

#### 2.2 `#about` Celestial Florilegium Tree Backdrop (Theme 1 + Option A) & Bio Tag Contrast Fix
* **Target Files**: `index.html`, `css/style.css`
* **Bespoke SVG Replacement (`index.html`, `.about-botanical-watermark` ~lines 178–229)**:
  - Author a bespoke, original etched champagne-gold (`#C5A059` → `#E8D5B5` `linearGradient`) **Celestial Florilegium Tree of Life** SVG (`viewBox="0 0 1200 1050"`, `aria-hidden="true"`):
    - **Crown (behind *"Who I Am · An Unusual Mind"*)**: Ascending vertical celestial orbs (3 graduating spheres above a primary full-moon orb) flanked symmetrically by crescent lunar phases arcing along the upper ring.
    - **Center (behind the bio paragraph & CTA buttons)**: A thin luminous **astrolabe / ecliptic circle** with fine hairline starburst rays radiating behind a sculpted **Tree of Knowledge** with organic intertwined branches.
    - **Roots (behind the 3+2 Languages pyramid below)**: Symmetrical, deeply branching golden roots extending beneath the trunk to visually anchor the 5 language cards.
    - **Corner Filigree (Option A)**: Delicate antique-gold root-filigree corner flourishes framing the 4 corners of `#about` (with a whisper-thin `rgba(197, 160, 89, 0.14)` hairline inner border on desktop, cleanly hidden or scaled down on `<768px` mobile).
* **Calibrated Visibility & Readability Veil (`css/style.css`)**:
  - Anchor `.about-botanical-watermark` specifically behind the upper **Bio + 3+2 Languages Pyramid** zone (`position: absolute; top: 1.5rem; left: 50%; transform: translateX(-50%); width: 100%; max-width: 1200px; max-height: 980px; pointer-events: none; z-index: 0;`) with `opacity: 0.12` on desktop (`0.08` on mobile), so its roots frame the 5 Languages cards while the new 2-Column Academic Pedigree & Operational Leadership Dual-Ledger (`TASK-RM-01`) sits cleanly below the roots without stretching the tree.
  - Add a soft radial obsidian readability veil behind `.about-bio-container` (`background: radial-gradient(ellipse at center, rgba(13, 13, 15, 0.62) 0%, rgba(13, 13, 15, 0) 72%);`) so every word of the bio stays razor-sharp.
* **Brighten Bio Tag Pills (`.about-tags`, `css/style.css` ~line 3548)**:
  - `color: #d4cbbd; background: rgba(19, 19, 26, 0.82); border: 1px solid rgba(197, 160, 89, 0.28);`
  - Hover: `border-color: rgba(197, 160, 89, 0.65); color: #e8e0d0; transform: translateY(-2px);`

---

#### 2.3 Remove Em-Dashes (`—`) in *Gödel's Ontological Proof*
* **Target Files**: `index.html`, `data/works.json`, `js/data.js`
* **`index.html` (`.flagship-abstract`, ~line 802)**:
  - Replace `S5 modal logic axioms — originally constructed to prove the existence of a supremely perfect being — within` with:
    `S5 modal logic axioms (originally constructed to prove the existence of a supremely perfect being) within`
* **`data/works.json` (`id: "godels-ontological-proof-allah"`, ~line 181) & `js/data.js`**:
  - Replace `Islamic theological metaphysics — constructing a rigorous formal bridge` with:
    `Islamic theological metaphysics, constructing a rigorous formal bridge`

---

#### 2.4 Strategic & Kinetic Mastery Theater: All-Collapsed Default, Click-Only Selection & Autoplay
* **Target Files**: `index.html`, `js/app.js`, `css/style.css`
* **Markup (`index.html`, `#strategic-theater` ~lines 970–1086)**:
  - Set `data-active-theme="overture"` on `#strategic-theater` and **remove `onmouseleave="handleTheaterMouseLeave()"`**.
  - Remove `.active` from the Chess `.theater-accordion-item` and its `.theater-tab-btn` so **all 3 bars start collapsed** on initial load (`aria-selected="false"`, `aria-expanded="false"`).
  - **Remove `onmouseenter="..."`** from all 3 `.theater-tab-btn` buttons so selection is **100% click-driven**.
  - Convert GeoGuessr and Rhythm `.theater-video-echo` elements to `data-src="assets/video/..."` (removing eager `src=` + `autoplay` so missing files never throw 404 console errors on load).
  - Initialize the 16:9 stage defaults (`#standby-kicker`, `#standby-title`, `#standby-badge`, `#telemetry-focus`, `#repertoire-label`, `#repertoire-line`) to the **Tri-Discipline Master Overture Montage** (`overture-montage.mp4`).
  - Keep `.theater-soundstage-toggle` visible across all 4 states (default label: `MUTED · AMBIENT OVERTURE`).
* **Controller (`js/app.js`, ~lines 2190–2368)**:
  - Initialize `_activeStrategicId = 'overture'` and `_theaterSoundUnmuted = false`.
  - **Click-to-Toggle**: Clicking a collapsed bar expands that single discipline and plays its video; clicking the **already open** bar collapses all 3 bars and returns the 16:9 stage to `overture`.
  - **Autoplay Policy (Option B — Muted Overture, Unmuted on Discipline Click)**:
    - Create helper `loadAndPlayTheaterVideo(src, { muted })` with `video.loop = true; video.playsInline = true;`.
    - Via `IntersectionObserver` on `#strategic-theater`, auto-play `overture-montage.mp4` **muted** when in view (and pause when scrolled off-screen).
    - When a visitor **clicks** `Chess`, `GeoGuessr`, or `Rhythm Games`, immediately switch to its `.mp4` and auto-play **with sound enabled (`muted: false`)** — calling `pauseSalonPiece()` if the Piano Lounge is active, and updating `.theater-soundstage-toggle` to `.unmuted` (`SOUNDSTAGE ACTIVE`). If the browser blocks unmuted playback, retry muted.
    - On `error` or missing `.mp4` file in `assets/video/`, gracefully keep `#strategic-video-player` hidden and show `#theater-standby-poster` with zero uncaught errors.
    - Keep `toggleTheaterSoundstage(e)` functional on **all 4 videos (including Overture)**, pausing the Piano Lounge whenever unmuted.
* **CSS (`css/style.css`)**:
  - Add `.strategic-theater-console[data-active-theme="overture"] { border-color: rgba(201, 168, 76, 0.35); }`.

---

#### 2.5 Precision Fixes for the 4 Buggy UI Sections
* **Target Files**: `css/style.css`, `index.html`
1. **Scrolled Navbar Pill Symmetry & Brand Clearance (`css/style.css`, ~lines 6062–6105)**:
   ```css
   #navbar.scrolled .nav-container {
     display: flex;
     align-items: center;
     justify-content: space-between;
     gap: clamp(1.25rem, 2.5vw, 2.25rem);
     padding: 0 clamp(1.25rem, 2.2vw, 1.85rem);
     width: 100%;
   }
   #navbar.scrolled .nav-brand {
     flex-shrink: 0;
     margin-right: clamp(0.75rem, 1.5vw, 1.5rem);
     white-space: nowrap;
   }
   ```
2. **Diplomatic Dispatch Form Autofill Shield & Floating-Label Overlap (`css/style.css` ~lines 6841–6890 & `index.html` ~line 1153)**:
   - Shorten `#dispatch-name` label in `index.html` from `Correspondent Name / Institution` to `Correspondent / Institution`.
   - Apply `color-scheme: dark;` and full WebKit autofill lock + single-line label clearance:
     ```css
     .contact-form .form-input {
       color-scheme: dark;
       padding: 1.15rem 1rem 0.75rem;
     }
     .contact-form .form-input:-webkit-autofill,
     .contact-form .form-input:-webkit-autofill:hover,
     .contact-form .form-input:-webkit-autofill:focus,
     .contact-form textarea:-webkit-autofill {
       -webkit-box-shadow: 0 0 0 1000px #0d0d0f inset !important;
       -webkit-text-fill-color: #e8e0d0 !important;
       caret-color: #c9a84c;
       transition: background-color 5000s ease-in-out 0s;
     }
     .contact-form .form-label {
       white-space: nowrap;
       max-width: calc(100% - 1.5rem);
       overflow: hidden;
       text-overflow: ellipsis;
       pointer-events: none;
     }
     .contact-form .form-input:focus ~ .form-label,
     .contact-form .form-input:not(:placeholder-shown) ~ .form-label,
     .contact-form .form-input:-webkit-autofill ~ .form-label {
       top: -0.58rem;
       font-size: 0.64rem;
       letter-spacing: 0.08em;
       padding: 0 0.4rem;
       line-height: 1.2;
       background: #0d0d0f;
     }
     ```
3. **Strategic & Kinetic Mastery Header Breathing Room (`css/style.css`)**:
   - Add `margin-bottom: clamp(1.75rem, 3vw, 2.5rem);` to `.strategic-mastery-subsection .subsection-desc` and `margin-bottom: 0.65rem;` to `.strategic-mastery-subsection .subsection-title`.
4. **Flagship Research Header Spacing & Orphan-Line Fix (`css/style.css`)**:
   - Add `margin-bottom: clamp(2.25rem, 4vw, 3.25rem);` to `#research .section-header`.
   - Apply `max-width: 68ch; margin-inline: auto; text-wrap: balance;` to `.section-desc` and `.subsection-desc`.

---

### 3. Verification & Acceptance Criteria for Phase A (`TASK-UX-13`)
- [ ] Scrolled navbar pill has clean breathing room between `ELEKTRA ELIVIANA` and `ABOUT` and balanced left/right padding.
- [ ] `#about` displays the Celestial Florilegium tree + corner filigree clearly (anchored to the upper Bio + 3+2 Languages zone with `max-height: 980px`) with razor-sharp bio readability and bright, legible bio tag pills.
- [ ] Languages renders 5 cards in a symmetric 3+2 centered pyramid (EN `87%`, JA `30% · Elementary · JLPT N5`, Mandarin removed) and Sundanese `ᮘᮞ ᮞᮥᮔ᮪ᮓ` shows zero tofu boxes.
- [ ] Flagship Research header has generous clearance above the gold plaque, balanced description lines, and zero em-dashes in Gödel's abstract/modal.
- [ ] Strategic & Kinetic Mastery subtitle has generous clearance above the theater; all 3 bars start collapsed; hover never switches videos; click expands/autoplays with sound and re-clicking collapses back to Overture; Soundstage toggle works across all 4 states.
- [ ] Diplomatic Dispatch form stays obsidian under browser autofill and floating labels never wrap or clip typed text.
- [ ] Zero console errors and zero horizontal overflow across `375px`, `768px`, and `1440px`.

---

## 🛠️ PHASE B (`TASK-RM-01` & `TASK-RM-09`): Academic Pedigree & Operational Leadership Dual-Ledger + Updated CV Synchronization

> **Target Files**: `index.html`, `data/profile.json`, `js/data.js`, `js/app.js`, `css/style.css`  
> **Reference Blueprint**: Cross-reference `PORTFOLIO_REMODEL_MASTERPLAN.md` (`TASK-RM-01` & `TASK-RM-09`) for full context.

### 1. Updated CV & Question-14 Verbatim Data Synchronization (`data/profile.json` + mirror in `js/data.js`)

1. **Enrich `education` array with verbatim Question-14 badges & highlights:**
   ```json
   "education": [
     {
       "degree": "Bachelor Degree (S.Ag.) — Quranic Studies & Tafsir",
       "institution": "IAIPI Bandung (Institut Agama Islam Persis)",
       "period": "2024–2026",
       "gpa": 3.54,
       "badge": "Accepted Thesis",
       "type": "undergraduate",
       "highlights": [
         "Accepted Undergraduate Thesis: \"Politics of Hierarchy: Progenic Prophets Family\"",
         "Core Analytical Coursework: Formal Logic (Mantiq), Islamic Epistemology (Kalam), Comparative Hermeneutics & Digitalisasi Al-Qur'an"
       ]
     },
     {
       "degree": "Associate Degree (D3) — Arabic Language",
       "institution": "Al-Imarat Bandung",
       "period": "2021–2024",
       "grade": 72.06,
       "badge": "Classical Linguistics",
       "type": "associate",
       "highlights": [
         "Specialized in Classical Arabic Morphology (Sarf) & Syntax (Nahw) — foundational structural grammar directly informing computational linguistics and NLP text analysis"
       ]
     },
     {
       "degree": "High School Diploma — Natural Sciences (IPA)",
       "institution": "SMAN 6 Cimahi",
       "period": "2018–2021",
       "grade": 78.5,
       "badge": "Math & Astronomy Olympiad",
       "type": "highschool",
       "highlights": [
         "Rank #1 Mathematics in High School Cohort (2018)",
         "Top 20 Bandung City Astronomy Olympiad (2019/2020)"
       ]
     },
     {
       "degree": "AI Engineering Track — Independent Mentor-Led Curriculum",
       "institution": "Independent Mentor-Led Technical Program",
       "period": "2026–Present",
       "badge": "First-Principles ML",
       "type": "bootcamp",
       "highlights": [
         "Completed Modules: Python Core & Algorithms, Automated ETL/CSV Pipelines (0.0005s runtime), NumPy Linear Algebra, Loss Functions (MSE/MAE Outlier Proof), and First-Principles Gradient Descent",
         "Engineered Clean Architecture Desktop & Web Applications with 20/20 Pytest coverage and LLM API integration"
       ]
     },
     {
       "degree": "Japanese Language & CS Scholarship Pathway",
       "institution": "PT Yurinoki Nihongo",
       "period": "2026–Present",
       "badge": "Target Pathway · Japan CS 2030",
       "type": "language",
       "highlights": [
         "Target Pathway: LPK Selection Gate (May–June 2027) → Nihongo Gakkou (April 2028) → S1 Computer Science / AI Engineering in Japan (April 2030)",
         "Target Benchmarks: JLPT N2 & EJU Mathematics Course 2 (targeting Japanese National/Imperial Universities & scholarship tracks)"
       ]
     }
   ]
   ```
2. **Add J&T Express from Updated CV to `experience` array (`data/profile.json` & `js/data.js`):**
   ```json
   {
     "role": "Logistics & Operations Dispatcher",
     "organization": "J&T Express — Kab. Bandung",
     "period": "June 2022–March 2024",
     "highlights": [
       "Directed dispatch routing and delivery fulfillment for 20–50 high-priority parcels daily under strict SLA targets",
       "Reconciled daily courier delivery logs and resolved last-mile routing bottlenecks with zero manifest discrepancies"
     ]
   }
   ```
3. **Add Dibimbing.id Certificate from Updated CV to `certificates` array (`data/profile.json` & `js/data.js`):**
   ```json
   {
     "title": "Finance & Investment Banking Certificate",
     "issuer": "Dibimbing.id",
     "year": 2026,
     "file": "assets/certificates/dibimbing-finance-investment-banking.pdf"
   }
   ```

### 2. Render 2-Column Academic Pedigree & Operational Leadership Dual-Ledger (`index.html`, `js/app.js`, `css/style.css`)
- **In `index.html` (inside `#about`, directly below `.languages-subsection`):** Insert the `.pedigree-ledger-subsection` markup containing `#education-list` (Pillar A: Left Column) and `#experience-timeline` (Pillar B: Right Column) exactly as specified in `PORTFOLIO_REMODEL_MASTERPLAN.md` (`TASK-RM-01`, lines 76–105).
- **In `js/app.js`:** Upgrade `renderEducation(education)` to render `.edu-badge`, `.edu-grade`, and `.edu-bullets` (`highlights` array) as specified in `PORTFOLIO_REMODEL_MASTERPLAN.md` (`TASK-RM-01`, lines 108–142).
- **In `css/style.css`:** Append the `.pedigree-ledger-subsection`, `.pedigree-dual-grid`, `.pedigree-column`, `.edu-item`, and `.exp-item` rules (collapsing cleanly to 1 column at `@media (max-width: 900px)`) as specified in `PORTFOLIO_REMODEL_MASTERPLAN.md` (`TASK-RM-01`, lines 145–284).

---

## 🛠️ PHASE C (`TASK-RM-02` through `TASK-RM-08`): High-Signal Works Remodel, Dibimbing Case Studies, Hermit/Wattpad/Blogspot Wiring & Fine Art Atelier

> **Target Files**: `data/works.json`, `js/data.js`, `js/app.js`, `css/style.css`, `index.html`  
> **Reference Blueprint**: Cross-reference `PORTFOLIO_REMODEL_MASTERPLAN.md` (`TASK-RM-02` through `TASK-RM-08`).

### 1. Works Catalog Pruning (`TASK-RM-02`)
Remove these **6 retired entries** from `data/works.json` and `js/data.js`:
1. `ai-rag-novel-analyzer` (*Exoplanet Light-Curve Classifier / Local RAG Assistant*)
2. `celestial-orbit-dynamics` (*Celestial Orbit Dynamics & N-Body Simulator*)
3. `geometry-high-dimensional-word-embeddings` (*The Geometry of High-Dimensional Word Embeddings*)
4. `japan-cs-scholarship-journey` (*Japan CS Scholarship Journey Portal*)
5. `the-hundred-petals` (*The Hundred Petals: The Florilegium of War Against the Underworld Entity*)
6. `chess-campus-champion-2025` (*Campus Chess Champion 2025* — also remove the standalone `<button class="filter-btn" data-filter="chess">` pill from `#works-filter-bar` in `index.html`, since Chess is prominently featured in `#credentials` Strategic Theater & Curated Achievements).

### 2. Dibimbing & UXfolio-Grade Technical Case Studies (`TASK-RM-03`)
In `data/works.json` and `js/data.js`:
1. **Add New Live Project `daily-bullet-journal`** (*Daily Bullet Journal — Zero-Dependency Rapid Logging & Task Resolution Engine*) with its full metadata and a structured `case_study_html` dossier (`100% Python Stdlib sqlite3/http.server`, `Ctrl+R Rapid Resolve Triage`, `Offline localStorage Fallback`, `1-Click Obsidian .md & JSON Backup`).
2. **Enrich `daily-writing-companion` and `automated-data-cleaner`** with rich `case_study_html` modals using the existing `.modal-case-study`, `.cs-callout`, `.cs-metrics-grid`, `.cs-pillars-grid`, and `.cs-flow-svg` design system:
   - `daily-writing-companion`: `4 Layers Clean Architecture`, `20/20 Passing Pytest Suites`, `SQLAlchemy 2.0 Zero-Data-Loss Migration`, `Gemini API Mentor` + 4-stage Clean Architecture SVG flow diagram.
   - `automated-data-cleaner`: `0.0005s Runtime`, `~15 Mins Saved/Batch`, `100% Whitespace/Case/Unit Normalization`, `O(N) Single-Pass Histogram` + 5-stage ETL SVG flow diagram.
3. **Update `neural-net-from-scratch` (`status: "roadmap"`):** Update subtitle, description, tags, and `case_study_html` to highlight **Phase 1 Completed NumPy Milestones** (Dense matrix forward pass $Z = XW + b$, ReLU activation, MSE vs. MAE outlier sensitivity proof showing a 20-point error accounts for **87.1% of MSE variance vs. 62.5% of MAE**, and 100-epoch analytical Gradient Descent converging to $y = 2x + 1$) and **Phase 2 Active Roadmap** (multi-layer backpropagation).

### 3. IAIPI Living Qur'an Digital Academy Platform (`TASK-RM-04`)
In `data/works.json` and `js/data.js`:
- Replace `travel-writing-living-quran` with `living-quran-digital-academy-iaipi` (*Living Qur'an Digital Academy Platform — IAIPI Bandung*, `type: "code"`, `category: "Academic EdTech & Digital Humanities"`, `status: "ongoing"`, `featured: true`) as specified in `PORTFOLIO_REMODEL_MASTERPLAN.md` (`TASK-RM-04`, lines 365–386).

### 4. Research Papers & Blogspot Standby Toast (`TASK-RM-05`)
1. **`politics-of-hierarchy-progenic-prophets`**: Keep as `"status": "accepted"` (*Accepted Thesis*) with its direct PDF download (`assets/papers/Luthfi Fauzan Prophetic Political Regeneration and Family Lineage Hierarchy in the Qur'an.pdf`).
2. **Ongoing Blogspot Treatises (`godels-ontological-proof-allah`, `western-classical-dangdut-ethnomusicology`, `circulation-of-the-sun-hermeneutics`, `mozart-requiem-lacrimosa-semiotics`, `newton-to-backpropagation-calculus`):**
   - Set `"status": "ongoing"` and add `"links": { "blogspot": "#blogspot-standby" }` on `godels-ontological-proof-allah`, `western-classical-dangdut-ethnomusicology`, `circulation-of-the-sun-hermeneutics`, and `mozart-requiem-lacrimosa-semiotics`.
   - In `js/app.js` (`buildWorkCard()` and `buildModalHTML()`):
     - Render a champagne-gold button **`Ongoing Monograph on Blogspot ↗`** whenever `work.links && work.links.blogspot`.
     - If `work.links.blogspot === '#blogspot-standby'`, clicking the button calls `event.preventDefault(); event.stopPropagation(); showTheaterToast('Ongoing Monograph on Blogspot — Direct Link Publishing Soon');` (reusing the luxury obsidian-gold toast!). When a real URL is later placed in `links.blogspot`, it opens directly in a new tab.
     - Suppress the broken `Download PDF` button in `buildModalHTML()` for research works that do not have an explicit `work.pdf` field on disk (eliminating 404 PDF links on ongoing papers!).

### 5. Literary Compendium: Hermit (`https://app.gethermit.com/books`) + Main Wattpad Link + Built-In Serif Reading Room (`TASK-RM-06`)
In `data/works.json`, `js/data.js`, and `js/app.js`:
1. **Remove standalone `path-of-life-and-hope-under-magnolias`** and merge it into **`the-hermit-collection`**:
   - Set `"type": "novel"`, `"status": "complete"`, `"title": "The Hermit Collection (Including \"The Path of Life and Hope Under the Magnolia's\")"`.
   - Set `"links"`:
     ```json
     "links": {
       "hermit": "https://app.gethermit.com/books",
       "wattpad": "https://www.wattpad.com/story/414636110-the-path-of-life-and-hope-under-the-magnolia%27s"
     }
     ```
     *(Note: In `js/app.js`, label the Wattpad button **`Wattpad Catalog ↗`** and the Hermit button **`Read on Hermit ↗`** pointing to `https://app.gethermit.com/books`, so visitors can access both your Hermit platform and your main Wattpad presence).*
   - Include a `case_study_html` (or built-in `.modal-reading-room` block) styled in *Cormorant Garamond* with an **Executive Literary Dossier + Polished Opening Prose Excerpt** inside the portfolio modal (Button 1: Built-In Reading Room), alongside the external **Hermit (`https://app.gethermit.com/books`)** and **Wattpad** buttons (Button 2).
2. **Update `the-ciwidey-journey`**:
   - Set `"type": "novel"`, `"status": "complete"`, `"title": "The Ciwidey Journey — Phenomenological Highland Memoir"`.
   - Include a Built-In Serif Reading Room excerpt from the Ciwidey / Rancaupas highland memoir inside its modal, plus a standby external portal button (`showTheaterToast('External Literary Monograph Portal — Launching Soon')`).

### 6. Fine Art Realism Dual-Architecture (Option 2A — 5 Visual 2024 Cards + Built-In 2023 Provenance Ledger Modal + External Atelier Button) (`TASK-RM-07`)
1. **On `#works-grid` (`data/works.json` & `js/data.js`):**
   - Keep the **5 photographed 2024 paintings** (`art-realistic-eye`, `art-flandres-sprite`, `art-detailed-mountain-canvas`, `art-detailed-tree-canvas`, `art-tea-still-life`) as visual cards on `#works-grid`.
   - Remove the 5 imageless 2023 entries (`art-pewdiepie-portrait`, `art-cats-face-realism`, `art-3d-squid-umbrella`, `art-town-landscape`, `art-nature-dual-eyes`) as separate imageless grid cards so **100% of Fine Art cards on `#works-grid` display real high-resolution artwork**.
2. **Inside Every Fine Art Modal (`buildModalHTML()` in `js/app.js`):**
   - Beneath the primary high-res artwork display (Button 1: Built-In Atelier Exhibition), automatically render the **Complete 10-Work Atelier Catalog & 2023 Exhibited/Donated Provenance Ledger Table** (listing the 5 photographed 2024 plates with quick-switch thumbnail buttons + the 5 donated 2023 exhibition works: *Pewdiepie — Realistic Portrait*, *Cat's Face — Animal Realism*, *3D Squid Umbrella Design*, *Town Landscape*, and *Nature with Dual Eyes* with their medium, year `2023`, and provenance status `Exhibited & Donated to Private/School Collection`).
   - Add **Button 2 (`External Atelier Portal ↗`)** in the modal footer that triggers `showTheaterToast('External Fine Art Atelier Portal — Launching Soon')` until an external Cara.app / Behance URL is added.

### 7. Classical Piano Salon Protection & Flagship YouTube Showcase (`https://youtu.be/XykyKbHISqs`) (`TASK-RM-08`)
1. **Protect `#piano` (The Acoustic Lounge) while decluttering `#works-grid`:**
   - On the 4 classical audio entries in `data/works.json` and `js/data.js` (`music-chopin-ballade-1`, `music-beethoven-moonlight-3rd`, `music-liszt-hungarian-rhapsody-2`, `music-chopin-nocturne-op9-no1`), add `"salonOnly": true`.
   - In `js/app.js`:
     - In `renderWorksGrid(works)`: filter out items with `w.salonOnly === true` (`works.filter(w => !w.salonOnly)`) so the 4 audio tracks do not appear as duplicate cards in `#works-grid`.
     - In `renderPianoGrid(works)`: filter `works.filter(w => w.type === 'music' && w.salonOnly !== false && w.audio)` so `#piano` (The Acoustic Lounge Concert Salon) continues to load all 4 canonical tracks (`I`–`IV`) without interruption!
2. **Upgrade `performance-piano-drawing-combined` as the Flagship Multi-Disciplinary YouTube Card in `#works-grid`:**
   - Set `"type": "music"` (with `"salonOnly": false` / omitted so it appears under `All` and `Classical Piano` in `#works-grid` without entering the audio-only `#salon-tracklist`), `"status": "live"`, `"featured": true`, `"title": "Synergistic Classical Piano & Fine Art Performance Showcase"`, and `"links": { "youtube": "https://youtu.be/XykyKbHISqs", "salon": "#piano" }`.
   - In `js/app.js` (`buildWorkCard()` and `buildModalHTML()`): support `work.links.youtube` (rendering **`Watch on YouTube ↗`** opening `https://youtu.be/XykyKbHISqs`) and `work.links.salon` (rendering **`Enter Acoustic Lounge ↘`** scrolling smoothly to `#piano`).

---

## 🚀 Master Copy-Paste Prompt for a Fresh Antigravity Conversation

Copy and paste the block below into a fresh Antigravity conversation to execute **Phase A (`TASK-UX-13`)**, **Phase B (`TASK-RM-01` & `TASK-RM-09`)**, and **Phase C (`TASK-RM-02`–`TASK-RM-08`)** in sequence:

```text
Please read PORTFOLIO_EXECUTION_PROMPT.md (and cross-reference PORTFOLIO_REMODEL_MASTERPLAN.md) in the workspace at:
c:\Data Elektra\Elektra's Interest\Computing Field\Web & Development\elektra-portfolio

Execute the complete 3-Phase Master Directive (Phase A: TASK-UX-13, Phase B: TASK-RM-01 & TASK-RM-09, Phase C: TASK-RM-02 through TASK-RM-08) surgically while strictly adhering to the 6 Professionalism & Perfection Guardrails. Always keep js/data.js 100% synchronized with data/profile.json and data/works.json.

PHASE A — TASK-UX-13 (Visual Architecture, Celestial Tree, 3+2 Languages, Autoplay Theater & 4 UI Bug Fixes):
1. Languages Calibration & 3+2 Pyramid: English 87%, Japanese 30% ("Elementary · JLPT N5"), remove Mandarin, center Japanese & Arabic cleanly beneath the top 3 cards via a 6-column CSS grid, and fix Sundanese (ᮘᮞ ᮞᮥᮔ᮪ᮓ) tofu boxes on both native label and watermark.
2. #about Celestial Florilegium Tree (Theme 1 + Option A): Replace the faint magnolia watermark with an original etched champagne-gold Celestial Tree of Life SVG (lunar crown, astrolabe ring + starburst rays, deep roots framing Languages, delicate corner root-filigree, anchored to the upper Bio + Languages zone with max-height: 980px, opacity 0.12 desktop / 0.08 mobile, radial bio readability veil) and brighten the 6 .about-tags pills.
3. Gödel's Ontological Proof: Remove em-dashes (—) using parentheses/commas in both index.html and data/works.json + js/data.js.
4. Strategic & Kinetic Mastery Theater: Start with all 3 bars collapsed while auto-playing the Tri-Discipline Master Overture Montage muted. Remove hover-switching (onmouseenter) and mouseleave auto-reset. Make selection 100% click-driven (clicking a bar expands it & auto-plays with sound, pausing Piano Lounge if playing; clicking the open bar collapses all 3 and returns to Overture). Keep the unified Soundstage mute/unmute toggle active for all 4 states and fall back cleanly to the standby poster when .mp4 files are not yet in assets/video/ with zero 404 console errors.
5. Fix the 4 Screenshot UI Bugs: (a) Scrolled navbar pill symmetry & brand-to-ABOUT clearance; (b) Diplomatic Dispatch dark autofill shield (:-webkit-autofill) + single-line non-overlapping floating labels ("Correspondent / Institution"); (c) Strategic & Kinetic Mastery subtitle bottom spacing; (d) Flagship Research header bottom spacing + text-wrap: balance.

PHASE B — TASK-RM-01 & TASK-RM-09 (Academic Pedigree & Operational Leadership Dual-Ledger + Updated CV Sync):
1. Sync data/profile.json & js/data.js with the Question-14 verbatim academic pedigree (IAIPI GPA 3.54 + Accepted Thesis + Mantiq/Kalam/Hermeneutics; Al-Imarat D3 Arabic Sarf/Nahw; SMAN 6 Cimahi Rank #1 Math & Top 20 Bandung Astronomy Olympiad; Independent Mentor-Led AI Engineering Track modules; PT Yurinoki Nihongo with Target Pathway: LPK Selection Gate May–June 2027 → Nihongo Gakkou April 2028 → S1 CS/AI in Japan April 2030 · JLPT N2 & EJU Math Course 2).
2. Add Logistics & Operations Dispatcher — J&T Express (Jun 2022–Mar 2024) to experience and Finance & Investment Banking Certificate — Dibimbing.id (2026) to certificates.
3. Render the 2-Column Academic Pedigree & Operational Leadership Dual-Ledger (#education-list + #experience-timeline) inside #about below .languages-subsection with upgraded renderEducation() and responsive CSS.

PHASE C — TASK-RM-02 through TASK-RM-08 (Works Catalog Pruning, Dibimbing Case Studies, Hermit/Wattpad/Blogspot Wiring, Fine Art 2024+Provenance & Flagship YouTube Showcase):
1. Prune the 6 retired works (ai-rag-novel-analyzer, celestial-orbit-dynamics, geometry-high-dimensional-word-embeddings, japan-cs-scholarship-journey, the-hundred-petals, chess-campus-champion-2025) and remove the standalone Chess filter pill from #works-filter-bar.
2. Add daily-bullet-journal (Live) and enrich daily-writing-companion, automated-data-cleaner, and neural-net-from-scratch (Roadmap + verified Phase 1 NumPy Day 15–19 milestones) with Dibimbing/UXfolio-grade case_study_html modals.
3. Replace travel-writing-living-quran with living-quran-digital-academy-iaipi (Living Qur'an Digital Academy Platform — IAIPI Bandung).
4. Wire ongoing research papers (godels-ontological-proof-allah, western-classical-dangdut-ethnomusicology, circulation-of-the-sun-hermeneutics, mozart-requiem-lacrimosa-semiotics) with an "Ongoing Monograph on Blogspot ↗" button that triggers showTheaterToast("Ongoing Monograph on Blogspot — Direct Link Publishing Soon"), and hide broken PDF buttons when a paper has no work.pdf on disk.
5. Merge path-of-life-and-hope-under-magnolias into the-hermit-collection (type: "novel", status: "complete") and update the-ciwidey-journey (type: "novel", status: "complete") with Built-In Serif Reading Room excerpts inside their modals + external links to Hermit (https://app.gethermit.com/books) and Wattpad.
6. Fine Art Option 2A: Keep the 5 photographed 2024 paintings on #works-grid, remove the 5 imageless 2023 cards as separate empty tiles, and embed the 10-Work Atelier Catalog & 2023 Exhibited/Donated Provenance Ledger Table + Button 2 ("External Atelier Portal ↗" standby toast) inside every Fine Art modal.
7. Mark the 4 classical audio entries with "salonOnly": true (hidden from #works-grid via renderWorksGrid, while loaded into #piano via renderPianoGrid), and feature performance-piano-drawing-combined as the flagship multi-disciplinary YouTube showcase card (https://youtu.be/XykyKbHISqs + #piano jump link).

Bump asset query strings in index.html to ?v=3.3.0, verify all phases visually in the browser across 375px / 768px / 1440px with zero console errors, update PORTFOLIO_EXECUTION_PROMPT.md status to COMPLETED & VERIFIED, and commit & push:
git commit -am "feat(remodel): execute Phase A-C master portfolio remodel, pedigree ledger & UI polish (TASK-UX-13 + TASK-RM-01..09)"
git push origin main
```



