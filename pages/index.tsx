import type { NextPage, GetServerSideProps } from "next";
import { useEffect } from "react";

// ** components
import Grid from "components/ui/Grid";
import BlogSection from "components/ui/Sections/Blogs";
import Hero from "components/ui/Sections/Hero";
import Forums from "components/ui/Sections/Forums";
import STYLE from "constants/style";

// node packages
import classNames from "classnames";
import qs from "qs";

// api
import { handleGetArticles } from "services/article";
import { get_grid_posts } from "services/filters";
import { useDispatch } from "react-redux";
import {
  handleAddArticles,
  handleAddGridArticles,
} from "store/actions/articles";
import { ArticleProps } from "constants/types";
import Layout from "components/core/Layout";

interface Props {
  articles: {
    data: ArticleProps[];
  };
  GArticles: {
    data: ArticleProps[];
  };
}

const Home: NextPage<Props> = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(handleAddArticles(props.articles.data));
    dispatch(handleAddGridArticles(props.GArticles.data));
  }, [dispatch]);

  return (
    <Layout className="relative">
      <Hero />
      {/* <TeamSection /> */}

      <Grid.Col
        gap="gap-y-10 xl:gap-x-10 lg:gap-x-6 gap-x-4"
        className={classNames(STYLE.paddingHorizontal, "mb-10")}
      >
        {/* <Grid.Span span="2xl:col-span-3 xl:col-span-4 col-span-12">
          <Livescore />
        </Grid.Span> */}
        <Grid.Span span="2xl:col-span-8 xl:col-span-8 col-span-12">
          <BlogSection />
        </Grid.Span>
        <Grid.Span span="2xl:col-span-4 xl:col-span-12 col-span-12">
          <Forums />
        </Grid.Span>
      </Grid.Col>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  // ...
  const articles = await handleGetArticles({ query: get_grid_posts() });
  const gridArticles = await handleGetArticles({ query: get_grid_posts(true) });

  return {
    props: {
      articles,
      GArticles: gridArticles,
    },
  };
};

export default Home;
