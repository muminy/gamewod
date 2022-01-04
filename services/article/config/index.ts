import { get_grid_posts } from "services/filters";

// GET Request
export const posts = "/posts";
export const grid_posts = `${posts}?populate=*&${get_grid_posts(true)}`;
export const blog_posts = `${posts}?populate=*&${get_grid_posts()}`;

export const find_post = (id: number) => `${posts}/${id}?populate=*&`;
