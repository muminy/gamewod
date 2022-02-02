import useSWR from "swr";
import classNames from "classnames";
import { NextPageContext } from "next";

// ** components
import Layout from "components/core/Layout";
import Grid from "components/ui/Grid";
import STYLE from "constants/style";
import ErrorFound from "components/ui/Error";
import CategoryHeader from "components/ui/Category/Header";
import NoData from "components/ui/NoData";

import { ArticleProps, ICategory, MenuCategoryProps } from "constants/types";
import { fetcher } from "lib/fetcher";
import { category_posts } from "services/article/config";
import { BlogSkeleton } from "components/Skeleton/Blog";
import { BlogCard } from "components/ui/Sections/Blogs/Blogs";
import { menus } from "constants/datas";
import { NextSeoProps } from "next-seo";

interface IProps {
  category: null | MenuCategoryProps;
}

export default function Category(props: IProps) {
  const { category } = props;

  const { data: Articles, error } = useSWR(
    category_posts(category?.title),
    fetcher
  );

  if (error) {
    return <ErrorFound />;
  }

  const title = `${category?.title} | Gamewod.com`;
  const description = `${category?.title} Alanındaki son gelişmeler`;

  const seo = category
    ? ({
        openGraph: {
          description,
          title,
        },
        description,
        title,
      } as NextSeoProps)
    : {};

  return (
    <Layout seo={seo}>
      <CategoryHeader {...category} />

      {Articles ? (
        Articles.data.length === 0 ? (
          <div className={STYLE.paddingHorizontal}>
            <NoData title="Bu Kategoriye Ait Paylaşım Bulunamadı" />
          </div>
        ) : (
          <Grid.Col
            cols="2xl:grid-cols-5 xl:grid-cols-6 grid-cols-6"
            className={classNames(STYLE.paddingHorizontal, "xl:gap-x-10")}
          >
            {Articles.data.map((item: ICategory) =>
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
        )
      ) : (
        <Grid.Col>
          <BlogSkeleton />
        </Grid.Col>
      )}
    </Layout>
  );
}

interface InitialProps extends NextPageContext {
  query: {
    slug: string;
  };
}

Category.getInitialProps = async (ctx: InitialProps) => {
  const findCategory = menus.find((item) => item.id === ctx.query.slug);
  return { category: findCategory };
};
