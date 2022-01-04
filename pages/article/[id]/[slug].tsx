import { Fragment, useEffect, useState } from "react";

// components
import Layout from "components/core/Layout";
import Flexible from "components/ui/Flexible";
import News from "components/ui/Sections/News";
import STYLE from "constants/style";
import { ArticleSkeleton } from "components/Skeleton/Article";

// ** packages
import classNames from "classnames";
import moment from "moment";
import useSWR from "swr";
import { motion } from "framer-motion";

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

  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  const toggle = () => setOpen(!open);

  const handleAddComment = () => {
    setCreating(true);
    handleCreateComment({ comment, name: "as", post: props.id }).then(
      (response) => {
        // get if created comment
        setComments(comments.concat(response.data));
        setComment("");
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
    <Layout
      metas={
        article &&
        article.data && {
          date: article?.data.attributes.createdAt,
          description: article?.data.attributes.desc,
          title:
            `${article?.data.attributes.title} | Gamewod.com` ||
            "Bulunamadı | Gamewod.com",
        }
      }
    >
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
              <News.Content content={article.data.attributes.content} />

              <div className="mb-10 rounded-md">
                <div className="text-gray-600 text-opacity-70 text-sm font-medium mb-3">
                  Giriş yapmadan hızl bir şekilde yorum yaparak görüşlerinizi
                  bildirebilirsiniz.
                </div>

                {open ? (
                  <div className="relative">
                    <textarea
                      rows={4}
                      value={comment}
                      onChange={(e) => setComment(e.target.value)}
                      className="rounded-md w-full border-2 resize-none px-3 py-3 text-sm"
                      placeholder="Yorum içeriği"
                    />

                    <Flexible
                      justifyContent="justify-end"
                      className="space-x-2"
                    >
                      <button
                        onClick={handleAddComment}
                        className="text-sm font-medium rounded-md bg-[#f3effd] px-3 py-1.5"
                      >
                        {creating ? "Yorum yapılıyor..." : "Yorum yap"}
                      </button>

                      <button
                        onClick={toggle}
                        className="text-sm text-gray-500 font-medium rounded-md block bg-[#f5f5f5] px-3 py-1.5"
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

export const getServerSideProps = async (ctx: ServerSideProps) => {
  // const posts = await handleGetArticleById({ id: ctx.query.id });

  return {
    props: {
      id: ctx.query.id,
    },
  };
};
