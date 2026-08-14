# Portafolio — Juan David Nates

Sitio personal construido con **React + TypeScript + Vite**. Diseño moderno, responsive y
con modo oscuro. Todo el contenido vive tipado en `src/config/site.ts` (nada hardcodeado en
los componentes).

🔗 **En vivo:** _(añade aquí la URL de Vercel una vez desplegado)_

## Stack

- ⚛️ React 18 + TypeScript (strict)
- ⚡ Vite 5
- 🎨 CSS puro con variables (sin frameworks de UI)

## Arquitectura

```
index.html                 # HTML raíz de Vite
src/
  main.tsx                  # Punto de entrada
  App.tsx                   # Composición de la página
  index.css                 # Estilos globales + tokens de diseño
  types.ts                  # Tipos compartidos (SiteConfig, CtaLink, Project, ...)
  config/
    site.ts                 # ÚNICA fuente de contenido (tipada)
  hooks/
    useReveal.ts            # Animación de aparición al hacer scroll
  components/
    ui/                     # Reutilizables: Button, ButtonGroup, Section
    layout/                 # Navbar, Footer
    sections/               # Hero, About, Stack, Projects, ProjectCard, Contact
public/
  assets/                   # Imágenes y CV (servidos tal cual)
```

Para editar textos, proyectos, skills o enlaces, **solo se toca `src/config/site.ts`**.

## Desarrollo local

```bash
npm install
npm run dev
```

Abre http://localhost:5173

Otros scripts:

```bash
npm run build     # type-check (tsc) + build de producción a dist/
npm run preview   # sirve el build de producción
```

## Desplegar en Vercel (una sola vez)

1. Entra a **[vercel.com/new](https://vercel.com/new)** e inicia sesión con GitHub.
2. **Import** → repo **`jnates/portafolio`**.
3. Vercel detecta **Vite** automáticamente:
   - Framework Preset: **Vite**
   - Build Command: `npm run build`
   - Output Directory: `dist`
4. Pulsa **Deploy**. En ~1 min tendrás tu URL `https://portafolio-xxxx.vercel.app`.

A partir de ahí, **cada `git push` a `main` se despliega solo**.

### Dominio propio (opcional)
Proyecto en Vercel → **Settings → Domains** → añade `ingjuandavidnates.com` y sigue las
instrucciones de DNS.

## Pendiente

- [ ] Subir el CV en PDF a `public/assets/cv/juan-david-nates-cv.pdf`.
