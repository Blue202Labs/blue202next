import { Heading } from "../../components/Heading";
import { SoftwareApproach } from "../components/OurApproach";
import { PageHero } from "../components/PageHero";
import { SoftwarePrinciples } from "../components/Principles";
import {
  TechStack,
  docker,
  express,
  fastify,
  javaScript,
  nextjs,
  node,
  php,
  sql,
  typeScript,
} from "../components/TechStack";

const API = () => {
  return (
    <>
      <PageHero
        heading="Seamlessly integrate applications with our tailor-made API services."
        description="Reform your backend, integrate third-party applications, or build a new solution from the ground-up."
      />
      <div className="max-w-5xl mx-auto flex flex-col gap-20 pb-40">
        <TechStack
          tech={[
            javaScript,
            typeScript,
            node,
            express,
            fastify,
            sql,
            nextjs,
            php,
            docker,
          ]}
          andMore={true}
        />
        <section>
          <Heading>API Development:</Heading>
          <p className="max-w-3xl mx-auto py-20 text-lg">
            API development involves creating and maintaining interfaces that
            allow software applications to communicate with each other. APIs
            allow you to interact with databases, process payments, incorporate
            machine learning and more. Effective API development enhances
            functionality, interoperability, and user experience, enabling
            diverse systems to integrate seamlessly and exchange data
            efficiently.
          </p>
        </section>
        <section>
          <Heading>We offer:</Heading>
          <div className="flex flex-col justify-between max-w-4xl mx-auto h-full pt-20 pb-24 px-10 gap-14 md:gap-20">
            <div className="flex flex-col gap-4 md:flex-row justify-between">
              <h4 className="font-bold text-2xl md:w-2/5">
                Bespoke REST API development
              </h4>
              <p className="md:w-1/2 text-slate-600 font-body-sans text-xl">
                We offer end-to-end, secure and scalable API development for
                whatever use you need.
              </p>
            </div>
            <div className="flex flex-col gap-4 md:flex-row justify-between">
              <h4 className="font-bold text-2xl md:w-2/5">Data Integration</h4>
              <p className="md:w-1/2 text-slate-600 font-body-sans text-xl">
                Aggregate data from multiple sources into one straight-foward,
                centralised interface for system-wide use.
              </p>
            </div>
            <div className="flex flex-col gap-4 md:flex-row justify-between">
              <h4 className="font-bold text-2xl md:w-2/5">
                Third-party API integration
              </h4>
              <p className="md:w-1/2 text-slate-600 font-body-sans text-xl">
                Integrate APIs for payments, cloud computing, machine-learning
                and more. Not sure on suitable technologies? Consult our expert
                team for advice.
              </p>
            </div>
          </div>
        </section>
        <SoftwareApproach></SoftwareApproach>
        <SoftwarePrinciples />
      </div>
    </>
  );
};

export default API;
