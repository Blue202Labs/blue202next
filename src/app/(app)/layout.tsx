import type { Metadata } from "next";
import Script from "next/script";

import { Source_Sans_3, Roboto_Mono } from "next/font/google";
import { ReactNode } from "react";
import { Header } from "./components/Header";
import "./globals.css";
import { Footer } from "./components/Footer";

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-source-sans",
});

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-roboto-mono",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en" className={`${sourceSans.variable} ${robotoMono.variable}`}>
      <body>
        <Script id="mautic">{`(function(w,d,t,u,n,a,m){w['MauticTrackingObject']=n;
          w[n]=w[n]||function(){(w[n].q=w[n].q||[]).push(arguments)},a=d.createElement(t),
          m=d.getElementsByTagName(t)[0];a.async=1;a.src=u;m.parentNode.insertBefore(a,m)
      })(window,document,'script','https://crm.blue202labs.com/mtc.js','mt');
  
      mt('send', 'pageview');`}</Script>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;