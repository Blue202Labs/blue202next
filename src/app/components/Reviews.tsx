import { useEffect, useRef } from "react";
import { Heading } from "./Heading";
import planning from "/public/images/optimise-london.svg";
import useCheckMobileScreen from "../../hooks/useCheckMobileScreen";
import Image from "next/image";
import { ReviewCard } from "./ReviewCard";

export const Reviews = () => {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);

  const isMobile = useCheckMobileScreen();

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current! as HTMLElement;
      const content = contentRef.current! as HTMLElement;
      const { top: sectionTop, height: sectionHeight } =
        section.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const startOffset = windowHeight * 0.5;
      const endOffset = 0;

      if (sectionTop < startOffset && sectionTop + sectionHeight > endOffset) {
        let progress = Math.min(
          Math.max((windowHeight - sectionTop) / windowHeight, 0),
          1
        );
        progress += 0.2;
        let scale = 1 + 0.2 * (1 - progress); // Scale from 1.2 to 1
        let rotateY = 30 * (1 - progress); // Rotate from 30deg to 0deg
        if (scale <= 1 || rotateY <= 0) {
          scale = 1;
          rotateY = 0;
        }
        content.style.transform = `rotateY(${rotateY}deg) scale(${scale})`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section ref={sectionRef} className="md:my-48 py-20 bg-blue-swirl bg-cover">
      <div className="max-w-7xl mx-auto">
        <Heading>Testimonials:</Heading>
        <div className="flex flex-col md:flex-row items-center my-20 md:my-48">
          {!isMobile && (
            <Image
              className="w-48 md:w-96 pl-10"
              src={planning}
              alt="Illustration of a hand drawing a UI"
            ></Image>
          )}
          <ReviewCard
            author="Youssef Beyram"
            company="Co-Founder at San Diego Wholesalers"
            contentRef={contentRef}
          >
            <p className="md:text-lg font-normal font-body-sans text-slate-600">
              Blue202 revolutionized our operations at San Diego Wholesalers!
              Their bespoke CRM solution and Inventory Management System
              streamlined our processes impeccably. <br></br> <br></br>
              Exceptional team, innovative solutions, and a{" "}
              <span className="font-semibold text-blue-900">
                game-changer
              </span>{" "}
              for our business. Highly recommend their expertise!
            </p>
          </ReviewCard>
        </div>
      </div>
    </section>
  );
};
