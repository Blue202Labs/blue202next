import { useRef } from "react";

import web from "/public/icons/web-design.svg";
import digiLink from "/public/icons/digiLink.svg";
import team from "/public/icons/team.svg";
import { Heading } from "../components/Heading";
import Image from "next/image";

const serviceData = [
  {
    heading: "Transforming businesses with cutting-edge digital solutions.",
    image: digiLink,
    description:
      "Here at Blue202, we help companies capitalize on web technologies to automate, manage and uplift their buisiness.",
  },
  {
    heading: "Professional team of expert developers.",
    image: team,
    description: `Our qualified team will work closely with you to ensure that the product aligns with your needs. We deliver code at the highest standard and keep you in the loop every step of the way.`,
  },
  {
    heading: "Fully customisable, beautifully designed software.",
    image: web,
    description: `Whatever vision you have, we will bring it to life- and if you aren’t
                sure yet, our talented team of designers and developers will offer their
                expertise to build software aligned with your company goals.`,
  },
];

export const About = () => {
  const sectionRef = useRef(null);

  return (
    <section
      ref={sectionRef}
      className="h-[95rem] md:h-[70rem] xl:h-[50rem] py-24 overflow-hidden bg-blue-swirl bg-cover"
    >
      <div className="xl:max-w-7xl mx-auto">
        <Heading>About us:</Heading>
        <div className="flex flex-col xl:flex-row gap-10 xl:gap-20 my-20 h-[30rem] px-4 md:px-12 xl:px-0">
          {serviceData.map((service, index) => (
            <Service
              key={index}
              heading={service.heading}
              image={service.image}
              description={service.description}
            />
          ))}
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
    <div className="bg-white rounded-2xl p-8 md:p-14 xl:p-10 pb-12 flex flex-col md:flex-row xl:flex-col items-start gap-6 w-full xl:w-1/3 drop-shadow-sm border-2 border-gray-50">
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
