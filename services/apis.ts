import axios from "axios";
import getUsertoken from "helpers/usertoken";

export const isDev = process.env.NODE_ENV === "development" ? true : false;
console.log(isDev);
export const baseURL = "https://api.gamewod.com";
export const baseURLV2 = isDev
  ? "http://localhost:4000"
  : "https://apis.gamewod.com";
// GET Requests
export const get_posts = "/posts";

export const ApiInstance = axios.create({
  baseURL: `${baseURL}/api`,
});

export const ApiV2 = axios.create({
  baseURL: baseURLV2,
});
