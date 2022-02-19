import { useState } from "react";

// components
import Grid from "components/ui/Grid";
import Layout from "components/core/Layout";
import ForumHead from "components/ui/Sections/Forums/Content/ForumHead";
import ForumContent from "components/ui/Sections/Forums/Content/ForumContent";
import ForumComments from "components/ui/Sections/Forums/Content/Comments";

import STYLE from "constants/style";

// ** packages
import { GetStaticPropsContext, NextPageContext } from "next";
import classNames from "classnames";
import { motion } from "framer-motion";
import slugify from "slugify";

import { find_forum } from "services/article/config";
import { IComment, IForum } from "constants/types";
import { setDescription } from "helpers/utils";
import { ApiV2 } from "services/apis";
import { handleGetForums } from "services/forum";
import useSWR from "swr";
import { fetcherV2 } from "lib/fetcher";

export interface Props {
  id: number;
}

export default function Forum({ id }: Props) {
  const [deleted, setDeleted] = useState<boolean>(false);

  const { data, error } = useSWR(find_forum(id), fetcherV2);

  if (!data) {
    return <div>loading</div>;
  }

  if (error) {
    return <div>error</div>;
  }

  return (
    <Layout
      className="pt-10"
      seo={{
        description: setDescription(data.forum.content),
        title: `${data.forum.title} | Gamewod.com`,
      }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className={classNames(STYLE.paddingHorizontal, "max-w-7xl mx-auto")}
      >
        {deleted ? (
          <div>Silindi</div>
        ) : (
          <Grid.Col className="xl:gap-10 lg:gap-8 gap-5">
            <Grid.Span
              span="2xl:col-span-8 xl:col-span-7 col-span-12"
              className="xl:px-10 lg:px-10 px-0"
            >
              <ForumHead date={data.forum.createdAt} title={data.forum.title} />

              <ForumContent
                username={data.forum.user.username}
                id={data.forum.id}
                content={data.forum.content}
                deleted={() => setDeleted(true)}
              />
            </Grid.Span>

            <Grid.Span span="xl:col-span-4 lg:col-span-5 col-span-12">
              <ForumComments id={id} comments={data.forum.comments} />
            </Grid.Span>
          </Grid.Col>
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
