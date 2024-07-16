import { Heading } from "../../components/Heading";
import prototyping from "/public/images/prototyping-london.svg";
import seo from "/public/images/idea-brainstorm-london.svg";
import webCode from "/public/images/web-development-london.svg";
import { ReactNode } from "react";
import { WebApproach } from "../components/OurApproach";
import {
  TechStack,
  javaScript,
  node,
  react,
  typeScript,
  wordpress,
} from "../components/TechStack";
import { PageHero } from "../components/PageHero";
import Image from "next/image";

const Websites = () => {
  return (
    <>
      <PageHero
        heading="We love making beautiful, responsive websites."
        description="Ready to upgrade your digital brand?"
      />
      <div className="max-w-5xl mx-auto flex flex-col gap-20">
        <TechStack tech={[javaScript, typeScript, react, wordpress, node]} />
        <div className="flex flex-col p-4 md:p-10 max-w-5xl mx-auto md:gap-10 h-full">
          <Heading>Custom Websites:</Heading>
          <section className="drop-shadow-md bg-white border border-gray-200 w-full md:h-[25rem] rounded-xl flex flex-col gap-10 my-10">
            <div className="flex-col md:flex-row flex md:gap-10 justify-between h-full">
              <p
                className="font-body-sans font-semibold text-2xl md:text-3xl bg-center text-white min-w-80 
              h-full bg-cover rounded-t-xl md:rounded-tr-none md:rounded-l-xl bg-blue-abstract p-8 md:p-10 md:pt-20 min-h-40"
              >
                Web design counts for 75% of credibility judgements for a
                company.
              </p>
              <div className="flex flex-col gap-8 text-lg text-slate-700 p-4 py-8 md:p-10 md:pt-20 px-8">
                <p>
                  In today’s digital age, having a custom website that reflects
                  your brand’s uniqueness and professionalism is crucial. At
                  Blue202, we specialize in creating bespoke websites tailored
                  to your business needs. We offer end-to-end website
                  development services, from design to deployment.<br></br>
                  <br></br>Our team is highly skilled in React, JavaScript, HTML
                  and CSS - and we can discuss incorporating any technologies
                  you request.
                </p>
              </div>
            </div>
          </section>
          <WebApproach />
          <section className="my-20">
            <Heading>Our Principles:</Heading>
            <div className="py-14 flex flex-col gap-10 max-w-3xl mx-auto">
              <Principle img={prototyping} heading="Responsive design">
                With over 60% of people accessing the web through their mobile
                phones, we ensure that all sites we build are responsive to
                ensure engaging user experiences across all devices- all without
                compromising on style and quality.
              </Principle>
              <Principle img={webCode} heading="High Code Quality">
                We uphold high code quality standards to ensure robust and
                maintainable web solutions. Our developers write clean,
                efficient code, which enhances performance, security, and
                scalability of your web applications.
              </Principle>
              <Principle img={seo} heading="SEO Optimisation">
                Let&apos;s get your company to the top of the search results! We
                know all the tricks to give your website the boost it needs.
              </Principle>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

const Principle: React.FC<{
  img: string;
  heading: string;
  children: ReactNode;
}> = ({ img, heading, children }) => {
  return (
    <div>
      <div className="flex flex-col md:flex-row md:h-[15rem] gap-8 items-center">
        <Image
          className="h-24 w-24 md:h-48 md:w-48"
          src={img}
          alt={`Graphic illustrating ${heading}`}
        ></Image>
        <div className="flex flex-col gap-4 md:pt-6 text-center md:text-left">
          <h3 className="font-body-sans font-semibold text-2xl text-blue-950">
            {heading}
          </h3>
          <p className="text-slate-700">{children}</p>
        </div>
      </div>
    </div>
  );
};

export default Websites;
