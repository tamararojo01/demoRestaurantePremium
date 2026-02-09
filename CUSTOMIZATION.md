# Brasa & Olivo - Guía de Personalización

## 🎨 Personalización Rápida

### 1. Información de Contacto

#### WhatsApp y Teléfono

**Archivos a modificar:**
- [src/components/WhatsAppButton.tsx](src/components/WhatsAppButton.tsx#L7)
- [src/components/Reservations.tsx](src/components/Reservations.tsx#L52-L53)
- [src/components/Footer.tsx](src/components/Footer.tsx)

```tsx
// Cambiar número de WhatsApp
const whatsappNumber = '34612345678' // Tu número real
```

#### Email y Dirección

**Archivo:** [src/components/Footer.tsx](src/components/Footer.tsx)

```tsx
// Buscar y reemplazar:
+34 912 345 678        → Tu teléfono
info@brasayolivo.com   → Tu email
Calle de la...         → Tu dirección
```

### 2. Contenido del Menú

**Archivo:** [src/components/Menu.tsx](src/components/Menu.tsx#L54-L97)

```tsx
const dishes = [
  {
    name: 'Tu Plato',
    description: 'Descripción del plato',
    price: 25,
    image: '/images/tu-imagen.jpg', // O URL de Unsplash
    allergens: 'Gluten, lácteos',
  },
  // ... más platos
]
```

### 3. Menús Degustación

**Archivo:** [src/components/Menu.tsx](src/components/Menu.tsx#L99-L133)

```tsx
const menus = [
  {
    name: 'Menú Premium',
    price: 85,
    courses: 7,
    items: ['Entrante 1', 'Plato principal', '...'],
    wine: 'Maridaje incluido',
  },
]
```

### 4. Testimonios

**Archivo:** [src/components/Testimonials.tsx](src/components/Testimonials.tsx#L50-L67)

```tsx
const testimonials = [
  {
    quote: 'Testimonio del cliente',
    author: 'Nombre Cliente',
    platform: 'Google Reviews',
  },
]
```

### 5. Imágenes

#### Opción A: Usar tus propias imágenes

1. Coloca las imágenes en `/public/images/`
2. Actualiza las rutas:

```tsx
// De:
src="https://images.unsplash.com/..."

// A:
src="/images/hero.jpg"
```

#### Opción B: Mantener Unsplash

Busca imágenes en [unsplash.com](https://unsplash.com) y actualiza las URLs.

### 6. Colores del Tema

**Archivo:** [tailwind.config.ts](tailwind.config.ts#L10-L31)

```ts
colors: {
  primary: {
    400: '#bea891', // Color principal claro
    500: '#a88968', // Color principal
    600: '#8b6f47', // Color principal oscuro
  },
}
```

### 7. Google Maps

**Archivo:** [src/components/Location.tsx](src/components/Location.tsx#L45-L53)

1. Ve a [Google Maps](https://www.google.com/maps)
2. Busca tu ubicación
3. Click en "Compartir" → "Insertar un mapa"
4. Copia el `src` del iframe
5. Reemplázalo en el código

### 8. Redes Sociales

**Archivo:** [src/components/Footer.tsx](src/components/Footer.tsx#L8-L32)

```tsx
const socialLinks = [
  {
    name: 'Instagram',
    href: 'https://instagram.com/tu_usuario',
    icon: <svg>...</svg>
  },
]
```

### 9. Horarios

**Archivo:** [src/components/Reservations.tsx](src/components/Reservations.tsx#L166-L176)

```tsx
<div className="space-y-2 text-sm">
  <div className="flex justify-between">
    <span>Comidas:</span>
    <span>13:00 - 16:00</span> {/* Tus horarios */}
  </div>
</div>
```

### 10. Metadata SEO

**Archivo:** [src/app/layout.tsx](src/app/layout.tsx#L4-L39)

```tsx
export const metadata: Metadata = {
  title: 'Tu Restaurante | Descripción',
  description: 'Tu descripción SEO personalizada',
  // ... actualizar todo
}
```

## 🎯 Checklist de Personalización

- [ ] Número de WhatsApp
- [ ] Teléfono de contacto
- [ ] Email
- [ ] Dirección física
- [ ] Platos del menú (mínimo 6)
- [ ] Menús degustación (2-3)
- [ ] Testimonios (3-5)
- [ ] Imágenes (8-10)
- [ ] Google Maps
- [ ] Redes sociales
- [ ] Horarios
- [ ] Metadata SEO
- [ ] Colores (opcional)

## 📁 Estructura de Archivos para Editar

```
src/
├── app/
│   └── layout.tsx          → SEO y metadata
├── components/
│   ├── Hero.tsx            → Título y claim principal
│   ├── Experience.tsx      → Filosofía y chef
│   ├── Menu.tsx            → Platos y menús
│   ├── Gallery.tsx         → Galería de fotos
│   ├── Reservations.tsx    → Formulario y contacto
│   ├── Testimonials.tsx    → Opiniones
│   ├── Location.tsx        → Mapa y ubicación
│   ├── Footer.tsx          → Redes y horarios
│   └── WhatsAppButton.tsx  → Botón flotante
└── globals.css             → Estilos (opcional)
```

## 🚀 Aplicar Cambios

```bash
# Después de hacer cambios
npm run dev

# Verificar en http://localhost:3000

# Build de producción
npm run build
```

## 💡 Tips

1. **Imágenes**: Usa jpg comprimidas (max 200KB)
2. **Textos**: Sé conciso y específico
3. **Menú**: Destaca tus mejores platos
4. **Testimonios**: Usa opiniones reales (Google/TripAdvisor)
5. **SEO**: Incluye palabras clave de tu zona y especialidad

## 🆘 ¿Necesitas Ayuda?

Revisa el [README.md](README.md) para más información técnica.
