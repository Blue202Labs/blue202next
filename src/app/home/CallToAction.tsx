export const CallToAction = () => {
  return (
    <section className="px-8 md:px-0 my-48 font-body-sans max-w-2xl mx-auto">
      <div className="flex flex-row gap-6 place-items-end pl-24">
        <div className="h-10 w-8 bg-gray-300"></div>
        <div className="h-20 w-8 bg-gray-300"></div>
        <div className="h-28 w-8 bg-gray-300"></div>
      </div>
      <h3 className="text-3xl md:text-5xl font-medium text-center">
        Ready to take your business to the next level?
      </h3>
      <p className="font-default text-gray-600 py-8 md:text-lg font-light text-center ">
        Whether you are a business trying to upgrade your online presence, or a
        team requiring bespoke web applications to optimize your processes, or a
        startup that needs effective prototyping done -{" "}
        <b className="text-blue-800">you’ve found the right place.</b>
      </p>
    </section>
  );
};
