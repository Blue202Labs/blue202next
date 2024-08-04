import { Metadata } from "next";
import opengraphImage from "/public/images/opengraph-image.jpg";
import { ReactNode } from "react";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.blue202labs.com"),
  title: {
    template: "%s | Blue202 Labs",
    default: "Blue202 Labs Web Development Services",
  },
  description:
    "Leading web development services. Trusted by UPS, AspenDental, RxForms and more.",
  openGraph: {
    title: {
      template: "%s | Blue202 Labs",
      default: "Blue202 Labs Web Development Services",
    },
    images: opengraphImage.src,
  },
};

const RootLayout = ({ children }: { children: ReactNode }) => {
  return <>{children}</>;
};

export default RootLayout;
