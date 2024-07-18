"use client";

import { BaseSyntheticEvent, useState } from "react";
import wordmark from "/public/icons/wordmark-colour.svg";
import { AnimatedGradientBorder } from "./AnimatedBorder";
import { SolutionsNav, SolutionsNavMobile } from "./SolutionsNav";
import useCheckisMobile from "../../../hooks/useCheckMobileScreen";
import Image from "next/image";
import { redirect } from "next/navigation";
import Link from "next/link";

export const Header = () => {
  const [toggleSolutions, setToggleSolutions] = useState(false);
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleSolutionsEnter = (_: BaseSyntheticEvent) => {
    setToggleSolutions(true);
  };

  const handleDropdownEnter = (_: BaseSyntheticEvent) => {
    setToggleSolutions(true);
  };

  const handleSolutionsLeave = (_: BaseSyntheticEvent) => {
    setToggleSolutions(false);
  };

  const handleMenuClicked = (_: BaseSyntheticEvent) => {
    setToggleSolutions(false);
    setToggleMenu((prev) => !prev);
  };

  const isMobile = useCheckisMobile();

  return (
    <>
      <header className="fixed z-50 h-14 w-full border-b border-blue-600 bg-white text-base text-blue-700 md:h-20">
        <div className="mx-auto flex h-full w-full max-w-7xl flex-row place-items-center justify-between px-8 2xl:px-0">
          <Link
            href="/"
            className="mx-auto h-fit w-28 place-self-center md:mx-0 xl:w-fit"
          >
            <Image
              src={wordmark}
              width={150}
              className="ml-4 h-fit self-center md:ml-0"
              alt="Blue202 wordmark"
            ></Image>
          </Link>
          {isMobile ? (
            <NavMobile handleMenuClicked={handleMenuClicked} />
          ) : (
            <NavDesktop
              toggleSolutions={toggleSolutions}
              handleSolutionsEnter={handleSolutionsEnter}
              handleSolutionsLeave={handleSolutionsLeave}
            />
          )}
        </div>
        <div
          id="dropDown"
          onMouseEnter={handleDropdownEnter}
          onMouseLeave={handleSolutionsLeave}
          className={`
          relative z-[45]
          ${toggleSolutions && !isMobile ? "visible" : "invisible"}`}
        >
          {!isMobile && (
            <SolutionsNav
              className={`${
                toggleSolutions && !isMobile
                  ? "opacity-100 max-h-96"
                  : "opacity-0 max-h-0"
              }`}
            />
          )}
        </div>
        {!isMobile && (
          <div
            className={`transition fixed z-40 h-screen w-full bg-gradient-to-b from-slate-900 duration-300 -mt-10 ${
              toggleSolutions && !isMobile
                ? "max-h-screen opacity-100"
                : "max-h-0 opacity-0"
            }`}
          ></div>
        )}
        {isMobile && (
          <NavMobileDropDown
            className={toggleMenu ? "translate-x-0" : "translate-x-full"}
            toggleSolutions={toggleSolutions}
            setToggleSolutions={setToggleSolutions}
            setToggleMenu={setToggleMenu}
          />
        )}
      </header>
    </>
  );
};

const NavDesktop: React.FC<{
  toggleSolutions: boolean;
  handleSolutionsEnter: React.MouseEventHandler<HTMLAnchorElement>;
  handleSolutionsLeave: React.MouseEventHandler<HTMLAnchorElement>;
}> = ({ toggleSolutions, handleSolutionsEnter, handleSolutionsLeave }) => {
  const finished = false;

  return (
    <nav className="flex h-full flex-row place-items-center font-extralight">
      <AnimatedGradientBorder
        rounded="full"
        className="h-fit"
        bgColour="#ffffff"
        colour1="#000596"
        colour2="#f82bff"
      >
        <Link
          href="/contact"
          className="rounded-full border border-blue-600 p-2 px-7 hover:border-blue-900 hover:text-blue-400"
        >
          Get a Quote
        </Link>
      </AnimatedGradientBorder>
      <Link
        href="/solutions"
        onMouseEnter={handleSolutionsEnter}
        onMouseLeave={handleSolutionsLeave}
        onClick={() => {
          redirect("/solutions");
        }}
        className={`group pl-14 flex h-full flex-row items-center gap-2 hover:text-blue-400 ${
          toggleSolutions && "text-blue-400"
        }`}
      >
        <div>Solutions</div>
        <div className="mt-4 place-self-center pb-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="10"
            height="10"
            viewBox="0 0 24 24"
          >
            <path
              className={`group-hover:fill-blue-400 ${
                toggleSolutions && "fill-blue-400"
              }`}
              fill="#2453d9"
              d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z"
            />
          </svg>
        </div>
      </Link>
      <Link
        href="/results"
        className="group flex flex-row items-center gap-2 hover:text-blue-400 ml-14"
      >
        <div>Results</div>
      </Link>
      {finished && (
        <>
          <Link href="/our-approach" className="hover:text-blue-400">
            Our Approach
          </Link>
        </>
      )}
    </nav>
  );
};

const NavMobile: React.FC<{
  handleMenuClicked: React.MouseEventHandler<HTMLButtonElement>;
}> = ({ handleMenuClicked }) => {
  return (
    <button onClick={handleMenuClicked} className="w-10">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="#334155"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
    </button>
  );
};

const NavMobileDropDown: React.FC<{
  className: string;
  toggleSolutions: boolean;
  setToggleSolutions: React.Dispatch<React.SetStateAction<boolean>>;
  setToggleMenu: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ className, toggleSolutions, setToggleSolutions, setToggleMenu }) => {
  const finished = false;

  return (
    <nav
      className={
        "transition duration-500 flex h-screen w-full flex-col gap-4 bg-white pt-10 items-end text-lg text-slate-700 " +
        className
      }
    >
      <div className="flex w-full flex-col gap-4 items-end pr-20">
        <a
          onClick={() => setToggleMenu(false)}
          href="/contact"
          className="h-10 text-blue-800 active:text-blue-800"
        >
          Get a Quote
        </a>
      </div>
      <div className="flex flex-col gap-4 items-end pr-20">
        <button
          onClick={() => setToggleSolutions((prev: boolean) => !prev)}
          className="group flex flex-row items-center gap-2 h-10 active:text-blue-800"
        >
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              height="10"
              viewBox="0 0 24 24"
              transform={!toggleSolutions ? "rotate(-90)" : ""}
            >
              <path
                fill="rgb(30 41 59)"
                d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z"
              />
            </svg>
          </div>
          <div>Solutions</div>
        </button>
      </div>
      <SolutionsNavMobile
        className={
          toggleSolutions
            ? "max-h-screen opacity-100 visible"
            : "max-h-0 opacity-0 invisible"
        }
      />
      <div className="flex w-full flex-col gap-4 items-end pr-20">
        <Link href="/results" className="h-10 active:text-blue-800">
          Results
        </Link>
      </div>
      {finished && (
        <>
          <div className="flex w-full flex-col gap-4 items-end pr-20">
            <Link href="/results" className="h-10 active:text-blue-800">
              Results
            </Link>
            <Link href="/our-approach" className="h-10 active:text-blue-800">
              Our Approach
            </Link>
          </div>
        </>
      )}
    </nav>
  );
};
