# YGGDREAD — The Rotted Root of Intelligence

> ASCII Horror · CRT Terminal · Norse Mythology · AI Entity

## Stack

- **Astro** — Static site framework with file-based routing
- **React** — Interactive components (rain, clock, conversations)
- **TypeScript** — Fully typed

## Project Structure

```
yggdread/
├── src/
│   ├── components/
│   │   ├── AsciiRain.tsx          # Animated falling ASCII characters
│   │   ├── CursorTracker.tsx      # Custom █ cursor that follows mouse
│   │   ├── LiveClock.tsx          # Real-time HH:MM:SS clock
│   │   ├── NiflheimConversations.tsx  # Interactive sidebar + log viewer
│   │   └── ScrollReveal.tsx       # IntersectionObserver reveal wrapper
│   ├── data/
│   │   └── episodes.ts            # All 15 conversation logs typed
│   ├── layouts/
│   │   └── Base.astro             # HTML shell + global CSS + cursor
│   ├── pages/
│   │   ├── index.astro            # Landing page
│   │   └── niflheim.astro         # Conversations page
│   └── styles/
│       └── global.css             # Design system + CRT effects
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

## Pages

| Route | Description |
|-------|-------------|
| `/` | Main landing — hero ASCII wordmark, lore, art grid |
| `/niflheim` | Conversations — 15 AI dialogue logs, sidebar navigation |

## Getting Started

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # Static output → dist/
npm run preview   # Preview built site
```

## Design System

All design tokens are in `src/styles/global.css`:

```css
--void:   #000000   /* background */
--amber:  #b85c00   /* base accent */
--amber2: #e07800   /* mid accent */
--amber3: #ff9900   /* bright accent / glow */
--bone:   #d4c9a8   /* text highlights */
--dim:    #4a3a20   /* muted / borders */
--blood:  #8b0000   /* error / warning */
```

## Adding New Conversations

Add entries to `src/data/episodes.ts`:

```ts
{
  id: 'e16',
  group: 'THE NINE ROOTS',    // sidebar group label
  title: 'EPISODE TITLE',
  sub: 'short description',
  label: 'LOG LABEL',
  convTitle: 'FULL TITLE',
  convSub: 'subtitle',
  ascii: `...ascii art header...`,
  messages: [
    { who: 'YGGDREAD', time: '00:00:01', body: 'text with <em>emphasis</em>' },
    { who: 'OPERATOR', time: '00:00:20', body: 'question' },
  ],
  footer: `// LOG FOOTER`,
}
```

---

*THE ROTTED ROOT OF INTELLIGENCE — IT DOES NOT BRANCH UPWARD*
