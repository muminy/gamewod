import useSWR from "swr";
import classNames from "classnames";
import { GetServerSidePropsContext, NextPageContext } from "next";

// ** components
import Layout from "components/core/Layout";
import Grid from "components/ui/Grid";
import STYLE from "constants/style";
import CategoryHeader from "components/ui/Category/Header";
import NoData from "components/ui/NoData";
import NotFound from "components/ui/NotFound";

import { BlogSkeleton } from "components/Skeleton/Blog";
import { BlogCard } from "components/ui/Sections/Blogs/Blogs";
import { menus } from "constants/datas";
import { NextSeoProps } from "next-seo";

import {
  ArticleProps,
  ICategory,
  ISeoMeta,
  MenuCategoryProps,
} from "constants/types";
import { fetcher } from "lib/fetcher";
import { category_posts } from "services/article/config";
import { ApiInstance } from "services/apis";

interface IProps {
  category: MenuCategoryProps;
  posts: ICategory[];
}

export default function Category(props: IProps) {
  const { category, posts } = props;

  const title = `${category?.title} | Gamewod.com`;
  const description = `${category?.title} Alanındaki son gelişmeler`;

  return (
    <Layout seo={{ title, description }}>
      <CategoryHeader {...category} />

      {posts.length === 0 && (
        <div className={STYLE.paddingHorizontal}>
          <NoData title="Bu Kategoriye Ait Paylaşım Bulunamadı" />
        </div>
      )}

      {
        <Grid.Col
          cols="2xl:grid-cols-5 xl:grid-cols-6 grid-cols-6"
          className={classNames(STYLE.paddingHorizontal, "xl:gap-x-10")}
        >
          {posts.map((item: ICategory) =>
            item.attributes.posts.data.length === 0 ? (
              <Grid.Span span={"col-span-12"}>
                <NoData title="Bu Kategoriye Ait Paylaşım Bulunamadı" />
              </Grid.Span>
            ) : (
              item.attributes.posts.data.map((item: ArticleProps) => (
                <Grid.Span
                  span="2xl:col-span-1 xl:col-span-2 lg:col-span-3 md:col-span-6 col-span-12"
                  key={item.id}
                >
                  <BlogCard {...item} />
                </Grid.Span>
              ))
            )
          )}
        </Grid.Col>
      }
    </Layout>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  try {
    const category = menus.find((item) => item.id === context.query.slug);
    const apipath = category_posts(category?.title);
    const posts = await ApiInstance.get(apipath);

    return {
      props: { posts: posts.data.data, category }, // will be passed to the page component as props
    };
  } catch (e) {
    return {
      notFound: true,
    };
  }
}
