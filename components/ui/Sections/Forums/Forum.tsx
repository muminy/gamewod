// ** style
import style from "./forum.module.css";

// ** fake db
import db from "./db.json";

// ** components
import CustomTitle from "components/ui/Title";
import ErrorFound from "components/ui/Error/ErrorFound";

// ** moment js for date locale
import moment from "moment";

// ** cn opt
import cn from "classnames";
import useSWR from "swr";
import { forum } from "services/forum/config";
import { fetcherV2 } from "lib/fetcher";
import { IForum } from "constants/types";
import Link from "next/link";
import slugify from "slugify";
import { ForumCardSkeleton } from "components/Skeleton/Forum";
import NoData from "components/ui/NoData";

export default function Forums() {
  const { data, error } = useSWR(forum, fetcherV2);

  if (error) {
    return <ErrorFound />;
  }

  return (
    <section>
      <CustomTitle>Topluluk</CustomTitle>
      {data ? (
        data.forums.length === 0 ? (
          <NoData title="Henüz Bir Konu Girilmedi" />
        ) : (
          data.forums.map((item: IForum) => (
            <ForumCard key={item.id} {...item} />
          ))
        )
      ) : (
        <ForumCardSkeleton />
      )}
    </section>
  );
}

export const ForumCard: React.FC<IForum> = (props) => {
  const slug = slugify(props.title, { replacement: "-", lower: true });
  return (
    <Link href={`/forum/${props.id}/${slug}`}>
      <a className={cn(style.forum, "group bg-[#f3f5f7] block")}>
        <div className={cn(style.title, "text-darkcolor")}>{props.title}</div>

        <span className={style.date}>
          {moment(props.createdAt).format("D MMMM, y")}
        </span>
      </a>
    </Link>
  );
};
