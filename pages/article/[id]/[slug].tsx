// components
import Layout from "components/core/Layout";
import NotFound from "components/ui/NotFound";
import ArticleContent from "components/ui/Article/Content";
import STYLE from "constants/style";

// ** packages
import { NextPageContext } from "next";
import classNames from "classnames";
import { motion } from "framer-motion";

import { find_post } from "services/article/config";
import { ApiInstance } from "services/apis";
import { ArticleProps } from "constants/types";

export interface Props {
  article: ArticleProps;
}

export default function Article({ article }: Props) {
  // article not founded
  // and returned not found data
  if (!article) return <NotFound />;

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

interface InitialProps extends NextPageContext {
  query: {
    id: string;
  };
}

Article.getInitialProps = async (context: InitialProps) => {
  try {
    const apipath = find_post(context.query?.id as unknown as number);
    const result = await ApiInstance.get(apipath);
    return { article: result.data.data };
  } catch (e) {
    return {
      article: null,
    };
  }
};
