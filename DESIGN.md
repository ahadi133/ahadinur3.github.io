---
name: "Ahadi Nur Marketing Portfolio"
description: "A concise, work-led portfolio with a deep navy atmosphere, bright blue hierarchy, and supplied marketing samples."
colors:
  ink: "#0a1020"
  ink-raised: "#111d36"
  paper: "#f0f1f7"
  muted: "#b0bdd7"
  blue: "#7395ff"
  blue-soft: "#b8caff"
  blue-haze: "rgba(67, 102, 190, 0.18)"
  contact-surface: "#1a3061"
  line: "rgba(115, 149, 255, 0.22)"
  image-surface: "#ffffff"
typography:
  display:
    fontFamily: "Avenir Next, Avenir, Segoe UI, sans-serif"
    fontSize: "clamp(2.5rem, 8.5vw, 6rem)"
    fontWeight: 760
    lineHeight: 0.98
    letterSpacing: "-0.04em"
  section:
    fontSize: "1.5rem"
  lead:
    fontSize: "1.125rem"
  body:
    fontFamily: "Avenir Next, Avenir, Segoe UI, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.6
  small:
    fontSize: "0.875rem"
spacing:
  gutter: "clamp(1.25rem, 5vw, 4rem)"
  content-width: "72rem"
---

# Design System: Ahadi Nur Marketing Portfolio

## Overview

**Creative North Star: "Work, plainly shown."**

A minimal, work-led portfolio that puts the supplied campaign designs beside the roles and responsibilities they support. A deep navy canvas, atmospheric blue light, bright campaign-blue emphasis, and a distinct blue contact field bring color into the hierarchy without competing with the work.

## Colors

- **Ink** (#0a1020): Deep navy page foundation.
- **Raised ink** (#111d36): Subtle elevation in the page atmosphere and interactive surfaces.
- **Paper** (#f0f1f7): Primary text.
- **Muted** (#b0bdd7): Supporting text, tinted cool blue for coherence.
- **Campaign blue** (#7395ff): Interactive states, work frames, and selected emphasis.
- **Soft blue** (#b8caff): Section headings and supporting emphasis.
- **Contact surface** (#1a3061): Full-width closing section.
- **Hairline** (rgba(115, 149, 255, 0.22)): Cool-blue section separation.
- **Image surface** (#ffffff): Background behind supplied artwork.

Artwork retains its supplied colors and proportions against a white image surface.

## Typography

Use one sans-serif family throughout. The display heading scales from 2.5rem to 6rem, uses a 0.98 line height, and keeps tracking at -0.04em. The compact type scale uses 1.5rem section headings, 1.125rem lead text, 1rem body text, and 0.875rem supporting text.

## Layout

Use a centered content width of 72rem with a responsive 1.25rem–4rem gutter. The hero pairs a short introduction with Ahadi's portrait in a circular transparent frame. Education comes before Experience, followed by a four-image featured gallery and native disclosure for the remaining supplied work; Skills follows the gallery. Contact links close the page. The gallery shifts from four to three to two columns as space narrows. At 700px, the hero and content rows stack and navigation remains compact.

## Components

- **Header:** Full name with links to Education, Experience, My Works, Skills, and Contact; no competing call to action.
- **Hero:** Short marketing introduction paired with the supplied transparent profile portrait in a circular frame against the navy atmosphere.
- **Education:** Degree, institution, and relevant coursework in a compact two-column row.
- **Work gallery:** Responsive, uncropped images with captions and full-size links. Four featured samples are visible first; 33 more are inside a keyboard-accessible disclosure.
- **Experience:** Simple two-column rows divided by hairlines, collapsing to one column on mobile.
- **Skills:** Four plain, categorized lists after the work gallery, with restrained separators.
- **Contact:** A plain text footer with email, LinkedIn, and GitHub.

## Interaction and Accessibility

Use semantic headings and landmarks, descriptive image alternatives, visible keyboard focus, responsive images, and reduced-motion support. Avoid hover-dependent information.
