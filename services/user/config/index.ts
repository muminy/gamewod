export const user = "/user";

export const user_login = "/user/login";
export const check_username = "/user/check/username";
export const check_email = "/user/check/email";
export const update_detail = "/user/details";
export const change_username = "/user/username";
export const change_email = "/user/email";
export const change_password = "/user/password";

export const find_user = (username: string) => `/user/find/${username}`;
