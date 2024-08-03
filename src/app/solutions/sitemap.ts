import { MetadataRoute } from "next";

const SOLUTIONS_URL = BASE_URL + "/solutions";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SOLUTIONS_URL + "/api",
      lastModified: new Date(),
    },
    {
      url: SOLUTIONS_URL + "/bespoke-software",
      lastModified: new Date(),
    },
    {
      url: SOLUTIONS_URL + "/crm",
      lastModified: new Date(),
    },
    {
      url: SOLUTIONS_URL + "/digital-marketing",
      lastModified: new Date(),
    },
    {
      url: SOLUTIONS_URL + "/hosting",
      lastModified: new Date(),
    },
    {
      url: SOLUTIONS_URL + "/mobile-app-development",
      lastModified: new Date(),
    },
    {
      url: SOLUTIONS_URL + "/mvp-development",
      lastModified: new Date(),
    },
    {
      url: SOLUTIONS_URL + "/rapid-prototyping",
      lastModified: new Date(),
    },
    {
      url: SOLUTIONS_URL + "/startup-development-package",
      lastModified: new Date(),
    },
    {
      url: SOLUTIONS_URL + "/web-design",
      lastModified: new Date(),
    },
    {
      url: SOLUTIONS_URL + "/websites",
      lastModified: new Date(),
    },
    {
      url: SOLUTIONS_URL + "/wordpress",
      lastModified: new Date(),
    },
  ];
}
