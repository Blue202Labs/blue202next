import Link from "next/link";

export const Post = ({
  heading,
  tags,
  bg,
  colSpan,
  rowSpan,
}: {
  heading: string;
  tags: string[];
  bg: string;
  colSpan: string;
  rowSpan: string;
}) => {
  <Link
    key="post-link-4"
    href="/results/sizzlers-egypt"
    className={
      `relative min-h-[30rem] group ` + colSpan
        ? `col-span-${colSpan} `
        : " " + rowSpan
        ? `row-span-${rowSpan} `
        : " "
    }
  >
    <div
      className={`z-10 absolute bg-center w-full bg-${bg} h-full group-hover:opacity-40 opacity-60 transition duration-200`}
    ></div>
    <div className="z-20 relative w-full h-full p-20 transition flex flex-col justify-end">
      <h2 className="text-8xl text-white text-opacity-85">{heading}</h2>
      <div className="flex flex-row gap-4 pt-4 font-body-sans">
        {tags.map((tag, i) => (
          <div
            key={`tag-${heading}-${i}`}
            className="bg-slate-50 bg-opacity-60 rounded-md text-sm px-6 py-2"
          >
            {tag}
          </div>
        ))}
      </div>
    </div>
  </Link>;
};
