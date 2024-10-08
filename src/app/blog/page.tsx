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
    <div className="min-h-screen py-56 px-4 max-w-6xl mx-auto flex flex-col gap-28">
      <div>
        <h1 className="text-7xl font-medium">
          <span className="text-slate-500">/</span> Our Blog
        </h1>
        <div className="w-full border-b-2 pt-10"></div>
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
        <div className="flex flex-col md:flex-row gap-10">
          <BigFeature post={featuredData.mainFeature} />
          <div className="flex flex-row overflow-x-scroll md:grid grid-cols-2 grid-rows-2 grid-flow-row md:h-[45rem] gap-8 md:w-1/2 pb-8 md:pb-0 no-scrollbar">
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
        <div className="flex flex-col max-w-4xl mx-auto divide-y">
          {postsData.docs.map((post, idx) => (
            <PostThumbnail key={`post-${idx}`} post={post} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
