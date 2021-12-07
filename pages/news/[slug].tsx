import News from "components/ui/Sections/News";
import getPosts, { getPostById } from "lib/readMarkdownFiles";
import { GetServerSideProps, GetStaticProps } from "next";
import { Fragment, useEffect } from "react";

export interface Props {
  article: {
    title: string;
    content: string;
  };
}

export default function Article(props: Props) {
  useEffect(() => {
    console.log(props);
  }, []);

  return (
    <div className="max-w-4xl mx-auto">
      {props.article ? (
        <Fragment>
          <News.Header title={props.article.title} />
          <News.Content content={props.article.content} />
          <News.Comment />
        </Fragment>
      ) : null}
      {/*  */}
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const posts = getPostById(1);

  return {
    props: {
      article: posts,
    },
  };
};
