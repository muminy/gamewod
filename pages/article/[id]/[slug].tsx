// components
import Layout from "components/core/Layout";
import STYLE from "constants/style";
import ErrorFound from "components/ui/Error/ErrorFound";
import { ArticleSkeleton } from "components/Skeleton/Article";

// ** packages
import {
  GetServerSidePropsContext,
  GetStaticPathsContext,
  GetStaticPropsContext,
  NextPageContext,
} from "next";
import classNames from "classnames";
import useSWR from "swr";
import { motion } from "framer-motion";

import { find_post } from "services/article/config";
import ArticleContent from "components/ui/Article/Content";
import { ApiInstance } from "services/apis";
import { ArticleProps } from "constants/types";
import { handleGetArticles } from "services/article";
import slugify from "slugify";
import { useRouter } from "next/router";

export interface Props {
  article: ArticleProps;
}

export default function Article({ article }: Props) {
  const router = useRouter();
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
        {router.isFallback ? (
          <ArticleSkeleton />
        ) : (
          <ArticleContent {...article} />
        )}
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
