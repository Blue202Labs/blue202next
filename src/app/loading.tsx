"use client";

import { BounceLoader } from "react-spinners";

const Loading = ({ className }: { className: string }) => {
  const handleTransitionEnd = () => {
    const loader = document.querySelector("#loader") as HTMLElement;
    loader.style.maxHeight = "0";
  };

  return (
    <div
      onTransitionEnd={handleTransitionEnd}
      id="loader"
      className={
        "z-[60] fixed w-screen h-screen bg-white flex flex-col items-center justify-center " +
        className
      }
    >
      <BounceLoader color="#4da5d6" speedMultiplier={2} />
    </div>
  );
};

export default Loading;
