import classNames from "classnames";
import Flexible from "components/ui/Flexible";
import Notify from "components/ui/Notify";
import { IComment, IVoteComment } from "constants/types";
import { makeProfileImageURL } from "helpers/utils";
import useCurrentUser from "hooks/useCurrentUser";
import useToggle from "hooks/useToggle";
import moment from "moment";
import "moment/locale/tr";
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

  const userLink = `/user/${props.user?.username}`;
  const rtf = new Intl.RelativeTimeFormat("TR", {
    style: "long",
  });

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
      <Link href={userLink}>
        <a className="min-w-[20px] h-[20px] block rounded-full dark:bg-dark-border bg-gray-200">
          <img
            className="w-full rounded-full h-full object-cover"
            src={makeProfileImageURL(props.user.image)}
          />
        </a>
      </Link>

      <div>
        <div className="flex items-center space-x-2 mb-0.5 font-medium text-sm">
          <Link href={userLink}>
            <a>{props.user.username}</a>
          </Link>

          {/* <span>{moment(props.createdAt).local().format("DD MMMM yyyy")}</span> */}
        </div>

        <div className="text-sm mb-3 break-all">{props.comment}</div>

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
