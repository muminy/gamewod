import classNames from "classnames";
import Flexible from "components/ui/Flexible";
import Notify from "components/ui/Notify";
import { IComment, IVoteComment } from "constants/types";
import { defaultUserImage, makeProfileImageURL } from "helpers/utils";
import useCurrentUser from "hooks/useCurrentUser";
import useToggle from "hooks/useToggle";
import Link from "next/link";
import { useState } from "react";
import {
  handleUnvoteForumComment,
  handleUpvoteForumComment,
} from "services/comment/vote";
import { useAppSelector } from "store/hooks";

export default function ForumComment(props: IComment) {
  const [votes, setVotes] = useState<IVoteComment[]>(props.votes);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const user = useAppSelector((state) => state.user);
  const [isCurrentUser] = useCurrentUser({ username: props.user.username });

  const { value, toggle } = useToggle();

  const alreadyVote = user.user
    ? votes.find((item: IVoteComment) => item.userID === user.user?.id)
    : false;

  const toggleError = (error: string) => {
    toggle();
    setErrorMessage(error);
    setTimeout(toggle, 2000);
  };

  const handleUpVote = () => {
    handleUpvoteForumComment({ commentId: props.id }).then((response) => {
      // get vote response data
      console.log("response upvote");
      if (response.status === 200) {
        setVotes(votes.concat(response.vote));
      } else {
        toggleError(response.error);
      }
    });
  };

  const handleUnVote = () => {
    handleUnvoteForumComment({ commentId: props.id }).then((response) => {
      // get vote response data
      console.log("response unvote");
      if (response.status === 200) {
        setVotes(votes.filter((item) => item.userID !== user.user?.id));
      } else {
        toggleError(response.error);
      }
    });
  };

  return (
    <Flexible className="space-x-3 mb-3 last:mb-0">
      <Link href={`/user/${props.user?.username}`}>
        <a className="min-w-[32px] h-[32px] block rounded-full dark:bg-dark-border bg-gray-200">
          <img
            className="w-full rounded-full h-full object-cover"
            src={makeProfileImageURL(props.user.image)}
          />
        </a>
      </Link>

      <div>
        <div className="text-[14px]">
          <Link href={`/user/${props.user?.username}`}>
            <a
              className={classNames("font-semibold pr-1 dark:text-gray-200", {
                "text-blue-700": isCurrentUser,
              })}
            >
              @{props.user?.username}
            </a>
          </Link>{" "}
          {props.comment.split("\n").map((item) => (
            <span
              key={item}
              className="inline-block mb-2 dark:text-gray-300"
            >{`${item}`}</span>
          ))}
        </div>

        <Flexible className="space-x-2">
          <button
            onClick={alreadyVote ? handleUnVote : handleUpVote}
            className={classNames(
              "text-xs hover:underline dark:hover:text-gray-100 hover:text-gray-900 font-medium",
              {
                "text-red-500 dark:text-green-400 dark:hover:text-green-500":
                  alreadyVote,
                "text-gray-400 ": !alreadyVote,
              }
            )}
          >
            {votes.length} {alreadyVote ? "Liked" : "Likes"}
          </button>

          {!isCurrentUser && (
            <Link href={"/bug"}>
              <a className="text-xs dark:hover:text-red-400 text-gray-400 hover:underline hover:text-gray-900 font-medium">
                Bildir
              </a>
            </Link>
          )}
        </Flexible>
      </div>

      {value && <Notify.Error title={errorMessage} />}
    </Flexible>
  );
}
