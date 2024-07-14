import { ReactNode } from "react";

export const GradientButton: React.FC<{
  children: ReactNode;
  className: string;
  colour1: string;
  colour2: string;
  colour3: string;
  href: string;
}> = ({ children, className, colour1, colour2, colour3, href }) => {
  return (
    <a
      href={href}
      className={
        `flex w-fit text-nowrap flex-row gap-6 bg-gradient-to-tr bg-[length:300%_100%] bg-right transition-[background-position] duration-500 hover:bg-left active:bg-left ` +
        className
      }
      style={{
        backgroundImage: `linear-gradient(to top right, ${colour1}, ${colour2}, ${colour3})`,
      }}
    >
      {children}
    </a>
  );
};
