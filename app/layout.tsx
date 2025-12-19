import type { Metadata, Viewport } from 'next'
import './globals.css'
import Navigation from '../src/components/Navigation'
import Footer from '../src/components/Footer'
import OutbackBackground from '../src/components/OutbackBackground'
import PWAWrapper from '../src/components/PWAWrapper'
import OfflineStatus from '../src/components/OfflineStatus'
import Providers from '../src/components/Providers'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: '#c2410c',
}


export const metadata: Metadata = {
  title: {
    default: 'Running to God - A Journey of Faith Through the Australian Outback',
    template: '%s | Running to God',
  },
  description: 'An Australian outback road trip journey from Perth to Port Lincoln, exploring faith, purpose, and the spiritual journey of running from ourselves into the arms of God.',
  keywords: ['Christian faith', 'Australian outback', 'spiritual journey', 'Bible study', 'road trip', 'camping', 'devotionals', 'finding God', 'Perth to Port Lincoln', 'bush tucker', 'faith adventure'],
  authors: [{ name: 'Running to God Ministry' }],
  creator: 'Running to God Ministry',
  applicationName: 'Running to God',
  appleWebApp: {
    capable: true,
    title: 'Running to God',
    statusBarStyle: 'default',
  },
  formatDetection: {
    telephone: false,
  },
  publisher: 'Running to God Ministry',
  icons: {
    icon: '/running-to-god-icon.svg',
    apple: [
      { url: '/running-to-god-icon.svg', sizes: '180x180', type: 'image/svg+xml' },
      { url: '/running-to-god-icon.svg' },
    ],
  },
  manifest: '/manifest.json',
  metadataBase: new URL('https://runningtogod.faith'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_AU',
    url: 'https://runningtogod.faith',
    siteName: 'Running to God',
    title: 'Running to God - A Journey of Faith Through the Australian Outback',
    description: 'An Australian outback road trip journey exploring faith, purpose, and the spiritual journey of running from ourselves into the arms of God.',
    images: [
      {
        url: '/running-to-god-icon.svg',
        width: 800,
        height: 800,
        alt: 'Running to God - Road stretching toward the horizon with cross',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Running to God - A Journey of Faith',
    description: 'An Australian outback road trip exploring faith and the spiritual journey to God.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  other: {
    'mobile-web-app-capable': 'yes',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Running to God" />
        <link rel="apple-touch-icon" href="/running-to-god-icon.svg" />
        <meta name="theme-color" content="#c2410c" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Crimson+Text:ital,wght@0,400;0,600;1,400&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Running to God Ministry",
              "url": "https://runningtogod.faith",
              "logo": "https://runningtogod.faith/running-to-god-icon.svg",
              "description": "A Christian ministry sharing faith through stories of an Australian outback road trip journey, exploring how we can run from ourselves and into the loving arms of God.",
              "sameAs": [],
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "Ministry Support",
                "email": "contact@runningtogod.faith"
              }
            })
          }}
        />
      </head>
      <body>
        <Providers>
          <OutbackBackground />
          <OfflineStatus />
          <div className="relative z-10">
            <Navigation />
            <main>{children}</main>
            <Footer />
          </div>
          <PWAWrapper />
        </Providers>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', () => {
                  navigator.serviceWorker.register('/sw.js')
                    .then((registration) => {
                      console.log('SW registered: ', registration);
                    })
                    .catch((registrationError) => {
                      console.log('SW registration failed: ', registrationError);
                    });
                });
              }
            `,
          }}
        />
      </body>
    </html>
  )
}
