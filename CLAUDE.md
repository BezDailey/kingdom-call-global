# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev          # Start dev server (Vite, http://localhost:5173)
npm run build        # Production build → dist/
npm run preview      # Preview production build locally
npm start            # Serve dist/ with 'serve' (Heroku/local prod)
npm run lint         # Run ESLint
npm run lint:fix     # Auto-fix ESLint issues
npm run format       # Format with Prettier
```

No test suite is currently configured.

## Architecture

**Kingdom Call Global** is a React 19 + Vite + Tailwind CSS ministry website. It's a content-driven site with minimal interactivity and no backend.

### Routing

Routes are defined as a declarative array in `src/routes/routes.jsx` and consumed in `src/App.jsx` via React Router DOM 7. To add a page: create the component in `src/pages/`, import it in `routes.jsx`, and add an entry to the routes array.

### State

No global state library. All state is local React hooks (`useState`/`useEffect`) within components. Countdown timers live in `UnityFestivalBanner.jsx`; mobile menu/dropdown state lives in `Header.jsx`.

### Styling

Tailwind-first — no CSS modules. Custom theme is defined in `tailwind.config.js`:
- Primary color: `#00425F` (deep blue)
- Accent: `#F6F2CB` (gold)
- Fonts: Merriweather (headings), Inter (body) — loaded from Google Fonts in `index.html`

### Assets

Static images live in `/public`. Gallery images are in `/public-gallery`. Images are referenced by path string (not imported as modules).

## Style Guide

### Formatting

Enforced by Prettier (`prettier.config.js`): single quotes, trailing commas, 2-space indent, 80-char line width, semicolons required, LF line endings.

### Component conventions

- Functional components only, default-exported at the bottom of the file.
- Data arrays/objects used only by one component are defined at module level (outside the component), not inline in JSX.
- Event handlers are named `handleX` (e.g., `handleDropdownMouseEnter`) or `toggleX` for boolean flippers (e.g., `toggleMobileMenu`).
- Destructure props; use rest/spread for pass-through to native elements (see `Button.jsx`).
- No PropTypes or TypeScript — plain `.jsx` files throughout.

### Pages vs. components

- **Pages** (`src/pages/`) own the full page layout: they render `<Header>`, a `<main>` or wrapper, and `<Footer>`. Top-level wrapper is typically `<div className="min-h-screen bg-light flex flex-col">`.
- **Components** (`src/components/`) are reusable UI pieces with no Header/Footer. Keep them focused.

### Tailwind conventions

- Mobile-first responsive classes: `hidden md:flex`, `px-4 md:px-6 lg:px-12`.
- Use custom theme tokens — `bg-primary`, `text-primary`, `bg-light`, `font-heading`, `font-body` — rather than raw hex values.
- Dynamic values (e.g., background images) use inline `style` prop; everything else is Tailwind utility classes.
- Section-level JSX blocks get a comment label: `{/* Desktop Header */}`, `{/* Mission Section */}`.
- Mobile-only nav uses native `<details>`/`<summary>` instead of custom JS toggle logic.

### Imports

Order: React → external libraries → local components → asset imports. Group asset imports with a comment (e.g., `// images`).

## Deployment

Hosted on Heroku. `npm install` triggers a production build via the `postinstall` script. The `Procfile` serves `dist/` using the `serve` package.
