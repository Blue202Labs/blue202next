import { PostsData } from "@/app/lib/cms.type";
import { BASE_URL } from "@/app/lib/constants";
import { MetadataRoute } from "next";
import { fetchPosts } from "../actions";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts: PostsData = await fetchPosts();

  return posts.docs.map((post) => ({
    url: `${BASE_URL}/blog/posts/${post.id}`,
    lastModified: post.updatedAt,
  }));
}
