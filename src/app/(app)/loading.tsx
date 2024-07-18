"use client";

import { BounceLoader } from "react-spinners";

const Loading = () => {
  const handleTransitionEnd = () => {
    const loader = document.querySelector("#loader") as HTMLElement;
    loader.style.maxHeight = "0";
  };

  return (
    <main
      onTransitionEnd={handleTransitionEnd}
      id="loader"
      className="z-[60] fixed w-screen h-screen bg-white flex flex-col items-center justify-center"
    >
      <BounceLoader color="#4da5d6" speedMultiplier={2} />
    </main>
  );
};

export default Loading;
