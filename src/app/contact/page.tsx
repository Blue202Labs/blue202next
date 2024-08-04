import { Contact } from "../components/Contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get in Contact With Our Web Development Team | Blue202Labs",
  description:
    "Leading web software and mobile app development services. Trusted by UPS, AspenDental, RxForms and more.",
  openGraph: {
    title: "Get in Contact With Our Web Development Team | Blue202Labs",
    description:
      "Leading web software and mobile app development services. Trusted by UPS, AspenDental, RxForms and more.",
  },
};

const ContactPage = () => {
  return (
    <div className="pt-10 md:pt-32 h-full">
      <h2 className="max-w-3xl mx-auto text-4xl text-blue-900 font-medium font-body-sans py-20 px-10">
        &gt;&gt;{"  "}Ready to transform your business?
      </h2>
      <Contact />
    </div>
  );
};

export default ContactPage;
