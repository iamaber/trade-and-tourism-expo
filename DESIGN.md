# Design System

## Theme

Dark-dominant with selective warm and cool accents. A prospective exhibitor from Kuala Lumpur browses the sponsor page at 11pm on a laptop in a dim hotel room, deciding whether to commit budget. The interface should feel premium, credible, and immersive under low ambient light, with warm gold highlights guiding attention to calls-to-action and cool teal signaling interactive, data-driven moments.

## Color Strategy

**Full palette** — three named roles, each used deliberately across the site. The surface is predominantly dark (navy), with gold and teal as functional accents that shift dominance per page.

### Primary: Navy
The structural foundation. Used for backgrounds, text, nav, footer, and dominant surfaces.

| Token | Hex | OKLCH | Usage |
|-------|-----|-------|-------|
| `--navy` | `#0B1D3A` | `oklch(22% 0.06 255)` | Primary dark background |
| `--navy-light` | `#122B52` | `oklch(28% 0.07 255)` | Elevated surfaces, hover states |
| `--navy-dark` | `#061225` | `oklch(16% 0.05 255)` | Deepest backgrounds, footer |
| `--navy-mid` | `#153260` | `oklch(32% 0.08 255)` | Subtle variation, borders |

### Warm Accent: Gold
Premium moments, sponsorship, CTAs, highlights. Evokes value, exclusivity, and warmth.

| Token | Hex | OKLCH | Usage |
|-------|-----|-------|-------|
| `--gold` | `#C8973E` | `oklch(68% 0.12 85)` | Primary accent, CTAs, labels |
| `--gold-light` | `#DEB368` | `oklch(76% 0.11 85)` | Hover states, highlights |
| `--gold-dark` | `#A67A2E` | `oklch(58% 0.12 85)` | Active states, emphasis |

### Cool Accent: Teal
Tech-driven moments, exhibitor data, interactive elements. Evokes modernity, trust, and precision.

| Token | Hex | OKLCH | Usage |
|-------|-----|-------|-------|
| `--teal` | `#1A9BAA` | `oklch(62% 0.11 195)` | Secondary accent, data, tech |
| `--teal-light` | `#23C4D6` | `oklch(72% 0.12 195)` | Hover, glow effects |
| `--teal-dark` | `#137888` | `oklch(52% 0.10 195)` | Active, pressed states |

### Neutrals
Tinted toward the navy hue (chroma 0.005-0.01). Never pure black or white.

| Token | Hex | OKLCH | Usage |
|-------|-----|-------|-------|
| `--cream` | `#F8F6F1` | `oklch(97% 0.005 85)` | Light section backgrounds |
| `--cream-dark` | `#EDE9E0` | `oklch(93% 0.008 85)` | Borders, subtle divisions |
| `--white` | `#FFFFFF` | `oklch(100% 0 0)` | Text on dark (with tint consideration) |
| `--text-dark` | `#1A1A2E` | `oklch(18% 0.02 270)` | Body text on light |
| `--text-muted` | `#6B7280` | `oklch(55% 0.03 270)` | Secondary text, captions |
| `--text-light` | `#94A3B8` | `oklch(70% 0.04 270)` | Tertiary text, placeholders |

### Page-Specific Palette Shifts
- **Homepage:** Balanced navy + gold. Teal appears sparingly for interactive hints.
- **Exhibitor page:** Navy + teal dominant. Gold appears for premium booth tiers only.
- **Sponsor page:** Navy + gold dominant. Teal appears in stat bars and progress indicators.

## Typography

### Font Families
- **Display:** `Cormorant Garamond`, Georgia, serif — editorial, elegant, worldly
- **Body:** `Outfit`, system-ui, sans-serif — geometric, modern, highly legible

### Type Scale
Hierarchy through scale + weight contrast. Minimum 1.25 ratio between steps.

| Token | Size | Weight | Line-Height | Usage |
|-------|------|--------|-------------|-------|
| `text-hero` | `clamp(3rem, 8vw, 6rem)` | 600 | 1.05 | Page heroes |
| `text-h1` | `clamp(2.5rem, 6.5vw, 5rem)` | 600 | 1.1 | Section titles |
| `text-h2` | `clamp(2rem, 5vw, 3.8rem)` | 600 | 1.15 | Major headings |
| `text-h3` | `clamp(1.5rem, 3vw, 2.5rem)` | 600 | 1.2 | Sub-headings |
| `text-h4` | `1.35rem` | 700 | 1.3 | Card titles |
| `text-body` | `1rem` | 400 | 1.6 | Body copy |
| `text-body-lg` | `1.1rem` | 300 | 1.8 | Lead paragraphs |
| `text-caption` | `0.75rem` | 500 | 1.5 | Labels, captions |
| `text-micro` | `0.65rem` | 600 | 1.4 | Overlines, badges |

### Special Treatments
- **Italic emphasis:** Used in display headings for warmth and rhythm. Gold color for italic words in dark sections.
- **Letter-spacing:** Tight (`-0.02em` to `-0.03em`) for display type. Wide (`0.05em` to `0.3em`) for uppercase labels.
- **Body measure:** Max 65ch for optimal readability.

## Spacing

### Space Scale
| Token | Value | Usage |
|-------|-------|-------|
| `--space-xs` | `0.5rem` | Tight gaps, icon padding |
| `--space-sm` | `1rem` | Component internal padding |
| `--space-md` | `2rem` | Section internal padding |
| `--space-lg` | `4rem` | Between major elements |
| `--space-xl` | `6rem` | Between sections |
| `--space-2xl` | `10rem` | Major section breaks, hero breathing room |

### Layout
- **Max-width:** `1400px`
- **Nav height:** `80px` (desktop), `70px` (mobile)
- **Grid:** 12-column with `2rem` gap default
- **Section padding:** `var(--space-xl)` vertical, `var(--space-md)` horizontal

## Elevation

No heavy shadows. Subtle depth through:
- `0 1px 0 rgba(200, 151, 62, 0.15)` — gold hairline for nav scrolled state
- `0 18px 40px rgba(11, 29, 58, 0.08)` — soft lift for floating elements (page jump)
- `0 12px 40px rgba(0, 0, 0, 0.08)` — card hover lift

## Components

### Buttons

**Primary (Solid Navy/Gold):**
- Background: `--gold`, Text: `--navy`
- Padding: `1rem 2rem`
- Font: `0.85rem`, weight 600, uppercase, `0.08em` letter-spacing
- Hover: background `--gold-light`, `translateY(-2px)`, soft shadow
- Active: `translateY(0)`, shadow removed

**Secondary (Outline):**
- Background: transparent, Border: `1px solid` currentColor
- Hover: background fills, text inverts

**Ghost:**
- No background, underline on hover
- Used for tertiary actions

### Cards
Used sparingly. When necessary:
- No nested cards
- Border: `1px solid var(--cream-dark)`
- Hover: `translateY(-4px to -6px)`, soft shadow
- No border-radius (sharp, editorial feel)

### Navigation
- Fixed top, transparent initially
- Scrolled: `rgba(11, 29, 58, 0.95)` with `backdrop-filter: blur(20px)`
- Links: uppercase, `0.05em` letter-spacing, gold underline on hover
- CTA: gold solid button
- Mobile: slide-in drawer from right, scrim overlay

### Footer
- Background: `--navy-dark`
- Top border: gradient gold line
- 4-column grid (brand + 3 link columns)
- Organizer logos with hover lift

### Section Label
- Uppercase, `0.2em` letter-spacing, gold color
- 30px horizontal rule prefix
- Used as eyebrow text above major headings

### Reveal Animation Base
- Initial: `opacity: 0`, `translateY(40px)`
- Revealed: `opacity: 1`, `translateY(0)`
- Duration: `0.9s`, easing: `cubic-bezier(0.16, 1, 0.3, 1)`
- Stagger delays: `0.1s` increments
- Respect `prefers-reduced-motion`

## Motion

### Easing Tokens
| Token | Value | Usage |
|-------|-------|-------|
| `--ease-out-expo` | `cubic-bezier(0.16, 1, 0.3, 1)` | Primary entrance, reveals |
| `--ease-out-quart` | `cubic-bezier(0.25, 1, 0.5, 1)` | Subtle transitions |
| `--ease-in-out` | `cubic-bezier(0.65, 0, 0.35, 1)` | Symmetric animations |

### Animation Principles
- **Don't animate layout properties** (width, height, top, left)
- **Use transform and opacity** for all motion
- **Spring physics** for interactive elements (buttons, menus, cards)
- **CSS scroll-driven animations** for parallax and pin effects
- **Respect `prefers-reduced-motion`** — static fallbacks must still look beautiful

## Responsive

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | `< 480px` | Single column, reduced type scale, hamburger nav |
| Tablet | `< 768px` | 2-column grids, mobile nav, adjusted spacing |
| Desktop | `< 1024px` | 2-column footer, reduced grids |
| Wide | `>= 1024px` | Full layout, all features active |

### Mobile-First Approach
- Touch targets minimum 44px
- Readable type without zooming
- Stacked layouts, no horizontal scroll
- Reduced motion defaults on low-power devices

## Assets

### Image Handling
- WebP with JPEG/PNG fallback via `<picture>`
- Lazy loading for below-fold images
- `aspect-ratio` for stable layout
- Alt text required for all images

### Icons
- Lucide React icon library
- Consistent stroke width (1.5px)
- No mixing icon styles

## Special Effects

### WebGL (Lazy-Initialized)
- **Globe:** Exhibitor page only. Interactive globe with Dhaka pulse.
- **Hero Atmosphere:** Subtle shader noise on homepage hero.
- All WebGL contexts paused when off-screen.

### Canvas 2D
- **Sponsor Shimmer:** Generative line pattern on sponsor hero.
- **Grid Pattern:** Animated grid on exhibitor CTA section.

### View Transitions
- Cross-page shared element morphing (nav logo, CTAs, section labels)
- Fallback to `motion` AnimatePresence for unsupported browsers
