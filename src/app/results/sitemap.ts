import { MetadataRoute } from "next";

const RESULTS_URL = BASE_URL + "/results";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: RESULTS_URL + "/aspen-dental",
      lastModified: new Date(),
    },
    {
      url: RESULTS_URL + "/egypt-kuwait-holdings",
      lastModified: new Date(),
    },
    {
      url: RESULTS_URL + "/crm",
      lastModified: new Date(),
    },
    {
      url: RESULTS_URL + "/rx-forms",
      lastModified: new Date(),
    },
    {
      url: RESULTS_URL + "/san-diego-wholesalers",
      lastModified: new Date(),
    },
    {
      url: RESULTS_URL + "/sizzler-egypt",
      lastModified: new Date(),
    },
    {
      url: RESULTS_URL + "/ups-store",
      lastModified: new Date(),
    },
    {
      url: RESULTS_URL + "/zyntex-group",
      lastModified: new Date(),
    },
  ];
}
