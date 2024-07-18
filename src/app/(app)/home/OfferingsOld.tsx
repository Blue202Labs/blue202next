import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Heading } from "../components/Heading";

const serviceData = [
  {
    heading: "Fully customisable, beautifully designed websites",
    description: `Whatever vision you have, we will bring it to life- and if you aren’t
                sure yet, our talented team of designers and marketing specialists will
                guarantee that you receive a solution that aligns with your desired
                brand image.`,
  },
  {
    heading: "High SEO to enhance your discoverability",
    description: `Our SEO experts will ensure that your website will reach the top of the search results every time. Don’t believe us? Try looking up one of our previous clients!`,
  },
  {
    heading: "Professional team of expert developers",
    description: `Our qualified team will work closely with you to ensure that the product aligns with your needs. We swiftly deliver at the highest standard and will provide support every step of the way.`,
  },
];

export const OfferingsOld = () => {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: false, amount: 0.5 });

  return (
    <section
      ref={sectionRef}
      className="h-[50rem] max-w-7xl mx-auto py-24 overflow-hidden"
    >
      <Heading>We offer:</Heading>
      <motion.div
        className="flex flex-col justify-between max-w-5xl mx-auto h-full pt-20 pb-24"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 1,
            },
          },
        }}
      >
        {serviceData.map((service, index) => (
          <Service
            index={index}
            key={index}
            heading={service.heading}
            description={service.description}
            inView={inView}
          />
        ))}
      </motion.div>
    </section>
  );
};

const Service: React.FC<{
  index: number;
  heading: string;
  description: string;
  inView: boolean;
}> = ({ index, heading, description, inView }) => {
  return (
    <motion.div
      className="flex flex-row justify-between"
      initial={{ opacity: 0 }}
      animate={
        inView
          ? {
              opacity: 1,
              transition: {
                delay: 0.2,
                duration: 0.5 + index * 0.05,
                ease: "easeInOut",
              },
            }
          : {
              opacity: 0,
              transition: {
                delay: 1,
                duration: 0.5 + index * 0.05,
                ease: "easeInOut",
              },
            }
      }
    >
      <motion.h4
        className="font-bold text-2xl w-2/5"
        initial={{ x: "-100vw" }}
        animate={
          inView
            ? {
                x: 0,
                transition: {
                  delay: 0.2,
                  duration: 0.5 + index * 0.05,
                  ease: "easeInOut",
                },
              }
            : {
                x: "-100vw",
                transition: {
                  delay: 1,
                  duration: 0.5 + index * 0.05,
                  ease: "easeInOut",
                },
              }
        }
      >
        {heading}
      </motion.h4>
      <motion.p
        className="w-1/2 text-slate-600 font-body-sans text-lg"
        initial={{ x: "100vw" }}
        animate={
          inView
            ? {
                x: 0,
                transition: {
                  delay: 0.2,
                  duration: 0.5 + index * 0.05,
                  ease: "easeInOut",
                },
              }
            : {
                x: "100vw",
                transition: {
                  delay: 1,
                  duration: 0.5 + index * 0.05,
                  ease: "easeInOut",
                },
              }
        }
      >
        {description}
      </motion.p>
    </motion.div>
  );
};

/*
export const OfferingsOld = () => {
  return (
    <section className="h-[50rem] max-w-7xl mx-auto py-24">
      <h3 className="pl-12 text-blue-900 font-semibold text-2xl">We offer:</h3>
      <div className="w-24 border-b-4 border-[#49A8FF]"></div>
      <div className="flex flex-col justify-between max-w-5xl mx-auto h-full pt-20 pb-24">
        {serviceData.map((service, index) => (
          <Service
            key={index}
            heading={service.heading}
            description={service.description}
          />
        ))}
      </div>
    </section>
  );
};

const Service = ({ heading, description }) => {
  return (
    <div className="flex flex-row justify-between">
      <h4 className="font-bold text-2xl w-2/5">{heading}</h4>
      <p className="w-1/2 text-slate-600 font-body-sans text-lg">
        {description}
      </p>
    </div>
  );
};
*/
