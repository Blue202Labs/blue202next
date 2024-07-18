import { Header } from "../../components/Header";

export const PageHero: React.FC<{
  heading: string;
  description: string;
}> = ({ heading, description }) => {
  return (
    <>
      <div className="px-4 w-full h-[30rem] text-slate-100 bg-blue-wave-mobile bg-[length:100vw_30rem] lg:bg-blue-wave bg-no-repeat bg-fixed flex flex-col justify-center items-center text-center gap-4 pt-10">
        <h1 className="mt-10 mx-auto text-3xl lg:text-4xl font-body-sans font-medium">
          {heading}
        </h1>
        <p className="px-8 lg:px-0 lg:max-w-2xl text-lg lg:text-2xl font-light">
          {description}
        </p>
        <a
          href="/contact"
          className="bg-cyan-400 text-slate-700 mt-8 py-3 px-8 rounded-full drop-shadow-lg hover:bg-cyan-500 font-semibold font-body-sans"
        >
          Contact Us
        </a>
      </div>
    </>
  );
};
