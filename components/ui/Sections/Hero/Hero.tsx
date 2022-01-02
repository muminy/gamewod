import Grid from "components/ui/Grid";
import F from "constants/style";

// packages
import cn from "classnames";
import Link from "next/link";

// base url
import { baseURL } from "services/apis";

// style
import style from "./hero.module.css";

// store selector
import { ArticleProps } from "constants/types";
import slugify from "slugify";
import { useEffect, useState } from "react";
import { handleGetArticles } from "services/article";
import { get_grid_posts } from "services/filters";
import { HeroSkeleton } from "components/Skeleton/Hero";

export default function Hero() {
  const [articles, setArticles] = useState<ArticleProps[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    handleGetArticles({ query: get_grid_posts(true) }).then((response) => {
      // get grid posts
      setArticles(response.data);
      setLoading(false);
    });
  }, []);

  return (
    <div className={cn(style.section, F.paddingHorizontal)}>
      <Grid.Col cols="grid-cols-12">
        {loading ? (
          <HeroSkeleton />
        ) : (
          articles.map((item) => <ArticleCard {...item} key={item.id} />)
        )}
      </Grid.Col>
    </div>
  );
}

export const ArticleCard = (props: ArticleProps) => {
  const slug = slugify(props.attributes.title, {
    replacement: "-",
    lower: true,
  });

  return (
    <Grid.Span key={props.id} span={style.alt_card}>
      <Link href={`/article/${props.id}/${slug}`}>
        <a
          style={
            props.attributes.image.data
              ? {
                  backgroundImage: `url(${baseURL}${props.attributes.image.data.attributes.formats.medium.url})`,
                }
              : {
                  backgroundImage: "url('/assets/images/default.webp')",
                }
          }
          className={style.gridContainer}
        >
          <div className="relative">
            <div className={style.title}>{props.attributes.title}</div>
          </div>
        </a>
      </Link>
    </Grid.Span>
  );
};
