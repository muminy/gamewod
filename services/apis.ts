import axios from "axios";

export const isDev = process.env.NODE_ENV === "development" ? true : false;
export const baseURL = "https://api.gamewod.com";

// GET Requests
export const get_posts = "/posts";

export const ApiInstance = axios.create({
  baseURL: `${baseURL}/api`,
});
