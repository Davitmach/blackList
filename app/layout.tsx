import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import type { Metadata } from "next";
import { Geist, Geist_Mono, Roboto } from "next/font/google";
import "./globals.scss";
import { Header } from "./components/header/header";
import { Menu } from "./components/menu/menu";
import Script from 'next/script';
import { Full } from './components/full/full';
import { useTelegramButtons } from './hooks/btn';
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const roboto = Roboto({
  weight:['400','500','600','700','800','900'],
  subsets:["latin",'cyrillic']
})
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BlackList",
  description: "BlackList",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useTelegramButtons();
  return (
    <html lang="en">
      <body
        className={`${roboto.className}  antialiased`}
      >
        {/* <Header/> */}
        {children}
        <Menu/>
        <Full/>
        <Script src="https://telegram.org/js/telegram-web-app.js"/>
      </body>
    </html>
  );
}
