import Flexible from "components/ui/Flexible";
import { IComment, IUser } from "constants/types";
import moment from "moment";
import Link from "next/link";

export default function ForumComment(props: IComment) {
  console.log(props);
  return (
    <Flexible className="space-x-3 mb-3">
      <div className="min-w-[24px] h-[24px] rounded-full bg-gray-200" />

      <div className="">
        <div className="text-[14px] mb-3">
          <span className="font-semibold pr-1">@{props.user?.username}</span>{" "}
          {props.comment}
        </div>

        <Flexible className="space-x-2">
          <Link href={"/"}>
            <a className="text-xs text-gray-400 hover:underline hover:text-gray-900 font-medium">
              {props.votes.length} Likes
            </a>
          </Link>

          <Link href={"/"}>
            <a className="text-xs text-gray-400 hover:underline hover:text-gray-900 font-medium">
              Bildir
            </a>
          </Link>
        </Flexible>
      </div>
    </Flexible>
  );
}
