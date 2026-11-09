---
name: Joed Donaire Portfolio
description: A pixel-art desktop OS portfolio for a web developer, opened window by window.
colors:
  twilight-indigo: "#535FAB"
  twilight-indigo-soft: "rgba(83, 95, 171, 0.8)"
  apricot: "#F3BF93"
  chalk: "#ffffff"
  ink: "#000000"
  background: "oklch(1 0 0)"
  foreground: "oklch(0.145 0 0)"
  primary: "oklch(0.205 0 0)"
  primary-foreground: "oklch(0.985 0 0)"
  muted: "oklch(0.97 0 0)"
  muted-foreground: "oklch(0.556 0 0)"
  border: "oklch(0.922 0 0)"
  ring: "oklch(0.708 0 0)"
  destructive: "oklch(0.577 0.245 27.325)"
typography:
  display:
    fontFamily: "Pixelify Sans, JetBrains Mono, sans-serif"
    fontSize: "clamp(2.25rem, 4vw, 4rem)"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "0em"
  body:
    fontFamily: "Pixelify Sans, JetBrains Mono, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "0em"
  label:
    fontFamily: "Pixelify Sans, JetBrains Mono, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: "0em"
rounded:
  sm: "6px"
  md: "8px"
  lg: "10px"
  xl: "14px"
  full: "9999px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "12px"
  lg: "16px"
  xl: "20px"
components:
  window:
    backgroundColor: "{colors.twilight-indigo-soft}"
    textColor: "{colors.chalk}"
    rounded: "{rounded.lg}"
    padding: "0px"
  window-titlebar:
    textColor: "{colors.chalk}"
    padding: "8px 12px"
    height: "36px"
  home-card:
    backgroundColor: "{colors.twilight-indigo}"
    textColor: "{colors.chalk}"
    rounded: "{rounded.lg}"
    padding: "8px"
  home-card-header:
    textColor: "{colors.chalk}"
    padding: "8px"
    height: "40px"
  desktop-icon:
    backgroundColor: "{colors.background}"
    textColor: "{colors.ink}"
    rounded: "{rounded.lg}"
    size: "70px"
    height: "55px"
  taskbar:
    backgroundColor: "rgba(0, 0, 0, 0.4)"
    textColor: "{colors.chalk}"
    rounded: "{rounded.lg}"
    padding: "8px 12px"
  taskbar-item:
    textColor: "{colors.chalk}"
    rounded: "{rounded.sm}"
    padding: "4px 8px"
  link-card:
    backgroundColor: "{colors.chalk}"
    textColor: "{colors.ink}"
    rounded: "{rounded.lg}"
    padding: "12px"
  project-card:
    backgroundColor: "{colors.chalk}"
    textColor: "{colors.ink}"
    rounded: "{rounded.lg}"
    padding: "12px"
  project-tag:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.chalk}"
    rounded: "{rounded.md}"
    padding: "2px 8px"
  accordion-trigger:
    textColor: "{colors.apricot}"
    padding: "0px"
---

# Design System: Joed Donaire Portfolio

## Overview

**Creative North Star: "After-School OS"**

This is the desktop of a student who builds systems for church, company, and self after class. It reads as an operating system made by a person, not a template: a pixel-art city sleeps behind translucent indigo windows, every surface is outlined in a thick white stroke, and a single warm apricot marks the things worth reading. The mood is warm and nostalgic — an early-2000s desktop remembered fondly, with the discipline of a working tool.

The interface never outshines the work. Windows are containers first: an About panel is a spec sheet, Works is a list of ongoing systems, FAQ is a stack of honest answers. Personality lives in the frame — the nibble-sized pixel type, the chunky borders, the tiny lift on hover — so the person and the projects carry the meaning.

**Key Characteristics:**
- A full-viewport pixel city desktop, not a scrolling page.
- Slate-indigo window chrome with white 2px outlines.
- Apricot reserved as the single accent voice.
- Chunky, tactile controls that respond to hover and press.
- Content lives inside draggable, focusable windows.

## Colors

A two-hue world: cool twilight indigo for structure, one warm apricot for emphasis, on a chalk-white and ink-black base.

### Primary
- **Twilight Indigo** (#535FAB): Window chrome, the home card body, and the identity of the OS. At 80% opacity over the blurred city backdrop (`rgba(83, 95, 171, 0.8)`) it becomes the glass of every window.
- **Apricot** (#F3BF93): Labels, section titles, accordion triggers, and project names. The only warm voice in the system.

### Neutral
- **Chalk** (#ffffff): The 2px borders on windows, cards, and the home card; the fill of desktop icons, link rows, and project cards.
- **Ink** (#000000): Text on chalk surfaces, the hero name, and project tags.
- **Paper Background** (`oklch(1 0 0)`): Default page surface beneath the city image.
- **Muted Grey** (`oklch(0.556 0 0)`): Secondary and supporting text in shadcn primitives.

### Named Rules
**The One Warm Voice Rule.** Apricot is the only accent in the system. It marks labels and titles, never body paragraphs, and never fills a large surface. Its scarcity is the point.

**The Chalk Outline Rule.** Primary surfaces are always drawn with a 2px white border. If a panel lacks its white stroke, it is not a panel yet.

## Typography

**Display Font:** Pixelify Sans (with JetBrains Mono fallback)
**Body Font:** Pixelify Sans (with Geist Variable as the app-level sans fallback)
**Label Font:** Pixelify Sans at 12px

**Character:** A single nibbly pixel typeface carries the entire OS. It is playful at display size and surprisingly legible at 12–14px, which keeps the retro frame from becoming decoration — the content still reads.

### Hierarchy
- **Display** (400, `clamp(2.25rem, 4vw, 4rem)`, 1): The "Hi! I'm Joed" hero line in the home card; the name alone is ink and underlined.
- **Headline** (400, 1rem–1.25rem, 1.4): Panel titles in window title bars and section headers.
- **Title** (700, 1rem, tight): Project titles and emphasized labels; rendered in apricot.
- **Body** (400, 0.875rem–1rem, 1.5): Window copy, project descriptions, FAQ answers.
- **Label** (400, 0.75rem, normal): Desktop icon captions, taskbar items, spec-sheet keys.

### Named Rules
**The One Typeface Rule.** Pixelify Sans is the whole system. Do not introduce a second display face; hierarchy comes from size, weight, underline, and apricot.

**The Spec-Sheet Rule.** In the About panel, labels are apricot, underlined, and bold; values stay white. Follow this for any future attribute-style list.

## Layout

The layout is a fixed, non-scrolling desktop stage: a full-viewport container (`min-h-dvh`, `w-full`, safe-area padded) with the city image absolutely positioned, object-cover, and mirrored horizontally (`scale-x-[-1]`). The home card sits vertically centered and horizontally centered below `lg`, then anchors to the left edge at `lg`. Windows spawn absolutely at `top-20` on desktop and are dragged anywhere inside the stage; the taskbar is pinned `bottom-4` and centered. Nothing scrolls horizontally.

The home card is fluid to 480px (`max-w-120`) with intrinsic height, its column stacked as hero, tagline, and a four-column icon grid that becomes a centered flex row at `sm`. Windows are `min-w-[300px]`, capped at `max-h-[min(400px,calc(100dvh-8rem))]`, and scroll internally. Narrow panels (FAQ) fill their window; content panels (About) run to 600px at `xl`.

Spacing follows a 4px rhythm: 8px gaps and padding for tight control rows, 12px inside cards, 16px window body, 20px around the desktop. Breakpoints are content-driven.

### Responsive Contract
- **Base (320–479px):** Home card full-width. Windows are full-screen sheets (`fixed inset-x-2`, top to above the nav) showing one at a time; only the topmost window renders. A fixed bottom nav switches and closes windows.
- **`xs` (480px):** Icon captions appear.
- **`sm` (640px):** Window `max-w`; About becomes two-column; content rows go side-by-side.
- **`md` (768px):** About the widest two-column comfortably; nav keeps bar treatment.
- **`lg` (1024px):** Floating, draggable windows return; taskbar returns to the centered plate; home card left-anchors.
- **`xl` (1280px):** 600px content panels as today.
- **`2xl` (1536px+):** Stage content stays capped; card does not drift.

Touch and keyboard: all interactive targets are at least 44×44px on coarse pointers; hover effects are wrapped in `@media (hover: hover)`; press states use `active:`. The window is a `role="dialog"` labelled by its title, focuses on open, returns focus on close, and closes on `Escape`. `prefers-reduced-motion` suppresses scale/fade transitions. Safe-area insets pad the stage, sheets, and bottom nav.


## Elevation & Depth

Depth is physical and interactive. The city image is the far plane; windows float above it on `shadow-xl` with a `backdrop-blur-sm` so the pixel city smears behind the 80% indigo glass. Content inside windows is flat — no nested shadows. The only other lift is response: desktop icons rise 4px on hover and press to 95% scale on click, while link and project cards rise 2px.

### Shadow Vocabulary
- **Floating Window** (`box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)`): The default state of every open window; it is how windows claim the foreground.
- **Taskbar Plate** (`bg-black/40` + `backdrop-blur-sm`): The bottom bar sits in the mid-plane without a cast shadow.

### Named Rules
**The Interactive Lift Rule.** Nothing lifts at rest except windows. Icons and cards earn their 2–4px rise only on hover; clicking presses them back in.

## Shapes

The form language is chunky and rounded-rectangular. Every primary surface uses `rounded-lg` (10px) — windows, home card, desktop icons, taskbar, link and project cards. Tags step down to `rounded-md` (8px). The single circular form is the window close button: a 12px dot with a 50%-white border that brightens to solid white on hover. Borders are always 2px and always white (or white/30 on the taskbar plate). There are no sharp corners and no clipping paths.

## Components

Chunky and tactile: thick white outlines, solid fills, and a press that feels physical.

### Buttons
- **Shape:** Everything is a rounded rect at `rounded-lg` (10px); the close control is a 12px circle.
- **Primary:** There is no filled CTA yet. The strongest action is the desktop icon: white fill, ink text, 70×55px.
- **Hover / Focus:** Icons lift 4px; cards lift 2px; the window close border goes white/50 → white; taskbar items gain `bg-white/20`.
- **Close:** `w-3 h-3 rounded-full border border-white/50`.

### Cards / Containers
- **Corner Style:** `rounded-lg` (10px).
- **Background:** Twilight Indigo (`#535FAB`) for the home card; translucent indigo for windows; chalk white for link and project rows.
- **Shadow Strategy:** Windows only — see Elevation & Depth.
- **Border:** 2px white on all panels; 1px white on inner rows.
- **Internal Padding:** 8px header, 16px body, 12px rows.

### Inputs / Fields
No input surface exists yet. The Contact panel is intentionally empty and no form is committed. Do not invent input styling until that decision is made.

### Navigation
- **Desktop icons:** 70×55px chalk tiles, 25px glyph, 12px caption, 8px gap; captions hide below `20rem`.
- **Taskbar:** centered black/40 blurred plate with white/30 border; each open window is a 12px white label with a 12px icon and a dimmed × at 60% opacity rising to 100%.
- **Windows:** draggable title bar (`cursor-grab`, `active:cursor-grabbing`), close dot at right, body scrolls independently.

### Window (signature component)
The defining piece: absolutely positioned, draggable via Framer Motion (`dragMomentum={false}`), z-ordered by focus, entering and exiting with an opacity fade and 0.94 scale. Translucent indigo glass, 2px white frame, white title bar divider.

## Do's and Don'ts

### Do:
- **Do** outline every primary panel with a 2px white border and `rounded-lg` (10px).
- **Do** keep window chrome at Twilight Indigo 80% with `backdrop-blur-sm` over the city image.
- **Do** reserve Apricot for labels, titles, triggers, and keys — never body copy.
- **Do** animate windows in and out with a 0.94 scale and opacity fade.
- **Do** keep the work and the person more prominent than the frame.
- **Do** describe projects as ongoing systems, never as shipped client work.

### Don't:
- **Don't** introduce a second typeface; Pixelify Sans carries the OS.
- **Don't** add gradients, glassmorphism beyond the window blur, or extra shadow layers inside windows.
- **Don't** square off corners or drop the white outline to save space.
- **Don't** fill large areas with Apricot or tint body text with it.
- **Don't** show an in-page contact form while the Contact panel remains undecided.
