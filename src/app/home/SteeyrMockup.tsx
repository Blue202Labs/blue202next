import Image from "next/image";
import steeyrMockup from "/public/images/steeyr-mockup.png";
import TextRevealByWord from "../components/TextReveal";

export const SteeyrMockup = () => {
  return (
    <section className="relative md:h-[60rem] md:max-w-7xl mx-auto flex flex-col pt-48 pb-20 md:pb-0">
      <div className="order-2 md:absolute bottom-32 z-30 md:max-w-7xl mx-auto -mt-28 md:mt-0">
        <Image
          alt="Device app mockups"
          loading="eager"
          quality={100}
          className="md:w-full object-cover h-[40rem] md:h-full"
          src={steeyrMockup}
        />
      </div>
      <div className="order-1 flex flex-col gap-8 px-3 md:px-0">
        <TextRevealByWord text="Bring your vision to life." />
        <h4 className="relative z-20 px-3 text-2xl md:text-3xl text-slate-600 font-extralight">
          Leading web and mobile app development services.
          <br></br>
          Build your dreams with Blue202.
        </h4>
      </div>
    </section>
  );
};
