# Voxel Forge

Sitio web nuevo para Voxel Forge, impresión 3D profesional en Santa Cruz de la Sierra con envíos a toda Bolivia.

## Stack

- React 19 + TypeScript + Vite
- Three.js cargado de forma diferida para la escena hero
- Motion para revelados al hacer scroll
- GitHub Pages con dominio `voxelforge.org`

## Desarrollo

```bash
npm install
npm run dev
```

## Producción

```bash
npm run build
npm run preview
```

## Deploy

El workflow `.github/workflows/deploy.yml` despliega automáticamente a GitHub Pages cuando haces push a `main`.

En GitHub, configura:

- Settings -> Pages -> Source: GitHub Actions
- Dominio personalizado: `voxelforge.org`
- DNS apuntando a GitHub Pages según tu proveedor

También está disponible el deploy manual:

```bash
npm run deploy
```

## SEO

El sitio incluye metadatos Open Graph, Twitter Card, canonical, `robots.txt`, `sitemap.xml`, manifest, CNAME y JSON-LD para `Organization`, `LocalBusiness`, `WebSite` y `FAQPage`.
