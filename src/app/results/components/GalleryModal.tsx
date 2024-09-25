"use client";

import Image, { StaticImageData } from "next/image";
import { Dispatch, SetStateAction, useState } from "react";

export const GalleryModal = ({
  imageData,
  setShowModal,
  init,
}: {
  imageData: { src: StaticImageData; alt: string }[];
  setShowModal: Dispatch<SetStateAction<boolean>>;
  init?: number;
}) => {
  const [inFocus, setInFocus] = useState(init ? init : 0);

  return (
    <div
      onClick={() => {
        setShowModal(false);
      }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70"
    >
      <div
        onClick={e => e.stopPropagation()} // Prevent click event from propagating to the parent
        className="relative z-30"
      >
        <button
          onClick={() => setShowModal(false)}
          className="absolute -top-10 right-2 md:-right-10 z-40"
        >
          <svg
            className="size-8"
            width="100%"
            height="100%"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18 6L6 18M6 6L18 18"
              stroke="#b7b7b7"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
        <section className="overflow-hidden flex flex-col gap-4">
          <div className="flex flex-row md:max-w-7xl">
            <Image
              className="object-contain max-h-[40rem]"
              alt={imageData[inFocus].alt}
              src={imageData[inFocus].src}
            />
          </div>
          <div className="flex flex-row gap-2 justify-between items-center">
            <button
              name="Previous Item"
              onClick={() => inFocus !== 0 && setInFocus(prev => prev - 1)}
            >
              <svg
                className="opacity-55 hover:opacity-100 group w-8 md:w-24"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  className={
                    inFocus === 0
                      ? "fill-[#6f6f6f]"
                      : "fill-[#bcbcbc] group-hover:fill-[#adacac]"
                  }
                  d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z"
                />
              </svg>
            </button>
            <div className="flex flex-row gap-2 overflow-hidden max-w-[17rem] md:max-w-none px-4">
              {imageData.map((image, i) => (
                <button
                  onClick={() => setInFocus(i)}
                  key={`image-thumbnail-${i}`}
                  className="flex-none size-12 md:size-24 bg-gray-400"
                  style={{
                    transform: `translateX(-${
                      Math.floor(inFocus / 5) * 500 +
                      50 * Math.floor(inFocus / 5)
                    }%)`,
                    transition: "transform 0.3s ease", // Add a smooth transition
                  }}
                >
                  <Image
                    className={
                      "object-cover h-full border " +
                      (inFocus === i ? "opacity-100" : "opacity-60")
                    }
                    alt={image.alt}
                    src={image.src}
                  />
                </button>
              ))}
            </div>
            <button
              name="Next Item"
              onClick={() =>
                inFocus !== imageData.length - 1 && setInFocus(prev => prev + 1)
              }
            >
              <svg
                className="opacity-55 hover:opacity-100 group w-8 md:w-24"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  className={
                    inFocus === imageData.length - 1
                      ? "fill-[#6f6f6f]"
                      : "fill-[#bcbcbc] group-hover:fill-[#adacac]"
                  }
                  d="M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z"
                />
              </svg>
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};
