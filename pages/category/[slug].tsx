import classNames from "classnames";
import { GetStaticPropsContext } from "next";

// ** components
import Layout from "components/core/Layout";
import Grid from "components/ui/Grid";
import STYLE from "constants/style";
import CategoryHeader from "components/ui/Category/Header";
import NoData from "components/ui/NoData";
import { BlogCard } from "components/ui/Sections/Blogs/Blogs";

import { menus } from "constants/datas";
import { ArticleProps, ICategory, MenuCategoryProps } from "constants/types";
import { category_posts } from "services/article/config";
import { ApiInstance } from "services/apis";
import { useRouter } from "next/router";
import { ArticleSkeleton } from "components/Skeleton/Article";

interface IProps {
  category: MenuCategoryProps;
  posts: ICategory[];
}

export default function Category(props: IProps) {
  const { category, posts } = props;
  const router = useRouter();

  const title = `${category?.title} | Gamewod.com`;
  const description = `${category?.title} Alanındaki son gelişmeler`;

  return (
    <Layout seo={{ title, description }}>
      <CategoryHeader {...category} />

      <Grid.Col
        cols="2xl:grid-cols-5 xl:grid-cols-6 grid-cols-6"
        className={classNames(STYLE.paddingHorizontal, "xl:gap-x-10")}
      >
        {router.isFallback ? (
          <ArticleSkeleton />
        ) : posts.length === 0 ? (
          <Grid.Span span={"col-span-12"}>
            <NoData title="Bu Kategoriye Ait Paylaşım Bulunamadı" />
          </Grid.Span>
        ) : (
          posts.map((item: ICategory) =>
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
          )
        )}
      </Grid.Col>
    </Layout>
  );
}

export async function getStaticProps(context: GetStaticPropsContext) {
  try {
    const category = menus.find((item) => item.id === context.params?.slug);
    const apipath = category_posts(category?.title);
    const posts = await ApiInstance.get(apipath);

    return {
      props: { posts: posts.data.data, category },
      revalidate: 1,
    };
  } catch (e) {
    return {
      notFound: true,
    };
  }
}

export async function getStaticPaths() {
  return {
    paths: menus.map((item) => ({ params: { slug: item.id } })),
    fallback: true,
  };
}
