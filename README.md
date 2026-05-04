# Voxel Forge

Sitio web de Voxel Forge, taller de impresion 3D en Santa Cruz de la Sierra, Bolivia.

## Stack

- React 19
- Vite
- TypeScript
- Tailwind CSS 4
- Three.js con carga diferida para la escena WebGL
- GitHub Pages mediante Actions

## Comandos

```bash
npm install
npm run dev
npm run build
npm run preview
npm run lint
```

## Estructura

- `src/data/site.ts`: contenido editable de negocio, servicios, portafolio, FAQ y contacto.
- `src/components`: secciones visuales del sitio.
- `src/assets`: logos, fotos de portafolio, fuentes e imagenes reales.
- `public`: archivos SEO, favicon, 404 para SPA y dominio personalizado.
- `.github/workflows/deploy.yml`: despliegue automatico a GitHub Pages desde `main`.

## SEO

El sitio incluye metadatos Open Graph/Twitter, canonical, robots, sitemap, JSON-LD para `Organization`, `LocalBusiness`, `OfferCatalog`, `FAQPage` y fallback `noscript`.
