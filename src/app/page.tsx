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
import { SteeyrMockup } from "./home/SteeyrMockup";
import { NeonGradientCard } from "./components/NeonGradientCard";

function Home() {
  const [loaded, setLoaded] = useState(false);

  return (
    <div
      id="home"
      className={
        "h-full w-full overflow-x-hidden " + loaded ? "" : "max-h-screen"
      }
    >
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
