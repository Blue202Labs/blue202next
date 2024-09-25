import Link from "next/link";
import rightArrow from "/public/icons/right-arrow.svg";
import Image from "next/image";

const SolutionsLink = ({ href, text }: { href: string; text: string }) => {
  return (
    <div className="w-full flex flex-col items-end hover:underline text-sm md:text-base text-right">
      <Link className="flex flex-row gap-2 w-fit" href={"solutions/" + href}>
        <div>{text}</div>
        <Image
          className="w-4 md:w-5 self-start pt-[0.3rem]"
          src={rightArrow}
          alt="Right arrow icon"
        />
      </Link>
    </div>
  );
};

export const WebDevelopmentLink = () => (
  <SolutionsLink
    href="website"
    text="Read more about our website development services"
  />
);

export const WebDesignLink = () => (
  <SolutionsLink
    href="web-design"
    text="Read more about our web design solutions"
  />
);

export const CRMLink = () => (
  <SolutionsLink href="crm" text="Read more about our bespoke CRM offerings" />
);

export const BespokeSoftwareLink = () => (
  <SolutionsLink
    href="bespoke-software"
    text="Read more about our bespoke software offerings"
  />
);

export const DigitalMarketingLink = () => (
  <SolutionsLink
    href="digital-marketing"
    text="Read more about our digital marketing services"
  />
);

export const WordPressLink = () => (
  <SolutionsLink
    href="wordpress"
    text="Read more about our WordPress services"
  />
);
