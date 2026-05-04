# Voxel Forge

Sitio oficial de Voxel Forge, taller de impresión 3D en Santa Cruz de la
Sierra, Bolivia. La página está hecha con React, TypeScript, Vite y Tailwind CSS
para GitHub Pages con dominio personalizado `voxelforge.org`.

## Desarrollo

```bash
npm install
npm run dev
```

## Verificación

```bash
npm run lint
npm run build
```

El build optimiza imágenes del portafolio, genera favicons, crea la imagen Open
Graph `og-1200x630.jpg` y deja listo el contenido de `dist/` para GitHub Pages.

## Deploy

El workflow `.github/workflows/deploy.yml` publica automáticamente al hacer push
a `main` usando GitHub Pages. El dominio se conserva mediante `public/CNAME`.

## Estructura

- `src/data/site.ts`: datos editables del negocio, servicios, portafolio,
  materiales, equipo y FAQ.
- `src/components/`: secciones visuales del sitio.
- `public/`: SEO estático, sitemap, robots, manifest y soporte GitHub Pages.
