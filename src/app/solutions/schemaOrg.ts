import { BreadcrumbList, WithContext } from "schema-dts";

export const breadCrumbList = (
  solutionName: string
): WithContext<BreadcrumbList> => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "@id": "https://blue202labs.com/solutions/bespoke-software",
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
      name: "Solutions",
      item: "https://blue202labs.com/solutions/",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: solutionName,
    },
  ],
});
