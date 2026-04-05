# Me

An interactive personal website built with Vue 3, Vite, and Tailwind CSS. Features a welcoming landing page with an animated character companion.

## Tech Stack

- **[Vue 3](https://vuejs.org/)** - UI framework (Composition API)
- **[Vite 7](https://vite.dev/)** - Build tool and dev server
- **[Tailwind CSS 4](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Vue Router 4](https://router.vuejs.org/)** - Client-side routing

## Project Structure

```
src/
├── assets/          # Global styles and static assets
├── components/      # Reusable Vue components
│   └── AnimatedCharacter.vue   # Animated character overlay
├── router/          # Vue Router configuration
├── views/           # Page-level components
│   └── HomeView.vue
├── App.vue          # Root component
└── main.js          # App entry point
```

## Getting Started

### Prerequisites

- Node.js `^20.19.0` or `>=22.12.0`

### Install dependencies

```sh
npm install
```

### Development

```sh
npm run dev
```

### Build for production

```sh
npm run build
```

### Preview production build

```sh
npm run preview
```

## IDE Setup

[VS Code](https://code.visualstudio.com/) + [Vue (Official)](https://marketplace.visualstudio.com/items?itemName=Vue.volar) extension.
