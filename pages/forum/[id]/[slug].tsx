import { useState } from "react";

// components
import Grid from "components/ui/Grid";
import Layout from "components/core/Layout";
import NotFound from "components/ui/NotFound";
import ForumHead from "components/ui/Sections/Forums/Content/ForumHead";
import ForumContent from "components/ui/Sections/Forums/Content/ForumContent";
import ForumComments from "components/ui/Sections/Forums/Content/Comments";

import STYLE from "constants/style";

// ** packages
import { NextPageContext } from "next";
import classNames from "classnames";
import { motion } from "framer-motion";

import { find_forum } from "services/article/config";
import { IForum } from "constants/types";
import { setDescription } from "helpers/utils";
import { ApiV2 } from "services/apis";

export interface Props {
  forum: IForum;
}

export default function Forum({ forum }: Props) {
  const [deleted, setDeleted] = useState<boolean>(false);

  // forum not created or deleted
  // and render not found data
  if (!forum) return <NotFound />;

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
              <ForumHead date={forum.createdAt} title={forum.title} />

              <ForumContent
                username={forum.user.username}
                id={forum.id}
                content={forum.content}
                deleted={() => setDeleted(true)}
              />
            </Grid.Span>

            <Grid.Span span="xl:col-span-4 lg:col-span-5 col-span-12">
              <ForumComments id={forum.id} comments={forum.comments} />
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
  const result = await ApiV2.get(find_forum(ctx.query.id as unknown as number));
  return { forum: result.data.forum };
};
