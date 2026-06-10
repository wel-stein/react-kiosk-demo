---
name: Transit Terminal Interface
colors:
  surface: '#f8f9fa'
  surface-dim: '#d9dadb'
  surface-bright: '#f8f9fa'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f4f5'
  surface-container: '#edeeef'
  surface-container-high: '#e7e8e9'
  surface-container-highest: '#e1e3e4'
  on-surface: '#191c1d'
  on-surface-variant: '#3d4949'
  inverse-surface: '#2e3132'
  inverse-on-surface: '#f0f1f2'
  outline: '#6d7979'
  outline-variant: '#bcc9c8'
  surface-tint: '#006a6a'
  primary: '#006767'
  on-primary: '#ffffff'
  primary-container: '#008282'
  on-primary-container: '#f3fffe'
  inverse-primary: '#6fd7d6'
  secondary: '#166969'
  on-secondary: '#ffffff'
  secondary-container: '#a3edec'
  on-secondary-container: '#1d6d6d'
  tertiary: '#4f5f5f'
  on-tertiary: '#ffffff'
  tertiary-container: '#677878'
  on-tertiary-container: '#f2ffff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#8cf3f3'
  primary-fixed-dim: '#6fd7d6'
  on-primary-fixed: '#002020'
  on-primary-fixed-variant: '#004f4f'
  secondary-fixed: '#a6efef'
  secondary-fixed-dim: '#8ad3d2'
  on-secondary-fixed: '#002020'
  on-secondary-fixed-variant: '#004f4f'
  tertiary-fixed: '#d4e6e6'
  tertiary-fixed-dim: '#b8caca'
  on-tertiary-fixed: '#0e1e1f'
  on-tertiary-fixed-variant: '#3a4a4a'
  background: '#f8f9fa'
  on-background: '#191c1d'
  surface-variant: '#e1e3e4'
typography:
  headline-display:
    fontFamily: Plus Jakarta Sans
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.3'
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 20px
    fontWeight: '500'
    lineHeight: '1.5'
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.5'
  label-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: 0.05em
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 28px
    fontWeight: '700'
    lineHeight: '1.3'
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  touch-target-min: 3rem
  gutter: 1.5rem
  margin-page: 2rem
  card-padding: 2rem
  stack-gap: 1rem
---

## Brand & Style
This design system focuses on high-utility public service interaction. The brand personality is efficient, reliable, and accessible, catering to a diverse user base in high-traffic transportation hubs. 

The visual style is **Corporate / Modern** with a focus on **High-Contrast** elements. It prioritizes legibility and touch-targets over decorative flourish. The interface utilizes a depth-first approach where actionable surfaces are clearly distinguished from the structural background through clean elevations and a consistent teal-and-white color story.

## Colors
The palette is derived from the core transportation brand identity, utilizing a signature Teal as the primary driver for brand recognition and action state.

- **Primary (Teal):** Used for background hero areas, headers, and primary action buttons.
- **Secondary (Deep Teal):** Used for pressed states and high-emphasis typography on light backgrounds.
- **Tertiary (Mint White):** A subtle tint used for secondary card backgrounds and hover states.
- **Neutral:** A range of greys from white (#FFFFFF) to deep slate (#1A1C1E) to ensure WCAG AAA compliance for all text elements.

## Typography
The design system employs **Plus Jakarta Sans** for its exceptional legibility and friendly, modern curves. In a kiosk environment, typography must be oversized to accommodate varying distances and eye levels. 

- **Headlines:** Bold and clear, used for screen titles and major card headings.
- **Body:** Sized significantly larger than standard web text (minimum 18px) to ensure accessibility.
- **Labels:** Uppercase or high-weight variants used for button text and instructional cues.

## Layout & Spacing
The layout follows a **Fixed Grid** model optimized for landscape kiosk displays (typically 16:9 or 4:3). A 12-column system is used with generous gutters to prevent accidental touches on adjacent elements.

- **Kiosk Mode:** Content is centered in a high-visibility "action zone."
- **Touch Targets:** No interactive element is smaller than 48x48px (3rem), ensuring ease of use for all finger sizes.
- **Margins:** Large 32px (2rem) outer margins keep critical information away from the physical bezel of the kiosk hardware.

## Elevation & Depth
Depth is used to signify "Press-ability." 

- **Surface Layer:** The background is often a brand-colored teal or a very light neutral.
- **Raised Layer (Cards):** Use soft, ambient shadows (0px 4px 20px rgba(0,0,0,0.08)) on white containers to make them appear physically distinct from the background.
- **Active State:** When a button or card is touched, it should visually "recede" or change color significantly (shifting to the Secondary Teal) to provide immediate haptic-like visual feedback.

## Shapes
A **Rounded** (Level 2) approach is applied to soften the industrial feel of public terminals. 

- **Primary Cards:** 1rem (16px) corner radius.
- **Buttons:** 0.5rem (8px) corner radius for standard actions, or full pills for specific "Go Back" or "Cancel" functions.
- **Input Fields:** 0.5rem (8px) to maintain consistency with buttons.

## Components

### Cards
Cards are the primary navigational vehicle. They feature a vertical stack: a large, simplified icon (24pt weight) followed by a `headline-md` title and `body-md` description. Cards should have a minimum height to ensure a large touch area.

### Buttons
- **Primary:** Solid Teal background with White text. Bold weight.
- **Secondary:** White background with Teal border (2px) and Teal text.
- **Ghost:** Transparent background with Slate text, used for "Back" or "Language" selection.

### Headers
The header remains persistent, containing the brand logo and a clear, high-contrast language toggle. The background uses the Primary Teal to anchor the screen.

### Input Fields
Inputs are oversized with a 2px border. On focus, the border thickens and changes to the Primary Teal. For kiosks, these must trigger a large, custom on-screen numeric or QWERTY keyboard.

### Feedback Toasts
Large, screen-centered overlays with semi-transparent backdrops used for "Processing" or "Success" states to ensure the user's attention is captured.