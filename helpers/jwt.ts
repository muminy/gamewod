import jwt from "jsonwebtoken";
import { jwtSecret } from "./usertoken";

export const sign = (payload: any) =>
  jwt.sign(payload, jwtSecret, { expiresIn: "2d" });

export const verify = (
  token: string,
  cb: (error: any, document: any) => void
) => jwt.verify(token, jwtSecret, cb);
