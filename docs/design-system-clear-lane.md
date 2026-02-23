# Clear Lane

## Essence

A clean, commerce-first design system that prioritizes clarity and trust. The aesthetic is professional and approachable: ample whitespace, a restrained palette with bold accent use for promotions and actions, and a clear typographic hierarchy. The emotional response is confidence and ease—the interface feels reliable and easy to scan, with promotions and savings surfaced without visual noise.

## Color Palette

### Backgrounds

- Primary: `#ffffff` — page and card surfaces
- Secondary: `#f5f5f5` — interactive option strips (e.g. trade-in, voucher), subtle section backgrounds
- Surface (icon zones): `#eeeeee` — left segment of option cards where icons sit

### Text

- Primary: `#212121` (or `#151518`) — headings, plan names, product names, main prices
- Secondary: `#70707a` — body copy, “Comes with”, promotions list, working days
- Muted: `#a8a8a8` — strikethrough prices, helper text (e.g. “GST-inclusive”), counts

### Accents

- Brand / link: `#0062f5` — active tab underline, “Learn More”, “Find out more”, “Hide filter”, “Clear all”
- Secondary accent: `#5c50bb` — alternate brand/primary (e.g. focus ring, primary actions in some flows)

### Semantic

- Success / selected: vibrant green — selection checkmark button, selected add-on state
- Error / promotion: `#ca112f` (or similar red) — “FREE”, promotional text, badges (“Recommended”, “EXTRA $50 OFF”, “YOU SAVE”), banner backgrounds
- Info: light blue background — informational banners (e.g. “Enjoy up to $713 OFF”), promotions block within plan cards

### Borders / Dividers / Shadows

- Border: `rgba(0, 0, 0, 0.12)` — subtle dividers, input borders
- Cards: light grey border and/or subtle drop shadow for elevation
- Dividers: thin horizontal lines (e.g. below tabs, between pricing and content)

## Typography

### Families

- Headings: Lato (weights 700, 900), Poppins (400, 500, 600, 700); display/titles sometimes Museo
- Body: Lato (400, 600, 700), fallbacks: -apple-system, Segoe UI, Roboto, Helvetica, Arial
- Monospace: not prominent; standard stack (SF Mono, Consolas, etc.) if needed

### Scale

| Level   | Size   | Weight | Line Height | Usage                    |
|--------|--------|--------|-------------|--------------------------|
| H1     | 40px   | 900    | 1.2         | Page titles              |
| H2     | 32px   | 900    | 1.2         | Section titles           |
| H3     | 24px   | 700    | 1.25        | Plan/product card titles |
| H4     | 18px   | 700    | 1.5         | Subsections, card labels |
| Body   | 18px   | 400/700| 1.5         | Body, links              |
| Caption| 14px   | 400/700| 1.5         | Helper text, counts      |

Letter-spacing: tight on headings (e.g. 0.24px–0.36px); captions ~0.28px–0.42px.

### Treatments

- Links: underline, blue color
- Promotions / savings: bold, red
- Strikethrough: original price, grey, smaller
- Uppercase: promotional badges and banners where emphasis is needed

## Spacing

### Base Unit

4px base implied; common multiples (8, 12, 16, 24, 32) for padding and gaps.

### Common Values

- xs: 4px
- sm: 8px
- md: 16px
- lg: 24px
- xl: 32px

Vertical rhythm between sections (delivery → tabs → cards, or filter → grid) is consistent; cards and option strips have generous internal padding.

## Elevation

### Shadows

- Subtle: light grey shadow on cards and option strips
- Medium: slightly stronger on hover/focus (qualitative)
- Heavy: not dominant; reserved for modals if present

### Border Radii

- Small: ~4px — tags, small badges
- Medium: ~8px — buttons, option cards, inputs
- Large: ~12px — main cards, promo blocks

## Interactive States

### Buttons

- Primary (e.g. “Check out”, “Next”): dark grey/black background, white bold text, rounded corners; full-width where appropriate
- Selected / success: green fill, white checkmark
- Secondary (“Add”): outlined, black text, rounded
- Default: clear hierarchy between primary and secondary

Hover/active: slight darkening or opacity change; transitions short (e.g. 150–200ms). Cursor pointer on interactive elements.

### Links

- Default: blue, underlined
- Hover: darker blue or underline emphasis
- Focus: visible focus ring (e.g. primary blue or `#5c50bb`)

### Form Inputs

- Option cards (trade-in, voucher): light grey background, left icon zone slightly darker; rounded
- Color/storage selectors: pill or chip with border; selected state uses blue border
- Checkboxes: standard in filter panels

## Motion

### Principles

Motion is minimal and purposeful: quick state feedback rather than decorative animation. Transitions feel snappy and predictable.

### Patterns

- Tab switch: immediate content swap; active tab indicated by underline
- Buttons: fast opacity/background change on hover/active
- Modals/dropdowns: brief fade or slide if present
- Loading: standard spinners or skeleton placeholders; no exact timing specified

## Design Principles

- **Clarity over decoration.** Layout and typography do the work; color and weight highlight key actions and savings.
- **Promotions are first-class.** Red and bold are used consistently for discounts, badges, and “YOU SAVE” so value is scannable.
- **Consistent card language.** Plan cards, add-on cards, and product cards share structure: title, features, pricing, single primary action (Select / Add / checkmark).
- **Trust through restraint.** Whitespace and clear hierarchy make the experience feel professional and low-pressure.
- **One primary action per block.** Each card or strip has one clear CTA (Select, Add, Check out, Next).

## Implementation Notes

- **CSS custom properties:** Existing theming uses `--background`, `--foreground`, `--primary` (`#5c50bb`), `--destructive`, `--border`, `--ring`; add `--accent-link` (`#0062f5`) and semantic success green if not present.
- **Font loading:** Museo, Poppins, Lato (and optionally Roboto) via `@font-face` with `font-display: swap`.
- **Naming:** Prefer semantic names (e.g. `--color-promotion`, `--color-success`) for red and green rather than brand-only names.
- **Components:** Tabs (underline active), horizontal plan/product cards (scroll or grid), option strips (icon + text), discount summary (label left, amount right), primary CTA button (dark, full-width when sticky).
