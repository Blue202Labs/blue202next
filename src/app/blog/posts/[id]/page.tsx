import { PostData, PostsData } from "@/app/lib/cms.type";
import parse from "html-react-parser";

import styles from "./styles.module.css";
import { Metadata, ResolvingMetadata } from "next";
import { fetchPost, fetchPosts } from "../../actions";
import Link from "next/link";
import { breadCrumbList, schemaArticle } from "./schemaOrg";

type Props = {
  params: { id: string };
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const id = params.id;
  const postData: PostData = await fetchPost(id);

  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: postData.meta.title,
    description: postData.meta.description,
    openGraph: {
      images: [postData.hero.featuredImage.fullUrl, ...previousImages],
      type: "article",
      siteName: "Blue202 Labs",
    },
  };
}

export async function generateStaticParams() {
  const posts: PostsData = await fetchPosts();

  return posts.docs.map(post => ({
    id: post.id,
  }));
}

const PostPage = async ({
  params,
}: {
  params: {
    id: string;
  };
}) => {
  const { id } = params;
  const postData: PostData = await fetchPost(id);

  return (
    <>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(breadCrumbList(id, postData.title)),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              schemaArticle(
                postData.title,
                postData.hero.tags.map(t => t.tag),
                postData.id,
                postData.category
              )
            ),
          }}
        />
      </head>
      <div
        className={"pt-20 pb-40 min-h-screen max-w-3xl mx-auto px-4 md:px-20"}
      >
        <Link
          href="/blog"
          className="relative z-20 flex flex-row gap-2 text-gray-500 hover:underline mt-8 w-fit py-12 text-base"
        >
          <svg
            width="16"
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
          Back to blog
        </Link>
        <div className={" flex flex-col gap-10"}>
          <div className="font-bold tracking-wide uppercase text-blue-accent">
            {postData.category}
          </div>
          <img
            className="h-[20rem] object-cover"
            src={postData.hero.featuredImage.url}
            height={postData.hero.featuredImage.height}
            width={postData.hero.featuredImage.width}
            alt={postData.hero.featuredImage.altText}
          />
          <div className="flex flex-col gap-4 border-b-2 pb-8">
            <h1 className="text-4xl font-bold font-body-sans">
              {postData.title}
            </h1>
            <h2 className="text-2xl font-light text-slate-700">
              {postData.hero.subheading}
            </h2>
          </div>
          <div className={styles.blogpost}>{parse(postData.content_html)}</div>
        </div>
      </div>
    </>
  );
};

export default PostPage;
