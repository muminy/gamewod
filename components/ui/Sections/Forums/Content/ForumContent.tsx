import Flexible from "components/ui/Flexible";
import { IUser } from "constants/types";
import moment from "moment";
import Link from "next/link";

interface IProps {
  content: string;
}

export default function ForumContent(props: IProps) {
  return (
    <div className="mb-10">
      <div className="mb-2 text-gray-700">{props.content}</div>

      <Flexible className="space-x-3">
        <Link href={"/"}>
          <a className="text-sm font-medium hover:underline text-gray-500">
            Bildir
          </a>
        </Link>
      </Flexible>
    </div>
  );
}
