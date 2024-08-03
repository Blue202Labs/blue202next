import { Heading } from "../../components/Heading";
import planning from "/public/images/plan-london.svg";
import seo from "/public/images/idea-brainstorm-london.svg";
import webCode from "/public/images/web-development-london.svg";
import { ReactNode } from "react";
import Image from "next/image";

export const SoftwarePrinciples = () => {
  return (
    <section>
      <Heading>Our Principles:</Heading>
      <div className="pt-10 flex flex-col gap-10 max-w-3xl mx-auto">
        <Principle img={webCode} heading="High Code Quality">
          We uphold high code quality standards to ensure robust and
          maintainable web solutions. Our developers write clean, efficient
          code, which enhances performance, security, and scalability of your
          web applications.
        </Principle>
        <Principle img={seo} heading="Scalability">
          Rest assured that all your solutions will be able to grow and adapt as
          your enterprise scales. Depending on your expected growth and use, we
          will tailor and recommend technology accordingly.
        </Principle>
        <Principle img={planning} heading="Clean Architecture">
          We are passionate about clean architecture and software design. We
          carefully craft our solutions to keep up with the latest standards and
          best design practices
        </Principle>
      </div>
    </section>
  );
};

export const Principle: React.FC<{
  img: string;
  heading: string;
  children: ReactNode;
}> = ({ img, heading, children }) => {
  return (
    <div>
      <div className="flex flex-col lg:flex-row lg:h-[15rem] gap-8 items-center mx-4 md:mx-0">
        <Image
          className="h-24 w-24 lg:h-48 lg:w-48"
          src={img}
          alt={`Graphic depicting ${heading}`}
        ></Image>
        <div className="flex flex-col gap-4 lg:pt-6 text-center lg:text-left">
          <h3 className="font-body-sans font-semibold text-2xl text-blue-950">
            {heading}
          </h3>
          <p className="text-slate-700">{children}</p>
        </div>
      </div>
    </div>
  );
};
