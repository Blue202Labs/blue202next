import Image from "next/image";
import fintechMockup from "/public/images/fintech-mockup.png";
import Link from "next/link";

export const MockUp = () => {
  return (
    <section className="relative h-[50rem] pt-20">
      <Image
        alt="Device app mockups"
        className="z-10 absolute h-[50rem] object-cover w-full"
        src={fintechMockup}
      />
      <div className="absolute z-20 w-full h-full bg-gradient-to-tr from-white md:from-black md:opacity-15 md:to-[60%]"></div>
      <div className="z-30 relative top-20 flex flex-col h-full justify-end py-20 pr-4 md:p-40 gap-16 w-fit mx-auto">
        <h3 className="text-6xl font-bold md:bg-white rounded-3xl px-12 py-10 drop-shadow-md font-body-sans text-slate-800">
          Build the next unicorn with Blue202. 🚀
        </h3>
        <Link
          className="place-self-end bg-blue-accent hover:bg-blue-700 rounded-full text-white font-semibold text-lg md:text-2xl px-8 md:px-10 py-4 md:py-8"
          href="/solutions/startup-development-package"
        >
          See our Startup Package
        </Link>
      </div>
    </section>
  );
};
