import Grid from "components/ui/Grid";
import { IComment, IForum } from "constants/types";
import Link from "next/link";
import slugify from "slugify";

interface Props {
  forums: IForum[];
}

export default function Forums(props: Props) {
  return (
    <div className="xl:w-4/6 lg:w-4/6  mx-auto">
      <Grid.Col>
        {props.forums.length === 0 ? (
          <Grid.Span
            span="col-span-12"
            className="py-10 text-center dark:bg-dark-border dark:text-white bg-gray-100 rounded-md text-gray-600 "
          >
            Forum Oluşturmadı
          </Grid.Span>
        ) : (
          props.forums.map((item) => <ForumCard {...item} key={item.id} />)
        )}
      </Grid.Col>
    </div>
  );
}

interface CardProps {
  title: string;
  id: number;
  comments: IComment[];
}

export const ForumCard = (props: CardProps) => {
  const slug = slugify(props.title, {
    replacement: "-",
    lower: true,
  });

  return (
    <Grid.Span
      span="xl:col-span-4 lg:col-span-4 col-span-12"
      className="rounded-md border p-3 dark:border-dark-border"
    >
      <Link href={`/forum/${props.id}/${slug}`}>
        <a className="block">
          <div className="font-medium">{props.title}</div>
          <div className="text-sm text-gray-400">
            {props.comments.length} Yorum
          </div>
        </a>
      </Link>
    </Grid.Span>
  );
};
