export interface SVGProps {
  size?: number;
  color?: string;
}

export interface ArticleImageFormat {
  ext: string;
  url: string;
  name: string;
  width: number;
  height: number;
}

export interface ArticleImageData {
  id: number;
  attributes: {
    formats: {
      small: ArticleImageFormat;
      medium: ArticleImageFormat;
      thumbnail: ArticleImageFormat;
    };
  };
}

export interface ArticleImage {
  data: ArticleImageData | null;
}

export interface ArticleComment {
  id: number;
  attributes: {
    comment: string;
    createdAt: string;
    publishedAt: string;
    updatedAt: string;
    name: string;
  };
}

export interface ArticleAttributes {
  title: string;
  desc: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  grid_view: boolean;
  image: ArticleImage;
  comments: {
    data: ArticleComment[];
  };
}

export interface ArticleProps {
  id: number;
  attributes: ArticleAttributes;
}
