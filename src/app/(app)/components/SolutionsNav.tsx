import { BaseSyntheticEvent, ReactNode } from "react";
import useCheckMobileScreen from "../../../hooks/useCheckMobileScreen";
import Link from "next/link";

export const SolutionsNav: React.FC<{
  className: string;
}> = ({ className }) => {
  return (
    <div className="flex flex-col items-center pt-10">
      <nav
        className={
          "drop-down transition fixed h-96 rounded-3xl max-w-5xl border-2 border-blue-600 bg-white text-slate-700 duration-300 ease-in-out " +
          className
        }
      >
        <div
          className={
            "transition mx-auto flex h-full w-fit flex-col gap-10 p-10 px-16 pb-16 delay-75 md:flex-row " +
            className
          }
        >
          <Solution header={"Websites"}>
            <Anchor route="websites">Custom sites</Anchor>
            <Anchor route="wordpress">Wordpress sites</Anchor>
          </Solution>
          <Solution header={"Web Apps"}>
            <Anchor route="bespoke-software">Bespoke Software</Anchor>
            <Anchor route="crm">CRM</Anchor>
            <Anchor route="api">API Development</Anchor>
            <Anchor route="hosting">Hosting</Anchor>
          </Solution>
          <Solution header={"UI/UX & Marketing"}>
            <Anchor route="web-design">Web Design</Anchor>
            <Anchor route="digital-marketing">
              Digital Marketing Strategy
            </Anchor>
          </Solution>
        </div>
      </nav>
    </div>
  );
};

export const SolutionsNavMobile: React.FC<{
  className: string;
}> = ({ className }) => {
  return (
    <nav
      onTransitionEnd={(e: BaseSyntheticEvent) => {
        const target = e.currentTarget as HTMLElement;
        if (target.classList.contains("opacity-0")) {
          target.classList.replace("visible", "hidden");
        } else {
          target.classList.replace("hidden", "visible");
        }
      }}
      className={
        "transition ease-in-out duration-200 flex flex-col bg-slate-100 text-base border-y w-full px-12 -mt-4 " +
        className
      }
    >
      <Solution header={"Websites"}>
        <Anchor route="websites">Custom sites</Anchor>
        <Anchor route="wordpress">Wordpress sites</Anchor>
      </Solution>
      <Solution header={"Web Apps"}>
        <Anchor route="bespoke-software">Bespoke Software</Anchor>
        <Anchor route="crm">CRM</Anchor>
        <Anchor route="api">API Development</Anchor>
        <Anchor route="hosting">Hosting</Anchor>
      </Solution>
      <Solution header={"UI/UX & Marketing"}>
        <Anchor route="web-design">Web Design</Anchor>
        <Anchor route="digital-marketing">Digital Marketing Strategy</Anchor>
      </Solution>
    </nav>
  );
};

const Anchor: React.FC<{
  route: string;
  children: ReactNode;
}> = ({ children, route }) => {
  return (
    <Link href={`/solutions/${route}`} className="group hover:text-slate-500">
      {children}
      {!useCheckMobileScreen() && (
        <div className="ml-2 inline-block h-4 w-[1.2rem] bg-contain bg-no-repeat align-middle group-hover:bg-right-arrow"></div>
      )}
    </Link>
  );
};

const Solution: React.FC<{
  header: string;
  children: ReactNode[];
}> = ({ header, children }) => {
  return (
    <div className="flex w-full flex-row md:flex-col md:items-start py-2 md:h-full md:w-60 md:gap-0 md:py-4 items-center justify-between ">
      <h3 className="w-full font-mono font-medium text-blue-800 md:text-lg">
        {!useCheckMobileScreen() && <span>&gt;&gt;</span>} {header}
      </h3>
      <div className="flex h-full text-end md:text-start flex-col w-full gap-2 rounded-xl py-4 font-medium text-slate-700 md:px-7">
        {children}
      </div>
    </div>
  );
};
