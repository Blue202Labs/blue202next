"use client";

import { useRef, useState } from "react";

import web from "/public/icons/web-design.svg";
import digiLink from "/public/icons/digiLink.svg";
import team from "/public/icons/team.svg";
import { Heading } from "../components/Heading";
import Image from "next/image";
import { ExpandingTitle } from "../components/ExpandingTitle";
import BoxReveal from "../components/BoxReveal";
import { FadeIn } from "../components/FadeIn";
import BlurFade from "../components/BlurFade";

const serviceData = [
  {
    heading: "Transforming businesses with cutting-edge digital solutions.",
    image: digiLink,
    description:
      "Here at Blue202, we help companies capitalize on web technologies to automate, manage and uplift their business.",
  },
  {
    heading: "Professional team of expert developers.",
    image: team,
    description: `Our qualified team will work closely with you to ensure that the product aligns with your needs. We deliver code at the highest standard and keep you in the loop every step of the way.`,
  },
  {
    heading: "Fully customizable, beautifully designed software.",
    image: web,
    description: `Whatever vision you have, we will bring it to life- and if you aren’t
                sure yet, our talented team of designers and developers will offer their
                expertise to build software aligned with your company goals.`,
  },
];

export const About = () => {
  const sectionRef = useRef(null);
  const [showTeam, setShowTeam] = useState(false);
  const [showScalable, setShowScalable] = useState(false);

  return (
    <section
      ref={sectionRef}
      className="h-[70rem] pt-10 pb-40 overflow-hidden bg-cover"
    >
      <div className="xl:max-w-7xl mx-auto">
        <ExpandingTitle>About us:</ExpandingTitle>
        <div className="flex flex-col md:flex-row max-w-4xl mx-auto gap-10">
          <div className="flex flex-col gap-8 px-8">
            <BoxReveal boxColor="#60a5fa">
              <h3 className="text-4xl font-semibold">
                Transforming businesses with cutting-edge digital solutions.
              </h3>
            </BoxReveal>
            <BoxReveal boxColor="#60a5fa">
              <p className="md:w-2/3 text-lg">
                Here at Blue202, we help companies capitalize on web
                technologies to automate, manage and uplift their business.
              </p>
            </BoxReveal>
          </div>
          <div className="flex flex-col gap-8 w-5/6">
            <FadeIn>
              <div className="flex flex-row gap-4">
                <button
                  onClick={() => {
                    setShowTeam((prev) => !prev);
                  }}
                >
                  <svg
                    className={`transition duration-200 ${
                      showTeam ? "rotate-90" : "rotate-0"
                    }
                    `}
                    width="50px"
                    height="50px"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 18L15 12L9 6"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>
                <h3 className="text-2xl font-semibold">
                  Professional team of expert developers.
                </h3>
              </div>
              <FadeIn
                toggle={showTeam}
                direction="down"
                duration={0.5}
                className="pt-6"
              >
                <p
                  className={`border-l-2 border-slate-400 pl-10 ml-6 transition duration-200 ${
                    showTeam ? "visible max-h-96" : "invisible max-h-0"
                  }`}
                >
                  Our qualified team will work closely with you to deliver code
                  at the highest standard and keep you in the loop every step of
                  the way.
                </p>
              </FadeIn>
            </FadeIn>
            <FadeIn>
              <div className="flex flex-row gap-4">
                <button
                  onClick={() => {
                    setShowScalable((prev) => !prev);
                  }}
                >
                  <svg
                    className={`transition duration-200 ${
                      showScalable ? "rotate-90" : "rotate-0"
                    }
                    `}
                    width="50px"
                    height="50px"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 18L15 12L9 6"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>
                <h3 className="text-2xl font-semibold">
                  Fully customizable, scalable software.
                </h3>
              </div>
              <FadeIn
                toggle={showScalable}
                direction="down"
                duration={0.5}
                className="pt-6"
              >
                <p
                  className={`border-l-2 border-slate-400 pl-10 ml-6 transition duration-200 ${
                    showScalable ? "visible max-h-96" : "invisible max-h-0"
                  }`}
                >
                  Whatever vision you have, we will bring it to life- and if you
                  aren't sure yet, our talented team of designers and developers
                  will offer their expertise to build software aligned with your
                  company goals.
                </p>
              </FadeIn>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};

const Service: React.FC<{
  heading: string;
  image: string;
  description: string;
}> = ({ heading, image, description }) => {
  return (
    <div className="bg-[#fcfcfe] rounded-2xl p-8 md:p-14 xl:p-10 pb-12 flex flex-col md:flex-row xl:flex-col items-start gap-6 w-full xl:w-1/3 drop-shadow-sm border">
      <Image width={70} src={image} alt="Blue tech icon"></Image>
      <div className="flex flex-col gap-2 xl:gap-6 max-w-2xl">
        <h3 className="font-medium text-xl md:text-2xl font-body-sans xl:h-24">
          {heading}
        </h3>
        <p className="text-slate-700 font-light">{description}</p>
      </div>
    </div>
  );
};
