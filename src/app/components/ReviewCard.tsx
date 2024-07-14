import Image from "next/image";
import star from "/public/icons/star.svg";
import { ReactNode } from "react";

const startQuote = (
  <svg
    width="70"
    height="56"
    viewBox="0 0 70 56"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M54.1 56C49.5 56 45.7667 54.5333 42.9 51.6C40.1 48.6667 38.7 44.6 38.7 39.4C38.7 33 40.7667 26.2667 44.9 19.2C49.0333 12.0667 54.5667 5.69999 61.5 0.0999861L67.7 5.4C66.3 6.8 64.8667 8.73333 63.4 11.2C62 13.6 60.7667 16.2 59.7 19C58.6333 21.8 57.9667 24.4333 57.7 26.9C61.2333 27.7667 64.0333 29.5 66.1 32.1C68.2333 34.6333 69.3 37.6667 69.3 41.2C69.3 45.5333 67.9 49.1 65.1 51.9C62.3 54.6333 58.6333 56 54.1 56ZM16 56C11.3333 56 7.6 54.5333 4.8 51.6C2 48.6667 0.600001 44.6 0.600001 39.4C0.600001 33 2.66667 26.2667 6.8 19.2C10.9333 12.0667 16.4333 5.69999 23.3 0.0999861L29.6 5.4C28.2 6.8 26.7667 8.73333 25.3 11.2C23.9 13.6 22.6667 16.2 21.6 19C20.5333 21.8 19.8667 24.4333 19.6 26.9C23.1333 27.7667 25.9333 29.5 28 32.1C30.1333 34.6333 31.2 37.6667 31.2 41.2C31.2 45.5333 29.8 49.1 27 51.9C24.2 54.6333 20.5333 56 16 56Z"
      fill="#4743FF"
    />
  </svg>
);

const endQuote = (
  <svg
    width="69"
    height="56"
    viewBox="0 0 69 56"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M46.2 55.9L39.9 50.7C41.3 49.2333 42.7 47.3 44.1 44.9C45.5667 42.4333 46.8333 39.8 47.9 37C48.9667 34.1333 49.6333 31.4667 49.9 29C46.4333 28.2667 43.6333 26.6 41.5 24C39.3667 21.4 38.3 18.3 38.3 14.7C38.3 10.3667 39.7 6.83333 42.5 4.09999C45.3 1.36666 48.9667 -6.67572e-06 53.5 -6.67572e-06C58.1667 -6.67572e-06 61.9 1.46666 64.7 4.4C67.5 7.33332 68.9 11.4333 68.9 16.7C68.9 23.1 66.8333 29.8333 62.7 36.9C58.5667 43.9667 53.0667 50.3 46.2 55.9ZM8 55.9L1.8 50.7C3.2 49.2333 4.6 47.3 6 44.9C7.46667 42.4333 8.73334 39.8 9.8 37C10.8667 34.1333 11.5667 31.4667 11.9 29C8.36667 28.2667 5.53333 26.6 3.4 24C1.26667 21.4 0.200001 18.3 0.200001 14.7C0.200001 10.3667 1.6 6.83333 4.4 4.09999C7.2 1.36666 10.8667 -6.67572e-06 15.4 -6.67572e-06C20.0667 -6.67572e-06 23.8 1.46666 26.6 4.4C29.4 7.33332 30.8 11.4333 30.8 16.7C30.8 23.1 28.7333 29.8333 24.6 36.9C20.4667 43.9667 14.9333 50.3 8 55.9Z"
      fill="#4743FF"
    />
  </svg>
);

export const ReviewCard: React.FC<{
  author: string;
  company: string;
  contentRef?: any;
  className?: string;
  children: ReactNode;
}> = ({ author, company, contentRef, className, children }) => {
  return (
    <blockquote
      className={
        "px-2 relative max-w-3xl mx-auto review-container " + className
      }
    >
      <div
        ref={contentRef ? contentRef : null}
        className={
          "md:w-[45rem] mx-auto rounded-3xl flex flex-col p-10 md:px-20 gap-10 bg-white"
        }
      >
        <div className="absolute -top-8 left-4">{startQuote}</div>
        <div className="flex flex-row gap-2">
          <Image alt="Gold star icon" width={30} src={star} />
          <Image alt="Gold star icon" width={30} src={star} />
          <Image alt="Gold star icon" width={30} src={star} />
          <Image alt="Gold star icon" width={30} src={star} />
          <Image alt="Gold star icon" width={30} src={star} />
        </div>
        {children}
        <div className="flex flex-col self-end text-lg md:text-xl pr-16">
          <div className="text-[#6F6B85]">{author}</div>
          <div className="text-slate-700 font-medium">{company}</div>
        </div>
        <div className="absolute -bottom-8 right-0">{endQuote}</div>
      </div>
    </blockquote>
  );
};
