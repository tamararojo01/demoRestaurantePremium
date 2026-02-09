# Brasa & Olivo - Guía de Despliegue en Vercel

## 📦 Despliegue Rápido

### Opción 1: Deploy desde GitHub

1. **Push a GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Brasa & Olivo Restaurant"
   git branch -M main
   git remote add origin [tu-repo-url]
   git push -u origin main
   ```

2. **Importar en Vercel**
   - Ve a [vercel.com](https://vercel.com)
   - Click en "New Project"
   - Importa tu repositorio de GitHub
   - Vercel detectará automáticamente Next.js
   - Click en "Deploy"

### Opción 2: Deploy con Vercel CLI

```bash
# Instalar Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy
vercel

# Production deploy
vercel --prod
```

## ⚙️ Configuración en Vercel

### Variables de Entorno

Añade estas variables en el dashboard de Vercel:

```
NEXT_PUBLIC_SITE_URL=https://tu-dominio.com
NEXT_PUBLIC_WHATSAPP_NUMBER=34600000000
NEXT_PUBLIC_PHONE=+34912345678
NEXT_PUBLIC_EMAIL=info@brasayolivo.com
```

### Dominio Personalizado

1. En el dashboard de Vercel, ve a Settings > Domains
2. Añade tu dominio personalizado
3. Configura los DNS según las instrucciones

## 🔧 Configuración de Proyecto

El proyecto ya incluye:
- ✅ `next.config.js` optimizado
- ✅ Optimización de imágenes automática
- ✅ SEO completo
- ✅ Sitemap automático
- ✅ Compresión gzip/brotli

## 📊 Post-Deployment

### Verificar

- [ ] Prueba todas las secciones
- [ ] Verifica el botón de WhatsApp
- [ ] Comprueba el formulario de reservas
- [ ] Testea la navegación en mobile
- [ ] Verifica Google Maps
- [ ] Comprueba redes sociales

### Optimización

```bash
# Analizar el bundle
npm run build

# Lighthouse CI
npx @lhci/cli@0.12.x autorun
```

### Analytics (Opcional)

1. Google Analytics: Añade `NEXT_PUBLIC_GA_ID` en variables de entorno
2. Vercel Analytics: Actívalo en el dashboard

## 🚀 Performance

El sitio está optimizado para:
- ⚡ Core Web Vitals
- 📱 Mobile-first
- 🖼️ Lazy loading de imágenes
- 💨 Código splitting automático
- 🎯 SEO optimizado

## 📝 Notas

- El sitio es estático por defecto (SSG)
- Primera carga optimizada: ~142 KB
- Todas las páginas están pre-renderizadas
- Imágenes optimizadas automáticamente por Next.js

## 🔄 Actualizaciones

Para actualizar el sitio:

```bash
# Hacer cambios en el código
git add .
git commit -m "Update: descripción del cambio"
git push

# Vercel desplegará automáticamente
```

## 🆘 Troubleshooting

**Error de build**: Verifica que todas las dependencias estén en package.json

**Imágenes no cargan**: Añade el dominio en `next.config.js` > `images.domains`

**404 en rutas**: El proyecto usa App Router, asegúrate de usar Next.js 14+

## 📞 Soporte

Para problemas de deployment, consulta:
- [Documentación de Vercel](https://vercel.com/docs)
- [Documentación de Next.js](https://nextjs.org/docs)
