import Grid from "components/ui/Grid";
import ErrorFound from "components/ui/Error/ErrorFound";
import { HeroSkeleton } from "components/Skeleton/Hero";
import { ArticleCard } from "./Hero";

import useSWR from "swr";
import style from "./hero.module.css";

import { grid_posts } from "services/article/config";
import { fetcher } from "lib/fetcher";
import { ArticleProps } from "constants/types";

export default function Blogs() {
  const { data: articles, error } = useSWR(grid_posts, fetcher);

  if (error) return <ErrorFound />;
  if (!articles) return <HeroSkeleton />;

  return (
    <Grid.Col
      className="items-center"
      gap="xl:gap-1 lg:gap-1 md:gap-1 gap-0"
      cols="grid-cols-12"
    >
      {articles.data.map((item: ArticleProps) => (
        <Grid.Span key={item.id} span={style.alt_card}>
          <ArticleCard {...item} key={item.id} />
        </Grid.Span>
      ))}
    </Grid.Col>
  );
}
