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

import { IComment, IForum } from "constants/types";
import { GetStaticPropsContext } from "next";
import ForumHead from "components/ui/Sections/Forums/Content/ForumHead";
import ForumContent from "components/ui/Sections/Forums/Content/ForumContent";
import ForumComment from "components/ui/Sections/Forums/Content/ForumComment";
import MakeComment from "components/ui/MakeComment";
import Grid from "components/ui/Grid";
import { ForumTypes } from "constants/enums";
import { setDescription } from "helpers/utils";
import UserCard from "components/ui/UserCard";
import { ApiV2 } from "services/apis";
import { handleGetForums } from "services/forum";
import slugify from "slugify";

export interface Props {
  forum: IForum;
}

export default function Forum({ forum }: Props) {
  const [comments, setComments] = useState<IComment[]>([]);
  const [deleted, setDeleted] = useState<boolean>(false);

  return (
    <Layout
      className="pt-10"
      seo={{
        description: setDescription(forum.content),
        title: `${forum.title} | Gamewod.com`,
      }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className={classNames(STYLE.paddingHorizontal, "")}
      >
        {deleted ? (
          <div>Silindi</div>
        ) : (
          <Grid.Col className="xl:gap-10 lg:gap-8 gap-5">
            <Grid.Span span="2xl:col-span-3 xl:col-span-4 xl:block lg:block hidden col-span-12">
              <UserCard {...forum.user} />
            </Grid.Span>

            <Grid.Span span="2xl:col-span-6 xl:col-span-5 col-span-12 xl:px-24 lg:px-14 px-0">
              <ForumHead date={forum.createdAt} title={forum.title} />

              <ForumContent
                username={forum.user.username}
                id={forum.id}
                content={forum.content}
                deleted={() => setDeleted(true)}
              />
            </Grid.Span>

            <Grid.Span span="xl:col-span-3 lg:col-span-3 col-span-12">
              <MakeComment
                fid={forum.id}
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
        )}
      </motion.div>
    </Layout>
  );
}

export async function getStaticProps(context: GetStaticPropsContext) {
  const apipath = find_forum(context.params?.id as unknown as number);
  const forum = await ApiV2.get(apipath);

  if (!forum.data.forum) {
    return {
      notFound: true,
    };
  }

  return {
    props: { forum: forum.data.forum },
  };
}

export async function getStaticPaths() {
  const data = await handleGetForums();
  const paths = data.forums.map((item: IForum) => {
    const slug = slugify(item.title, {
      replacement: "-",
      lower: true,
    });
    return `/forum/${item.id}/${slug}`;
  });
  return {
    paths: paths || [],
    fallback: false,
  };
}
