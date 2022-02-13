import getUsertoken from "helpers/usertoken";
import { ApiV2 } from "services/apis";
import { find_forum, forum } from "./config";

interface Props {
  title: string;
  content: string;
  category: string[];
}

export async function handleGetForums() {
  const forums = await ApiV2.get(forum);
  return forums.data;
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

export async function handleDeleteForum(props: { id: number }) {
  const dforum = await ApiV2.delete(forum, {
    headers: {
      Authorization: `Bearer ${getUsertoken()}`,
    },
    data: props,
  });
  return dforum.data;
}
