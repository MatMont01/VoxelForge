# 🚀 Guía de Deploy a GitHub Pages - VoxelForge

Este documento te guía paso a paso para subir tu proyecto VoxelForge a GitHub Pages.

## 📋 Prerequisitos

1. ✅ Tener una cuenta de GitHub
2. ✅ Tener tu repositorio creado en GitHub
3. ✅ Tener Git instalado en tu computadora

## 🔧 Configuración Realizada

Ya se han realizado las siguientes configuraciones en tu proyecto:

### 1. **Vite Config** (`vite.config.ts`)

```typescript
base: "/VoxelForge/"; // ⚠️ IMPORTANTE: Cambia "VoxelForge" por el nombre exacto de tu repositorio
```

### 2. **Scripts de Deploy** (`package.json`)

```json
"predeploy": "npm run build",
"deploy": "gh-pages -d dist"
```

### 3. **GitHub Actions** (`.github/workflows/deploy.yml`)

- Deploy automático en cada push a main
- Build y deploy automatizado

## 🚀 Pasos para Deploy

### Método 1: GitHub Actions (Recomendado) 🤖

1. **Sube tu código a GitHub:**

```bash
git add .
git commit -m "feat: configuración para GitHub Pages"
git push origin main
```

2. **Activa GitHub Pages en tu repositorio:**
   - Ve a tu repositorio en GitHub
   - Settings → Pages
   - Source: "GitHub Actions"
   - ¡Listo! Se desplegará automáticamente

### Método 2: Deploy Manual 📦

Si prefieres hacer deploy manual:

```bash
# 1. Build del proyecto
npm run build

# 2. Deploy a GitHub Pages
npm run deploy
```

## ⚙️ Configurar GitHub Pages

1. **Ve a tu repositorio en GitHub**
2. **Settings** → **Pages**
3. **Source**: Selecciona "GitHub Actions"
4. **¡Listo!** Tu sitio estará disponible en: `https://tu-usuario.github.io/VoxelForge/`

## 🔍 Verificación

Una vez desplegado, tu sitio estará disponible en:

```
https://MatMont01.github.io/VoxelForge/
```

_(Reemplaza "MatMont01" con tu nombre de usuario de GitHub)_

## 🛠️ Solución de Problemas

### ✅ Página blanca después de la carga (SOLUCIONADO)

- **Problema**: SPA routing no funciona en GitHub Pages
- **Solución implementada**:
  - ✅ Configurado `basename` dinámico en Router
  - ✅ Añadido archivo `404.html` para redirección SPA
  - ✅ Script de redirección en `index.html`
  - ✅ Configuración optimizada de Vite

### Error 404 en GitHub Pages

- Verifica que el nombre del repositorio en `vite.config.ts` sea exacto
- Asegúrate de que GitHub Pages esté configurado correctamente

### Rutas no funcionan

- ✅ Ya configurado: basename dinámico para desarrollo y producción
- ✅ Ya implementado: sistema de redirección SPA

### Imágenes no cargan

- Verifica que las rutas de las imágenes sean relativas
- Asegúrate de que las imágenes estén en la carpeta `public` o `assets`

## 📝 Comandos Útiles

```bash
# Desarrollo local
npm run dev

# Build para producción
npm run build

# Preview del build
npm run preview

# Deploy manual
npm run deploy
```

## ✨ ¡Tu sitio VoxelForge está listo para el mundo!

Con esta configuración, cada vez que hagas `git push` a la rama main, tu sitio se actualizará automáticamente en GitHub Pages. 🎉
