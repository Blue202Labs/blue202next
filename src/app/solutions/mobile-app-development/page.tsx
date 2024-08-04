import Image from "next/image";
import Link from "next/link";
import { SoftwareApproach } from "../components/OurApproach";
import mockup3d from "/public/images/mockup-3d.png";
import { android, flutter, ios, react } from "../components/TechStack";
import { SoftwarePrinciples } from "../components/Principles";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mobile App Development Services",
  description:
    "Leading mobile development services. Build seamless cross-platform IOS and Android apps. Talk to our experts today!",
  openGraph: {
    title: "Mobile App Development Services",
    description:
      "Leading mobile development services. Build seamless cross-platform IOS and Android apps. Talk to our experts today!",
  },
};

const MobileAppDevelopment = () => {
  return (
    <>
      <section className="pt-10 md:pt-20 px-4 md:px-0">
        <div className="relative flex flex-col md:flex-row max-w-7xl mx-auto">
          <div className="order-2 md:order-1 flex flex-col h-full gap-[60vh] text-5xl md:text-6xl text-slate-800 font-bold pb-[80vh] pt-[60vh] md:pt-96 px-12">
            <h1 className="z-30 drop-shadow-md text-5xl font-bold md:text-6xl w-fit mx-auto font-body-sans">
              Innovation at Your Fingertips 🌟
            </h1>
            <div className="z-30 drop-shadow-md flex flex-col gap-4">
              <h2>
                Seamlessly<br></br>Cross-Platform.
              </h2>
              <div className="z-30 flex flex-row gap-2 md:gap-10 md:w-96">
                {ios}
                {android}
                {flutter}
                {react}
              </div>
            </div>
            <h2 className="z-30 drop-shadow-md">Always responsive.</h2>
            <h2 className="z-30 drop-shadow-md">Always beautiful.</h2>
          </div>
          <div className="order-1 md:order-2 fixed md:relative opacity-80 w-full flex flex-col items-center pr-8">
            <Image
              loading="eager"
              priority
              unoptimized={true}
              className="z-10 md:sticky md:-webkit-sticky w-[200px] top-20 md:w-[500px] pt-8 md:pt-0 md:h-fit"
              width={500}
              src={mockup3d}
              alt="Mockup of a Fintech App"
            />
          </div>
          <div className="z-20 absolute bottom-0 h-[200vh] bg-gradient-to-t from-white from-30% w-full"></div>
        </div>
      </section>
      <div className="relative max-w-5xl mx-auto flex flex-col gap-40 px-4 py-20 pb-48 text-slate-700 bg-white z-40">
        <section className="pt-36 flex flex-col justify-center text-center gap-8 pb-40">
          <h2 className="text-4xl md:text-5xl font-bold">
            Got an idea? Let&apos;s build it together.
          </h2>
          <h3 className="text-2xl font-light max-w-3xl mx-auto">
            Book a consultation and get your vision onto your fingertips as soon
            as possible.
          </h3>
          <Link
            href="/contact"
            className="z-30 bg-cyan-400 text-slate-700 mt-8 py-3 px-8 rounded-full drop-shadow-lg hover:bg-cyan-500 font-semibold font-body-sans w-fit mx-auto"
          >
            Contact Us
          </Link>
        </section>
        <section className="drop-shadow-lg bg-white border border-gray-200 w-full lg:h-[28rem] rounded-xl flex flex-col gap-10 my-10">
          <div className="flex-col lg:flex-row flex lg:gap-10 justify-between h-full">
            <p
              className="font-body-sans font-semibold text-2xl lg:text-3xl text-white
              h-full bg-cover bg-right rounded-t-xl lg:rounded-tr-none lg:rounded-l-xl bg-blue-abstract p-8 lg:p-10 lg:pt-20 min-h-20 md:min-w-96"
            >
              Because apps are here to propel your business.
            </p>
            <p className="lg:text-lg text-slate-700 p-10 md:pt-20 pr-10 font-light">
              <span className="font-semibold">
                90% of mobile internet usage is spent on apps, with a 157%
                higher conversion rate than mobile websites.
              </span>
              <br></br>
              <br></br>
              With most users preferring apps over websites, it has become more
              important than ever for companies to invest in mobile app
              development. By prioritizing intuitive design and seamless
              performance, businesses can drive higher conversion rates, foster
              customer loyalty, and stay competitive in a rapidly evolving
              digital landscape.
            </p>
          </div>
        </section>
        <SoftwarePrinciples />
        <SoftwareApproach />
      </div>
    </>
  );
};

export default MobileAppDevelopment;
