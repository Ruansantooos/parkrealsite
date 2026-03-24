import type { Metadata } from 'next'
import { Outfit } from 'next/font/google'
import './globals.css'

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-outfit',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Park Real Estacionamentos | Estacionamento Premium em São Paulo',
    template: '%s | Park Real Estacionamentos',
  },
  description:
    'Park Real Estacionamentos — estacionamento premium com segurança 24h, monitoramento por câmeras com IA, manobristas certificados e autotech de ponta em São Paulo. Reserve sua vaga online.',
  keywords: [
    'estacionamento premium São Paulo',
    'estacionamento seguro SP',
    'manobrista profissional',
    'estacionamento mensal São Paulo',
    'Park Real Estacionamentos',
    'vaga de estacionamento SP',
    'estacionamento com câmera',
    'autotech estacionamento',
    'reserva de vaga São Paulo',
    'estacionamento 24 horas SP',
  ],
  authors: [{ name: 'Park Real Estacionamentos' }],
  creator: 'Park Real Estacionamentos',
  publisher: 'Park Real Estacionamentos',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://www.parkreal.com.br',
    siteName: 'Park Real Estacionamentos',
    title: 'Park Real Estacionamentos | Estacionamento Premium em São Paulo',
    description:
      'Estacionamento premium com segurança 24h, câmeras com IA, manobristas certificados e autotech de ponta. Reserve sua vaga em São Paulo.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Park Real Estacionamentos — Estacionamento Premium São Paulo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Park Real Estacionamentos | Estacionamento Premium São Paulo',
    description:
      'Estacionamento premium com segurança 24h e autotech de ponta em São Paulo.',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://www.parkreal.com.br',
  },
  category: 'business',
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ParkingFacility',
  name: 'Park Real Estacionamentos',
  description:
    'Estacionamento premium com segurança 24h, monitoramento por câmeras com IA, manobristas certificados e autotech de ponta em São Paulo.',
  url: 'https://www.parkreal.com.br',
  telephone: '+55-11-98181-7779',
  email: 'contato@parkreal.com.br',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'São Paulo',
    addressRegion: 'SP',
    addressCountry: 'BR',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: -23.563,
    longitude: -46.6557,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '07:00',
      closes: '22:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Saturday', 'Sunday'],
      opens: '08:00',
      closes: '20:00',
    },
  ],
  priceRange: '$$',
  image: '/og-image.jpg',
  sameAs: [
    'https://wa.me/5511981817779',
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={outfit.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
