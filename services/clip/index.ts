import { ApiV2 } from "../apis";
import { clip } from "./config";

export async function handleGetClips() {
  const articles = await ApiV2.get(clip);
  return articles.data;
}
