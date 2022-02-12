import classNames from "classnames";
import { IComment } from "constants/types";
import { Fragment, useState } from "react";
import { handleCreateComment } from "services/comment";
import Flexible from "../Flexible";

interface IProps {
  id: number;
  getComment: (comment: any) => void;
}

export default function MakeComment(props: IProps) {
  const [open, setOpen] = useState(false);
  const [comment, setComment] = useState("");
  const [username, setUsername] = useState("");
  const [creating, setCreating] = useState(false);

  const handleAddComment = () => {
    setCreating(true);
    handleCreateComment({ comment, name: username, post: props.id }).then(
      (response) => {
        // get if created comment
        props.getComment(response.data);
        setComment("");
        setUsername("");
        setCreating(false);
      }
    );
  };

  const toggle = () => setOpen(!open);
  return (
    <div
      className={classNames(
        "bg-gray-100 dark:bg-dark-border p-3 rounded-xl mb-6",
        {
          "bg-transparent dark:bg-transparent": open,
        }
      )}
    >
      <div className="text-gray-600 dark:text-gray-300 text-opacity-70 text-sm font-medium mb-3">
        Giriş yapmadan hızl bir şekilde yorum yaparak görüşlerinizi
        bildirebilirsiniz.
      </div>

      {open ? (
        <div className="relative">
          <div>
            <textarea
              rows={4}
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              className="rounded-md w-full border-2 resize-none px-3 py-3 text-sm dark:bg-transparent dark:border-dark-border dark:outline-black dark:focus:border-dark-borderlight"
              placeholder="Yorum içeriği"
            />
            <input
              className="w-full dark:border-dark-border dark:bg-transparent focus:border-black dark:focus:border-dark-borderlight outline-none py-2 mb-3 text-sm px-3 border-2 rounded-md"
              placeholder="Ad"
              onChange={(event) => setUsername(event.target.value)}
              value={username}
            />
          </div>

          <Flexible
            justifyContent="justify-end"
            alignItem="items-center"
            className="space-x-2"
          >
            <button
              onClick={handleAddComment}
              className="text-sm whitespace-nowrap font-medium rounded-md bg-[#f3effd] dark:hover:bg-opacity-80 dark:bg-dark-border dark:text-gray-400 px-3 py-1.5"
            >
              {creating ? "Yorum yapılıyor..." : "Yorum yap"}
            </button>

            <button
              onClick={toggle}
              className="text-sm text-gray-500 rounded-md block dark:hover:bg-opacity-20 dark:bg-red-100 dark:bg-opacity-25 dark:text-red-200 bg-[#f5f5f5] px-3 py-1.5"
            >
              İptal
            </button>
          </Flexible>
        </div>
      ) : (
        <button
          onClick={toggle}
          className="bg-gray-900 dark:bg-black font-semibold text-sm text-gray-100 rounded-xl py-3 w-full"
        >
          Yorum Yap
        </button>
      )}
    </div>
  );
}
