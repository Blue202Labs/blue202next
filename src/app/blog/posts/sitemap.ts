import { PostsData } from "@/app/lib/cms.type";
import { BASE_URL } from "@/app/lib/constants";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts: PostsData = await fetch("http://localhost:3000/api/posts", {
    next: { revalidate: 10000 },
    headers: {
      Authorisation: "users API-Key " + process.env.CMS_API_KEY,
      Origin: "http://127.0.0.1",
    },
  }).then((res) => res.json());

  return posts.docs.map((post) => ({
    url: `${BASE_URL}/blog/posts/${post.id}`,
    lastModified: post.updatedAt,
  }));
}
