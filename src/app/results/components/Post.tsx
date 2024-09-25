import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import rightArrow from "/public/icons/right-arrow.svg";

import { cn } from "../../lib/utils";

export const ResultsPost = ({
  heading,
  tags,
  bg,
  route,
  className,
  big = false,
}: {
  heading: string;
  tags: string[];
  bg: StaticImageData;
  route: string;
  className?: string;
  big?: boolean;
}) => {
  return (
    <Link
      href={`/results/${route}`}
      className={
        `relative md:h-full md:min-h-[30rem] w-full group border-2 border-slate-50 
      shadow-blurred rounded-2xl bg-white p-4 md:p-10 flex flex-col items-center text-slate-800 overflow-hidden ` +
        className
      }
      passHref
    >
      <div className="relative z-10 h-40 md:h-full pb-4">
        <Image
          alt=""
          className={`rounded-xl h-full object-cover object-top group-hover:scale-95 group-hover:h-[90%] transition duration-300 ${
            big ? "" : "max-h-[18rem] group-hover:h-[80%]"
          }`}
          src={bg}
          width={big ? 1000 : 500}
        ></Image>
      </div>
      <div
        className="absolute z-20 bg-gradient-to-b from-transparent to-white
      group-hover:-translate-y-10 w-full h-full bottom-3"
      ></div>
      <div
        className="z-30 flex flex-col gap-2 py-10 w-full md:items-center group-hover:-translate-y-12
    transition duration-300 px-4 md:p-0"
      >
        <h3 className="text-2xl font-semibold">{heading}</h3>
        <div className="flex flex-row flex-wrap gap-2 md:gap-4">
          {tags.map((tag, i) => (
            <div
              key={`result-${route}-tag-${i}`}
              className="bg-white px-4 py-2 shadow-blurred rounded-lg text-xs md:text-sm text-slate-600 font-light"
            >
              {tag}
            </div>
          ))}
        </div>
        <div
          className={cn(
            "absolute -bottom-8 flex flex-row items-center p-4 opacity-0 transition-all duration-300 group-hover:translate-y-12 group-hover:opacity-100"
          )}
        >
          <button className="flex flex-row items-center hover:bg-stone-50 py-2 px-4 rounded-md text-sm">
            Read more
            <Image alt="" src={rightArrow} className="ml-2 h-4 w-4" />
          </button>
        </div>
      </div>
    </Link>
  );
};

/*

<aside
className={cn(
  "group relative col-span-3 flex flex-col justify-between overflow-hidden rounded-xl h-full",
  // light styles
  "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
  className
)}
>
<Image src={bg} className="max-h-[50px] z-10 object-cover"></Image>
<div className="z-20 bg-gradient-to-t from-white">
  <div className="pointer-events-none z-10 flex transform-gpu flex-col gap-1 p-6 transition-all duration-300 group-hover:-translate-y-10">
    <h3 className="text-xl font-semibold text-neutral-700">{heading}</h3>
    <div className="flex flex-row flex-wrap gap-4">
      {tags.map(tag => (
        <div className="bg-white px-4 py-2 shadow-blurred rounded-lg text-sm text-slate-600 font-light">
          {tag}
        </div>
      ))}
    </div>
    <div
      className={cn(
        "absolute bottom-0 flex w-full translate-y-10 transform-gpu flex-row items-center p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
      )}
    >
      <Link
        href={route}
        className="flex flex-row items-center hover:bg-stone-200 p-2 rounded-md text-sm"
      >
        Read more
        <Image alt="" src={rightArrow} className="ml-2 h-4 w-4" />
      </Link>
    </div>
    <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-black/[.03]" />
  </div>
</div>
</aside>
);
*/
