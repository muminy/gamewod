import { ApiInstance } from "../apis";
import { posts } from "./config";

interface ArticleFilter {
  query?: string;
}

interface FindArticle {
  id: number;
}

export async function handleGetArticles({ query = "" }: ArticleFilter) {
  const articles = await ApiInstance.get(`${posts}?populate=*&${query}`);
  return articles.data;
}

export async function handleGetArticleById({ id }: FindArticle) {
  const article = await ApiInstance.get(`${posts}/${id}?populate=*&`);
  return article.data;
}
