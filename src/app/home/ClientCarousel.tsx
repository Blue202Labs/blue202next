import { motion } from "framer-motion";

import { clientArray } from "../../../public/clients";
import Image from "next/image";
import useCheckMobileScreen from "../../hooks/useCheckMobileScreen";

export const ClientCarousel = () => {
  const duplicatedClients = [...clientArray, ...clientArray, ...clientArray];
  const isMobile = useCheckMobileScreen();
  const multiplier = isMobile ? 2.5 : 1;

  return (
    <section className="h-48 md:h-96 bg-slate-200 relative border-b-2">
      <div className="z-10 absolute w-full h-full bg-slate-50"></div>
      <div className="z-20 absolute w-full h-full bg-gradient-to-br from-[#9898ae] via-20% via-[#cfcfdf] to-80% to-white"></div>
      <div className="z-10 absolute w-full h-full bg-gradient-to-bl from-slate-300 via-transparent"></div>
      <div className="z-30 relative max-w-7xl mx-auto py-12 h-full">
        <div className="w-full h-full overflow-hidden">
          <motion.div
            animate={{
              x: ["0%", `-${multiplier * 100}%`],
              transition: {
                ease: "linear",
                duration: 30,
                repeat: Infinity,
              },
            }}
            className="flex flex-row flex-none h-full gap-8 md:gap-28 items-center opacity-70"
          >
            {duplicatedClients.map((client, index) => (
              <div
                key={`to_left_${client}_${index}`}
                className="carousel-item min-w-40 md:min-w-48 h-48 saturate-0 opacity-60 md:bg-white rounded-xl p-8 flex flex-col justify-center md:drop-shadow-lg"
              >
                <Image src={client} alt="Our client's logo." />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export const ClientCarousel3 = () => {
  const duplicatedClients = [...clientArray, ...clientArray];

  return (
    <section className="h-96 bg-slate-200 relative border-b-2">
      <div className="z-20 absolute w-full h-full bg-slate-50"></div>
      <div className="z-30 absolute w-full h-full bg-gradient-to-br from-slate-300 via-transparent">
        <div className="text-slate-700 font-medium text-xl uppercase font-body-sans mx-auto w-fit mt-8 border-b-4 border-white p-1 px-8 opacity-35">
          Trusted by
        </div>
      </div>
      <div className="z-20 absolute w-full h-full bg-gradient-to-bl from-slate-300 via-transparent"></div>
      <div className="max-w-7xl mx-auto py-12 h-full">
        <div className="pt-12 w-full overflow-hidden">
          <motion.div
            animate={{
              x: ["0%", "-100%"],
              transition: {
                ease: "linear",
                duration: 20,
                repeat: Infinity,
              },
            }}
            className="z-40 relative flex flex-row flex-none justify-between h-24 gap-20 items-center opacity-70"
          >
            {duplicatedClients.map((client, index) => (
              <div
                key={`to_left_${index}`}
                className="carousel-item min-w-48 saturate-0 opacity-60"
              >
                <Image
                  src={client}
                  height={100}
                  width={100}
                  alt="Our client's logo."
                />{" "}
              </div>
            ))}
          </motion.div>
          <motion.div
            animate={{
              x: ["-100%", "0%"],
              transition: {
                ease: "linear",
                duration: 20,
                repeat: Infinity,
              },
            }}
            className="z-40 relative flex flex-row flex-none justify-between h-24 gap-20 items-center opacity-70"
          >
            {duplicatedClients.map((client, index) => (
              <div
                key={`to_right_${index}`}
                className="carousel-item min-w-48 saturate-0 opacity-60"
              >
                <Image
                  src={client}
                  height={100}
                  width={100}
                  alt="Our client's logo."
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
