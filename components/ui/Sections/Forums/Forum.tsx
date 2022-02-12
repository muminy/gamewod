// ** style
import style from "./forum.module.css";

// ** fake db
import db from "./db.json";

// ** components
import ErrorFound from "components/ui/Error/ErrorFound";
import { ForumCardSkeleton } from "components/Skeleton/Forum";
import NoData from "components/ui/NoData";

// ** moment js for date locale
import moment from "moment";

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

  if (error) return <ErrorFound />;
  if (!data) return <ForumCardSkeleton />;

  return (
    <section>
      {data.forums.length === 0 && <NoData title="Henüz Bir Konu Girilmedi" />}

      {data.forums.map((item: IForum) => (
        <ForumCard key={item.id} {...item} />
      ))}
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
