import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://brasayolivo.com'),
  title: 'Brasa & Olivo | Alta Cocina Mediterránea a la Brasa',
  description: 'Restaurante premium de alta cocina mediterránea. Producto de temporada, brasas y tradición. Reserva tu mesa en el corazón de la ciudad.',
  keywords: ['restaurante', 'alta cocina', 'mediterráneo', 'brasa', 'gastronomía', 'reservas', 'menú degustación'],
  authors: [{ name: 'Brasa & Olivo' }],
  openGraph: {
    title: 'Brasa & Olivo | Alta Cocina Mediterránea a la Brasa',
    description: 'Restaurante premium de alta cocina mediterránea. Producto de temporada, brasas y tradición.',
    url: 'https://brasayolivo.com',
    siteName: 'Brasa & Olivo',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Brasa & Olivo Restaurant',
      },
    ],
    locale: 'es_ES',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Brasa & Olivo | Alta Cocina Mediterránea a la Brasa',
    description: 'Restaurante premium de alta cocina mediterránea. Producto de temporada, brasas y tradición.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>{children}</body>
    </html>
  )
}
