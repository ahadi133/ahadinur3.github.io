---
name: "Ahadi Nur Portfolio"
description: "A creative marketing portfolio with ink-navy fields, electric blue and violet, and sharp editorial type."
colors:
  ink: "#090d19"
  ink-raised: "#101629"
  paper: "#f0f1f7"
  muted: "#a4acc3"
  blue: "#7395ff"
  blue-strong: "#527dff"
  contact-blue: "#3d58c2"
  violet: "#a789ff"
  yellow: "#e7f07b"
  line: "rgba(232, 236, 255, 0.15)"
typography:
  display:
    fontFamily: "Avenir Next, Avenir, Segoe UI, sans-serif"
    fontSize: "clamp(3.9rem, 8.5vw, 8rem)"
    fontWeight: 760
    lineHeight: 0.91
    letterSpacing: "-0.09em"
  headline:
    fontFamily: "Avenir Next, Avenir, Segoe UI, sans-serif"
    fontSize: "clamp(2.7rem, 5.2vw, 5rem)"
    fontWeight: 740
    lineHeight: 0.99
    letterSpacing: "-0.075em"
  body:
    fontFamily: "Avenir Next, Avenir, Segoe UI, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: "Avenir Next, Avenir, Segoe UI, sans-serif"
    fontSize: "0.68rem"
    fontWeight: 800
    lineHeight: 1.5
    letterSpacing: "0.18em"
rounded:
  circle: "50%"
spacing:
  gutter: "clamp(1.25rem, 6vw, 6.5rem)"
  section: "clamp(5.5rem, 10vw, 10rem)"
  nav-height: "76px"
  content-width: "1440px"
components:
  button-primary:
    backgroundColor: "{colors.blue-strong}"
    textColor: "{colors.ink}"
    padding: "0.7rem 1.25rem"
    height: "3.35rem"
  button-primary-hover:
    backgroundColor: "#89a4ff"
    textColor: "{colors.ink}"
  button-light:
    backgroundColor: "#ffffff"
    textColor: "{colors.ink}"
    padding: "0.7rem 1.25rem"
    height: "3.35rem"
  button-outline:
    backgroundColor: "transparent"
    textColor: "#ffffff"
    padding: "0.7rem 1.25rem"
    height: "3.35rem"
---

# Design System: Ahadi Nur Portfolio

## Overview

**Creative North Star: "The Campaign Board"**

A compact editorial portfolio built like a campaign board: ink-navy surfaces, dense typographic hierarchy, and vivid blue, violet, and yellow forms. The system presents work as evidence rather than as a conventional resume, while preserving a polished, recruiter-ready information hierarchy.

The visual character is sharp and directional. Large tightly tracked display type creates authority; thin translucent rules organize sections; and saturated accents mark actions, labels, and selected states. The result stays bold but controlled, with most of the canvas held in dark neutral fields.

**Key Characteristics:**
- Dark ink-navy foundation with cool paper text
- Tight, oversized editorial display typography
- Electric blue and violet accents with sparse yellow emphasis
- Flat sections, translucent rules, and geometric campaign-board artwork

## Colors

The palette uses an ink-navy foundation, cool near-white text, and three vivid accents. At the time of this documentation, the contact region uses the darker accessible blue while the primary button uses ink text on blue.

### Primary
- **Electric Blue** (#527dff): The principal action and interactive accent. It is used for the primary button and strong blue visual elements.
- **Campaign Blue** (#7395ff): Secondary bright accent for the headline, wordmark, navigation, and supporting labels.
- **Accessible Contact Blue** (#3d58c2): The full contact-region surface, where white and yellow text remain legible.

### Secondary
- **Creative Violet** (#a789ff): Creative expression and selective emphasis, including the outlined headline and campaign artwork.
- **Signal Yellow** (#e7f07b): Short high-contrast highlights, focus outlines, selected project labels, and the contact headline accent.

### Neutral
- **Ink** (#090d19): Page background, text, and dominant dark surfaces.
- **Raised Ink** (#101629): Raised section and container background.
- **Cool Paper** (#f0f1f7): Primary text and light foreground.
- **Quiet Muted** (#a4acc3): Supporting copy and secondary text.
- **Hairline** (rgba(232, 236, 255, 0.15)): Translucent section dividers and borders.

Supporting text tints, artwork treatments, and translucent overlays remain local when they serve one specific context; the token palette captures repeated or structurally meaningful roles rather than every one-off shade.

**The Contrast Pairing Rule.** Use ink text on bright blue primary actions and reserve the dark contact blue for white and yellow text; do not substitute white text on the bright blue action surface.

## Typography

**Display Font:** Avenir Next (with Avenir and Segoe UI fallbacks)
**Body Font:** Avenir Next (with Avenir and Segoe UI fallbacks)
**Label Font:** The same Avenir Next-led stack, in small all-caps or tracked roles

**Character:** The type system is direct and editorial, pairing oversized tightly packed display lines with compact neutral labels and comfortable supporting copy. Numerals and initialisms stay bold, spaced, and visually subordinate to names and headlines.

### Hierarchy
- **Display** (760 weight, `clamp(3.9rem, 8.5vw, 8rem)`, 0.91 line-height): Hero headline, with a tightly negative letter spacing of -0.09em.
- **Headline** (740 weight, `clamp(2.7rem, 5.2vw, 5rem)`, 0.99 line-height): Major section headings, with -0.075em letter spacing.
- **Contact Display** (780 weight, `clamp(4rem, 10vw, 9.5rem)`, 0.89 line-height): Oversized contact statement.
- **Body** (400 weight, 16px base, 1.65 line-height): Global body text and paragraph rhythm.
- **Lead Copy** (600 weight, responsive 1.25–1.65rem, 1.5 line-height): Expanded introductory and about copy.
- **Label** (800 weight, 0.68rem, 1.5 line-height, 0.18em letter spacing): Uppercase roles and compact section markers.

Responsive exceptions and content-specific labels use local sizes; the hierarchy above is the durable type contract, not a token for every component measurement.

**The Tight Headline Rule.** Keep display and headline letter spacing tightly negative; do not restore conventional tracking or introduce a second display face.

## Layout

Use a centered page container governed by the viewport gutter and an effective maximum width of 1440px. The gutter expands from 1.25rem to 6.5rem through `clamp(1.25rem, 6vw, 6.5rem)`; section padding similarly expands from 5.5rem to 10rem. The header is 76px tall at desktop and 68px tall at the 680px breakpoint.

Desktop layouts use asymmetric grids and large column gaps. The hero uses two columns, the work masonry uses a 12-column grid, and about and experience sections pair their headings with wider text or list columns. At 900px, the two-column hero remains but narrows; at 680px, the page collapses to one-column flows, the navigation wraps to a full-width second row, and project cards and detail grids lose their desktop offsets.

## Elevation & Depth

The system is predominantly flat: depth comes from alternating ink tones, translucent rules, and geometric overlap rather than broad shadows. Raised elements use only sparse, local depth cues.

### Shadow Vocabulary
- **Inset Contact Ring** (`box-shadow: 0 0 0 28px rgba(9, 13, 25, 0.04), 0 0 0 58px rgba(9, 13, 25, 0.04)`): Concentric rings behind the contact composition.
- **Artwork Offset Ring** (`box-shadow: 0 0 0 8px rgba(9, 13, 25, 0.3)`): A narrow dark separation around the yellow illustration ring.

**The Flat Surface Rule.** Use tonal section changes and hairline borders before shadows. Reserve shadow only for a specific optical effect in the campaign artwork or contact field.

## Shapes

The implementation is mostly square-edged. Buttons, tags, filters, cards, project media, and information panels use no global corner radius. Circular geometry appears in rings and marks; thin outlines, clip-path polygons, rotated blocks, and the split campaign-board composition provide the signature form language.

**The Hard-Edge Rule.** Preserve rectangular interfaces and reserve true curves for artwork, circular status marks, and radiused diagram elements; do not introduce a general card radius scale.

## Components

### Buttons
- **Shape:** Square corners; no border radius. Minimum height is 3.35rem with 0.7rem 1.25rem internal padding.
- **Primary:** Electric blue background with ink text, providing the accessible high-contrast action pairing.
- **Primary Hover:** A lighter blue surface with ink text, shifted up 2px.
- **Light:** White background with ink text; yellow on hover.
- **Outline:** Transparent with a translucent white border and white text; gains a white border and translucent white fill on hover.
- **Focus:** Yellow 2px outline with 4px offset.

### Navigation
- **Desktop:** Relative header 76px tall, separated from the page by a hairline rule. Links use 0.82rem text and a 1.25–3.25rem responsive gap.
- **Mobile:** The navigation occupies a second full-width row below the wordmark and header action, with 0.72rem text and compact spacing.
- **State:** Hover and active navigation text become signal yellow.

### Filters and Tags
- **Style:** Square, thin translucent borders, with muted text.
- **Active:** Campaign blue border and fill with ink text.
- **Focus:** Yellow 2px outline with 4px offset.

### Cards and Containers
- **Corner Style:** Square, with no border radius.
- **Project Image:** 12-column media grid, using 1.32, 0.9, or 1.25 image aspect ratios for wide, portrait, and standard variants.
- **Border:** Translucent hairlines separate list rows and skill grid areas.
- **Internal Layout:** Project copy begins with 1.15rem top padding; project text stays within a 56ch maximum.

### Skill Groups
- **Style:** Ink panel grid divided by 1px hairline gaps and borders.
- **Labels:** Compact bordered tags with muted text.
- **Numbers:** Small tracked blue, violet, or yellow markers.

### Signature Campaign Artwork
- **Style:** Rotated presentation wrapper over a deep navy board, with clipped blue and violet shapes, a yellow ring, thin linework, and an ink sticker.
- **Labeling:** The hero and project media remain clearly identified as illustrative previews with compact, high-contrast stamps.

## Do's and Don'ts

### Do:
- **Do** use the dark ink-navy palette as the dominant surface foundation.
- **Do** use tight negative tracking on display and headline copy.
- **Do** keep primary button text in ink on electric blue.
- **Do** use #3d58c2 for the full contact region and keep its white/yellow copy.
- **Do** label locally authored project artwork and portfolio previews as illustrative.
- **Do** preserve reduced-motion behavior by removing smooth scrolling and reducing transition and animation durations.

### Don't:
- **Don't** use white small text on the bright blue action surface.
- **Don't** promote the illustrative artwork as a real published campaign asset or invent performance claims.
- **Don't** add rounded card or button styles to the page-wide interface.
- **Don't** introduce page-specific compositions into the global design rules.
