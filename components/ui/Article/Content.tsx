import { ArticleProps } from "constants/types";
import Markdown from "components/ui/Markdown";
import { useState } from "react";
import News from "../Sections/News";
import MakeComment from "./MakeComment";

export default function ArticleContent(article: ArticleProps) {
  const [comments, setComments] = useState(article.attributes.comments.data);
  return (
    <div className="xl:grid lg:grid flex flex-col-reverse grid-cols-12">
      <div className="xl:col-span-3 lg:col-span-4 md:col-span-4 col-span-12 flex flex-col">
        <MakeComment
          getComment={(comment) => setComments(comments.concat(comment))}
          id={article.id}
        />

        <News.Comments comments={comments} />
      </div>

      <div className="xl:col-span-9 lg:col-span-8 md:col-span-8 col-span-12 xl:px-40 lg:px-14 px-0">
        <News.Header
          date={article.attributes.createdAt}
          title={article.attributes.title}
        />
        <Markdown content={article.attributes.content} />
      </div>
    </div>
  );
}
