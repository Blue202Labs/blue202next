import Link from "next/link";

export const ResultsPost = ({
  heading,
  tags,
  bg,
  route,
  className,
}: {
  heading: string;
  tags: string[];
  bg: string;
  route: string;
  className?: string;
}) => {
  return (
    <Link
      href={`/results/${route}`}
      className={
        "relative h-[30rem] md:h-full min-h-[30rem] w-full group " + className
      }
    >
      <div
        className={
          `z-10 absolute bg-center bg-cover w-full h-full group-hover:opacity-40 opacity-60 transition duration-200 ` +
          bg
        }
      ></div>
      <div className="z-20 relative w-full h-full p-10 py-20 md:p-20 transition flex flex-col gap-4 justify-between md:justify-end">
        <h2 className="text-6xl md:text-8xl text-white text-opacity-85 md:pt-0">
          {heading}
        </h2>
        <div className="flex flex-row flex-wrap gap-4 pt-4 font-body-sans justify-end md:justify-start">
          {tags.map((tag, i) => (
            <div
              key={`tag-${heading}-${i}`}
              className="bg-slate-50 bg-opacity-60 rounded-md text-sm px-4 py-2"
            >
              {tag}
            </div>
          ))}
        </div>
      </div>
    </Link>
  );
};
