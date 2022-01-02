import axios from "axios";

export const isDev = process.env.NODE_ENV === "development" ? true : false;
export const baseURL = "https://api.gamewod.com";
export const baseURLV2 = "https://apis.gamewod.com";
// GET Requests
export const get_posts = "/posts";

export const ApiInstance = axios.create({
  baseURL: `${baseURL}/api`,
});

export const ApiV2 = axios.create({
  baseURL: baseURLV2,
});
