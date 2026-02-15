import type { Metadata } from 'next';
import { Poppins, Gochi_Hand } from 'next/font/google';
import './globals.css';
import React from 'react';
// eslint-disable-next-line import/order
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import Navbar from '@/app/components/shared/navbar';
import Footer from '@components/shared/footer';
config.autoAddCss = false;

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
});

const gochiHand = Gochi_Hand({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-gochi-hand',
  display: 'swap',
});

export const metadata: Metadata = {
  title:
    'St. Joseph Agricultural Farms Ntangala-Katikamu Luweero District | Integrated Farming & Farmer Training in Uganda",',
  description:
    'St. Joseph Agricultural Farm in Luweero District, Uganda is a model integrated farm specializing in poultry, coffee, banana production, and plantation forestry. Founded by Joseph Lwevuze, the farm has trained over 4,000 farmers and promotes sustainable, profitable agriculture through practical, hands-on training.',
  keywords: [
    'St Joseph Agricultural Training Centre Ntangala',
    'Joseph Lwevuze',
    'Integrated farming Uganda',
    'Farmer training Uganda',
    'Poultry farming Uganda',
    'Coffee farming Uganda',
    'Banana production Uganda',
    'Plantation forestry Uganda',
    'Agricultural training centre Luweero',
    'Sustainable farming Uganda',
    'Organic farming Uganda',
    'Modern agriculture Uganda',
    'Farm visits Uganda',
    'Agribusiness training Uganda',
  ],
  openGraph: {
    title:
      'St. Joseph Agricultural Farm- Ntangala Katikamu Luweero District | Integrated Farming in Uganda',
    description:
      'A nationally recognized integrated farm in Luweero District, Uganda specializing in poultry, coffee, banana production, and farmer training. Over 4,000 farmers trained in sustainable and profitable agriculture.',
    url: 'https://stjosephruraltrainingcenter.com',
    siteName: 'St. Joseph Agricultural Farm',
    locale: 'en_UG',
    type: 'website',
    images: [
      {
        url: '/assets/logo3-bg.png',
        width: 630,
        height: 630,
        alt: 'St. Joseph Agricultural Farm - Logo',
      },
    ],
  },
  category: 'Agriculture',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased ${gochiHand.variable}`}>
        <div className="bg-white">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
