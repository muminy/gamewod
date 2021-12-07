import Flexible from "components/ui/Flexible";
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

          <div className="mb-4 font-bold text-sm">Toplam 18 Yorum</div>
          <News.Comment comment="Dillinger is currently extended with the following plugins. Instructions on how to use them in your own application are linked below." />
          <News.Comment comment="Dillinger is currently extended with the following plugins. Instructions on how to use them in your own application are linked below." />
          <News.Comment comment="Dillinger is currently extended with the following plugins. Instructions on how to use them in your own application are linked below." />
          <News.Comment comment="Dillinger is currently extended with the following plugins. Instructions on how to use them in your own application are linked below." />
          <News.Comment comment="Dillinger is currently extended with the following plugins. Instructions on how to use them in your own application are linked below." />
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
