import Grid from "components/ui/Grid";
import { IComment, IForum } from "constants/types";

interface Props {
  forums: IForum[];
}

export default function Forums(props: Props) {
  return (
    <div className="xl:w-4/6 lg:w-4/6  mx-auto">
      <Grid.Col>
        {props.forums.map((item) => (
          <ForumCard {...item} key={item.id} />
        ))}
      </Grid.Col>
    </div>
  );
}

interface CardProps {
  title: string;
  comments: IComment[];
}

export const ForumCard = (props: CardProps) => {
  return (
    <Grid.Span
      span="xl:col-span-6 lg:col-span-6 col-span-12"
      className="rounded-md border p-3"
    >
      <div className="font-medium">{props.title}</div>
      <div className="text-sm text-gray-400">{props.comments.length} Yorum</div>
    </Grid.Span>
  );
};
