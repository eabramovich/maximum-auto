import localFont from "next/font/local";
import "./fonts/font.css";
import "./styles/globals.css";
import Header from "@/components/header/Header";
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
  weight: ['400', '700'],
  variable: '--font-montserrat',
  display: 'block',
  fallback: ['sans-serif']
});


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const bebasNeueRegular = localFont({
  src: "./fonts/BebasNeue-Regular.ttf",
  variable: "--font-bebas-neue",
  weight: "400"
})


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <body className={`${geistSans.variable} ${geistMono.variable}`}> */}
      {/* <body className={`${bebasNeueRegular.variable}`}> */}
      <body className={`${montserrat.variable} ${inter.variable}`}>
          <Header />
          <main className="content">
            {children}
          </main>
      </body>
    </html>
  );
}
