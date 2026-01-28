import type { Metadata } from 'next';
import { Poppins, Gochi_Hand } from 'next/font/google';
import './globals.css';
import React from 'react';
// eslint-disable-next-line import/order
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import Footer from './components/shared/Footer';
import Navbar from './components/shared/Navbar';

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
  title: 'St Joseph Farms',
  description: 'A commercial farming enterprise',
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
