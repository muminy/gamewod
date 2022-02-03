import { ForumTypes } from "constants/enums";
import getUsertoken from "helpers/usertoken";
import { ApiInstance, ApiV2 } from "../apis";
import { comments, comment } from "./config";

interface CommentFilter {
  name: string;
  comment: string;
  post: number;
}

interface CreateA2CommentProps {
  fid: number;
  type: ForumTypes;
  comment: string;
}

export async function handleCreateComment(props: CommentFilter) {
  const create = await ApiInstance.post(comments, {
    data: {
      ...props,
    },
  });
  return create.data;
}

export async function handleCreateForumComment(props: CreateA2CommentProps) {
  const create = await ApiV2.post(comment, props, {
    headers: {
      Authorization: `Bearer ${getUsertoken()}`,
    },
  });
  return create.data;
}
