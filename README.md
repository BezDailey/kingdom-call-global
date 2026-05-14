# Kingdom Call Global

Official website for Kingdom Call Global Inc. — a ministry organization uniting churches and spiritual leaders across Tampa and beyond.

**Live site:** Hosted on Heroku
**Theme:** Faith. Unity. Community. Purpose.
**Tagline:** "We're Better Together."

---

## Tech Stack

- **React 19** + **Vite**
- **Tailwind CSS** (layout, spacing, responsiveness)
- **Custom design system** (`tokens.css` + `components.css`) for brand identity
- **React Router DOM 7** for client-side routing
- **ESLint** + **Prettier** for code quality
- **Heroku** for deployment (`serve` serves the `dist/` folder)

---

## Pages

| Route | Page | Description |
|---|---|---|
| `/` | Home | Hero banner, mission statement, photo carousel |
| `/about` | About | Mission section, founder story |
| `/gallery` | Gallery | Photo carousel with keyboard navigation |
| `/unity2026` | Unity 2026 | 2nd Annual Unity Festival — full event info, partners, performers |
| `/partnership` | Partnership | All partner churches + Become a Partner CTA |
| `/events` | Events | Event invite card, poster, date/time/location strip |

---

## Development

```bash
npm install       # Install dependencies
npm run dev       # Start dev server (http://localhost:5173)
npm run build     # Production build → dist/
npm run preview   # Preview production build locally
npm run lint      # Run ESLint
npm run lint:fix  # Auto-fix ESLint + Prettier issues
npm run format    # Format with Prettier
```

No test suite is currently configured.

---

## Project Structure

```
src/
  pages/          # Full-page components (own Header + Footer)
  components/     # Reusable UI components
  styles/         # tokens.css, components.css, index.css, tailwind.css
  routes/         # routes.jsx — declarative route array
  App.jsx         # Router setup
  main.jsx        # Entry point, CSS import order

public/           # Static assets (images, logos, gallery/index.json)
```

---

## Deployment

Hosted on Heroku. `npm install` triggers `postinstall` which runs `npm run build`. The `Procfile` serves `dist/` via the `serve` package.
