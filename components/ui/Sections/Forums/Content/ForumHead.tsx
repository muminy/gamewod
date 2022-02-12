import { IUser } from "constants/types";

interface IProps {
  title: string;
  date: string;
}

export default function ForumHead(props: IProps) {
  return (
    <h1 className="text-2xl mb-10 dark:text-white font-medium">
      {props.title}
    </h1>
  );
}
