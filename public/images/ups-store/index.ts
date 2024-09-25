import upsPortal from "./ups-portal.jpeg";
import upsFrom from "./ups-form.jpeg";
import upsTicket from "./ups-ticket.png";
import { StaticImageData } from "next/image";

export const upsData: { src: StaticImageData; alt: string }[] = [
  {
    src: upsPortal,
    alt: "Screenshot of hero section of a website, showing a mockup of the app on a phone, with text on the left that reads: 'Sahily. Everything you need, all in one app.'",
  },
  {
    src: upsFrom,
    alt: "Screenshot of website displaying an image section with a hijabi girl using her phone to browse tutors, and text in the foreground that reads: 'Sahily, making life easy.'",
  },
  {
    src: upsTicket,
    alt: "Screenshot of website displaying the different value propositions of the app, arranged neatly in a row layout.",
  },
];
