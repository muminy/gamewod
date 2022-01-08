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

import { find_forum, find_post } from "services/article/config";
import {
  handleCreateComment,
  handleCreateForumComment,
} from "services/comment";
import { ArticleComment, IComment } from "constants/types";
import { fetcherV2 } from "lib/fetcher";
import { NextPageContext } from "next";
import ForumHead from "components/ui/Sections/Forums/Content/ForumHead";
import ForumContent from "components/ui/Sections/Forums/Content/ForumContent";
import ForumComment from "components/ui/Sections/Forums/Content/ForumComment";

export interface Props {
  id: number;
}

export interface ServerSideProps {
  query: {
    id: number;
  };
}

export default function Forum(props: Props) {
  const { data, error } = useSWR(find_forum(props.id), fetcherV2);

  const [open, setOpen] = useState(false);
  const [creating, setCreating] = useState(false);

  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  const toggle = () => setOpen(!open);

  const handleAddComment = () => {
    setCreating(true);
    handleCreateForumComment({ comment, fid: data.forum.id }).then(
      (response) => {
        // get if created comment
        setComments(comments.concat(response.comment));
        setComment("");
        setCreating(false);
        console.log(response);
      }
    );
  };

  useEffect(() => {
    if (data) {
      setComments(data.forum ? data.forum.comments : []);
    }
  }, [data]);

  return (
    <Layout
      metas={
        data &&
        data.forum && {
          date: data.forum.createdAt,
          description: data.forum.content,
          title:
            `${data.forum.title} | Gamewod.com` || "Bulunamadı | Gamewod.com",
        }
      }
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className={classNames(
          STYLE.paddingHorizontal,
          "max-w-5xl mx-auto py-2"
        )}
      >
        {data ? (
          data.forum ? (
            data.forum.status ? (
              <Fragment>
                <ForumHead
                  date={data.forum.createdAt}
                  title={data.forum.title}
                  user={data.forum.user}
                />

                <ForumContent
                  username={data.forum.user.username}
                  id={data.forum.id}
                  content={data.forum.content}
                />

                <div className="mb-10 rounded-md">
                  <div className="text-gray-600 text-opacity-70 dark:text-gray-500 text-sm font-medium mb-3">
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

                <div className="mb-4 font-bold text-sm dark:text-gray-400">
                  Yorumlar ({comments.length})
                </div>

                {comments.map((item: IComment) => (
                  <ForumComment key={item.id} {...item} />
                ))}
              </Fragment>
            ) : (
              <div className="text-center bg-gray-100 py-10 rounded-md text-gray-700">
                Bu Konu Silindi
              </div>
            )
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

Forum.getInitialProps = async (ctx: InitialProps) => {
  return { id: ctx.query.id };
};
