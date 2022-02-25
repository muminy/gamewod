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
import { useState } from "react";

export default function ForumPage() {
  const { data, error } = useSWR(forum, fetcherV2);

  const [page, setPage] = useState(1);
  const pagelimit = 10;

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
        <div>
          <div className="border dark:border-dark-border mb-4">
            {data.forums.slice(0, page * pagelimit).map((item: IForum) => (
              <ForumBigCard key={item.id} {...item} />
            ))}
          </div>

          {data.forums.length > page * pagelimit && (
            <button
              onClick={() => setPage((prev) => prev + 1)}
              className="bg-black px-7 py-3 rounded-xl text-white text-sm font-medium"
            >
              Daha Fazla Göster
            </button>
          )}
        </div>
      ) : (
        <ForumCardSkeleton />
      )}
    </Layout>
  );
}
