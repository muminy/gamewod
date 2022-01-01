import classNames from "classnames";
import Layout from "components/core/Layout";
import Flexible from "components/ui/Flexible";
import News from "components/ui/Sections/News";
import STYLE from "constants/style";
import { ArticleComment, ArticleProps } from "constants/types";
import getPosts, { getPostById } from "lib/readMarkdownFiles";
import moment from "moment";
import { GetServerSideProps, GetStaticProps } from "next";
import { Fragment, useEffect, useState } from "react";
import { handleGetArticleById } from "services/article";
import { handleCreateComment } from "services/comment";

export interface Props {
  article: ArticleProps;
}

export interface ServerSideProps {
  query: {
    id: number;
  };
}

export default function Article(props: Props) {
  const [open, setOpen] = useState(false);
  const [creating, setCreating] = useState(false);
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState(
    props.article.id ? props.article.attributes.comments.data : []
  );

  const toggle = () => setOpen(!open);

  const handleAddComment = () => {
    setCreating(true);
    handleCreateComment({ comment, name: "as", post: props.article.id }).then(
      (response) => {
        // get if created comment
        setComments(comments.concat(response.data));
        setComment("");
        setCreating(false);
      }
    );
  };

  const sortComment = (a: ArticleComment, b: ArticleComment) => {
    return (
      moment(b.attributes.createdAt).unix() -
      moment(a.attributes.createdAt).unix()
    );
  };

  return (
    <Layout>
      <div className={classNames(STYLE.paddingHorizontal, "max-w-5xl mx-auto")}>
        {props.article.id ? (
          <Fragment>
            <News.Header
              date={props.article.attributes.createdAt}
              title={props.article.attributes.title}
            />
            <News.Content content={props.article.attributes.content} />

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

                  <Flexible justifyContent="justify-end" className="space-x-2">
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

            {comments.sort(sortComment).map((item) => (
              <News.Comment
                key={item.id}
                date={item.attributes.createdAt}
                id={item.id}
                name={item.attributes.name}
                comment={item.attributes.comment}
              />
            ))}
          </Fragment>
        ) : null}
      </div>
      {/*  */}
    </Layout>
  );
}

export const getServerSideProps = async (ctx: ServerSideProps) => {
  const posts = await handleGetArticleById({ id: ctx.query.id });

  return {
    props: {
      article: posts.data,
    },
  };
};
