import axios from "axios";

export const isDev = process.env.NODE_ENV === "development";

export const baseURL = "https://api.gamewod.com";

export const baseURLV2 = isDev ? "http://localhost:4000" : baseURL;

export const get_posts = "/posts";

export const ApiInstance = axios.create({
  baseURL: `${baseURL}/api`,
});

export const ApiV2 = axios.create({
  baseURL: baseURLV2,
});
