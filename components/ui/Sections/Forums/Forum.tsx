// ** style
import style from "./forum.module.css";

// ** fake db
import db from "./db.json";

// ** components
import ErrorFound from "components/ui/Error/ErrorFound";
import NoData from "components/ui/NoData";
import ForumBigCard from "./ForumBigCard";
import { ForumCardSkeleton } from "components/Skeleton/Forum";

// ** cn opt
import useSWR from "swr";
import Link from "next/link";
import slugify from "slugify";
import { makeProfileImageURL } from "helpers/utils";
import { forum } from "services/forum/config";
import { fetcherV2 } from "lib/fetcher";
import { IForum } from "constants/types";

export default function Forums() {
  const { data, error } = useSWR(forum, fetcherV2);

  const forumlimits = 10;

  if (error) return <ErrorFound />;
  if (!data) return <ForumCardSkeleton />;

  return (
    <section>
      <div className="border dark:border-dark-border ">
        {data.forums.length === 0 && (
          <NoData title="Henüz Bir Konu Girilmedi" />
        )}
        {data.forums.map((item: IForum) => (
          <ForumBigCard key={item.id} {...item} />
        ))}
      </div>

      {data.forums.length > forumlimits && (
        <Link href={"/forum"}>
          <a className="bg-primary text-white text-center py-3 rounded-xl text-sm font-medium block mt-4">
            Tümünü Gör
          </a>
        </Link>
      )}
    </section>
  );
}

export const ForumCard: React.FC<IForum> = (props) => {
  const slug = slugify(props.title, { replacement: "-", lower: true });
  return (
    <Link href={`/forum/${props.id}/${slug}`}>
      <a className={style.forum}>
        <img
          alt={`${props.user?.username} profile`}
          className={style.userimage}
          src={makeProfileImageURL(props.user?.image)}
        />

        <div>
          <h2 className="font-semibold mb-0.5">{props.title}</h2>
          <div className="flex space-x-2">
            <div className="text-xs text-gray-400">{props.user?.username}</div>
            <div className="text-xs text-gray-400">
              {props.comments.length} Yorum
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
};
