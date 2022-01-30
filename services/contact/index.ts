import { ApiV2 } from "services/apis";
import { contact_url } from "./config";

interface Props {
  type: "CONTACT" | "BUG";
  name: string;
  email: string;
  thread: string;
  content: string;
}

export async function handleCreateContact(props: Props) {
  const contact = await ApiV2.post(contact_url, props);
  return contact.data;
}
