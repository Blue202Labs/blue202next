import { BaseSyntheticEvent, ReactNode } from "react";
import useCheckMobileScreen from "../../hooks/useCheckMobileScreen";
import Link from "next/link";

export const SolutionsNav: React.FC<{
  className: string;
  setToggleSolutions: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ className, setToggleSolutions }) => {
  return (
    <div className="flex flex-col items-center pt-10">
      <nav
        className={
          "drop-down transition fixed h-[30rem] rounded-3xl max-w-5xl border-2 border-blue-600 bg-white text-slate-700 duration-300 ease-in-out " +
          className
        }
      >
        <div
          className={
            "transition mx-auto h-full w-fit grid grid-cols-3 gap-x-24 p-10 px-20 pb-16 delay-75 " +
            className
          }
        >
          <Solution header={"Web Apps"}>
            <Anchor setToggleMenu={setToggleSolutions} route="bespoke-software">
              Bespoke Software
            </Anchor>
            <Anchor setToggleMenu={setToggleSolutions} route="crm">
              CRM
            </Anchor>
            <Anchor setToggleMenu={setToggleSolutions} route="api">
              API Development
            </Anchor>
            <Anchor setToggleMenu={setToggleSolutions} route="hosting">
              Hosting
            </Anchor>
          </Solution>
          <Solution header="For Startups">
            <Anchor
              setToggleMenu={setToggleSolutions}
              route="startup-development-package"
            >
              Startup Development Package
            </Anchor>
            <Anchor setToggleMenu={setToggleSolutions} route="mvp-development">
              MVP Development
            </Anchor>
          </Solution>
          <Solution header={"Websites"}>
            <Anchor setToggleMenu={setToggleSolutions} route="websites">
              Custom sites
            </Anchor>
            <Anchor setToggleMenu={setToggleSolutions} route="wordpress">
              Wordpress sites
            </Anchor>
          </Solution>
          <Solution header={"UI/UX & Marketing"}>
            <Anchor setToggleMenu={setToggleSolutions} route="web-design">
              Web Design
            </Anchor>
            <Anchor
              setToggleMenu={setToggleSolutions}
              route="digital-marketing"
            >
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
  setToggleMenu: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ className, setToggleMenu }) => {
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
      <Solution header={"Web Apps"}>
        <Anchor setToggleMenu={setToggleMenu} route="bespoke-software">
          Bespoke Software
        </Anchor>
        <Anchor setToggleMenu={setToggleMenu} route="crm">
          CRM
        </Anchor>
        <Anchor setToggleMenu={setToggleMenu} route="api">
          API Development
        </Anchor>
        <Anchor setToggleMenu={setToggleMenu} route="hosting">
          Hosting
        </Anchor>
      </Solution>
      <Solution header="For Startups">
        <Anchor
          setToggleMenu={setToggleMenu}
          route="startup-development-package"
        >
          Startup Development Package
        </Anchor>
        <Anchor setToggleMenu={setToggleMenu} route="mvp-development">
          MVP Development
        </Anchor>
      </Solution>
      <Solution header={"Websites"}>
        <Anchor setToggleMenu={setToggleMenu} route="websites">
          Custom sites
        </Anchor>
        <Anchor setToggleMenu={setToggleMenu} route="wordpress">
          Wordpress sites
        </Anchor>
      </Solution>
      <Solution header={"UI/UX & Marketing"}>
        <Anchor setToggleMenu={setToggleMenu} route="web-design">
          Web Design
        </Anchor>
        <Anchor setToggleMenu={setToggleMenu} route="digital-marketing">
          Digital Marketing Strategy
        </Anchor>
      </Solution>
    </nav>
  );
};

const Anchor: React.FC<{
  route: string;
  setToggleMenu?: React.Dispatch<React.SetStateAction<boolean>>;
  children: ReactNode;
}> = ({ children, setToggleMenu, route }) => {
  return (
    <Link
      onClick={() => {
        if (setToggleMenu) setToggleMenu(false);
      }}
      href={`/solutions/${route}`}
      className="group hover:text-slate-500"
    >
      {children}
      {!useCheckMobileScreen() && (
        <div className="ml-2 inline-block h-4 w-[1.2rem] bg-contain bg-no-repeat align-middle group-hover:bg-right-arrow"></div>
      )}
    </Link>
  );
};

const Solution: React.FC<{
  header: string;
  className?: string;
  children: ReactNode[] | ReactNode;
}> = ({ header, className, children }) => {
  return (
    <div
      className={
        "flex w-full flex-row md:flex-col md:items-start py-2 md:h-full md:w-60 md:gap-0 md:py-4 items-center justify-between " +
        className
      }
    >
      <h3 className="w-full font-mono font-medium text-blue-800 md:text-lg">
        {!useCheckMobileScreen() && <span>&gt;&gt;</span>} {header}
      </h3>
      <div className="flex h-full text-end md:text-start flex-col w-full gap-2 rounded-xl py-4 font-medium text-slate-700 md:px-7">
        {children}
      </div>
    </div>
  );
};
