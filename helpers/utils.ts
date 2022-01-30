import { baseURLV2 } from "services/apis";
import getUsertoken from "./usertoken";

export const validateEmail = (email?: string) =>
  email?.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );

export const makeProfileImageURL = (url: string) => {
  return `${baseURLV2}/uploads/users/${url}`;
};

export const defaultUserImage = `${baseURLV2}/uploads/users/default.png`;
