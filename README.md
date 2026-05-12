# Portfolio

**[Live Site](https://aakirahin.github.io/portfolio-2026/)**

Personal portfolio built with React 19, TypeScript, and Vite. Deployed to GitHub Pages.

## Technical Highlights

**Lazy-loaded sections** — Every section below the hero (`ProjectsList`, `About`, `WorkTimeline`, `TextType`, `ContactForm`, `Links`) is loaded with `React.lazy` + `Suspense`, so the initial bundle only includes the hero and nav. Sections load on demand as the user scrolls.

**React Bits integration** — Visual components (shader hero background, canvas dot field, typewriter, spotlight card) are sourced from [React Bits](https://www.reactbits.dev/), a library of animated UI components backed by OGL/WebGL and canvas. These were composed and configured to fit the design.

## Architecture

```
src/
  App.tsx              # Route layout, lazy imports, section composition
  components/
    Hero/              # HeroText, HeroBackground (shader via ColorBends/OGL)
    DotField/          # Canvas dot field with cursor physics
    ColorBends/        # OGL WebGL shader component
    TextType/          # Typewriter animation component
    SpotlightCard/     # Cursor-following spotlight card
    Projects/          # ProjectsList, ProjectCard
    About/             # About text, WorkTimeline
    BorderGlow/        # Animated border glow effect
    DecryptedText/     # Text decryption animation
    ContactForm.tsx    # Contact form
    NavBar.tsx         # Navigation
```

## Tech Stack

- **React 19** + TypeScript
- **Vite** — build tooling
- **Tailwind CSS v4**
- **React Bits** — animated UI components (WebGL shader, canvas dot field, typewriter, spotlight card)
- **Framer Motion** + **GSAP** — animation
- **shadcn/ui** + **Radix UI** — UI primitives
- **React Router** — routing
- **gh-pages** — GitHub Pages deployment

## Getting Started

```bash
npm install
npm run dev
# → http://localhost:5173
```

## Available Scripts

```bash
npm run dev      # Start Vite dev server
npm run build    # Type-check + build
npm run preview  # Preview production build
npm run deploy   # Build and deploy to GitHub Pages
npm run lint     # Run ESLint
```
