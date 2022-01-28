import Grid from "components/ui/Grid";
import { IComment } from "constants/types";

interface Props {
  comments: IComment[];
}

export default function Comments(props: Props) {
  return (
    <div className="xl:w-4/6 lg:w-4/6 mx-auto">
      <Grid.Col>
        {props.comments.length === 0 ? (
          <Grid.Span
            span="col-span-12"
            className="py-10 text-center dark:bg-dark-border dark:text-white bg-gray-100 rounded-md text-gray-600 "
          >
            Yorum Oluşturmadı
          </Grid.Span>
        ) : (
          props.comments.map((item) => <CommentCard key={item.id} {...item} />)
        )}
      </Grid.Col>
    </div>
  );
}

export const CommentCard = (props: IComment) => {
  return (
    <Grid.Span
      span="xl:col-span-6 lg:col-span-6 col-span-12"
      className="rounded-md p-1 border dark:border-dark-border"
    >
      <div className="bg-graypink dark:text-gray-400 dark:bg-dark-border text-gray-700 rounded-md px-3 py-2 mb-2">
        {props.forum?.title}
      </div>
      <div className="px-3">
        <div className="font-medium text-gray-300 mb-1">
          <span className="text-gray-900 dark:text-gray-200">
            {props.comment}
          </span>
        </div>

        <button className="text-sm text-gray-400">
          {props.votes.length} Upvote
        </button>
      </div>
    </Grid.Span>
  );
};
