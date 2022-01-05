import cn from "classnames";
import Flexible from "components/ui/Flexible";
import Grid from "components/ui/Grid";
import { IComment } from "constants/types";
import style from "../style.module.css";

interface Props {
  comments: IComment[];
}

export default function Comments(props: Props) {
  return (
    <div className="xl:w-4/6 lg:w-4/6 mx-auto">
      <Grid.Col>
        {props.comments.map((item) => (
          <CommentCard key={item.id} {...item} />
        ))}
      </Grid.Col>
    </div>
  );
}

interface CardProps {
  title: string;
  comments: IComment;
}

export const CommentCard = (props: IComment) => {
  return (
    <Grid.Span
      span="xl:col-span-6 lg:col-span-6 col-span-12"
      className="rounded-md p-1 border"
    >
      <div className="bg-graypink text-gray-700 rounded-md px-3 py-2 mb-2">
        {props.forum?.title}
      </div>
      <div className="px-3">
        <div className="font-medium text-gray-300 mb-1">
          <span className="text-gray-900">{props.comment}</span>
        </div>

        <div className="text-sm text-gray-400">{props.votes.length} Upvote</div>
      </div>
    </Grid.Span>
  );
};
