"use client";

import { Hero } from "./home/Hero";
import { Header } from "./components/Header";
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

function Home() {
  const [loaded, setLoaded] = useState(false);

  return (
    <main
      id="home"
      className={
        "h-full w-full overflow-x-hidden " + loaded ? "" : "max-h-screen"
      }
    >
      <Header />
      <Loading className={loaded ? "fade-out" : ""} />
      <Hero setLoaded={setLoaded} />
      <ClientCarousel />
      <Summary />
      <About />
      <MockUp />
      <ResultsSummary />
      <Services />
      <Reviews />
      <CallToAction />
      <Contact />
    </main>
  );
}

export default Home;
