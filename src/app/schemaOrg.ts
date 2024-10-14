import { WebPage, WithContext } from "schema-dts";

export const schemaWebpage = (
  name: string,
  description: string,
  route: string
): WithContext<WebPage> => ({
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: name,
  url: "https://blue202labs.com" + route,
  description: description,
  publisher: {
    "@type": "Organization",
    name: "Blue202 Labs",
    logo: {
      "@type": "ImageObject",
      url: "https://blue202labs.com/_next/static/media/wordmark-colour.e1f78a33.svg",
    },
  },
  datePublished: "2024-7-28T17:40:42+00:00",
  dateModified: "2024-10-13T16:09:52+00:00",
  potentialAction: [
    {
      "@type": "ReadAction",
      target: ["https://blue202labs.com" + route],
    },
  ],
});
