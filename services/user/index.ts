import { ApiInstance, ApiV2 } from "../apis";
import { user_login, user, check_username, check_email } from "./config";

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
  id: number;
}

interface ICheckEmail {
  email: string;
  id: number;
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
