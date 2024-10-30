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
import { Organization, WebSite, WithContext } from "schema-dts";

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
  title: "Web Development Agency | Website Development Services",
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

const schemaWebsite: WithContext<WebSite> = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Blue202 Labs. Leading Web Development Company",
  url: "https://blue202labs.com",
  description:
    "Leading web software and mobile app development services. Trusted by UPS, AspenDental, RxForms and more.",
  publisher: {
    "@type": "Organization",
    name: "Blue202 Labs",
    logo: {
      "@type": "ImageObject",
      url: "https://blue202labs.com/_next/static/media/wordmark-colour.e1f78a33.svg",
    },
  },
  datePublished: "2024-7-28T17:40:42+00:00",
  dateModified: "2024-10-13T16:09:52+00:00",
  sameAs: [
    "https://www.linkedin.com/company/blue202labs",
    "https://www.instagram.com/blue202labs/",
    "https://www.designrush.com/agency/profile/blue202labs-llc",
    "https://clutch.co/profile/blue202-labs",
  ],
};

const schemaOrganization: WithContext<Organization> = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://blue202labs.com",
  name: "Blue202 Labs",
  sameAs: [
    "https://www.linkedin.com/company/blue202labs",
    "https://www.instagram.com/blue202labs/",
    "https://www.designrush.com/agency/profile/blue202labs-llc",
    "https://clutch.co/profile/blue202-labs",
  ],
  logo: {
    "@type": "ImageObject",
    url: "https://blue202labs.com/_next/static/media/wordmark-colour.e1f78a33.svg",
    caption: "Blue202 Labs",
  },
  numberOfEmployees: {
    "@type": "QuantitativeValue",
    value: 11,
  },
  knowsAbout: {
    "@type": "DefinedTerm",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+1-833-833-2029",
    contactType: "Sales & Support",
    availableLanguage: "English",
    email: "info@blue202labs.com",
  },
};

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html
      lang="en"
      className={`${sourceSans.variable} ${robotoMono.variable} ${plusJakartaSans.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaWebsite) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schemaOrganization),
          }}
        />
        <script id="apollo">{`function initApollo(){var n=Math.random().toString(36).substring(7),o=document.createElement("script");
o.src="https://assets.apollo.io/micro/website-tracker/tracker.iife.js?nocache="+n,o.async=!0,o.defer=!0,
o.onload=function(){window.trackingFunctions.onLoad({appId:"671f154821d56a0198de02b6"})},
document.head.appendChild(o)}initApollo();`}</script>
      </head>
      <body id="root" className="min-h-screen flex flex-col justify-between">
        <Script id="mautic">{`(function(w,d,t,u,n,a,m){w['MauticTrackingObject']=n;
          w[n]=w[n]||function(){(w[n].q=w[n].q||[]).push(arguments)},a=d.createElement(t),
          m=d.getElementsByTagName(t)[0];a.async=1;a.src=u;m.parentNode.insertBefore(a,m)
      })(window,document,'script','https://crm.blue202labs.com/mtc.js','mt');
  
      mt('send', 'pageview');`}</Script>
        <Script
          id="leadfeeder-tracking"
          strategy="afterInteractive"
        >{`(function(ss,ex){ window.ldfdr=window.ldfdr||function(){(ldfdr._q=ldfdr._q||[]).push([].slice.call(arguments));}; (function(d,s){ fs=d.getElementsByTagName(s)[0]; function ce(src){ var cs=d.createElement(s); cs.src=src; cs.async=1; fs.parentNode.insertBefore(cs,fs); }; ce('https://sc.lfeeder.com/lftracker_v1_'+ss+(ex?'_'+ex:'')+'.js'); })(document,'script'); })('JMvZ8gzXoZ1a2pOd');`}</Script>
        <Header />
        <main className="font-body-sans text-base md:text-lg">{children}</main>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
