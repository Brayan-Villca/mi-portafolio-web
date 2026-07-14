# Portafolio — Brayan Villca

Portafolio construido con React 19 + Vite + Tailwind CSS + Framer Motion + Lucide React,
con un estilo "Liquid Glass" inspirado en Apple, Vercel, Linear y Raycast.

## Cómo correrlo

```bash
npm install
npm run dev
```

Abre `http://localhost:5173`.

Para producción:

```bash
npm run build
npm run preview
```

## Estructura

```
src/
  components/
    layout/   → Navbar, Footer
    ui/       → Button, GlassCard (reutilizables)
  sections/   → Hero, About, Linux, Teaching, Projects, Skills, Contact
  data/       → projects.js, skills.js (edita aquí tu contenido)
  hooks/      → useReveal.js (variantes de animación de Framer Motion)
```

## ✅ Cosas que TÚ debes completar

Busca los comentarios `// TODO` en el código. Puntualmente:

1. **`src/data/projects.js`**
   - Agrega capturas de pantalla reales de CtrlStock y Aventura RPG (o cualquier proyecto nuevo).
   - Agrega los links reales de GitHub y demo de cada proyecto.
   - Puedes agregar más proyectos siguiendo la misma estructura.

2. **`src/sections/Contact.jsx`**
   - Reemplaza los links de `socials` (GitHub, LinkedIn, correo) con tus perfiles reales.
   - Integra EmailJS (o el servicio que prefieras) en `handleSubmit` — el bloque ya está
     preparado y comentado, solo necesitas tu `SERVICE_ID`, `TEMPLATE_ID` y `PUBLIC_KEY`.
     Instala la librería con: `npm install @emailjs/browser`

3. **`index.html`**
   - La fuente Inter/JetBrains Mono se carga desde Google Fonts. Si prefieres auto-hospedar
     las fuentes o usar otras, cámbialo aquí.

4. **Favicon / metadatos**
   - Agrega tu propio favicon en `public/` y actualiza el `<link rel="icon">` en `index.html`
     (no se incluyó uno para no asumir tu marca personal).

5. **Imágenes de proyectos**
   - Coloca tus capturas en `src/assets/` e impórtalas en `src/data/projects.js`.

## Notas de diseño

- La paleta y el efecto glass están centralizados en `tailwind.config.js` y `src/index.css`
  (clases `.glass`, `.glass-hover`, `.section`, `.heading-lg`, etc). Si quieres ajustar el
  tono de los colores de acento, edítalos ahí y se propagan a todo el sitio.
- Las animaciones respetan `prefers-reduced-motion` automáticamente.
- El sitio es responsive: mobile, tablet, laptop y 4K (contenedor máximo `max-w-6xl`).
