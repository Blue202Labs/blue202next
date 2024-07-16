import { Heading } from "../../components/Heading";
import { SoftwareApproach } from "../components/OurApproach";
import { PageHero } from "../components/PageHero";
import {
  TechStack,
  aws,
  express,
  fastify,
  javaScript,
  nextjs,
  node,
  php,
  react,
  sql,
  typeScript,
} from "../components/TechStack";
import { SoftwarePrinciples } from "../components/Principles";

const BespokeSoftware = () => {
  const serviceNames = [
    "API",
    "Databases",
    "CRM",
    "CMS",
    "Dynamic Platforms",
    "Processing Software",
  ];

  const services = serviceNames.map((service, idx) => (
    <div
      key={`serv-${idx}`}
      className="md:border px-8 rounded-full bg-gray-100 py-2"
    >
      {service}
    </div>
  ));

  return (
    <>
      <PageHero
        heading="Powered by the web, we can make anything and everything."
        description="Trust our skilled and experienced team to craft whatever enterprise software you need."
      />
      <div className="flex flex-col gap-20 pb-48">
        <TechStack
          tech={[
            javaScript,
            typeScript,
            react,
            node,
            express,
            fastify,
            sql,
            nextjs,
            php,
            aws,
          ]}
          andMore={true}
        />
        <div className="flex flex-col p-4 md:p-10 max-w-5xl mx-auto gap-32 h-full">
          <section className="flex flex-col gap-20 max-w-5xl mx-auto">
            <section>
              <Heading>Bespoke Software:</Heading>
              <p className="px-4 py-4 text-lg max-w-3xl mx-auto pt-16">
                We offer a bespoke service to fufil your enterprise software
                needs. This service encapsulates any web-facing application that
                requires a server backend, API integrations, database management
                etc. We provide an end-to-end service from ideation/technology
                reccomendations, through to the software architecture design,
                development and deployment.
              </p>
            </section>
            <div className="flex flex-row gap-4 flex-wrap">{services}</div>
            <section className="drop-shadow-md bg-white border border-gray-200 w-full md:h-[30rem] rounded-xl flex flex-col gap-10 my-10">
              <div className="flex-col md:flex-row flex md:gap-10 justify-between h-full">
                <p
                  className="font-body-sans font-semibold text-2xl md:text-3xl text-white
              h-full bg-cover rounded-t-xl md:rounded-tr-none md:rounded-l-xl bg-blue-abstract bg-center p-8 md:p-10 md:pt-20 min-h-40 min-w-96"
                >
                  Harness the limitless power of the web to{" "}
                  <span className="text-[#ffd22d]">supercharge</span> your
                  company&apos;s systems.
                </p>
                <div className="flex flex-col gap-8 md:text-lg text-slate-700 p-8 pt-0 pb-20 md:p-8 md:pt-20">
                  <h4 className="font-semibold pt-10 md:pt-0">
                    Why web technologies?
                  </h4>
                  <p>
                    The web powers much more than just websites. Anything that
                    can be done on desktop can be created using the web, it just
                    offers a different interface- the browser. Web solutions
                    offer many advantages, including lower development and
                    maintanance costs as they are cross-platform by nature,
                    don&apos;t require any user setup, do not use local hardware
                    and are much faster to develop.
                  </p>
                </div>
              </div>
            </section>
          </section>
          <SoftwarePrinciples />
          <SoftwareApproach />
        </div>
      </div>
    </>
  );
};

export default BespokeSoftware;
