import ticketeerHero from "./ticketeer-hero.png";
import ticketeerSubscriptions from "./ticketeer-subscriptions.png";
import ticketeerSignIn from "./ticketeer-login.png";
import ticketeerEmailVerif from "./ticketeer-email-verif.png";
import ticketeerDomain from "./ticketeer-domain.png";
import ticketeerSupport from "./ticketeer-support.png";
import ticketeerAdminPlans from "./ticketeer-admin-plans.png";
import ticketeerAdminAdmins from "./ticketeer-admin-admins.png";
import { ImageDataType } from "@/app/lib/image.type";

export const ticketeerData: ImageDataType = [
  {
    src: ticketeerHero,
    alt: "Screenshot of the hero section of the ticketeer website. A large graphic of people sitting in an event audience with text in the foreground that reads: 'Manage your event ticketing with ease'",
  },
  {
    src: ticketeerSubscriptions,
    alt: "Screenshot of the subscriptions section of the ticketeer website. Shows three different subscription plans along with their price and details.",
  },
  { src: ticketeerSignIn, alt: "Screenshot of the ticketeer sign in page." },
  {
    src: ticketeerEmailVerif,
    alt: "Screenshot of a Ticketeer email verification email in an inbox.",
  },
  {
    src: ticketeerDomain,
    alt: "Screnshot of the ticketeer user dashboard, where they can set their subdomain.",
  },
  {
    src: ticketeerSupport,
    alt: "Screnshot of the ticketeer user dashboard, where users can submit support requests.",
  },
  {
    src: ticketeerAdminPlans,
    alt: "Screnshot of the ticketeer admin portal, where the different subscription plans are managed.",
  },
  {
    src: ticketeerAdminAdmins,
    alt: "Screnshot of the ticketeer admin portal, where the admins are managed.",
  },
];
