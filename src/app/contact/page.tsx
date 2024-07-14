import { Contact } from "../components/Contact";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

const ContactPage = () => {
  return (
    <div className="pt-10 md:pt-32 h-full">
      <h2 className="max-w-3xl mx-auto text-4xl text-blue-900 font-medium font-body-sans py-20 px-10">
        &gt;&gt;{"  "}Ready to transform your buisiness?
      </h2>
      <Contact />
    </div>
  );
};

export default ContactPage;
