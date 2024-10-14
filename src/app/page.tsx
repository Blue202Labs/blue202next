"use client";

import { Hero } from "./home/Hero";
import { ClientCarousel } from "./home/ClientCarousel";
import { Services } from "./home/Services";
import { Reviews } from "./components/Reviews";
import { CallToAction } from "./home/CallToAction";
import { About } from "./home/About";
import { Contact } from "./components/Contact";
import { Summary } from "./home/Summary";
import { ResultsSummary } from "./home/Results";
import { useState } from "react";
import Loading from "./loading";
import { MockUp } from "./home/MockUp";
import { SteeyrMockup } from "./home/SteeyrMockup";
import { BreadcrumbList, Organization, WebPage, WithContext } from "schema-dts";

function Home() {
  const [loaded, setLoaded] = useState(false);

  const schemaWebpage: WithContext<WebPage> = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Web Development Company | Web & Mobile App Development Services | Blue202 Labs",
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
  };

  return (
    <div
      id="home"
      className={
        "h-full w-full overflow-x-hidden " + loaded ? "" : "max-h-screen"
      }
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaWebpage) }}
      />
      <Loading className={loaded ? "fade-out" : ""} />
      <Hero setLoaded={setLoaded} />
      <ClientCarousel />
      <Summary />
      <SteeyrMockup />
      <About />
      <MockUp />
      <ResultsSummary />
      <Services />
      <Reviews />
      <CallToAction />
      <Contact />
    </div>
  );
}

export default Home;
