import { ApiInstance, ApiV2 } from "../apis";
import { user_login } from "./config";

interface ILogin {
  username: string;
  password: string;
}

export async function handleUserLogin(props: ILogin) {
  const login = await ApiV2.post(user_login, props);
  return login.data;
}
