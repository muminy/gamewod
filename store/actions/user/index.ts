import { IUser } from "constants/types";
import { SET_USER } from "store/types";

export const handleAddUser = (payload: IUser) => {
  // set jwt token
  return { type: SET_USER, payload };
};
