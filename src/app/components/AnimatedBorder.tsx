/**@author Julien Thibeaut @see https://ibelick.com/blog/create-animated-gradient-borders-with-css */

import { CSSProperties, useEffect, useRef } from "react";

export const AnimatedGradientBorder: React.FC<{
  children: React.ReactNode;
  rounded: string;
  className: string;
  bgColour?: string;
  colour1?: string;
  colour2?: string;
}> = ({
  children,
  rounded,
  className,
  bgColour = "#ffffff",
  colour1 = "#00bcd1",
  colour2 = "#be6eff",
}) => {
  const boxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const boxElement = boxRef.current;

    if (!boxElement) {
      return;
    }

    const updateAnimation = () => {
      const angle =
        (parseFloat(boxElement.style.getPropertyValue("--angle")) + 0.8) % 360;
      boxElement.style.setProperty("--angle", `${angle}deg`);
      requestAnimationFrame(updateAnimation);
    };

    requestAnimationFrame(updateAnimation);
  }, []);

  return (
    <div
      ref={boxRef}
      style={
        {
          "--angle": "0deg",
          "--border-color": `linear-gradient(var(--angle), ${colour1}, ${colour2})`,
          "--bg-color": `linear-gradient(${bgColour}, ${bgColour})`,
        } as CSSProperties
      }
      className={`rounded-${rounded} flex w-fit items-center justify-center border-2 border-[#0000] [background:padding-box_var(--bg-color),border-box_var(--border-color)] ${className}`}
    >
      {children}
    </div>
  );
};
