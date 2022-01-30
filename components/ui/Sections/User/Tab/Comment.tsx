import Grid from "components/ui/Grid";
import { IComment } from "constants/types";
import Link from "next/link";
import slugify from "slugify";

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
          props.comments.map((item) => (
            <Grid.Span
              key={item.id}
              span="xl:col-span-6 lg:col-span-6 col-span-12"
              className="rounded-md border dark:border-dark-border"
            >
              <CommentCard {...item} />
            </Grid.Span>
          ))
        )}
      </Grid.Col>
    </div>
  );
}

export const CommentCard = (props: IComment) => {
  const forumSlug = slugify(props.forum.title, {
    lower: true,
    replacement: "-",
  });

  return (
    <Link href={`/forum/${props.forumID}/${forumSlug}`}>
      <a>
        <div className="border-b dark:border-dark-border dark:text-white font-medium text-gray-700 px-3 py-2 mb-1">
          {props.forum?.title}
        </div>
        <div className="px-3">
          <div className="text-gray-300 mb-1">
            <span className="text-gray-500 dark:text-darktext-color">
              {props.comment}
            </span>
          </div>
        </div>
      </a>
    </Link>
  );
};
