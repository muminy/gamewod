import classNames from "classnames";
import { NextPageContext } from "next";

// ** components
import Layout from "components/core/Layout";
import Grid from "components/ui/Grid";
import STYLE from "constants/style";
import CategoryHeader from "components/ui/Category/Header";
import NoData from "components/ui/NoData";
import NotFound from "components/ui/NotFound";
import { BlogCard } from "components/ui/Sections/Blogs/Blogs";

import { menus } from "constants/datas";
import { ArticleProps, ICategory, MenuCategoryProps } from "constants/types";
import { category_posts } from "services/article/config";
import { ApiInstance } from "services/apis";

interface IProps {
  category: MenuCategoryProps;
  posts: ICategory[];
}

export default function Category({ category, posts }: IProps) {
  // ** if not founded category or posts
  // ** return not found component
  if (!category || !posts) return <NotFound />;

  return (
    <Layout
      seo={{
        title: `${category?.title} | Gamewod.com`,
        description: `${category?.title} Alanındaki son gelişmeler`,
      }}
    >
      <CategoryHeader {...category} />

      {posts.length === 0 && (
        <div className={STYLE.paddingHorizontal}>
          <NoData title="Bu Kategoriye Ait Paylaşım Bulunamadı" />
        </div>
      )}

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
    </Layout>
  );
}

interface InitialProps extends NextPageContext {
  query: {
    slug: string;
  };
}

Category.getInitialProps = async (context: InitialProps) => {
  try {
    const category = menus.find((item) => item.id === context.query?.slug);
    const apipath = category_posts(category?.title);
    const posts = await ApiInstance.get(apipath);

    return {
      posts: posts.data.data,
      category,
    };
  } catch (e) {
    return {
      posts: null,
      category: null,
    };
  }
};
