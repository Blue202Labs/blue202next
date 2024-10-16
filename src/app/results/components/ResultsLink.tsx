import Image, { StaticImageData } from "next/image";
import Link from "next/link";

export const ResultsLink = ({
  route,
  bg,
  heading,
}: {
  route: string;
  bg: StaticImageData;
  heading: string;
}) => {
  return (
    <Link
      href={route}
      className={
        "relative md:h-full md:min-h-[30rem] w-full group border-2 border-slate-50 shadow-blurred rounded-2xl bg-white p-10 flex flex-col items-center text-slate-800"
      }
      target="_blank"
    >
      <div className="relative z-10 h-full">
        <Image
          alt=""
          className={
            "rounded-xl h-full object-cover object-top transition duration-300"
          }
          src={bg}
        ></Image>
      </div>
      <div
        className="absolute z-20 bg-gradient-to-b from-transparent to-white
      group-hover:-translate-y-10 w-full h-full bottom-3"
      ></div>
      <div className="z-30 flex flex-row gap-4 pt-10 w-fit justify-center border-b">
        <h3 className="text-2xl font-semibold">{heading}</h3>
        <svg
          className="h-7 w-7 pt-1"
          width="100%"
          height="100%"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M21 9.00001L21 3.00001M21 3.00001H15M21 3.00001L12 12M10 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21H16.2C17.8802 21 18.7202 21 19.362 20.673C19.9265 20.3854 20.3854 19.9265 20.673 19.362C21 18.7202 21 17.8802 21 16.2V14"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </Link>
  );
};
