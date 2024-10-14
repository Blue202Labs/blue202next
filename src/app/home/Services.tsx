import React, {
  MouseEventHandler,
  ReactElement,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";
import { motion, AnimatePresence } from "framer-motion";

import website from "/public/images/website.svg";
import webSeo from "/public/images/web-seo.svg";
import hosting from "/public/images/server-stack.svg";
import mobile from "/public/images/mobile-app.svg";
import ups from "/public/clients/UPS-logo.png";
import aspen from "/public/clients/AspenLogoDark.svg";
import { Heading } from "../components/Heading";
import useCheckMobileScreen from "../../hooks/useCheckMobileScreen";
import Image from "next/image";

const services = ["Web apps", "Websites", "Hosting", "Marketing"];

export const Services = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const isMobile = useCheckMobileScreen();
  const imageWidth = isMobile ? 100 : 150;

  const serviceTabs = [
    <ServiceTab key="service-tab-1">
      {isMobile && (
        <Image
          loading="eager"
          className="mx-auto"
          width={imageWidth}
          src={website}
          alt="Black and white outline of a desktop webpage"
        ></Image>
      )}
      <ServiceHeading>Need bespoke web software?</ServiceHeading>
      <div className="md:pl-8 md:flex md:flex-row gap-10 place-items-start">
        {!isMobile && (
          <Image
            loading="eager"
            width={imageWidth}
            src={website}
            alt="Black and white outline of a desktop webpage"
          ></Image>
        )}
        <p>
          Our team is well equipped to handle complex, dynamic web applications.
          Whatever your business needs, eCommerce, web portals, CRMs or bespoke
          processing software, we will swiftly provide an effective solution.
        </p>
      </div>
      <div>
        {!isMobile && (
          <div className="pb-3 text-sm md:text-base">Previous work:</div>
        )}
        <div className="flex flex-row justify-center md:justify-between">
          <div className="flex flex-row w-fit text-left :items-center md:flex-row text-sm md:text-base md:px-6 py-3 rounded-xl md:border place-items-end gap-0">
            <Image loading="eager" className="w-12" src={ups} alt="UPS logo" />
            {!isMobile && (
              <div className="pl-3 md:pl-0">UPS Store Employee Portal</div>
            )}
          </div>
          <div className="flex flex-row w-fit text-left items-center md:flex-row text-sm md:text-base px-6 py-3 rounded-xl md:border place-items-end gap-2">
            <Image
              loading="eager"
              className="h-4"
              width={100}
              src={aspen}
              alt="Aspen Dental logo"
            ></Image>
            {!isMobile && <div>Prescription Management API</div>}
          </div>
        </div>
      </div>
    </ServiceTab>,
    <ServiceTab key="service-tab-2">
      {isMobile && (
        <Image
          loading="eager"
          className="mx-auto"
          width={imageWidth}
          src={webSeo}
          alt="Black and white outline of a desktop webpage with a megaphone in the foreground."
        ></Image>
      )}
      <ServiceHeading>Want to up your website game?</ServiceHeading>
      <div className="md:pl-8 flex flex-col md:flex-row gap-10 place-items-start">
        {!isMobile && (
          <Image
            loading="eager"
            width={imageWidth}
            src={webSeo}
            alt="Black and white outline of a desktop webpage with a megaphone in the foreground."
          ></Image>
        )}
        <div>
          <p>
            Here at Blue202, we love creating seamless web experiences, and we
            know how key a good website is for business. In fact, web design
            accounts for&nbsp;
            <a
              href="https://dl.acm.org/doi/10.1145/365024.365037"
              className="font-bold text-blue-800"
            >
              75% of credibility judgments for a company.
            </a>
          </p>
          <br></br>
          <p>
            Our talented design team will guarantee a website that is not only
            functional and responsive, but also beautifully presented.
          </p>
        </div>
      </div>
    </ServiceTab>,
    <ServiceTab key="service-tab-3">
      {isMobile && (
        <Image
          loading="eager"
          className="mx-auto"
          width={imageWidth}
          src={hosting}
          alt="Black and white outline of a server stack"
        ></Image>
      )}
      <ServiceHeading>
        Don&apos;t stress about hosting and maintenance.
      </ServiceHeading>
      <div className="md:pl-8 flex flex-col md:flex-row gap-10 place-items-start">
        {!isMobile && (
          <Image
            loading="eager"
            width={imageWidth}
            src={hosting}
            alt="Black and white outline of a server stack"
          ></Image>
        )}
        <div>
          <p>
            We provide end-to-end service, from planning, building and
            deployment. Our tech-savvy team will provide whatever you need to
            set up effective digital infrastructure, and we will ensure that the
            software is continuously maintained.
          </p>
          <br></br>
          <p>AWS, Azure, Google Cloud, name it- we will host it!</p>
        </div>
      </div>
    </ServiceTab>,
    <ServiceTab key="service-tab-4">
      {isMobile && (
        <Image
          loading="eager"
          className="mx-auto"
          width={imageWidth}
          src={mobile}
          alt="Black and white of a phone"
        ></Image>
      )}
      <ServiceHeading>Establish your digital identity.</ServiceHeading>
      <div className="md:pl-8 flex flex-col md:flex-row gap-10 place-items-start">
        {!isMobile && (
          <Image
            loading="eager"
            width={imageWidth}
            src={mobile}
            alt="Black and white of a phone"
          ></Image>
        )}
        <div>
          <p>
            Feeling like your brand&apos;s online presence is lackluster? We get
            it, our team of marketing and SEO experts are here to help.
          </p>
          <br></br>
          <p>
            Together, let&apos;s reach your company&apos;s full potential by
            transforming your digital marketing strategy, giving you the edge
            you need to reach new heights.
          </p>
        </div>
      </div>
    </ServiceTab>,
  ];

  return (
    <section id="services" className="md:max-w-7xl mx-auto pt-48">
      <Heading>Our services:</Heading>
      <div className="flex flex-col gap-4 md:gap-10 p-6 md:p-20 md:max-w-5xl mx-auto">
        {isMobile && (
          <ServicesMobile
            selectedIndex={selectedIndex}
            setSelectedIndex={setSelectedIndex}
            serviceTabs={serviceTabs}
          />
        )}
        {!isMobile && (
          <ServicesDesktop
            selectedIndex={selectedIndex}
            setSelectedIndex={setSelectedIndex}
            serviceTabs={serviceTabs}
          />
        )}
      </div>
    </section>
  );
};

const ServicesMobile: React.FC<{
  selectedIndex: number;
  setSelectedIndex: React.Dispatch<React.SetStateAction<number>>;
  serviceTabs: JSX.Element[];
}> = ({ selectedIndex, setSelectedIndex, serviceTabs }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const tabRefs = useRef<HTMLDivElement[]>([]);

  const handleScroll = () => {
    const scrollContainer: HTMLDivElement = scrollContainerRef.current!;
    const scrollLeft = scrollContainer.scrollLeft;
    const containerWidth = scrollContainer.offsetWidth;
    const center = scrollLeft + containerWidth / 2;

    const closestIndex = serviceTabs.reduce((closest, _, index) => {
      const element = scrollContainer.children[index] as HTMLElement;
      const closestElement = scrollContainer.children[closest] as HTMLElement;
      const elementCenter = element.offsetLeft + element.offsetWidth / 2;
      const distance = Math.abs(center - elementCenter);
      return distance <
        Math.abs(
          center - closestElement.offsetLeft - closestElement.offsetWidth / 2
        )
        ? index
        : closest;
    }, 0);

    setSelectedIndex(closestIndex);
  };

  const handleButtonClick = (index: number) => {
    setSelectedIndex(index);

    const tab = tabRefs.current[index];
    if (tab) {
      tab.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }
  };

  useEffect(() => {
    const scrollContainer: HTMLDivElement = scrollContainerRef.current!;
    scrollContainer.addEventListener("scroll", handleScroll);

    return () => {
      scrollContainer.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="relative flex flex-col items-center gap-1">
        <div className="z-20 absolute w-full h-20 bg-gradient-to-r from-white via-transparent to-white opacity-65 pointer-events-none"></div>
        <svg
          className="order-2"
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="12"
          viewBox="0 0 24 24"
        >
          <path
            fill="rgb(71 85 105)"
            d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z"
          />
        </svg>
        <div className="z-10 relative flex flex-row mx-auto justify-between w-full text-center text-slate-600 font-light">
          <button
            onClick={() =>
              selectedIndex > 0 && handleButtonClick(selectedIndex - 1)
            }
            className="w-20"
          >
            {selectedIndex > 0 ? services[selectedIndex - 1] : ""}
          </button>
          <button className="w-20">{services[selectedIndex]}</button>
          <button
            onClick={() =>
              selectedIndex < services.length &&
              handleButtonClick(selectedIndex + 1)
            }
            className="w-20"
          >
            {selectedIndex < services.length ? services[selectedIndex + 1] : ""}
          </button>
        </div>
      </div>
      <div
        ref={scrollContainerRef}
        className="w-full flex flex-row overflow-x-scroll h-[35rem] overflow-y-hidden py-2 gap-10 pl-1 snap-x snap-mandatory no-scrollbar"
      >
        {serviceTabs.map((serviceTab, index) => (
          <div
            key={serviceTab.key}
            ref={el => {
              tabRefs.current[index] = el as HTMLDivElement;
            }}
            className="border rounded-3xl drop-shadow-md bg-white py-2 snap-center snap-always"
          >
            {serviceTab}
          </div>
        ))}
      </div>
    </>
  );
};

const ServicesDesktop: React.FC<{
  selectedIndex: number;
  setSelectedIndex: React.Dispatch<React.SetStateAction<number>>;
  serviceTabs: JSX.Element[];
}> = ({ selectedIndex, setSelectedIndex, serviceTabs }) => {
  const handleButtonClick = (index: number) => {
    setSelectedIndex(index);
  };

  return (
    <>
      <div className="flex flex-row md:gap-8 justify-center">
        {services.map((service, index) => (
          <ServiceButton
            key={`${service}-${index}`}
            isSelected={selectedIndex === index}
            clickCallback={() => handleButtonClick(index)}
          >
            <span>{service}</span>
          </ServiceButton>
        ))}
      </div>
      <div className="h-[32rem] border rounded-3xl drop-shadow-md bg-white">
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedIndex}
            initial={{ opacity: 0.4 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0.4 }}
            transition={{ duration: 0.1 }}
            className="h-full"
          >
            {serviceTabs[selectedIndex]}
          </motion.div>
        </AnimatePresence>
      </div>
    </>
  );
};

const ServiceHeading: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <h3 className="font-body-sans text-2xl font-normal md:text-3xl md:font-light text-[#25294a] md:text-black">
      {children}
    </h3>
  );
};

const ServiceTab: React.FC<{
  children: ReactNode;
}> = ({ children }) => {
  return (
    <div className="flex justify-between min-w-[85vw] md:min-w-0 md:w-full flex-col gap-6 md:gap-10 h-full py-8 pb-12 md:pt-12 md:pb-16 text-center md:text-left">
      <div className="px-6 md:px-20 flex flex-col gap-4 md:gap-10 font-light text-slate-700 text-sm md:text-lg">
        {children}
      </div>
      <GetInTouchButton />
    </div>
  );
};

const GetInTouchButton = () => {
  return (
    <a
      href="/contact"
      className="bg-[#0E0061] text-sm md:text-base text-white rounded-xl py-2 px-6 md:w-48 flex flex-row place-items-center gap-3 hover:bg-[#32286c] active:bg-[#32286c] hover:gap-5 mx-auto border-2 border-slate-400"
    >
      <span>Get in touch</span>
      <svg
        width="24"
        height="16"
        viewBox="0 0 24 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M22.7399 8.70711C23.1304 8.31658 23.1304 7.68342 22.7399 7.29289L16.3759 0.928932C15.9854 0.538408 15.3522 0.538408 14.9617 0.928932C14.5712 1.31946 14.5712 1.95262 14.9617 2.34315L20.6186 8L14.9617 13.6569C14.5712 14.0474 14.5712 14.6805 14.9617 15.0711C15.3522 15.4616 15.9854 15.4616 16.3759 15.0711L22.7399 8.70711ZM0 9H22.0328V7H0V9Z"
          fill="white"
        />
      </svg>
    </a>
  );
};

const ServiceButton: React.FC<{
  isSelected: boolean;
  clickCallback: MouseEventHandler<HTMLButtonElement>;
  children: ReactElement;
}> = ({ isSelected, clickCallback, children }) => {
  return (
    <button
      onClick={clickCallback}
      className={`w-fit px-10 py-3 rounded-full text-base text-slate-600 font-light md:font-normal text-nowrap ${
        isSelected ? "bg-blue-accent text-white" : "bg-[#EAEAEA] text-slate-700"
      }`}
    >
      {children}
    </button>
  );
};
