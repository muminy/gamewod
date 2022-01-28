import Flexible from "components/ui/Flexible";
import Markdown from "components/ui/Markdown";
import useCurrentUser from "hooks/useCurrentUser";
import Link from "next/link";
import { Fragment } from "react";
import { handleDeleteForum } from "services/forum";
import style from "../forum.module.css";

interface IProps {
  content: string;
  username: string;
  id: number;
  deleted: () => void;
}

export default function ForumContent(props: IProps) {
  const [currentUser] = useCurrentUser({ username: props.username });

  const handleDelete = () => {
    if (confirm("Silmek istediğine emin misin?")) {
      handleDeleteForum({ id: props.id }).then((response) => {
        // ** delete forum response
        console.log(response);
        props.deleted();
      });
    }
  };

  return (
    <div className="mb-10">
      <Markdown content={props.content} />

      <Flexible className="space-x-3">
        {currentUser ? (
          <Fragment>
            <Link href={"/"}>
              <a className="text-sm font-medium hover:underline dark:hover:text-gray-400 dark:text-gray-500 text-gray-400">
                Düzenle
              </a>
            </Link>

            <button
              onClick={handleDelete}
              className="text-sm font-medium hover:underline text-red-400"
            >
              Sil
            </button>
          </Fragment>
        ) : (
          <Link href={"/"}>
            <a className="text-sm font-medium hover:underline dark:hover:text-gray-400 dark:text-gray-500 text-gray-400">
              Bildir
            </a>
          </Link>
        )}
      </Flexible>
    </div>
  );
}
