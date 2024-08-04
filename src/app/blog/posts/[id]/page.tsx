import { PostData, PostsData } from "@/app/lib/cms.type";
import parse from "html-react-parser";

import styles from "./styles.module.css";
import { Metadata, ResolvingMetadata } from "next";

type Props = {
  params: { id: string };
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const id = params.id;

  // fetch data
  const res = await fetch(`http://localhost:3000/api/posts/${id}`, {
    headers: {
      Authorisation: "users API-Key " + process.env.CMS_API_KEY,
      Origin: "http://127.0.0.1",
    },
  });

  const postData: PostData = await res.json();

  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: postData.meta.title,
    description: postData.meta.description,
    openGraph: {
      images: [postData.hero.featuredImage.fullUrl, ...previousImages],
    },
  };
}

export async function generateStaticParams() {
  const posts: PostsData = await fetch("http://localhost:3000/api/posts", {
    next: { revalidate: 10000 },
    headers: {
      Authorisation: "users API-Key " + process.env.CMS_API_KEY,
      Origin: "http://127.0.0.1",
    },
  }).then((res) => res.json());

  return posts.docs.map((post) => ({
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

  const res = await fetch(`http://localhost:3000/api/posts/${id}`, {
    headers: {
      Authorisation: "users API-Key " + process.env.CMS_API_KEY,
      Origin: "http://127.0.0.1",
    },
  });

  const postData: PostData = await res.json();

  console.log(postData);

  return (
    <div className={"py-40 min-h-screen max-w-3xl mx-auto px-4 md:px-20"}>
      <div className={" flex flex-col gap-10"}>
        <div className="font-bold tracking-wide uppercase text-blue-accent">
          {postData.category}
        </div>
        <img
          className="h-[20rem] object-cover"
          src={postData.hero.featuredImage.fullUrl}
          height={postData.hero.featuredImage.height}
          width={postData.hero.featuredImage.width}
          alt={postData.hero.featuredImage.altText}
        />
        <div className="flex flex-col gap-4 border-b-2 pb-8">
          <h1 className="text-5xl font-bold font-body-sans">
            {postData.title}
          </h1>
          <h2 className="text-2xl font-light text-slate-700">
            {postData.hero.subheading}
          </h2>
        </div>
        <div className={styles.blogpost}>{parse(postData.content_html)}</div>
      </div>
    </div>
  );
};

export default PostPage;
