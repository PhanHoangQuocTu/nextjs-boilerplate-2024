import '@/styles/globals.css';

import { type Metadata, type Viewport } from 'next';
import { env } from '@/utils/const';
import clsx from 'clsx';

import { fontPoppins, fontSans } from '@/config/fonts';
import { siteConfig } from '@/config/site';
import MainLayout from '@/components/layouts/MainLayout';

import { Providers } from './providers';

export const metadata: Metadata = {
  metadataBase: new URL(env.APP_URL),
  title: siteConfig.name,
  description: siteConfig.description,
  generator: 'Next.js',
  applicationName: siteConfig.name,
  referrer: 'origin-when-cross-origin',
  keywords: [],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    images: [siteConfig.ogImage],
    description: siteConfig.description,
    title: {
      default: siteConfig.name,
      template: `${siteConfig.name} - %s`,
    },
  },
  icons: {
    icon: '/og-image.png',
    shortcut: '/og-image.png',
    apple: '/og-image.png',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: `@${siteConfig.name}`,
  },
};

export const viewport: Viewport = {
  width: 1,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        suppressHydrationWarning
        className={clsx('bg-background font-poppins min-h-screen antialiased', fontPoppins.variable, fontSans.variable)}
      >
        <Providers themeProps={{ attribute: 'class', forcedTheme: 'light' }}>
          <MainLayout>{children} </MainLayout>
        </Providers>
      </body>
    </html>
  );
}
