import getUsertoken from "helpers/usertoken";
import { ApiV2 } from "services/apis";
import { find_forum, forum } from "./config";

interface Props {
  title: string;
  content: string;
}

export async function handleCreateForum(props: Props) {
  const create = await ApiV2.post(forum, props, {
    headers: {
      Authorization: `Bearer ${getUsertoken()}`,
    },
  });
  return create.data;
}

export async function handleFindForum(props: { id: number }) {
  const find = await ApiV2.get(find_forum(props.id));
  return find.data;
}
