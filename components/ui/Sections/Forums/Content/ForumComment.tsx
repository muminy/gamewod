import classNames from "classnames";
import Flexible from "components/ui/Flexible";
import { IComment, IUser, IVoteComment } from "constants/types";
import moment from "moment";
import Link from "next/link";
import { useState } from "react";
import {
  handleUnvoteForumComment,
  handleUpvoteForumComment,
} from "services/comment/vote";
import { useAppSelector } from "store/hooks";

export default function ForumComment(props: IComment) {
  const [votes, setVotes] = useState<IVoteComment[]>(props.votes);

  const user = useAppSelector((state) => state.user);

  const alreadyVote = user.user
    ? votes.find((item: IVoteComment) => item.userID === user.user?.id)
    : false;

  const handleUpVote = () => {
    handleUpvoteForumComment({ commentId: props.id }).then((response) => {
      // get vote response data
      console.log(response);
      if (response.status === 200) {
        setVotes(votes.concat(response.vote));
      }
    });
  };

  const handleUnVote = () => {
    handleUnvoteForumComment({ commentId: props.id }).then((response) => {
      // get vote response data
      console.log(response);
      if (response.status === 200) {
        setVotes(votes.filter((item) => item.userID !== user.user?.id));
      }
    });
  };

  return (
    <Flexible className="space-x-3 mb-3">
      <div className="min-w-[24px] h-[24px] rounded-full dark:bg-dark-border bg-gray-200" />

      <div className="">
        <div className="text-[14px]">
          <span className="font-semibold pr-1 dark:text-gray-200">
            @{props.user?.username}
          </span>{" "}
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

          <Link href={"/"}>
            <a className="text-xs dark:hover:text-red-400 text-gray-400 hover:underline hover:text-gray-900 font-medium">
              Bildir
            </a>
          </Link>
        </Flexible>
      </div>
    </Flexible>
  );
}
