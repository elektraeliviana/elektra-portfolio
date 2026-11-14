# 🏛️ Master Execution Directive: Elektra Eliviana Portfolio Remodel & Polish

> **Target Workspace**: `c:\Users\ASUS PC\.gemini\antigravity\scratch\elektra-portfolio`  
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
