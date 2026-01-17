import type { Metadata } from 'next';
import { Archivo, Manrope } from 'next/font/google';
import React from 'react';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import './globals.css';

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-manrope'
});

const archivo = Archivo({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-archivo'
});

export const metadata: Metadata = {
  title: {
    default: 'Eric Ashenden | Senior Site Reliability Engineer',
    template: '%s | Eric Ashenden'
  },
  description:
    'Senior site reliability engineer focused on resilient cloud systems, observability, automation, and production reliability.',
  metadataBase: new URL('https://ericashenden.com'),
  openGraph: {
    title: 'Eric Ashenden | Senior Site Reliability Engineer',
    description: 'Building resilient cloud platforms with automation, observability, and reliability at scale.',
    url: 'https://ericashenden.com',
    siteName: 'Eric Ashenden',
    images: [
      {
        url: '/og.png',
        width: 1200,
        height: 630,
        alt: 'Eric Ashenden personal site'
      }
    ],
    locale: 'en_US',
    type: 'website'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${manrope.variable} ${archivo.variable}`}>
      <body className="bg-surface text-ink antialiased">
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
