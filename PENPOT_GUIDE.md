# Penpot Design Reference & Workflow Guide
## Witty Networks · The Witty Group

> **Penpot is the design authority.** All brand decisions — colors, typography, spacing, components
> — originate in Penpot and flow downstream into code. Never edit `globals.css` brand tokens
> without updating Penpot first.
>
> **URL:** https://design.wittycomp.com  
> **Login:** Authelia (your wittycomp.com credentials)

---

## Part 1 — Reference Manual

### 1.1 The Design System Structure

```
The Witty Group (team)
├── Witty Identity System          ← SHARED LIBRARY (global brand tokens)
│   ├── Colors    — 11 brand colors across TWG + 3 subsidiaries
│   ├── Typographies — 5 styles (H1/H2 Montserrat, Body/Label Inter, Code JetBrains)
│   └── Assets    — WN_LogoFullBear.png + mascot variations
│
└── Witty Networks (project)
    ├── WN Brand Tokens Reference  ← spacing scale, border radius, shadows
    ├── WN Business Cards          ← Moo Standard + Universal Print (with bleed)
    └── WN Social Media Kit        ← LinkedIn Banner, Post Square, Post Portrait
```

The **Witty Identity System** is a **shared library** — it is linked into all projects. Any
changes to it propagate everywhere. Treat it like a database migration: careful, deliberate,
and always backward-compatible unless you intend a breaking change.

---

### 1.2 Brand Color Tokens

All colors are defined in **Penpot → Witty Identity System → Colors**.

#### Witty Networks (wittynetworks.com)

| Token Name          | Hex       | Tailwind Class      | Usage                            |
|---------------------|-----------|---------------------|----------------------------------|
| WN / Background     | `#0F172A` | `bg-wn-midnight`    | Page backgrounds, deep sections  |
| WN / Surface        | `#1E293B` | `bg-wn-surface`     | Cards, panels, input backgrounds |
| WN / Border         | `#334155` | `border-wn-border`  | Dividers, input borders          |
| WN / Vest Slate     | `#475569` | `text-wn-slate`     | Placeholder text, secondary UI   |
| WN / Text Primary   | `#F1F5F9` | `text-wn-text`      | Body copy, headings              |
| WN / Text Secondary | `#94A3B8` | `text-wn-muted`     | Captions, labels, help text      |
| WN / Accent (Teal)  | `#14B8A6` | `text-wn-teal`      | CTAs, highlights, icons, links   |
| WN / Accent Muted   | `#0D9488` | `bg-wn-teal-muted`  | Hover state for teal elements    |

#### The Witty Group (parent brand)

| Token Name          | Hex       | Tailwind Class      | Usage                            |
|---------------------|-----------|---------------------|----------------------------------|
| TWG / Charcoal Gray | `#1E1E24` | `bg-wg-charcoal`    | Group-level brand elements       |
| TWG / Classic Silver| `#E0E0E2` | `text-wg-silver`    | Group-level accent               |

---

### 1.3 Typography

All type styles are in **Penpot → Witty Identity System → Typographies**.

| Style Name      | Font            | Weight | Usage in code              |
|-----------------|-----------------|--------|----------------------------|
| H1 Display      | Montserrat      | 800    | `font-display font-extrabold` |
| H2 Section      | Montserrat      | 700    | `font-display font-bold`   |
| Body            | Inter           | 400    | `font-sans` (default)      |
| Label / UI      | Inter           | 500    | `font-sans font-medium`    |
| Code / Mono     | JetBrains Mono  | 400    | `font-mono`                |

**Rule:** All headings use `font-display`. All UI copy uses `font-sans`. All paths, IDs,
code snippets, and technical strings use `font-mono`.

---

### 1.4 Spacing & Layout

Defined in **WN Brand Tokens Reference** file.

- Base unit: **4px** (Tailwind's default — 1 unit = `p-1`)
- Standard content max-width: `max-w-5xl` (1024px)
- Section vertical padding: `py-24` (96px)
- Card padding: `p-6` (24px)
- Border radius: `rounded-lg` (8px) for cards/inputs, `rounded-xl` (12px) for panels

---

### 1.5 Design File Map

#### WN Business Cards (`WN Business Cards`)
- **Page 1:** Moo Standard Front (85×55mm, 3.35×2.17in) — includes 3mm bleed
- **Page 2:** Moo Standard Back — diagonal services watermark in WN teal
- **Page 3:** Universal Print Front (3.5×2in standard US) — includes 0.125in bleed
- **Page 4:** Universal Print Back
- Export at 300 DPI for print. Crop marks on all pages.

#### WN Social Media Kit (`WN Social Media Kit`)
- **Page 1:** LinkedIn Banner (1584×396px)
- **Page 2:** LinkedIn Post Square (1200×1200px)
- **Page 3:** LinkedIn Post Portrait (1080×1350px)
- **Page 4:** Company Logo sheet

---

## Part 2 — Quick Design Workflow

### 2.1 The Golden Rule

```
Penpot  →  globals.css tokens  →  Tailwind classes  →  React components
```

Design happens in Penpot. Code reflects Penpot. If something doesn't match, Penpot wins.

---

### 2.2 Starting a New Design Task

1. **Open Penpot** at `design.wittycomp.com`
2. Navigate to **The Witty Group → Witty Networks** project
3. Open the relevant file, or **create a new file** in the Witty Networks project
4. **Enable the shared library**: Main menu (☰) → Assets panel (Ctrl+I) → Shared Libraries → enable **Witty Identity System**
5. Now you can drag brand colors and text styles directly from the Assets panel

---

### 2.3 Using Brand Colors in Penpot

1. Select any element → **Fill** section in right panel → click the color swatch
2. In the color picker, switch to **Library** tab
3. You'll see **Witty Identity System** — expand it to find WN / * tokens
4. Click the token to apply. The hex value populates automatically.

> **Never** use free-form hex values for brand colors. Always pick from the library tokens.
> This ensures changes to the token propagate everywhere.

---

### 2.4 Using Typography Styles

1. Select a text element → **Inspect** panel or right-click → **Apply typography**
2. In the Assets panel (Ctrl+I) → **Typographies** section → **Witty Identity System**
3. Click the style to apply: H1 Display, H2 Section, Body, Label, or Code

---

### 2.5 Design → Code Handoff

When a design is ready to implement:

1. **In Penpot:** Select any element → switch to **Inspect** tab (top right)
2. Inspect shows exact hex values, font sizes, weights, padding, and border radius
3. Map those values to the token table in §1.2 and §1.3 above
4. In the Next.js project, always use **Tailwind token classes** (e.g., `text-wn-teal`) rather
   than inline hex values — this keeps code and Penpot in sync at the token level

**Example:**
- Penpot shows: fill `#14B8A6`, font "Montserrat Bold 16px"
- Code becomes: `className="text-wn-teal font-display font-bold text-base"`

---

### 2.6 Adding a New Color or Typography Style

If a design requires a new token that doesn't exist:

1. **In Penpot:** Open **Witty Identity System** → Colors or Typographies panel
2. Click **+** to add a new entry — name it following the convention: `WN / Token Name`
3. Export the updated token by running the provision script:
   ```bash
   python3 /data/witty-lab-data/apps/wn-penpot-01/config/provision_witty_identity.py
   ```
4. Update `globals.css` `@theme` block to add the new CSS variable
5. Commit both changes in the same PR with the description referencing the Penpot file

---

### 2.7 Exporting Assets from Penpot

**For web (SVG/PNG):**
1. Select the frame or element → **Design** panel → **Export** section (bottom right)
2. Set format (SVG for icons/logos, PNG for photos/complex illustrations)
3. For logos: export at 1x SVG and 2x PNG
4. Drop exported files into `public/` in the Next.js project

**For print (PDF/PNG at 300 DPI):**
1. Select the artboard → Export → PNG → set scale to match 300 DPI
   - Moo Standard (85mm wide) → scale to ~1004px wide
   - US Business Card (3.5in wide) → 1050px wide at 300 DPI
2. Include bleed area in export (do not crop)

---

### 2.8 Witty Networks Visual Language Summary

| Element         | Approach                                                   |
|-----------------|------------------------------------------------------------|
| Background      | Dark — always `#0F172A` (wn-midnight) as the base         |
| Hierarchy       | Surface (`#1E293B`) for panels, border (`#334155`) for edges |
| Accent          | Cyber Teal (`#14B8A6`) — used sparingly for CTAs and highlights |
| Headings        | Montserrat 700/800, white (`#F1F5F9`)                      |
| Body copy       | Inter 400, muted (`#94A3B8`)                               |
| Technical text  | JetBrains Mono, teal or muted                              |
| Tone            | Confident, precise, minimal. No gradients. No drop shadows.|
| Iconography     | Line icons only. Stroke color: teal or slate.              |
| Photography     | Dark, technical, or field environments. No stock smiles.   |

---

## Part 3 — File Naming & Version Control

### 3.1 Penpot File Naming

```
[Subsidiary Initials] [Category] [Variant]
Examples:
  WN Business Cards
  WN Social Media Kit
  WN Landing Page — v2
  TWG Brand Tokens Reference
```

### 3.2 When to Archive vs Update

- **Minor copy/color tweak:** Update in place. Add a comment in the Penpot history.
- **Layout change:** Duplicate the page within the file, suffix old page with `[archived YYYY-MM-DD]`
- **Major redesign:** Create a new file with version suffix. Keep old file intact.

### 3.3 Connecting Design to Dev

Every significant design decision should have a corresponding entry in:
- **Penpot:** The visual source (colors, layout, components)
- **`globals.css`:** The CSS token (`--color-wn-teal: #14B8A6`)
- **`WITTY.md`:** If it affects Witty's interface or identity
- **Git commit:** Reference Penpot file + page name in the commit message

---

*Last updated: 2026-06-21 · Reference file: Witty Identity System (ID: 23ee53cd) · design.wittycomp.com*
