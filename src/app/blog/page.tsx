"use server";

import Link from "next/link";
import Image from "next/image";
import { FeaturesData } from "@/app/lib/cms.type";
import { BigFeature } from "./components/BigFeature";
import { SmallFeature } from "./components/SmallFeature";
import { PostThumbnail } from "./components/PostThubmnail";
import { fetchCmsData, fetchPosts } from "./actions";

async function getFeaturesData() {
  const featuresData: FeaturesData = await fetchCmsData("globals/features");
  return featuresData;
}

const BlogPage = async () => {
  const featuredData = await getFeaturesData();
  const postsData = await fetchPosts();

  return (
    <div className="min-h-screen pb-40 px-4 max-w-5xl mx-auto flex flex-col gap-28">
      <div className="flex flex-col gap-12 pt-28">
        <Link
          href="/"
          className="relative z-20 flex flex-row gap-2 text-gray-500 hover:underline mt-8 w-fit"
        >
          <svg
            width="20"
            viewBox="0 0 24 16"
            transform="rotate(180)"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M22.7399 8.70711C23.1304 8.31658 23.1304 7.68342 22.7399 7.29289L16.3759 0.928932C15.9854 0.538408 15.3522 0.538408 14.9617 0.928932C14.5712 1.31946 14.5712 1.95262 14.9617 2.34315L20.6186 8L14.9617 13.6569C14.5712 14.0474 14.5712 14.6805 14.9617 15.0711C15.3522 15.4616 15.9854 15.4616 16.3759 15.0711L22.7399 8.70711ZM0 9H22.0328V7H0V9Z"
              fill="rgb(107 114 128)"
            />
          </svg>
          Back to home
        </Link>
        <div className="bg-gray-100 p-12 rounded-lg flex flex-row justify-between">
          <h1 className="text-7xl font-medium">Blog</h1>
          <p className="w-1/2 place-self-center">
            Read about the latest web and mobile app development trends and
            insights and learn new skills through our blog.
          </p>
        </div>
      </div>
      <section className="flex flex-col gap-10">
        <div className="flex flex-row items-center gap-3">
          <svg
            width={25}
            clipRule="evenodd"
            fillRule="evenodd"
            strokeLinejoin="round"
            strokeMiterlimit="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              fill="#28a2ff"
              cx="11.998"
              cy="11.998"
              fillRule="nonzero"
              r="9.998"
            />
          </svg>
          <h3 className="text-4xl font-body-sans font-medium text-slate-600">
            Featured
          </h3>
        </div>
        <div className="flex flex-col md:flex-row gap-6">
          <BigFeature post={featuredData.mainFeature} />
          <div className="flex flex-row overflow-x-scroll md:grid grid-cols-2 grid-rows-2 grid-flow-row md:h-[45rem] gap-6 md:w-1/2 pb-8 md:pb-0 no-scrollbar">
            {featuredData.additionalFeatures.map((feature, idx) => (
              <SmallFeature key={`feature-${idx}`} post={feature} />
            ))}
          </div>
        </div>
      </section>
      <section className="flex flex-col gap-12">
        <div className="flex flex-row items-center gap-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              fill="#28a2ff"
              d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 18c-3.313 0-6-2.687-6-6s2.687-6 6-6c3.314 0 6 2.687 6 6s-2.686 6-6 6z"
            />
          </svg>
          <h3 className="text-4xl font-body-sans font-medium text-slate-600">
            Latest Posts
          </h3>
        </div>
        <div className="flex flex-col max-w-4xl mx-auto divide-y w-full">
          {postsData.docs.map((post, idx) => (
            <PostThumbnail key={`post-${idx}`} post={post} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
