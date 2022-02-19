import classNames from "classnames";
import useSWR from "swr";

import Layout from "components/core/Layout";
import ForumBigCard from "components/ui/Sections/Forums/ForumBigCard";
import ErrorFound from "components/ui/Error/ErrorFound";
import { ForumCardSkeleton } from "components/Skeleton/Forum";

import STYLE from "constants/style";
import { forum } from "services/forum/config";
import { fetcherV2 } from "lib/fetcher";
import { IForum } from "constants/types";

export default function ForumPage() {
  const { data, error } = useSWR(forum, fetcherV2);

  // ** if getted error render error information
  if (error) return <ErrorFound />;

  return (
    <Layout
      className={classNames(
        STYLE.paddingHorizontal,
        "max-w-7xl mx-auto w-full py-10"
      )}
      seo={{ title: "Forumlar" }}
    >
      <div className="font-semibold text-gray-700 text-xl dark:text-white">
        Forumlar
      </div>
      <div className="mb-10 text-gray-900 dark:text-white dark:text-opacity-50">
        Gündeme dair son paylaşılan kullanıcı konuları
      </div>

      {data ? (
        <div className="border dark:border-dark-border">
          {data.forums.map((item: IForum) => (
            <ForumBigCard key={item.id} {...item} />
          ))}
        </div>
      ) : (
        <ForumCardSkeleton />
      )}
    </Layout>
  );
}
