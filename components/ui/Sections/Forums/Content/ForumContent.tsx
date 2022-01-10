import Flexible from "components/ui/Flexible";
import useCurrentUser from "hooks/useCurrentUser";
import Link from "next/link";
import { handleDeleteForum } from "services/forum";
import { useAppSelector } from "store/hooks";
import ReactMarkdown from "react-markdown";
import style from "../forum.module.css";

interface IProps {
  content: string;
  username: string;
  id: number;
}

export default function ForumContent(props: IProps) {
  const [currentUser] = useCurrentUser({ username: props.username });

  const handleDelete = () => {
    if (confirm("Silmek istediğine emin misin?")) {
      handleDeleteForum({ id: props.id }).then((response) => {
        // ** delete forum response
        console.log(response);
      });
    }
  };

  return (
    <div className="mb-10">
      <ReactMarkdown className={style.fcontent}>{props.content}</ReactMarkdown>

      <Flexible className="space-x-3">
        <Link href={"/"}>
          <a className="text-sm font-medium hover:underline dark:hover:text-gray-400 dark:text-gray-500 text-gray-400">
            Bildir
          </a>
        </Link>

        {currentUser && (
          <>
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
          </>
        )}
      </Flexible>
    </div>
  );
}
