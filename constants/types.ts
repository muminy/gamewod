import { ReactNode } from "react";

export interface SVGProps extends React.SVGProps<SVGSVGElement> {
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

export interface IUser {
  email: string;
  id: number;
  level: number;
  name: string;
  point: number;
  role: "USER" | "ADMIN" | "SUPER_ADMIN";
  status: boolean;
  username: string;
  createdAt: string;
  image: string | null;
  headerImage: string | null;
  bio: string;
  socials: {
    [key: string]: string;
  };
  website: string;
}

export interface IVoteComment {
  id: number;
  commentId: number;
  createdAt: string;
  userID: number;
}

export interface IComment {
  comment: string;
  createdAt: string;
  forumID: number | null;
  id: number;
  status: boolean;
  user: IUser;
  userID: number | null;
  forum: IForum;
  votes: IVoteComment[];
  type: "CLIP" | "FORUM";
  clip: IClip;
}

export interface IForum {
  comments: IComment[];
  content: string;
  createdAt: string;
  id: number;
  status: boolean;
  title: string;
  user: IUser;
  userId: number | null;
}

export interface IToggle {
  toggle: () => void;
}

export interface ICategoryAttributes {
  createdAt: string;
  name: string;
  posts: { data: ArticleProps[] };
  publishedAt: string;
  updatedAt: string;
}

export interface ICategory {
  id: number;
  attributes: ICategoryAttributes;
}

export interface MenuCategoryProps {
  title: string;
  href: string;
  info: string;
  id: string;
}

export interface LinkProps {
  href: string;
  title: string;
  icon: () => ReactNode;
}

export interface IClipDetail {
  broadcaster_name: string;
  creator_name: string;
  duration: number;
  embed_url: string;
  language: string;
  title: string;
  url: string;
  thumbnail_url: string;
}

export interface IClip {
  id: number;
  content: string;
  createdAt: string;
  status: boolean;
  title: string;
  username: string;
  detail: IClipDetail;
  comments: IComment[];
  clipid: string;
}

export interface ITwitterSeoType {
  cardType?: "summary" | "summary_large_image" | "app" | "player";
  site?: string;
}

export interface IOpenGraphSeoType {
  type?:
    | "article"
    | "website"
    | "profile"
    | "video.other"
    | "video.movie"
    | "video.episode"
    | "video.tv_show"
    | "video.other"
    | "book"
    | "music.song"
    | "music.album"
    | "music.playlist"
    | "music.radio_station";
  site_name?: string;
}

export interface ISeoMeta {
  title?: string;
  description?: string;
  image?: string;
  twitter?: ITwitterSeoType;
  openGraph?: IOpenGraphSeoType;
}
