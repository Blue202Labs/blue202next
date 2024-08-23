import type { Metadata } from "next";
import Script from "next/script";

import {
  Source_Sans_3,
  Roboto_Mono,
  Plus_Jakarta_Sans,
} from "next/font/google";
import { ReactNode } from "react";
import { Header } from "./components/Header";
import "./globals.css";
import opengraphImage from "/public/images/opengraph-image.jpg";
import { Footer } from "./components/Footer";

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-source-sans",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta-sans",
});

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-roboto-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.blue202labs.com"),
  title: "Blue202 Labs | Leading Web Development Services",
  description:
    "Leading web software and mobile app development services. Trusted by UPS, AspenDental, RxForms and more.",
  openGraph: {
    title:
      "Blue202 Labs - Transforming Businesses with Cutting-Edge Digital Solutions",
    description:
      "Leading web software and mobile app development services. Trusted by UPS, AspenDental, RxForms and more.",
    images: opengraphImage.src,
    siteName: "Blue202 Labs",
    type: "website",
  },
};

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html
      lang="en"
      className={`${sourceSans.variable} ${robotoMono.variable} ${plusJakartaSans.variable}`}
    >
      <body id="root" className="min-h-screen flex flex-col justify-between">
        <Script id="mautic">{`(function(w,d,t,u,n,a,m){w['MauticTrackingObject']=n;
          w[n]=w[n]||function(){(w[n].q=w[n].q||[]).push(arguments)},a=d.createElement(t),
          m=d.getElementsByTagName(t)[0];a.async=1;a.src=u;m.parentNode.insertBefore(a,m)
      })(window,document,'script','https://crm.blue202labs.com/mtc.js','mt');
  
      mt('send', 'pageview');`}</Script>
        <Header />
        <main className="font-body-sans">{children}</main>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
