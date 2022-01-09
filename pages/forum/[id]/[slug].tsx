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
import MakeComment from "components/ui/MakeComment";

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
  const [comments, setComments] = useState<IComment[]>([]);

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

                <MakeComment
                  fid={data.forum.id}
                  setComments={(comment: IComment) =>
                    setComments(comments.concat(comment))
                  }
                />

                <div className="mb-4 font-semibold text-sm text-gray-600 dark:text-gray-400">
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
