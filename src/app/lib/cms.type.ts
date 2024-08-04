export type FeaturedImage = {
  id: string;
  filename: string;
  mimeType: string;
  filesize: number;
  width: number;
  height: number;
  focalX: number;
  focalY: number;
  createdAt: Date;
  updatedAt: Date;
  altText: string;
  url: string;
  fullUrl: string;
};

export type PostData = {
  id: string;
  title: string;
  category: string;
  hero: {
    subheading: string;
    featuredImage: FeaturedImage;
    description: string;
    tags: [];
  };
  content: any;
  createdAt: Date;
  updatedAt: Date;
  content_html: string;
};

export type PostsData = {
  docs: [PostData];
  totalDocs: number;
  limit: number;
  totalPages: number;
  page: number;
  pagingCounter: number;
  hasPrevPage: boolean;
  hasNextPage: boolean;
  prevPage: number | null;
  nextPage: number | null;
};

export type FeaturesData = {
  globalType: string;
  createdAt: Date;
  updatedAt: Date;
  mainFeature: PostData;
  additionalFeatures: PostData[];
  id: string;
};
