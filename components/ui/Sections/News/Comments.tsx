import style from "./style.module.css";
import Flexible from "components/ui/Flexible";
import moment from "moment";
import { RandomAvatar } from "components/ui/avatar/Avatar";
import Flaticon from "components/ui/Flaticon";
import { UpIconPath } from "constants/flaticons";
import { ArticleComment } from "constants/types";
import CommentCard from "./CommentCard";

export interface Props {
  comments: ArticleComment[];
}

export default function Comments(props: Props) {
  const sortComment = (a: ArticleComment, b: ArticleComment) => {
    return (
      moment(b.attributes.createdAt).unix() -
      moment(a.attributes.createdAt).unix()
    );
  };

  return (
    <div className="p-1 rounded-xl bg-gray-100 dark:bg-dark-border">
      {props.comments.sort(sortComment).map((item: ArticleComment) => (
        <CommentCard
          key={item.id}
          date={item.attributes.createdAt}
          id={item.id}
          name={item.attributes.name}
          comment={item.attributes.comment}
        />
      ))}
    </div>
  );
}
