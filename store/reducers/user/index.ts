import { IUser } from "constants/types";
import { AnyAction } from "redux";
import { SET_USER } from "store/types";

interface IProps {
  loading: boolean;
  user: IUser | null;
}

const initialState: IProps = {
  loading: true,
  user: null,
};

export default function userReducer(
  state = initialState,
  action: AnyAction
): IProps {
  switch (action.type) {
    case SET_USER:
      return {
        user: action.payload,
        loading: false,
      };
    default:
      return state;
  }
}
