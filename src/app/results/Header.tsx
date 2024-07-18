import Link from "next/link";

export const ResultsHeader = ({
  heading,
  bg,
  tags,
}: {
  heading: string;
  bg: string;
  tags: string[];
}) => {
  return (
    <div className={`relative h-[30rem] w-full bg-black`}>
      <div
        className={
          "z-10 absolute bg-center bg-cover w-screen h-full opacity-60 transition duration-200 " +
          bg
        }
      ></div>
      <div className="z-20 relative w-full h-full p-20 transition flex flex-col justify-between max-w-5xl mx-auto">
        <Link
          href="/results"
          className="relative z-20 flex flex-row gap-2 text-[#cdcdcd] hover:underline pt-8"
        >
          <svg
            width="20"
            viewBox="0 0 24 16"
            transform="rotate(180)"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M22.7399 8.70711C23.1304 8.31658 23.1304 7.68342 22.7399 7.29289L16.3759 0.928932C15.9854 0.538408 15.3522 0.538408 14.9617 0.928932C14.5712 1.31946 14.5712 1.95262 14.9617 2.34315L20.6186 8L14.9617 13.6569C14.5712 14.0474 14.5712 14.6805 14.9617 15.0711C15.3522 15.4616 15.9854 15.4616 16.3759 15.0711L22.7399 8.70711ZM0 9H22.0328V7H0V9Z"
              fill="#cdcdcd"
            />
          </svg>
          Back to results
        </Link>
        <div className="flex flex-col">
          <h2 className="text-6xl md:text-8xl text-white text-opacity-85">
            {heading}
          </h2>
          <div className="flex flex-row flex-wrap gap-4 pt-4 font-body-sans">
            {tags.map((tag, i) => (
              <div
                key={`tag-sizzler-${i}`}
                className="bg-slate-50 rounded-md text-sm px-6 py-2"
              >
                {tag}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
