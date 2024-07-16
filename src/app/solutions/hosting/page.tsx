import { PageHero } from "../components/PageHero";
import {
  TechStack,
  aws,
  azure,
  firebase,
  github,
  google,
} from "../components/TechStack";
import checkMark from "/public/icons/checkMark.svg";
import { Heading } from "../../components/Heading";
import Image from "next/image";

const Hosting = () => {
  return (
    <>
      <PageHero
        heading="Let Blue202 take care of everything."
        description="Optimise your hosting solutions and cloud infrastructure."
      />
      <div className="max-w-5xl mx-auto flex flex-col gap-20 px-4 pb-20">
        <TechStack tech={[aws, azure, google, firebase, github]} />
        <section className="drop-shadow-md bg-white border border-gray-200 w-full md:h-[26rem] rounded-xl flex flex-col gap-10">
          <div className="flex-col md:flex-row flex md:gap-10 justify-between h-full">
            <p
              className="font-body-sans font-semibold text-2xl md:text-3xl text-white
              h-full bg-cover rounded-t-xl md:rounded-tr-none md:rounded-l-xl bg-blue-abstract bg-center p-8 md:p-10 md:pt-20 min-h-40 md:min-w-96"
            >
              End-to-end development services, from planning to deployment.
            </p>
            <div className="flex flex-col gap-8 md:text-lg text-slate-700 p-8 pb-20 pt-10 md:pt-20">
              <p>
                Choose Blue202 to manage your cloud solutions and hosting. We
                offer everything from webhosting to database and cloud
                infrastructure development on all major platforms. We can set
                you up with automated code CI/CD pipelines and testing
                frameworks so that your software is insured for the future. We
                also offer 24/7 support and maintanance.
              </p>
            </div>
          </div>
        </section>
        <section className="my-16">
          <Heading>We provide:</Heading>
          <div className="flex flex-col gap-8 lg:text-xl text-slate-700 pt-10 max-w-3xl mx-auto">
            <div className="flex flex-col gap-6 md:text-xl px-8 lg:px-10 pb-10">
              <div className="flex flex-row gap-4 items-start">
                <Image width={24} src={checkMark} alt="Check mark icon"></Image>
                <p>
                  <span className="font-semibold">24/7 Support</span> Have an
                  issue? We are here to help at any time.
                </p>
              </div>
              <div className="flex flex-row gap-4 items-start">
                <Image width={24} src={checkMark} alt="Check mark icon"></Image>
                <p>
                  <span className="font-semibold">Maintanance:</span> We will
                  maintain and update the software to mitigate security risks
                  and keep you at the forefront of technology.
                </p>
              </div>
              <div className="flex flex-row gap-4 items-start">
                <Image width={24} src={checkMark} alt="Check mark icon"></Image>
                <p>
                  <span className="font-semibold">
                    Scalable Infrastructure:
                  </span>{" "}
                  A custom solution that will evolve as your needs grow,
                  allowing you to easily upgrade and add features.
                </p>
              </div>
              <div className="flex flex-row gap-4 items-start">
                <Image width={24} src={checkMark} alt="Check mark icon"></Image>
                <p>
                  <span className="font-semibold">
                    Security and Authorisation:
                  </span>{" "}
                  Implement your own security preferences that keep access
                  permissions aligned with your security policies.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Hosting;
