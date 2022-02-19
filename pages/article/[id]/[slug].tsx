// components
import Layout from "components/core/Layout";
import ArticleContent from "components/ui/Article/Content";
import STYLE from "constants/style";

// ** packages
import { GetStaticPropsContext } from "next";
import classNames from "classnames";
import { motion } from "framer-motion";
import slugify from "slugify";

import { find_post } from "services/article/config";
import { ApiInstance } from "services/apis";
import { ArticleProps } from "constants/types";
import { handleGetArticles } from "services/article";

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

export async function getStaticProps(context: GetStaticPropsContext) {
  try {
    const apipath = find_post(context.params?.id as unknown as number);
    const article = await ApiInstance.get(apipath);
    return {
      props: { article: article.data.data },
      revalidate: 3,
    };
  } catch (e) {
    return {
      notFound: true,
    };
  }
}

export async function getStaticPaths() {
  const articles = await handleGetArticles({});
  const paths = articles.data.map((item: ArticleProps) => {
    const slug = slugify(item.attributes.title, {
      replacement: "-",
      lower: true,
    });
    return `/article/${item.id}/${slug}`;
  });
  return {
    paths: paths || [],
    fallback: false,
  };
}
