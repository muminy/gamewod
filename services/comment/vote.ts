import getUsertoken from "helpers/usertoken";
import { ApiV2 } from "../apis";
import { un_vote_comment, up_vote_comment } from "./config";

interface IUpvote {
  commentId: number;
}

export async function handleUpvoteForumComment(props: IUpvote) {
  const upvote = await ApiV2.post(up_vote_comment, props, {
    headers: {
      Authorization: `Bearer ${getUsertoken()}`,
    },
  });
  return upvote.data;
}

export async function handleUnvoteForumComment(props: IUpvote) {
  const upvote = await ApiV2.post(un_vote_comment, props, {
    headers: {
      Authorization: `Bearer ${getUsertoken()}`,
    },
  });
  return upvote.data;
}
