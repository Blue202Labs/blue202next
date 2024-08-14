import { PostData } from "@/app/lib/cms.type";
import Link from "next/link";

export const PostThumbnail = ({ post }: { post: PostData }) => {
  return (
    <Link
      className="flex flex-col py-8  px-8 md:px-0"
      href={`/blog/posts/${post.id}`}
    >
      <div className="flex flex-row md:h-64 gap-2 md:gap-10">
        <img
          className="rounded-xl object-cover w-[60px] h-[100px] md:w-[200px] md:h-[200px] place-self-center"
          width={post.hero.featuredImage.width}
          height={post.hero.featuredImage.height}
          src={post.hero.featuredImage.url}
          alt={post.hero.featuredImage.altText}
        />
        <div className="flex flex-col p-4 gap-2">
          <h5 className="uppercase md:text-lg font-bold tracking-wider text-blue-accent">
            {post.category}
          </h5>
          <h4 className="text-xl md:text-2xl font-bold font-body-sans text-slate-800">
            {post.title}
          </h4>
          <p className="hidden md:block text-lg text-slate-600">
            {post.hero.description}
          </p>
        </div>
      </div>
      <p className="md:hidden md:text-lg text-slate-600">
        {post.hero.description}
      </p>
    </Link>
  );
};
