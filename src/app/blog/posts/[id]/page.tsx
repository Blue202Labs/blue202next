import { PostData, PostsData } from "@/app/lib/cms.type";
import parse from "html-react-parser";

import styles from "./styles.module.css";
import { Metadata, ResolvingMetadata } from "next";
import { fetchPost, fetchPosts } from "../../actions";

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
  const postData: PostData = await fetchPost(id);

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
