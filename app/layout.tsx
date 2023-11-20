import type {Metadata} from 'next';
import {Inter, Hanken_Grotesk} from 'next/font/google';
import './globals.css';

const inter = Inter({subsets: ['latin']});
const hanken = Hanken_Grotesk({subsets: ['latin']});

export const metadata: Metadata = {
  title: 'Result Summary Card',
  description: 'Result Summary Card Component Made with Next.js',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className={hanken.className}>{children}</body>
    </html>
  );
}
