import { ArticleProps } from "constants/types";
import { AnyAction } from "redux";
import { SET_ARTICLE, SET_GRID_ARTICLE } from "store/types";

interface StateProps {
  grids: ArticleProps[];
  articles: ArticleProps[];
}

const initialState: StateProps = {
  articles: [],
  grids: [],
};

export interface ActionProps extends AnyAction {
  payload: ArticleProps[];
}

export default function articleReducer(
  state = initialState,
  action: AnyAction
) {
  switch (action.type) {
    case SET_ARTICLE:
      return { ...state, articles: action.payload };
    case SET_GRID_ARTICLE:
      return { ...state, grids: action.payload };
    default:
      return state;
  }
}
