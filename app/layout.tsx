import type { Metadata, Viewport } from 'next';
import { Inter, Manrope } from 'next/font/google';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { JsonLd } from '@/components/seo/JsonLd';
import { siteConfig } from '@/lib/site';
import './globals.css';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
});

const manrope = Manrope({
  variable: '--font-manrope',
  subsets: ['latin'],
  display: 'swap',
});

const homeTitle = 'Professional Websites for Local Businesses | LocalLift Studios';
const socialImage = new URL('/opengraph-image', siteConfig.url).toString();

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: homeTitle,
  description: siteConfig.description,
  applicationName: siteConfig.name,
  manifest: '/manifest.webmanifest',
  category: 'business',
  creator: siteConfig.name,
  publisher: siteConfig.name,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: homeTitle,
    description: siteConfig.description,
    images: [
      {
        url: socialImage,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} — professional websites for local businesses`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: homeTitle,
    description: siteConfig.description,
    images: [socialImage],
  },
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
};

export const viewport: Viewport = {
  themeColor: '#0F172A',
  colorScheme: 'light',
};

const organizationId = `${siteConfig.url}/#organization`;

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': organizationId,
      name: siteConfig.name,
      alternateName: siteConfig.shortName,
      url: siteConfig.url,
      email: siteConfig.email,
      description: siteConfig.description,
      location: {
        '@type': 'Place',
        name: siteConfig.location,
      },
      founder: [
        {
          '@type': 'Person',
          name: 'Kunj Tailor',
        },
        {
          '@type': 'Person',
          name: 'Aryan Mitra',
        },
      ],
    },
    {
      '@type': 'WebSite',
      '@id': `${siteConfig.url}/#website`,
      url: siteConfig.url,
      name: siteConfig.name,
      description: siteConfig.description,
      inLanguage: 'en-US',
      publisher: {
        '@id': organizationId,
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${manrope.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col font-body bg-background text-foreground">
        <JsonLd data={organizationJsonLd} />
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
