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

function Home() {
  return (
    <main id="home" className={"h-full w-full overflow-x-hidden"}>
      <Header />
      <Hero />
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
