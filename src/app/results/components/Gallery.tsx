"use client";

import Image, { StaticImageData } from "next/image";
import { useState } from "react";
import { GalleryModal } from "./GalleryModal";

export const Gallery = ({
  imageData,
  className,
}: {
  imageData: { src: StaticImageData; alt: string }[];
  className?: string;
}) => {
  const [inFocus, setInFocus] = useState(0);
  const [showModal, setShowModal] = useState(false);

  return (
    <section
      className={"overflow-hidden flex flex-col gap-4 mb-24 " + className}
    >
      <div className="relative z-30">
        <button
          onClick={() => {
            setShowModal(true);
          }}
          className="absolute right-2 bottom-2 z-30 bg-white rounded p-2 bg-opacity-70 hover:opacity-80"
        >
          <svg
            className="size-6"
            width="100%"
            height="100%"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V8M8 21H7.8C6.11984 21 5.27976 21 4.63803 20.673C4.07354 20.3854 3.6146 19.9265 3.32698 19.362C3 18.7202 3 17.8802 3 16.2V16M21 8V7.8C21 6.11984 21 5.27976 20.673 4.63803C20.3854 4.07354 19.9265 3.6146 19.362 3.32698C18.7202 3 17.8802 3 16.2 3H16M21 16V16.2C21 17.8802 21 18.7202 20.673 19.362C20.3854 19.9265 19.9265 20.3854 19.362 20.673C18.7202 21 17.8802 21 16.2 21H16"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <div className="flex flex-row w-fit border-b border-stone-100 max-h-[30rem]">
          {imageData.map((image, i) => (
            <Image
              key={`image-gallery-${i}`}
              style={{
                transform: `translateX(-${inFocus * 100}%)`,
                transition: "transform 0.3s ease", // Add a smooth transition
              }}
              className="object-cover h-auto"
              width={1000}
              alt={image.alt}
              src={image.src}
            />
          ))}
        </div>
      </div>
      <div className="flex flex-row gap-2 justify-between items-center">
        <button
          name="Previous Item"
          onClick={() => inFocus !== 0 && setInFocus(prev => prev - 1)}
        >
          <svg
            className="opacity-55 hover:opacity-100 group size-6"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              className={
                inFocus === 0
                  ? "fill-[#bcbcbc]"
                  : "fill-[#656565] group-hover:fill-[#606060]"
              }
              d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z"
            />
          </svg>
        </button>
        <div className="flex flex-row gap-2 overflow-hidden md:px-4 max-w-[17rem] md:max-w-none w-full">
          {imageData.map((image, i) => (
            <button
              onClick={() => setInFocus(i)}
              key={`image-thumbnail-${i}`}
              className="flex-none size-12 md:size-24 bg-gray-400"
              style={{
                transform: `translateX(-${
                  Math.floor(inFocus / 5) * 500 + 50 * Math.floor(inFocus / 5)
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
            className="opacity-55 hover:opacity-100 group size-6"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              className={
                inFocus === imageData.length - 1
                  ? "fill-[#bcbcbc]"
                  : "fill-[#656565] group-hover:fill-[#606060]"
              }
              d="M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z"
            />
          </svg>
        </button>
      </div>
      {showModal && (
        <GalleryModal
          init={inFocus}
          setShowModal={setShowModal}
          imageData={imageData}
        />
      )}
    </section>
  );
};
