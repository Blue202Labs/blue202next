import Image from "next/image";
import wordmark from "/public/icons/wordmark-colour.svg";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="min-h-96 bg-blue-swirl bg-cover bg-bottom py-10 border-t-2 border-blue-300 px-6 flex flex-col items-center">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row py-10 px-10 gap-16 justify-between">
        <section className="flex flex-col max-w-80 gap-6">
          <Link href="/">
            <Image
              src={wordmark}
              className="w-40"
              alt="Blue202 wordmark"
            ></Image>
          </Link>
          <div className="flex flex-row text-3xl font-body-sans">
            <h3 className="text-sky-400 hidden md:block">
              &gt;&gt;&nbsp;&nbsp;
            </h3>
            <h3 className=" text-slate-800 font-light">
              Your partner for everything digital.
            </h3>
          </div>
          <a
            href="/contact"
            className="text-lg text-blue-900 flex flex-row place-items-center gap-3 hover:gap-5 hover:border-b-2 active:border-b-2 border-blue-900 w-fit md:ml-10"
          >
            <span>Get in touch</span>
            <svg
              width="24"
              height="16"
              viewBox="0 0 24 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22.7399 8.70711C23.1304 8.31658 23.1304 7.68342 22.7399 7.29289L16.3759 0.928932C15.9854 0.538408 15.3522 0.538408 14.9617 0.928932C14.5712 1.31946 14.5712 1.95262 14.9617 2.34315L20.6186 8L14.9617 13.6569C14.5712 14.0474 14.5712 14.6805 14.9617 15.0711C15.3522 15.4616 15.9854 15.4616 16.3759 15.0711L22.7399 8.70711ZM0 9H22.0328V7H0V9Z"
                fill="rgb(30 58 138)"
              />
            </svg>
          </a>
        </section>
        <section className="flex flex-col max-w-80 gap-4">
          <Link href="/contact" className="text-xl font-mono hover:underline">
            CONTACT US
          </Link>
          <p className="text-slate-600 font-light">
            Blue202Labs LLC
            <br></br>8 The Green STE B,
            <br></br>
            Dover, DE 19901
            <br></br>
            United States of America
          </p>
          <a
            className="text-blue-800 hover:underline"
            href="mailto:info@blue202labs.com"
          >
            info@blue202labs.com
          </a>
          <div className="flex flex-row invisible">
            <Link href="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </Link>
          </div>
        </section>
      </div>
      <p className="text-slate-500 font-light pr-2 text-sm">
        ©Blue202Labs 2024
      </p>
    </footer>
  );
};
