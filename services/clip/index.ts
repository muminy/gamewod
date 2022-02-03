import getUsertoken from "helpers/usertoken";
import { ApiInstance, ApiV2 } from "../apis";
import { clip } from "./config";

interface CommentFilter {
  name: string;
  comment: string;
  post: number;
}

interface CreateA2CommentProps {
  fid: number;
  comment: string;
}
