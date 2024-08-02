import { PostData } from "@/utils/cms.type";
import Image from "next/image";
import Link from "next/link";

export const PostThumbnail = ({ post }: { post: PostData }) => {
  return (
    <Link
      className="flex flex-row h-64 py-8 gap-10"
      href={`/blog/posts/${post.id}`}
    >
      <Image
        className="rounded-xl object-cover w-1/3"
        width={post.hero.featuredImage.width}
        height={post.hero.featuredImage.height}
        src={post.hero.featuredImage.url}
        alt={post.hero.featuredImage.altText}
      />
      <div className="flex flex-col p-4 gap-2">
        <h5 className="uppercase text-lg font-bold tracking-wider text-blue-accent">
          {post.category}
        </h5>
        <h4 className="text-2xl font-bold font-body-sans text-slate-800">
          {post.title}
        </h4>
        <p className="text-lg text-slate-600">{post.hero.description}</p>
      </div>
    </Link>
  );
};
