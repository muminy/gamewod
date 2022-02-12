// components
import Layout from "components/core/Layout";
import STYLE from "constants/style";
import ErrorFound from "components/ui/Error/ErrorFound";
import { ArticleSkeleton } from "components/Skeleton/Article";

// ** packages
import { GetServerSidePropsContext, NextPageContext } from "next";
import classNames from "classnames";
import useSWR from "swr";
import { motion } from "framer-motion";

import { find_post } from "services/article/config";
import ArticleContent from "components/ui/Article/Content";
import { ApiInstance } from "services/apis";
import { ArticleProps } from "constants/types";

export interface Props {
  article: ArticleProps;
}

export default function Article({ article }: Props) {
  return (
    <Layout
      seo={{
        title: `${article?.attributes.title} | Gamewod.com`,
        description: article?.attributes.desc,
      }}
      className="py-10"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className={classNames(STYLE.paddingHorizontal)}
      >
        <ArticleContent {...article} />
      </motion.div>
    </Layout>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  try {
    const apipath = find_post(context.query.id as unknown as number);
    const article = await ApiInstance.get(apipath);
    return {
      props: { article: article.data.data }, // will be passed to the page component as props
    };
  } catch (e) {
    return {
      notFound: true,
    };
  }
}
