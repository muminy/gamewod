// ** style
import style from "./forum.module.css";

// ** fake db
import db from "./db.json";

// ** components
import ErrorFound from "components/ui/Error/ErrorFound";
import { ForumCardSkeleton } from "components/Skeleton/Forum";
import NoData from "components/ui/NoData";

// ** cn opt
import useSWR from "swr";
import Link from "next/link";
import slugify from "slugify";
import { makeProfileImageURL } from "helpers/utils";
import { forum } from "services/forum/config";
import { fetcherV2 } from "lib/fetcher";
import { IForum } from "constants/types";
import CustomTitle from "components/ui/Title";

export default function Forums() {
  const { data, error } = useSWR(forum, fetcherV2);

  if (error) return <ErrorFound />;
  if (!data) return <ForumCardSkeleton />;

  return (
    <section>
      <CustomTitle className="xl:px-0 lg:px-0 md:px-0 px-4">
        Topluluklar
      </CustomTitle>

      <div className="p-1 border dark:border-dark-borderlight dark:bg-dark-border bg-gray-100 xl:rounded-2xl lg:rounded-2xl">
        {data.forums.length === 0 && (
          <NoData title="Henüz Bir Konu Girilmedi" />
        )}
        {data.forums.map((item: IForum) => (
          <ForumCard key={item.id} {...item} />
        ))}
      </div>
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
