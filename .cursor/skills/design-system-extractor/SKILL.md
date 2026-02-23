---
name: design-system-extractor
description:
  Extracts design systems from websites and product screenshots, producing markdown documentation for design engineers
  and coding agents. Use when the user provides a URL or screenshots and wants to extract colors, typography, spacing,
  elevation, interactive states, and motion into a reusable design system document.
---

# Design System Extractor

Extract design systems from websites and screenshots. Output is markdown documentation (max 3000 words) that enables
design engineers and coding agents to recreate the aesthetic.

## When to Use

- User provides a **URL**: Navigate the site, traverse primary flows, use DevTools to extract computed styles. Use
  browser automation extensively.
- User provides **screenshots only**: Analyze images qualitatively; do not infer precise values.

## Input Handling

| Input           | Approach                                                                                                                                                                                                                    |
| --------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **URL**         | Navigate full primary journey (landing, key feature pages, authenticated views if accessible, settings/modals/forms). Click buttons, hover elements, trigger animations. Use DevTools for computed styles where accessible. |
| **Screenshots** | Describe what’s visible qualitatively. No precise values unless clearly readable.                                                                                                                                           |

## Workflow

### 1. Explore (URLs only)

- Landing/home → key feature pages → authenticated views (if accessible) → settings, modals, forms.
- Click, hover, trigger animations. Observe state changes.
- Extract computed styles via DevTools where possible.

### 2. Extract Primitives

Document only primitives—not full component specs.

| Category               | Extract                                                                                                                                                         |
| ---------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Colors**             | Backgrounds (primary, secondary, surface), text (primary, secondary, muted), accent/brand, semantic (success, warning, error, info), borders, dividers, shadows |
| **Typography**         | Font families (headings, body, mono), weight scale, size scale (h1→body/caption), line heights, letter spacing, treatments (uppercase, tracking)                |
| **Spacing**            | Base unit if systematic, common values, container widths, margins, grid if apparent                                                                             |
| **Elevation**          | Shadow styles (subtle, medium, heavy), border radii, layering/z-index conventions                                                                               |
| **Interactive states** | Hover, focus, active, disabled; transition timing/easing if extractable; cursor behaviors                                                                       |
| **Motion**             | Entrance/exit, micro-interactions, loading states; timing/easing (exact if from DevTools, qualitative otherwise)                                                |

### 3. Name the System

Create a unique name that evokes the aesthetic without referencing the original product. Examples: “Arctic Dawn” (clean,
light), “Obsidian” (dark, sharp), “Playground” (playful, rounded), “Bauhaus Mono” (geometric, minimal).

### 4. Generate Report

Output a single markdown file. Use the structure in [reference.md](reference.md). Max 3000 words.

**Report structure (summary):**

- **Essence** — 2–3 sentences: feel, personality, design philosophy, emotional response.
- **Color Palette** — Backgrounds, Text, Accents, Semantic (with `#hex` and usage context when verifiable).
- **Typography** — Families, scale table (level, size, weight, line height, usage), treatments.
- **Spacing** — Base unit or rhythm; common values (xs, sm, …).
- **Elevation** — Shadows (subtle/medium/heavy), border radii.
- **Interactive States** — Buttons, links, form inputs (default/hover/active/disabled, transition if known).
- **Motion** — Principles (qualitative); patterns with timing if known.
- **Design Principles** — 3–5 inferred principles.
- **Implementation Notes** — CSS custom properties, naming conventions, technical observations.

## Rules

- **No product/company names or copy.** Use “the application”, “the site”, generic descriptors.
- **Precise when verifiable.** DevTools → exact hex, px, timing. Screenshots/uncertain → qualitative only.
- **Primitives only.** Colors, type, spacing, elevation, states, motion. No full component specs.
- **Descriptive → prescriptive.** Lead with feel/essence, then specific values.
- **Single viewport.** Desktop snapshot; no responsive breakpoints.
- **Traverse primary flows.** For URLs, explore main pages before synthesizing; don’t document one page only.
- **Interactive states matter.** Click and hover; states define much of the system.
- **Concise.** Match detail to complexity; don’t pad.

## Output

- Save the markdown to an appropriate location (e.g. project root or `docs/`, or user-specified path).
- Present the file path and a short summary to the user.

For the full report template and section details, see [reference.md](reference.md).
