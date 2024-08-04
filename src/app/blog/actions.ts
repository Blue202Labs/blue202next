import { PostData, PostsData } from "../lib/cms.type";

export async function fetchCmsData<T>(route: string): Promise<T> {
  const res = await fetch(`${process.env.CMS_URL}/api/${route}`, {
    next: { revalidate: 10000 },
    headers: {
      Authorisation: "users API-Key " + process.env.CMS_API_KEY,
      Origin: process.env.HOST_ORIGIN!,
    },
  });

  const data: T = await res.json();
  return data;
}

export async function fetchPosts(): Promise<PostsData> {
  const data: PostsData = await fetchCmsData<PostsData>("posts");
  return data;
}

export async function fetchPost(id: string): Promise<PostData> {
  const data: PostData = await fetchCmsData<PostData>(`posts/${id}`);
  return data;
}
