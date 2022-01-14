import { get_category_posts, get_grid_posts } from "services/filters";

// GET Request
export const posts = "/posts";
export const categories = "/categories";
export const grid_posts = `${posts}?populate=*&${get_grid_posts(true)}`;
export const blog_posts = `${posts}?populate=*&${get_grid_posts()}`;

export const find_post = (id: number) => `${posts}/${id}?populate=*&`;
export const find_forum = (id: number) => "/forum/" + id;

export const category_posts = (slug?: string) =>
  `${categories}?populate=posts.comments,posts.image&${get_category_posts(
    slug
  )}`;
