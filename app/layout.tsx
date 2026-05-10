import type { Metadata } from 'next';
import { Playfair_Display, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/providers/ThemeProvider';
import { Analytics } from '@vercel/analytics/next';

const playfair = Playfair_Display({
  variable: '--font-playfair',
  subsets: ['latin'],
  weight: ['400', '700', '900'],
  style: ['normal', 'italic'],
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  variable: '--font-jetbrains-mono',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: "Anderson Sant'Anna — Senior React Native Engineer",
    template: "%s | Anderson Sant'Anna",
  },
  description:
    'Senior React Native & TypeScript Engineer with 8 years of experience building mobile and web products for millions of users across Latin America.',
  openGraph: {
    title: "Anderson Sant'Anna — Senior React Native Engineer",
    description:
      'Senior React Native & TypeScript Engineer with 8 years of experience building mobile and web products.',
    images: ['/og-image.png'],
  },
  twitter: { card: 'summary_large_image' },
  metadataBase: new URL('https://andersonsantanna.io'),
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang='en'
      className={`${playfair.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <body className='min-h-screen bg-background antialiased'>
        <ThemeProvider>
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
