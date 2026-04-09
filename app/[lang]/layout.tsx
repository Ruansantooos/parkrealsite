import type { Metadata } from 'next'
import { Outfit } from 'next/font/google'
import './globals.css'
import { I18nProvider } from '@/components/I18nProvider'
import { getDictionary, Locale } from '../dictionaries'

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-outfit',
  display: 'swap',
})

const seoData: Record<Locale, { title: string; description: string; keywords: string[] }> = {
  pt: {
    title: 'Park Real Estacionamentos | Estacionamento Premium em São Paulo',
    description:
      'Estacionamento premium em São Paulo com segurança 24h, câmeras de IA, manobristas profissionais e vagas mensais. Atendimento VIP, Sistema WPS Brasil e reserva fácil.',
    keywords: [
      'estacionamento São Paulo',
      'estacionamento premium SP',
      'estacionamento seguro São Paulo',
      'estacionamento mensal São Paulo',
      'vaga de estacionamento SP',
      'manobrista profissional São Paulo',
      'estacionamento 24h SP',
      'estacionamento com câmera São Paulo',
      'garagem SP',
      'estacionamento VIP São Paulo',
      'estacionamento rotativo SP',
      'vaga mensal São Paulo',
      'estacionamento perto de mim',
      'guardar carro São Paulo',
      'Park Real Estacionamentos',
      'estacionamento monitorado SP',
      'estacionamento com manobrista',
      'vaga de garagem São Paulo',
      'estacionamento executivo SP',
      'estacionamento empresarial São Paulo',
    ],
  },
  en: {
    title: 'Park Real | Premium Parking in São Paulo, Brazil',
    description:
      'Premium parking in São Paulo with 24/7 security, AI cameras, professional valets, and monthly spots. VIP service, WPS Brazil System, and easy booking.',
    keywords: [
      'parking São Paulo',
      'premium parking Brazil',
      'valet parking São Paulo',
      'monthly parking SP',
      'safe parking São Paulo',
      'parking garage Brazil',
      'Park Real parking',
      '24h parking São Paulo',
    ],
  },
  es: {
    title: 'Park Real | Estacionamiento Premium en São Paulo, Brasil',
    description:
      'Estacionamiento premium en São Paulo con seguridad 24h, cámaras IA, valets profesionales y lugares mensuales. Atención VIP y Sistema WPS Brasil.',
    keywords: [
      'estacionamiento São Paulo',
      'estacionamiento premium Brasil',
      'valet parking São Paulo',
      'estacionamiento mensual SP',
      'estacionamiento seguro São Paulo',
      'Park Real estacionamiento',
    ],
  },
}

export async function generateMetadata({ params: { lang } }: { params: { lang: Locale } }): Promise<Metadata> {
  const seo = seoData[lang] ?? seoData['pt']
  const canonicalUrl = `https://www.parkreal.com.br/${lang}`

  return {
    title: {
      default: seo.title,
      template: `%s | Park Real Estacionamentos`,
    },
    description: seo.description,
    keywords: seo.keywords,
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
        'max-video-preview': -1,
      },
    },
    openGraph: {
      type: 'website',
      locale: lang === 'pt' ? 'pt_BR' : lang === 'en' ? 'en_US' : 'es_ES',
      url: canonicalUrl,
      siteName: 'Park Real Estacionamentos',
      title: seo.title,
      description: seo.description,
      images: [
        {
          url: 'https://www.parkreal.com.br/og-image.jpg',
          width: 1200,
          height: 630,
          alt: 'Park Real Estacionamentos — Estacionamento Premium em São Paulo',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: seo.title,
      description: seo.description,
      images: ['https://www.parkreal.com.br/og-image.jpg'],
    },
    alternates: {
      canonical: canonicalUrl,
      languages: {
        'pt-BR': 'https://www.parkreal.com.br/pt',
        'en-US': 'https://www.parkreal.com.br/en',
        'es-ES': 'https://www.parkreal.com.br/es',
        'x-default': 'https://www.parkreal.com.br/pt',
      },
    },
    category: 'business',
    verification: {
      google: '', // cole aqui o código do Google Search Console quando tiver
    },
  }
}

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'ParkingFacility',
    name: 'Park Real Estacionamentos',
    description:
      'Estacionamento premium em São Paulo com segurança 24h, monitoramento por câmeras com IA, manobristas certificados, vagas mensais e Sistema WPS Brasil.',
    url: 'https://www.parkreal.com.br',
    telephone: '+55-11-98181-7779',
    email: 'contato@parkreal.com.br',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'São Paulo',
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
    image: 'https://www.parkreal.com.br/og-image.jpg',
    logo: 'https://www.parkreal.com.br/logo/logo-correto.svg',
    sameAs: [
      'https://wa.me/5511981817779',
      'https://www.instagram.com/golden.ai_/',
    ],
    hasMap: 'https://maps.google.com/?q=-23.563,-46.6557',
    currenciesAccepted: 'BRL',
    paymentAccepted: 'Cash, Credit Card, Debit Card, PIX',
    amenityFeature: [
      { '@type': 'LocationFeatureSpecification', name: 'Segurança 24 horas', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Câmeras de IA', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Manobrista', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Vagas Mensais', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Sistema WPS Brasil', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Leitura de Placas LPR', value: true },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'O estacionamento Park Real tem manobrista?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Sim, o Park Real conta com manobristas profissionais treinados nos mais altos padrões de cortesia e eficiência.',
        },
      },
      {
        '@type': 'Question',
        name: 'O Park Real oferece vagas mensais?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Sim, oferecemos plano mensalista com vaga garantida, acesso livre 24h e atendimento prioritário. Entre em contato via WhatsApp para valores.',
        },
      },
      {
        '@type': 'Question',
        name: 'Qual o horário de funcionamento do Park Real?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Segunda a sexta das 07h às 22h. Sábados e domingos das 08h às 20h.',
        },
      },
      {
        '@type': 'Question',
        name: 'O estacionamento tem câmeras de segurança?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Sim, monitoramento 24h com câmeras de inteligência artificial e detecção de incidentes em tempo real através do Sistema WPS Brasil.',
        },
      },
    ],
  },
]

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { lang: Locale }
}) {
  const dict = getDictionary(params.lang)
  
  return (
    <html lang={params.lang || "pt"} className={outfit.variable}>
      <head>
        {jsonLd.map((schema, i) => (
          <script
            key={i}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}
      </head>
      <body className="font-sans antialiased">
        <I18nProvider dict={dict} locale={params.lang || 'pt'}>
          {children}
        </I18nProvider>
      </body>
    </html>
  )
}
