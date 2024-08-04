import { PostData } from "@/app/lib/cms.type";
import Link from "next/link";

export const BigFeature = ({ post }: { post: PostData }) => {
  return (
    <Link
      href={`/blog/posts/${post.id}`}
      className="h-[45rem] drop-shadow-sm bg-white border rounded-2xl w-1/2 flex flex-col"
    >
      <img
        className="h-1/2 object-cover rounded-t-xl"
        width={post.hero.featuredImage.width}
        height={post.hero.featuredImage.height}
        src={post.hero.featuredImage.fullUrl}
        alt={post.hero.featuredImage.altText}
      />
      <div className="flex flex-col p-10 gap-6">
        <h5 className="uppercase text-xl font-bold tracking-wider text-blue-accent">
          {post.title}
        </h5>
        <h4 className="text-4xl font-bold font-body-sans text-slate-800">
          {post.category}
        </h4>
        <p className="text-lg text-slate-600">{post.hero.description}</p>
      </div>
    </Link>
  );
};
