import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-inter',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-playfair',
});

export const metadata = {
  title: 'Sage & Stone Wellness \u2013 Premium Med Spa & Day Spa',
  description:
    'Rejuvenate your body and mind with our premium med spa and day spa treatments. Book facials, massages, body treatments, and aesthetic services.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className={inter.className}>
        <AppRouterCacheProvider>{children}</AppRouterCacheProvider>
      </body>
    </html>
  );
}
