import { ForumTypes } from "constants/enums";
import { IComment } from "constants/types";
import { useState } from "react";
import MakeComment from "components/ui/MakeComment";
import ForumComment from "./ForumComment";

interface Props {
  id: number;
  comments: IComment[];
}

export default function ForumComments(props: Props) {
  const [comments, setComments] = useState<IComment[]>(props.comments);
  return (
    <div>
      <MakeComment
        fid={props.id}
        type={ForumTypes.FORUM}
        setComments={(comment: IComment) =>
          setComments(comments.concat(comment))
        }
      />

      <div className="mb-4 font-semibold text-sm text-gray-600 dark:text-gray-400">
        Yorumlar ({comments.length})
      </div>

      {comments.map((item: IComment) => (
        <ForumComment key={item.id} {...item} />
      ))}
    </div>
  );
}
