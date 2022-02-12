import NotFound from "components/ui/NotFound";
import Grid from "components/ui/Grid";
import { ArticleCard } from "./Hero";

import useSWR from "swr";
import style from "./hero.module.css";

import { grid_posts } from "services/article/config";
import { fetcher } from "lib/fetcher";
import { ArticleProps } from "constants/types";
import { HeroSkeleton } from "components/Skeleton/Hero";

export default function Blogs() {
  const { data: articles, error } = useSWR(grid_posts, fetcher);

  if (error) return <NotFound />;
  if (!articles) return <HeroSkeleton />;

  return articles.data.map((item: ArticleProps) => (
    <Grid.Span key={item.id} span={style.alt_card}>
      <ArticleCard {...item} key={item.id} />
    </Grid.Span>
  ));
}
