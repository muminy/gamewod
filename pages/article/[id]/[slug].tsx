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
import moment from "moment";
import useSWR from "swr";
import { motion } from "framer-motion";
import { NextSeoProps } from "next-seo";

import { find_post } from "services/article/config";
import { handleCreateComment } from "services/comment";
import { ArticleComment } from "constants/types";
import { fetcher } from "lib/fetcher";

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

  const [open, setOpen] = useState(false);
  const [creating, setCreating] = useState(false);

  const [username, setUsername] = useState("");
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  const seo = article
    ? ({
        openGraph: {
          description: article?.data.attributes.desc,
          title:
            `${article?.data.attributes.title} | Gamewod.com` ||
            "Bulunamadı | Gamewod.com",
        },
        description: article?.data.attributes.desc,
        title:
          `${article?.data.attributes.title} | Gamewod.com` ||
          "Bulunamadı | Gamewod.com",
      } as NextSeoProps)
    : {};

  const toggle = () => setOpen(!open);

  const handleAddComment = () => {
    setCreating(true);
    handleCreateComment({ comment, name: username, post: props.id }).then(
      (response) => {
        // get if created comment
        setComments(comments.concat(response.data));
        setComment("");
        setUsername("");
        setCreating(false);
      }
    );
  };

  useEffect(() => {
    if (article) {
      setComments(article.data ? article.data.attributes.comments.data : []);
    }
  }, [article]);

  const sortComment = (a: ArticleComment, b: ArticleComment) => {
    return (
      moment(b.attributes.createdAt).unix() -
      moment(a.attributes.createdAt).unix()
    );
  };

  return (
    <Layout seo={seo}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className={classNames(STYLE.paddingHorizontal, "max-w-5xl mx-auto")}
      >
        {article ? (
          article.data ? (
            <Fragment>
              <News.Header
                date={article.data.attributes.createdAt}
                title={article.data.attributes.title}
              />
              <Markdown content={article.data.attributes.content} />

              <div className="mb-10 rounded-md">
                <div className="text-gray-600 dark:text-gray-500 text-opacity-70 text-sm font-medium mb-3">
                  Giriş yapmadan hızl bir şekilde yorum yaparak görüşlerinizi
                  bildirebilirsiniz.
                </div>

                {open ? (
                  <div className="relative">
                    <div>
                      <textarea
                        rows={4}
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        className="rounded-md w-full border-2 resize-none px-3 py-3 text-sm dark:bg-transparent dark:border-dark-border dark:outline-black dark:focus:border-dark-borderlight"
                        placeholder="Yorum içeriği"
                      />
                      <input
                        className="w-full dark:border-dark-border dark:bg-transparent focus:border-black dark:focus:border-dark-borderlight outline-none py-2 mb-3 text-sm px-3 border-2 rounded-md"
                        placeholder="Ad"
                        onChange={(event) => setUsername(event.target.value)}
                        value={username}
                      />
                    </div>

                    <Flexible
                      justifyContent="justify-end"
                      alignItem="items-center"
                      className="space-x-2"
                    >
                      <button
                        onClick={handleAddComment}
                        className="text-sm whitespace-nowrap font-medium rounded-md bg-[#f3effd] dark:hover:bg-opacity-80 dark:bg-dark-border dark:text-gray-400 px-3 py-1.5"
                      >
                        {creating ? "Yorum yapılıyor..." : "Yorum yap"}
                      </button>

                      <button
                        onClick={toggle}
                        className="text-sm text-gray-500 rounded-md block dark:hover:bg-opacity-20 dark:bg-red-100 dark:bg-opacity-25 dark:text-red-200 bg-[#f5f5f5] px-3 py-1.5"
                      >
                        İptal
                      </button>
                    </Flexible>
                  </div>
                ) : (
                  <button
                    onClick={toggle}
                    className="bg-[#4834d4] font-semibold text-sm text-white rounded-md py-3 w-full mb-2"
                  >
                    Yorum Yap
                  </button>
                )}
              </div>

              <div className="mb-4 font-bold text-sm">
                Yorumlar ({comments.length})
              </div>

              {comments.sort(sortComment).map((item: ArticleComment) => (
                <News.Comment
                  key={item.id}
                  date={item.attributes.createdAt}
                  id={item.id}
                  name={item.attributes.name}
                  comment={item.attributes.comment}
                />
              ))}
            </Fragment>
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
