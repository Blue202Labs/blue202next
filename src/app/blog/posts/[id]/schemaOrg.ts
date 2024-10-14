import { Article, BreadcrumbList, WithContext } from "schema-dts";

export const schemaArticle = (
  name: string,
  tags: string[],
  route: string,
  category: string
): WithContext<Article> => ({
  "@context": "https://schema.org",
  "@type": "Article",
  url: "https://blue202labs.com/blog/posts/" + route,
  author: {
    "@type": "Person",
    name: "Noella Spitz",
    image: {
      "@type": "ImageObject",
      inLanguage: "en-GB",
      url: "https://media.licdn.com/dms/image/v2/D5603AQH9rq8W7by5_w/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1706211828220?e=1734566400&v=beta&t=UC14r0qCq3joahVZEpDVb-Pq9C1Hp213kGiQAlcHaTs",
      contentUrl:
        "https://media.licdn.com/dms/image/v2/D5603AQH9rq8W7by5_w/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1706211828220?e=1734566400&v=beta&t=UC14r0qCq3joahVZEpDVb-Pq9C1Hp213kGiQAlcHaTs",
      caption: "Noella Spitz",
    },
    description:
      "Noella is our Director of Operations and Tech Lead, with a background in software engineering and web development.",
  },
  headline: name,
  keywords: tags,
  articleSection: category,
  datePublished: "2024-7-28T17:40:42+00:00",
  dateModified: "2024-10-13T16:09:52+00:00",
  potentialAction: [
    {
      "@type": "ReadAction",
      target: ["https://blue202labs.com" + route],
    },
  ],
});

export const breadCrumbList = (
  id: string,
  name: string
): WithContext<BreadcrumbList> => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "@id": "https://blue202labs.com/blog/posts/" + id,
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://blue202labs.com/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Blog",
      item: "https://blue202labs.com/solutions/blog",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: name,
    },
  ],
});
