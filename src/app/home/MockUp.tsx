import Image from "next/image";
import fintechMockup from "/public/images/fintech-mockup.png";
import Link from "next/link";

export const MockUp = () => {
  return (
    <section className="relative h-[50rem] pt-20">
      <Image
        alt="Device app mockups"
        className="z-10 absolute h-[50rem] object-cover"
        src={fintechMockup}
      />
      <div className="absolute z-20 w-full h-full bg-gradient-to-tr from-black opacity-15 to-[60%]"></div>
      <div className="z-30 relative top-20 flex flex-col h-full justify-end p-40 gap-16">
        <h1 className="text-6xl bg-white rounded-2xl px-12 py-10 drop-shadow-md font-body-sans text-slate-800">
          Build the next unicorn with Blue202. 🚀
        </h1>
        <Link
          className="place-self-end bg-blue-accent hover:bg-blue-700 rounded-full text-white font-semibold text-2xl px-10 py-8"
          href="/solutions/startup-development-package"
        >
          See our Startup Package
        </Link>
      </div>
    </section>
  );
};
