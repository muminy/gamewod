import Layout from "components/core/Layout";
import { BlogSkeleton } from "components/Skeleton/Blog";
import Grid from "components/ui/Grid";
import { BlogCard } from "components/ui/Sections/Blogs/Blogs";
import { menus } from "constants/datas";
import STYLE from "constants/style";
import {
  ArticleAttributes,
  ArticleProps,
  ICategory,
  MenuCategoryProps,
} from "constants/types";
import { fetcher } from "lib/fetcher";
import { NextPageContext } from "next";
import { category_posts } from "services/article/config";
import useSWR from "swr";
import ErrorFound from "components/ui/Error";
import classNames from "classnames";
import CategoryHeader from "components/ui/Category/Header";
import NoData from "components/ui/NoData";

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

  return (
    <Layout disableContainer>
      <CategoryHeader {...category} />

      <div className={STYLE.paddingHorizontal}>
        {Articles ? (
          Articles.data.length === 0 ? (
            <NoData title="Bu Kategoriye Ait Paylaşım Bulunamadı" />
          ) : (
            <Grid.Col
              cols="2xl:grid-cols-5 xl:grid-cols-6 grid-cols-6"
              className={classNames(STYLE.paddingHorizontal, "xl:gap-x-10")}
            >
              {Articles.data.map((item: ICategory) =>
                item.attributes.posts.data.map((item: ArticleProps) => (
                  <Grid.Span
                    span="2xl:col-span-1 xl:col-span-2 lg:col-span-3 md:col-span-6 col-span-12"
                    key={item.id}
                  >
                    <BlogCard {...item} />
                  </Grid.Span>
                ))
              )}
            </Grid.Col>
          )
        ) : (
          <BlogSkeleton />
        )}
      </div>
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
