# Flyin' Farmer Pitstop Website

A modern, high-performance website for the Flyin' Farmer Pitstop, built with **Vite**.

## Features
- **Modular Architecture**: Separate HTML/CSS files for each section (Hero, Kitchen, Fuel, etc.).
- **Mobile Responsive**: Optimized sticky header and stacked grids for small screens.
- **Animations**: Custom IntersectionObserver engine for scroll-reveal effects.

## Development

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Dev Server**
   ```bash
   npm run dev
   ```
   Visit `http://localhost:5173`.

## Deployment (Cloudflare Pages / Vercel / Netlify)

Because this project uses **Vite**, it must be **built** before deployment. It is NOT a static HTML folder anymore.

### Cloudflare Pages Settings
- **Framework Preset**: Vite
- **Build Command**: `npm run build`
- **Output Directory**: `dist`

### Manual Build
To generate the static site locally:
```bash
npm run build
```
The output will be in the `dist/` folder.
