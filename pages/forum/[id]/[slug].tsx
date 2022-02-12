import { Fragment, useEffect, useState } from "react";

// components
import Layout from "components/core/Layout";
import STYLE from "constants/style";
import { ArticleSkeleton } from "components/Skeleton/Article";

// ** packages
import classNames from "classnames";
import useSWR from "swr";
import { motion } from "framer-motion";

import { find_forum } from "services/article/config";

import { IComment } from "constants/types";
import { fetcherV2 } from "lib/fetcher";
import { NextPageContext } from "next";
import ForumHead from "components/ui/Sections/Forums/Content/ForumHead";
import ForumContent from "components/ui/Sections/Forums/Content/ForumContent";
import ForumComment from "components/ui/Sections/Forums/Content/ForumComment";
import MakeComment from "components/ui/MakeComment";
import ErrorFound from "components/ui/Error/ErrorFound";
import { NextSeoProps } from "next-seo";
import Grid from "components/ui/Grid";
import { ForumTypes } from "constants/enums";
import { setDescription } from "helpers/utils";
import UserCard from "components/ui/UserCard";

export interface Props {
  id: number;
}

export interface ServerSideProps {
  query: {
    id: number;
  };
}

export default function Forum(props: Props) {
  const { data, error } = useSWR(find_forum(props.id), fetcherV2);

  const [comments, setComments] = useState<IComment[]>([]);
  const [deleted, setDeleted] = useState<boolean>(false);

  const seo = data?.forum
    ? ({
        openGraph: {
          description: setDescription(data.forum.content),
          title:
            `${data.forum.title} | Gamewod.com` || "Bulunamadı | Gamewod.com",
          url: window.location.href,
        },
        description: setDescription(data.forum.content),
        title:
          `${data.forum.title} | Gamewod.com` || "Bulunamadı | Gamewod.com",
      } as NextSeoProps)
    : {};

  useEffect(() => {
    if (data) {
      setComments(data.forum ? data.forum.comments : []);
    }
  }, [data]);

  if (error) {
    return <ErrorFound />;
  }

  return (
    <Layout seo={seo}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className={classNames(STYLE.paddingHorizontal, "")}
      >
        {data ? (
          data.forum ? (
            !deleted && data.forum.status ? (
              <Grid.Col className="xl:gap-10 lg:gap-8 gap-5">
                <Grid.Span span="2xl:col-span-3 xl:col-span-4 xl:block lg:block hidden col-span-12">
                  <UserCard {...data.forum.user} />
                </Grid.Span>

                <Grid.Span span="2xl:col-span-6 xl:col-span-5 col-span-12 xl:px-24 lg:px-14 px-0">
                  <ForumHead
                    date={data.forum.createdAt}
                    title={data.forum.title}
                  />

                  <ForumContent
                    username={data.forum.user.username}
                    id={data.forum.id}
                    content={data.forum.content}
                    deleted={() => setDeleted(true)}
                  />
                </Grid.Span>

                <Grid.Span span="xl:col-span-3 lg:col-span-3 col-span-12">
                  <MakeComment
                    fid={data.forum.id}
                    type={ForumTypes.FORUM}
                    setComments={(comment: IComment) =>
                      setComments(comments.concat(comment))
                    }
                  />

                  <div className="mb-4 font-semibold text-sm text-gray-600 dark:text-gray-400">
                    Yorumlar ({comments.length})
                  </div>

                  {comments.map((item: IComment) => (
                    <ForumComment key={item.id} {...item} />
                  ))}
                </Grid.Span>
              </Grid.Col>
            ) : (
              <div className="text-center bg-gray-100 py-10 rounded-md text-gray-700">
                Bu Konu Silindi
              </div>
            )
          ) : (
            <div className="py-10 bg-gray-100 text-center rounded-md">
              Upppsss
            </div>
          )
        ) : (
          <ArticleSkeleton />
        )}
      </motion.div>
    </Layout>
  );
}

interface InitialProps extends NextPageContext {
  query: {
    id: string;
  };
}

Forum.getInitialProps = async (ctx: InitialProps) => {
  return { id: ctx.query.id };
};
