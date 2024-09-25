import Image from "next/image";
import wordmark from "/public/icons/wordmark-colour.svg";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="relative z-40 min-h-96 bg-blue-swirl bg-cover bg-bottom py-10 border-t-2 border-blue-300 px-6 flex flex-col items-center">
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
          <div className="flex flex-row gap-2 text-slate-700 font-light">
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-4"
            >
              <path
                d="M8.38028 8.85335C9.07627 10.303 10.0251 11.6616 11.2266 12.8632C12.4282 14.0648 13.7869 15.0136 15.2365 15.7096C15.3612 15.7694 15.4235 15.7994 15.5024 15.8224C15.7828 15.9041 16.127 15.8454 16.3644 15.6754C16.4313 15.6275 16.4884 15.5704 16.6027 15.4561C16.9523 15.1064 17.1271 14.9316 17.3029 14.8174C17.9658 14.3864 18.8204 14.3864 19.4833 14.8174C19.6591 14.9316 19.8339 15.1064 20.1835 15.4561L20.3783 15.6509C20.9098 16.1824 21.1755 16.4481 21.3198 16.7335C21.6069 17.301 21.6069 17.9713 21.3198 18.5389C21.1755 18.8242 20.9098 19.09 20.3783 19.6214L20.2207 19.779C19.6911 20.3087 19.4263 20.5735 19.0662 20.7757C18.6667 21.0001 18.0462 21.1615 17.588 21.1601C17.1751 21.1589 16.8928 21.0788 16.3284 20.9186C13.295 20.0576 10.4326 18.4332 8.04466 16.0452C5.65668 13.6572 4.03221 10.7948 3.17124 7.76144C3.01103 7.19699 2.93092 6.91477 2.9297 6.50182C2.92833 6.0436 3.08969 5.42311 3.31411 5.0236C3.51636 4.66357 3.78117 4.39876 4.3108 3.86913L4.46843 3.7115C4.99987 3.18006 5.2656 2.91433 5.55098 2.76999C6.11854 2.48292 6.7888 2.48292 7.35636 2.76999C7.64174 2.91433 7.90747 3.18006 8.43891 3.7115L8.63378 3.90637C8.98338 4.25597 9.15819 4.43078 9.27247 4.60655C9.70347 5.26945 9.70347 6.12403 9.27247 6.78692C9.15819 6.96269 8.98338 7.1375 8.63378 7.4871C8.51947 7.60142 8.46231 7.65857 8.41447 7.72538C8.24446 7.96281 8.18576 8.30707 8.26748 8.58743C8.29048 8.66632 8.32041 8.72866 8.38028 8.85335Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            +1 213-833-8210
          </div>
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
