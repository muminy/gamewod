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
    <div className="mb-8 py-2">
      <div className="text-2xl font-medium">{props.title}</div>

      {/* <Link href={`/user/${props.user.username}`}>
        <a className="flex space-x-3 items-center">
          <div className="w-8 h-8 dark:bg-dark-border bg-gray-200 rounded-full" />

          <div className="font-medium">
            <div className="dark:text-gray-300 text-sm">{props.user.name}</div>

            <div className="text-xs dark:text-gray-400 text-gray-600">
              {moment(props.date).locale("tr").format("DD MMMM, y")}
            </div>
          </div>
        </a>
      </Link> */}
    </div>
  );
}
