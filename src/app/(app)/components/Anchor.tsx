import Link from "next/link";
import rightArrow from "/public/icons/right-arrow.svg";
import Image from "next/image";
import { ReactNode } from "react";

export const Anchor = ({
  route,
  children,
}: {
  route: string;
  children: ReactNode;
}) => {
  return (
    <Link
      className="flex flex-row gap-2 w-fit group hover:underline hover:text-slate-900 active:underline active:text-slate-900"
      href={route}
    >
      <div>{children}</div>
      <Image
        className="invisible group-hover:visible"
        src={rightArrow}
        alt=""
      />
    </Link>
  );
};
