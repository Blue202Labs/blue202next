import { CSSProperties, ReactNode } from "react";
import crmMockup from "/public/images/crm-mockup.png";
import ticketeerMockup from "/public/images/ticketeer-mockup.png";
import ecommMockup from "/public/images/eCommerceMockup.png";
import useCheckMobileScreen from "../../hooks/useCheckMobileScreen";
import Image from "next/image";
import { BentoCard, BentoGrid } from "../components/BentoGrid";
import { cn } from "../lib/utils";
import {
  aws,
  express,
  javaScript,
  node,
  react,
  typeScript,
} from "../solutions/components/TechStack";

const tech = [
  {
    img: javaScript,
  },
  {
    img: typeScript,
  },
  {
    img: react,
  },
  {
    img: aws,
  },
  {
    img: node,
  },
  {
    img: express,
  },
];

const features = [
  {
    icon: (
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M22 9H2M14 17.5L16.5 15L14 12.5M10 12.5L7.5 15L10 17.5M2 7.8L2 16.2C2 17.8802 2 18.7202 2.32698 19.362C2.6146 19.9265 3.07354 20.3854 3.63803 20.673C4.27976 21 5.11984 21 6.8 21H17.2C18.8802 21 19.7202 21 20.362 20.673C20.9265 20.3854 21.3854 19.9265 21.673 19.362C22 18.7202 22 17.8802 22 16.2V7.8C22 6.11984 22 5.27977 21.673 4.63803C21.3854 4.07354 20.9265 3.6146 20.362 3.32698C19.7202 3 18.8802 3 17.2 3L6.8 3C5.11984 3 4.27976 3 3.63803 3.32698C3.07354 3.6146 2.6146 4.07354 2.32698 4.63803C2 5.27976 2 6.11984 2 7.8Z"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    ),
    name: "Enterprise Web Apps.",
    description: "If it runs on a browser, we got it handled.",
    href: "/solutions/bespoke-software",
    cta: "Learn more",
    background: (
      <Image
        alt="Mockup of a CRM software"
        src={crmMockup}
        className="blur-[1px] hover:blur-none transition duration-300"
      />
    ),
    className: "lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3",
  },
  {
    icon: (
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M19 9V15M5 7V17M17 6.71429L7 5.28571M17 17.2857L7 18.7143M4.6 7H5.4C5.96005 7 6.24008 7 6.45399 6.89101C6.64215 6.79513 6.79513 6.64215 6.89101 6.45399C7 6.24008 7 5.96005 7 5.4V4.6C7 4.03995 7 3.75992 6.89101 3.54601C6.79513 3.35785 6.64215 3.20487 6.45399 3.10899C6.24008 3 5.96005 3 5.4 3H4.6C4.03995 3 3.75992 3 3.54601 3.10899C3.35785 3.20487 3.20487 3.35785 3.10899 3.54601C3 3.75992 3 4.03995 3 4.6V5.4C3 5.96005 3 6.24008 3.10899 6.45399C3.20487 6.64215 3.35785 6.79513 3.54601 6.89101C3.75992 7 4.03995 7 4.6 7ZM4.6 21H5.4C5.96005 21 6.24008 21 6.45399 20.891C6.64215 20.7951 6.79513 20.6422 6.89101 20.454C7 20.2401 7 19.9601 7 19.4V18.6C7 18.0399 7 17.7599 6.89101 17.546C6.79513 17.3578 6.64215 17.2049 6.45399 17.109C6.24008 17 5.96005 17 5.4 17H4.6C4.03995 17 3.75992 17 3.54601 17.109C3.35785 17.2049 3.20487 17.3578 3.10899 17.546C3 17.7599 3 18.0399 3 18.6V19.4C3 19.9601 3 20.2401 3.10899 20.454C3.20487 20.6422 3.35785 20.7951 3.54601 20.891C3.75992 21 4.03995 21 4.6 21ZM18.6 9H19.4C19.9601 9 20.2401 9 20.454 8.89101C20.6422 8.79513 20.7951 8.64215 20.891 8.45399C21 8.24008 21 7.96005 21 7.4V6.6C21 6.03995 21 5.75992 20.891 5.54601C20.7951 5.35785 20.6422 5.20487 20.454 5.10899C20.2401 5 19.9601 5 19.4 5H18.6C18.0399 5 17.7599 5 17.546 5.10899C17.3578 5.20487 17.2049 5.35785 17.109 5.54601C17 5.75992 17 6.03995 17 6.6V7.4C17 7.96005 17 8.24008 17.109 8.45399C17.2049 8.64215 17.3578 8.79513 17.546 8.89101C17.7599 9 18.0399 9 18.6 9ZM18.6 19H19.4C19.9601 19 20.2401 19 20.454 18.891C20.6422 18.7951 20.7951 18.6422 20.891 18.454C21 18.2401 21 17.9601 21 17.4V16.6C21 16.0399 21 15.7599 20.891 15.546C20.7951 15.3578 20.6422 15.2049 20.454 15.109C20.2401 15 19.9601 15 19.4 15H18.6C18.0399 15 17.7599 15 17.546 15.109C17.3578 15.2049 17.2049 15.3578 17.109 15.546C17 15.7599 17 16.0399 17 16.6V17.4C17 17.9601 17 18.2401 17.109 18.454C17.2049 18.6422 17.3578 18.7951 17.546 18.891C17.7599 19 18.0399 19 18.6 19Z"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    ),
    name: "Rapid MVP Prototyping.",
    description: "Taking your ideas out of the page and onto your screens.",
    href: "/solutions/mvp-development",
    cta: "Learn more",
    background: (
      <div className="transform-gpu blur-[1px] transition-all duration-300 ease-out hover:blur-none">
        <div className="flex flex-row absolute top-10 [--duration:20s] [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] ">
          {tech.map((f, idx) => (
            <div
              key={idx}
              className={cn(
                "opacity-60 relative w-32 cursor-pointer overflow-hidden rounded-xl p-4",
                "bg-gray-950/[.01]"
              )}
            >
              {f.img}
            </div>
          ))}
        </div>
        <div className="flex flex-row absolute top-32 [--duration:20s] [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] ">
          {tech.toReversed().map((f, idx) => (
            <div
              key={idx}
              className={cn(
                "opacity-60 relative w-32 cursor-pointer overflow-hidden rounded-xl p-4",
                "bg-gray-950/[.01]"
              )}
            >
              {f.img}
            </div>
          ))}
        </div>
      </div>
    ),
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
  },
  {
    icon: (
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M13.5295 8.35186C12.9571 8.75995 12.2566 9 11.5 9C9.567 9 8 7.433 8 5.5C8 3.567 9.567 2 11.5 2C12.753 2 13.8522 2.65842 14.4705 3.64814M6 20.0872H8.61029C8.95063 20.0872 9.28888 20.1277 9.61881 20.2086L12.3769 20.8789C12.9753 21.0247 13.5988 21.0388 14.2035 20.9214L17.253 20.3281C18.0585 20.1712 18.7996 19.7854 19.3803 19.2205L21.5379 17.1217C22.154 16.5234 22.154 15.5524 21.5379 14.9531C20.9832 14.4134 20.1047 14.3527 19.4771 14.8103L16.9626 16.6449C16.6025 16.9081 16.1643 17.0498 15.7137 17.0498H13.2855L14.8311 17.0498C15.7022 17.0498 16.4079 16.3633 16.4079 15.5159V15.2091C16.4079 14.5055 15.9156 13.892 15.2141 13.7219L12.8286 13.1417C12.4404 13.0476 12.0428 13 11.6431 13C10.6783 13 8.93189 13.7988 8.93189 13.7988L6 15.0249M20 6.5C20 8.433 18.433 10 16.5 10C14.567 10 13 8.433 13 6.5C13 4.567 14.567 3 16.5 3C18.433 3 20 4.567 20 6.5ZM2 14.6L2 20.4C2 20.9601 2 21.2401 2.10899 21.454C2.20487 21.6422 2.35785 21.7951 2.54601 21.891C2.75992 22 3.03995 22 3.6 22H4.4C4.96005 22 5.24008 22 5.45399 21.891C5.64215 21.7951 5.79513 21.6422 5.89101 21.454C6 21.2401 6 20.9601 6 20.4V14.6C6 14.0399 6 13.7599 5.89101 13.546C5.79513 13.3578 5.64215 13.2049 5.45399 13.109C5.24008 13 4.96005 13 4.4 13L3.6 13C3.03995 13 2.75992 13 2.54601 13.109C2.35785 13.2049 2.20487 13.3578 2.10899 13.546C2 13.7599 2 14.0399 2 14.6Z"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    ),
    name: "Delivering high value at an affordable cost.",
    description: "Found better rates? Let us know and we will match the price.",
    href: "/contact",
    cta: "Get quoted",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className:
      "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4 hidden md:block",
  },
  {
    icon: (
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 16V21M12 16L18 21M12 16L6 21M21 3V11.2C21 12.8802 21 13.7202 20.673 14.362C20.3854 14.9265 19.9265 15.3854 19.362 15.673C18.7202 16 17.8802 16 16.2 16H7.8C6.11984 16 5.27976 16 4.63803 15.673C4.07354 15.3854 3.6146 14.9265 3.32698 14.362C3 13.7202 3 12.8802 3 11.2V3M8 9V12M12 7V12M16 11V12M22 3H2"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    ),
    name: "Stunning landing pages.",
    description: "Make your business stand out with a custom website.",
    href: "/solutions/websites",
    cta: "Learn more",
    background: (
      <Image
        alt="Mockup of a CRM software"
        src={ticketeerMockup}
        className="blur-[1px] hover:blur-none transition duration-300"
      />
    ),
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2",
  },
  {
    icon: (
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8.4 3H4.6C4.03995 3 3.75992 3 3.54601 3.10899C3.35785 3.20487 3.20487 3.35785 3.10899 3.54601C3 3.75992 3 4.03995 3 4.6V8.4C3 8.96005 3 9.24008 3.10899 9.45399C3.20487 9.64215 3.35785 9.79513 3.54601 9.89101C3.75992 10 4.03995 10 4.6 10H8.4C8.96005 10 9.24008 10 9.45399 9.89101C9.64215 9.79513 9.79513 9.64215 9.89101 9.45399C10 9.24008 10 8.96005 10 8.4V4.6C10 4.03995 10 3.75992 9.89101 3.54601C9.79513 3.35785 9.64215 3.20487 9.45399 3.10899C9.24008 3 8.96005 3 8.4 3Z"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M19.4 3H15.6C15.0399 3 14.7599 3 14.546 3.10899C14.3578 3.20487 14.2049 3.35785 14.109 3.54601C14 3.75992 14 4.03995 14 4.6V8.4C14 8.96005 14 9.24008 14.109 9.45399C14.2049 9.64215 14.3578 9.79513 14.546 9.89101C14.7599 10 15.0399 10 15.6 10H19.4C19.9601 10 20.2401 10 20.454 9.89101C20.6422 9.79513 20.7951 9.64215 20.891 9.45399C21 9.24008 21 8.96005 21 8.4V4.6C21 4.03995 21 3.75992 20.891 3.54601C20.7951 3.35785 20.6422 3.20487 20.454 3.10899C20.2401 3 19.9601 3 19.4 3Z"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M19.4 14H15.6C15.0399 14 14.7599 14 14.546 14.109C14.3578 14.2049 14.2049 14.3578 14.109 14.546C14 14.7599 14 15.0399 14 15.6V19.4C14 19.9601 14 20.2401 14.109 20.454C14.2049 20.6422 14.3578 20.7951 14.546 20.891C14.7599 21 15.0399 21 15.6 21H19.4C19.9601 21 20.2401 21 20.454 20.891C20.6422 20.7951 20.7951 20.6422 20.891 20.454C21 20.2401 21 19.9601 21 19.4V15.6C21 15.0399 21 14.7599 20.891 14.546C20.7951 14.3578 20.6422 14.2049 20.454 14.109C20.2401 14 19.9601 14 19.4 14Z"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M8.4 14H4.6C4.03995 14 3.75992 14 3.54601 14.109C3.35785 14.2049 3.20487 14.3578 3.10899 14.546C3 14.7599 3 15.0399 3 15.6V19.4C3 19.9601 3 20.2401 3.10899 20.454C3.20487 20.6422 3.35785 20.7951 3.54601 20.891C3.75992 21 4.03995 21 4.6 21H8.4C8.96005 21 9.24008 21 9.45399 20.891C9.64215 20.7951 9.79513 20.6422 9.89101 20.454C10 20.2401 10 19.9601 10 19.4V15.6C10 15.0399 10 14.7599 9.89101 14.546C9.79513 14.3578 9.64215 14.2049 9.45399 14.109C9.24008 14 8.96005 14 8.4 14Z"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    ),
    name: "Mobile App Development.",
    description: "Let's chat about building the app of your dreams.",
    href: "/solutions/mobile-app-development",
    cta: "Learn more",
    background: (
      <Image
        alt="eCommerce App Mockup"
        src={ecommMockup}
        className="absolute -top-20 opacity-60 blur-[1px] hover:blur-none"
      />
    ),
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4",
  },
];

export const Summary = () => {
  return (
    <section className="max-w-7xl mx-auto h-full my-24 md:my-40 px-8">
      <div className="mx-auto">
        <h2 className="font-body-sans pb-10 text-center font-semibold text-3xl md:text-4xl text-slate-700">
          Web solutions for every business need.
        </h2>
        <div className="flex flex-col md:flex-row md:py-20 gap-4">
          <BentoGrid className="lg:grid-rows-3">
            {features.map((feature) => (
              <BentoCard key={feature.name} {...feature} />
            ))}
          </BentoGrid>
        </div>
      </div>
    </section>
  );
};
