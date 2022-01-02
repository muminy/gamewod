import axios from "axios";

export const isDev = process.env.NODE_ENV === "development" ? true : false;
export const baseURL = "https://api.gamewod.com";
export const baseURLV2 = "http://localhost:3001";
// GET Requests
export const get_posts = "/posts";

export const ApiInstance = axios.create({
  baseURL: `${baseURL}/api`,
});

export const ApiV2 = axios.create({
  baseURL: baseURLV2,
});
