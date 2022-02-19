// components
import Layout from "components/core/Layout";
import NotFound from "components/ui/NotFound";
import ArticleContent from "components/ui/Article/Content";
import STYLE from "constants/style";

// ** packages
import { NextPageContext } from "next";
import classNames from "classnames";

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
      className={classNames(STYLE.paddingHorizontal, "py-10")}
    >
      <ArticleContent {...article} />
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
