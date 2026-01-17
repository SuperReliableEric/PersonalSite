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
    default: 'Esha Kurana | Game Developer',
    template: '%s | Esha Kurana'
  },
  description:
    'Game developer focused on mobile experiences, tight feedback loops, and shippable prototypes. Writing about game feel, production habits, and performance budgets.',
  metadataBase: new URL('https://example.com'),
  openGraph: {
    title: 'Esha Kurana | Game Developer',
    description:
      'Mobile game developer focused on tactile experiences, performance budgets, and shipping prototypes that feel great.',
    url: 'https://example.com',
    siteName: 'Esha Kurana',
    images: [
      {
        url: '/og.png',
        width: 1200,
        height: 630,
        alt: 'Esha Kurana personal site'
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
