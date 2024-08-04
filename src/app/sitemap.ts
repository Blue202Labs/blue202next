import { MetadataRoute } from "next";
import { BASE_URL } from "./lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
    },
    {
      url: BASE_URL + "/contact",
      lastModified: new Date(),
    },
    {
      url: BASE_URL + "/solutions",
      lastModified: new Date(),
    },
    {
      url: BASE_URL + "/results",
      lastModified: new Date(),
    },
    {
      url: BASE_URL + "/blog",
      lastModified: new Date(),
    },
  ];
}
