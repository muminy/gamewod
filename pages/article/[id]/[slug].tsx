import { Fragment, useEffect, useState } from "react";

// components
import Layout from "components/core/Layout";
import Flexible from "components/ui/Flexible";
import News from "components/ui/Sections/News";
import STYLE from "constants/style";
import Markdown from "components/ui/Markdown";
import { ArticleSkeleton } from "components/Skeleton/Article";

// ** packages
import { NextPageContext } from "next";
import classNames from "classnames";
import useSWR from "swr";
import { motion } from "framer-motion";
import { NextSeoProps } from "next-seo";

import { find_post } from "services/article/config";
import { fetcher } from "lib/fetcher";
import MakeComment from "components/ui/Article/MakeComment";

export interface Props {
  id: number;
}

export interface ServerSideProps {
  query: {
    id: number;
  };
}

export default function Article(props: Props) {
  const { data: article, error } = useSWR(find_post(props.id), fetcher);

  const [comments, setComments] = useState([]);

  const seo = article
    ? ({
        openGraph: {
          description: article?.data.attributes.desc,
          title:
            `${article?.data.attributes.title} | Gamewod.com` ||
            "Bulunamadı | Gamewod.com",
          url: window.location.href,
        },
        description: article?.data.attributes.desc,
        title:
          `${article?.data.attributes.title} | Gamewod.com` ||
          "Bulunamadı | Gamewod.com",
      } as NextSeoProps)
    : {};

  useEffect(() => {
    if (article) {
      setComments(article.data ? article.data.attributes.comments.data : []);
    }
  }, [article]);

  return (
    <Layout seo={seo}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className={classNames(STYLE.paddingHorizontal)}
      >
        {article ? (
          article.data ? (
            <div className="xl:grid lg:grid flex flex-col-reverse grid-cols-12">
              <div className="xl:col-span-3 lg:col-span-4 md:col-span-4 col-span-12 flex flex-col">
                <MakeComment
                  getComment={(comment) =>
                    setComments(comments.concat(comment))
                  }
                  id={article.data.id}
                />

                <News.Comments comments={comments} />
              </div>

              <div className="xl:col-span-9 lg:col-span-8 md:col-span-8 col-span-12 xl:px-40 lg:px-14 px-0">
                <News.Header
                  date={article.data.attributes.createdAt}
                  title={article.data.attributes.title}
                />
                <Markdown content={article.data.attributes.content} />
              </div>
            </div>
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

Article.getInitialProps = async (ctx: InitialProps) => {
  return { id: ctx.query.id };
};
