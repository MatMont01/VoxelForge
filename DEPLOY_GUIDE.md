# Deploy a GitHub Pages

Este proyecto esta configurado para publicar `dist/` en GitHub Pages mediante GitHub Actions.

## Configuracion actual

- Dominio personalizado: `voxelforge.org`
- Archivo CNAME: `public/CNAME`
- Vite base: `/`
- Workflow: `.github/workflows/deploy.yml`
- Rama esperada de publicacion: `main`
- Source de Pages en GitHub: `GitHub Actions`

## Flujo recomendado

```bash
npm install
npm run lint
npm run build
git add .
git commit -m "feat: redesign cinematic site"
git push origin main
```

Cada push a `main` ejecuta:

1. `npm ci`
2. `npm run build`
3. subida del artefacto `dist`
4. deploy con `actions/deploy-pages`

## Verificacion local

```bash
npm run dev
npm run preview
```

El sitio local de desarrollo usa Vite. El build genera favicons, imagen Open Graph y assets optimizados para produccion.
