import { ApiInstance } from "../apis";
import { comment } from "./config";

interface CommentFilter {
  name: string;
  comment: string;
  post: number;
}

export async function handleCreateComment(props: CommentFilter) {
  const create = await ApiInstance.post(comment, {
    data: {
      ...props,
    },
  });
  return create.data;
}
