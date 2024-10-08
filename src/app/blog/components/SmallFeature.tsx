import { PostData } from "@/app/lib/cms.type";
import Image from "next/image";
import Link from "next/link";

export const SmallFeature = ({ post }: { post: PostData }) => {
  return (
    <Link
      className="rounded-xl bg-white drop-shadow-sm border min-w-[80vw] md:min-w-0"
      href={`/blog/posts/${post.id}`}
    >
      <Image
        className="rounded-t-xl h-36 object-cover"
        width={post.hero.featuredImage.width}
        height={post.hero.featuredImage.height}
        src={post.hero.featuredImage.url}
        alt={post.hero.featuredImage.altText}
      />
      <div className="flex flex-col p-8 md:p-4 gap-2">
        <h5 className="uppercase md:text-lg md:font-bold tracking-wider text-blue-accent">
          {post.category}
        </h5>
        <h4 className="text-xl font-bold font-body-sans text-slate-800">
          {post.title.length < 68
            ? post.title
            : post.title.slice(0, 68) + "..."}
        </h4>
      </div>
    </Link>
  );
};
