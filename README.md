# Esteban Makiato — Developer Portfolio

Dark-mode, single-page portfolio built with React 19, TypeScript, TailwindCSS v4, and Vite.

## Tech Stack

- **React 19** + **TypeScript 5.9** — strict mode
- **Vite 7** — dev server & build
- **TailwindCSS v4** — CSS-first theming with `@theme`
- **Motion** (Framer Motion v12) — scroll-triggered animations
- **GSAP** — PillNav interactions
- **React Bits** — BlurText, ShinyText, LetterGlitch, StarBorder, GooeyNav, SpotlightCard, SplashCursor
- **EmailJS** — contact form delivery
- **Lucide React** — icons

## Project Structure

```
src/
├── app/           # Layout shell (Navbar, Footer, RootLayout), router, providers
├── features/      # Feature modules (hero, about, tech-stack, projects, engineering, ui-ux, contact)
├── pages/         # Page compositions (HomePage)
├── shared/        # Reusable UI, hooks, types, utilities
│   ├── ui/        # Button, Card, Input, Section, SectionHeading
│   ├── ui/motion/ # FadeIn, StaggerContainer, StaggerItem, AnimatedCounter
│   └── ui/react-bits/ # Copy-paste components from reactbits.dev
└── styles/        # TailwindCSS v4 globals
```

## Getting Started

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## License

MIT
