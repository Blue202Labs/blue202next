import { Heading } from "../../components/Heading";
import { WebApproach } from "../components/OurApproach";
import { PageHero } from "../components/PageHero";

const Wordpress = () => {
  return (
    <>
      <PageHero
        heading="Seamless Content Management with WordPress."
        description="Do you need to be able to adapt your content to growing buisiness needs? A Wordpress site might be the best choice for you."
      />
      <div className="max-w-5xl mx-auto my-20 flex flex-col gap-14 px-4 text-slate-800">
        <article>
          <Heading>WordPress Sites</Heading>
          <p className="max-w-3xl mx-auto text-lg md:font-light py-10 px-6">
            WordPress is a powerful, flexible, and user-friendly content
            management system (CMS) that allows you to create and manage
            websites with ease. A CMS is a software platform that enables users
            to create, manage, and modify digital content on a website without
            needing specialized technical knowledge. Initially developed as a
            blogging platform, WordPress has evolved into a versatile tool that
            powers millions of websites, from personal blogs to large e-commerce
            sites. With a vast library of themes and plugins, WordPress offers
            extensive customization options, enabling you to tailor your site to
            your specific needs.
          </p>
        </article>
        <section className="drop-shadow-md bg-white border border-gray-200 w-full md:h-[25rem] rounded-xl flex flex-col gap-10 my-10">
          <div className="flex-col md:flex-row flex md:gap-10 justify-between h-full">
            <div className="flex flex-col bg-blue-abstract bg-cover rounded-t-xl md:rounded-tr-none md:rounded-l-xl p-10 pt-20 gap-10">
              <p className="font-body-sans font-semibold text-3xl text-white min-w-80">
                Why WordPress?
              </p>
              <div className="text-xl text-white">
                We reccomend WordPress for content that will need to be
                regularly updated, such as for a blog or a news site.
              </div>
            </div>
            <div className="flex flex-col gap-8 md:text-lg text-slate-700 p-8 py-12 pb-20 md:p-10 md:pt-20">
              <p>
                WordPress offers flexibility and scalability, making it suitable
                for websites of all sizes and purposes. With its intuitive
                interface, even non-technical users can easily manage and update
                content. With WordPress, content management is streamlined,
                allowing multiple users to collaborate, schedule posts, and
                manage media easily.
              </p>
            </div>
          </div>
        </section>
        <section className="my-10">
          <Heading>We Offer:</Heading>
          <div className="flex flex-col md:flex-row divide-y-2 md:divide-y-0 md:divide-x-2 gap-10 mx-auto mt-10 md:mt-20">
            <div className="pt-8 px-4 md:pl-10 flex flex-col gap-4 w-full">
              <h3 className="text-2xl text-slate-700 font-body-sans font-semibold">
                WordPress Builds
              </h3>
              <p>
                We will design and build a Wordpress site aligned with your
                buisiness needs.
              </p>
            </div>
            <div className="pt-8 px-4 md:pl-10 flex flex-col gap-4 w-full">
              <h3 className="text-2xl text-slate-700 font-body-sans font-semibold">
                Template Customisation
              </h3>
              <p>
                Going for a specific look? We can customise the template to your
                vision.
              </p>
            </div>
            <div className="pt-8 px-4 md:pl-10 flex flex-col gap-4 w-full">
              <h3 className="text-2xl text-slate-700 font-body-sans font-semibold">
                Hosting and Support
              </h3>
              <p>
                Never have to worry about hosting and maintanance again. Here at
                Blue202 we will support you every step of the way.
              </p>
            </div>
          </div>
        </section>
        <WebApproach />
      </div>
    </>
  );
};

export default Wordpress;
