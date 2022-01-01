import { ArticleProps } from "constants/types";
import { SET_ARTICLE, SET_GRID_ARTICLE } from "store/types";

export const handleAddArticles = (payload: ArticleProps[]) => {
  return { type: SET_ARTICLE, payload };
};

export const handleAddGridArticles = (payload: ArticleProps[]) => {
  return { type: SET_GRID_ARTICLE, payload };
};
