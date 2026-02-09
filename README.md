# Brasa & Olivo - Premium Restaurant Website

![Brasa & Olivo](https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2940&auto=format&fit=crop)

Una web demo premium para restaurante de alta cocina mediterránea, diseñada con las últimas tecnologías y mejores prácticas de desarrollo web.

## 🌟 Características

### Diseño Premium
- ✨ Diseño minimalista y elegante
- 🎨 Paleta de colores sofisticados
- 📱 100% Mobile-first y responsive
- 🖼️ Imágenes de alta calidad con lazy loading
- ⚡ Animaciones suaves con Framer Motion

### Secciones Implementadas
1. **Hero Full Screen** - Impacto visual inmediato con call-to-actions
2. **Navegación Premium** - Menú sticky con efecto glassmorphism
3. **Experiencia** - Filosofía, producto premium y perfil del chef
4. **Carta & Menús** - Platos destacados y menús degustación
5. **Galería Editorial** - Grid masonry con efecto hover
6. **Reservas** - Formulario completo + integración WhatsApp
7. **Testimonios** - Opiniones de clientes con ratings
8. **Ubicación** - Google Maps + información de transporte
9. **Footer Premium** - Completo con enlaces y redes sociales
10. **WhatsApp Flotante** - Botón fijo con animación de pulso

### SEO & Performance
- ✅ Metadata completa (OpenGraph, Twitter Cards)
- ✅ Imágenes optimizadas con Next.js Image
- ✅ Semantic HTML5
- ✅ Accesibilidad (ARIA labels)
- ✅ Core Web Vitals optimizados

## 🚀 Stack Tecnológico

- **Framework:** Next.js 14 (App Router)
- **Lenguaje:** TypeScript
- **Estilos:** Tailwind CSS
- **Animaciones:** Framer Motion
- **Fuentes:** Google Fonts (Playfair Display + Inter)
- **Iconos:** Heroicons (SVG inline)

## 📦 Instalación

```bash
# Clonar el repositorio
git clone [url-del-repo]

# Navegar al directorio
cd demoRestaurantePremium

# Instalar dependencias
npm install

# Modo desarrollo
npm run dev

# Abrir en el navegador
# http://localhost:3000
```

## 🏗️ Estructura del Proyecto

```
demoRestaurantePremium/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Layout principal con metadata
│   │   ├── page.tsx             # Página home
│   │   └── globals.css          # Estilos globales
│   └── components/
│       ├── Navigation.tsx       # Barra de navegación
│       ├── Hero.tsx             # Sección hero
│       ├── Experience.tsx       # Filosofía y chef
│       ├── Menu.tsx             # Carta y menús
│       ├── Gallery.tsx          # Galería de fotos
│       ├── Reservations.tsx     # Formulario reservas
│       ├── Testimonials.tsx     # Opiniones
│       ├── Location.tsx         # Ubicación y mapa
│       ├── Footer.tsx           # Pie de página
│       └── WhatsAppButton.tsx   # Botón flotante
├── public/
│   └── [assets estáticos]
├── tailwind.config.ts
├── tsconfig.json
├── next.config.js
└── package.json
```

## 🎨 Paleta de Colores

```css
Primary (Dorado):
  - 600: #8b6f47
  - 500: #a88968
  - 400: #bea891

Dark (Fondos):
  - 950: #0a0a0a
  - 900: #1a1a1a
  - 800: #2d2d2d
```

## 🔧 Scripts Disponibles

```bash
npm run dev      # Desarrollo en http://localhost:3000
npm run build    # Build de producción
npm run start    # Servidor de producción
npm run lint     # Linter ESLint
```

## 🚀 Despliegue en Vercel

1. Push del código a GitHub
2. Importar proyecto en [Vercel](https://vercel.com)
3. Configurar variables de entorno (si las hay)
4. Deploy automático

```bash
# O usar Vercel CLI
npx vercel
```

## 📱 Personalización

### Cambiar Información de Contacto

Edita los siguientes archivos:

- `src/components/Reservations.tsx` - Número de WhatsApp
- `src/components/Footer.tsx` - Dirección, teléfono, email
- `src/components/Location.tsx` - Ubicación en mapa

### Actualizar Imágenes

Reemplaza las URLs de Unsplash en cada componente por tus propias imágenes.
Puedes usar imágenes locales en la carpeta `/public`.

### Modificar Contenido

- **Menú:** `src/components/Menu.tsx` - Arrays `dishes` y `menus`
- **Testimonios:** `src/components/Testimonials.tsx` - Array `testimonials`
- **Galería:** `src/components/Gallery.tsx` - Array `images`

## ✨ Características Premium

- 🎭 **Animaciones al Scroll** - Elementos que aparecen suavemente
- 🔄 **Microinteracciones** - Hover effects en todos los botones
- 📊 **Smooth Scrolling** - Navegación suave entre secciones
- 🎯 **Call-to-Actions** - Botones estratégicamente ubicados
- 💬 **WhatsApp Directo** - Contacto instantáneo
- 🗺️ **Mapa Integrado** - Google Maps responsive
- ⭐ **Social Proof** - Ratings y testimonios reales

## 📄 Licencia

Este es un proyecto demo. Libre para uso personal y comercial.

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor, abre un issue primero para discutir cambios mayores.

## 📧 Contacto

Para preguntas o soporte, contacta a través de [tu-email@ejemplo.com]

---

**Desarrollado con ❤️ para restaurantes premium**

*Next.js 14 • TypeScript • Tailwind CSS • Framer Motion*
