import localFont from "next/font/local";
import "./fonts/font.css";
import "./styles/globals.css";
import { Inter, Montserrat } from 'next/font/google';

export const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '700'],
  variable: '--font-inter',
  display: 'block',
  fallback: ['sans-serif']
});

export const montserrat = Montserrat({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '500', '700'],
  variable: '--font-montserrat',
  display: 'block',
  fallback: ['sans-serif']
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} ${inter.variable}`}>
            {children}
      </body>
    </html>
  );
}
