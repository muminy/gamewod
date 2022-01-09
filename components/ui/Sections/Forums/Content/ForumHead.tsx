import Flexible from "components/ui/Flexible";
import { IUser } from "constants/types";
import moment from "moment";
import Link from "next/link";

interface IProps {
  title: string;
  user: IUser;
  date: string;
}

export default function ForumHead(props: IProps) {
  return (
    <div className="mb-8">
      <div className="text-2xl font-medium mb-5">{props.title}</div>

      <Link href={`/user/${props.user.username}`}>
        <a className="flex space-x-3">
          <div className="w-10 h-10 dark:bg-dark-border bg-gray-200 rounded-full" />

          <div className="font-medium">
            <div className="dark:text-gray-400">{props.user.name}</div>

            <div className="text-xs text-gray-600">
              {moment(props.date).locale("tr").format("DD MMMM, y")}
            </div>
          </div>
        </a>
      </Link>
    </div>
  );
}
