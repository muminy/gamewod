import getUsertoken from "helpers/usertoken";
import { ApiInstance, ApiV2 } from "../apis";
import {
  user_login,
  user,
  check_username,
  check_email,
  update_detail,
  change_username,
  change_email,
  change_password,
  update_general,
} from "./config";

interface ILogin {
  username: string;
  password: string;
}

interface ISignup {
  name: string;
  email: string;
  username: string;
  password: string;
}

interface ICheckUsername {
  username: string;
  id?: number;
}

interface ICheckEmail {
  email?: string;
  id?: number;
}

interface GeneralData {
  bio?: string;
  socials: {
    [key: string]: string;
  };
  website?: string;
  id?: number;
}

interface IChangePassword {
  old_password?: string;
  new_password: string;
  id?: number;
}

export async function handleGetUsers() {
  const users = await ApiV2.get(user);
  return users.data;
}

export async function handleUserLogin(props: ILogin) {
  const login = await ApiV2.post(user_login, props);
  return login.data;
}

export async function handleUserSignup(props: ISignup) {
  const signup = await ApiV2.post(user, props);
  return signup.data;
}

export async function handleCheckUserUsername(props: ICheckUsername) {
  const check = await ApiV2.post(check_username, props);
  return check.data;
}

export async function handleCheckUserEmail(props: ICheckEmail) {
  const check = await ApiV2.post(check_email, props);
  return check.data;
}

export async function handleUpdateUserDetail(props: any) {
  const forms = new FormData();

  Object.keys(props).map((item) => {
    if (props[item]) {
      forms.append(item, props[item]);
    }
  });

  const upt = await ApiV2.patch(update_detail, forms, {
    data: forms,
    headers: {
      Authorization: `Bearer ${getUsertoken()}`,
    },
  });
  return upt.data;
}

export async function handleChangeUsername(props: ICheckUsername) {
  const upt = await ApiV2.patch(change_username, props, {
    headers: {
      Authorization: `Bearer ${getUsertoken()}`,
    },
  });
  return upt.data;
}

export async function handleChangeEmail(props: ICheckEmail) {
  const upt = await ApiV2.patch(change_email, props, {
    headers: {
      Authorization: `Bearer ${getUsertoken()}`,
    },
  });
  return upt.data;
}

export async function handleUpdateGeneral(props: GeneralData) {
  const upt = await ApiV2.patch(update_general, props, {
    headers: {
      Authorization: `Bearer ${getUsertoken()}`,
    },
  });
  return upt.data;
}

export async function handleChangePassword(props: IChangePassword) {
  const upt = await ApiV2.patch(change_password, props, {
    headers: {
      Authorization: `Bearer ${getUsertoken()}`,
    },
  });
  return upt.data;
}
