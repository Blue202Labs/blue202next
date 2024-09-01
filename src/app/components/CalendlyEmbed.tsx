"use client";

import React, { useEffect, useState } from "react";
import { PopupModal, PopupWidget } from "react-calendly";
import { GradientButton } from "./GradientButton";
import { AnimatedGradientBorder } from "./AnimatedBorder";

const CalendlyEmbed = () => {
  const [rootElement, setRootElement] = useState<HTMLElement | null>(null);
  const [showModal, setShowModal] = useState<boolean>(false);

  useEffect(() => {
    // Wait for the component to be mounted before setting the rootElement
    if (document) {
      setRootElement(document.getElementById("root"));
    }
  }, []);
  return (
    <div className="">
      <AnimatedGradientBorder className="" rounded="full">
        <button
          onClick={() => setShowModal(true)}
          className="bg-gradient-to-tr from-blue-600 hover:from-blue-700 to-sky-400 hover:to-sky-500 text-white flex flex-row items-center gap-2 px-6 py-2 rounded-full md:text-lg tracking-wide"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
          >
            <path
              fill="#ffffff"
              d="M0 12l11 3.1 7-8.1-8.156 5.672-4.312-1.202 15.362-7.68-3.974 14.57-3.75-3.339-2.17 2.925v-.769l-2-.56v7.383l4.473-6.031 4.527 4.031 6-22z"
            />
          </svg>
          Schedule a Call
        </button>
      </AnimatedGradientBorder>
      {rootElement && (
        <PopupModal
          url="https://calendly.com/blue202labs/30min"
          onModalClose={() => setShowModal(false)}
          rootElement={rootElement!}
          open={showModal}
        />
      )}
    </div>
  );
};

export default CalendlyEmbed;
