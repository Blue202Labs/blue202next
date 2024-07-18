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
import { useEffect, useState } from "react";

function Home() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    if (loaded) {
      const home = document.querySelector("#home") as HTMLElement;
      home.classList.remove("max-h-screen");
      const loader = document.querySelector("#loader") as HTMLElement;
      loader.classList.add("fade-out");
    }
  }, [loaded]);

  return (
    <main id="home" className={"h-full w-full overflow-x-hidden"}>
      <Header />
      <Hero setLoaded={setLoaded} />
      <ClientCarousel />
      <Summary />
      <About />
      <ResultsSummary />
      <Services />
      <Reviews />
      <CallToAction />
      <Contact />
    </main>
  );
}

export default Home;
