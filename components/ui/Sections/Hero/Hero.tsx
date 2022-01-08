import Grid from "components/ui/Grid";
import F from "constants/style";

// packages
import cn from "classnames";
import Link from "next/link";

// base url
import { baseURL } from "services/apis";

// style
import style from "./hero.module.css";

// packages
import slugify from "slugify";
import useSWR from "swr";
import { motion } from "framer-motion";

import { ArticleProps } from "constants/types";
import { HeroSkeleton } from "components/Skeleton/Hero";
import { grid_posts } from "services/article/config";
import { fetcher } from "lib/fetcher";

export default function Hero() {
  const { data: articles, error } = useSWR(grid_posts, fetcher);

  if (error) {
    return <div>Lütfen bunu bize bildiriniz</div>;
  }

  return (
    <div className={cn(style.section, F.paddingHorizontal)}>
      <Grid.Col cols="grid-cols-12">
        {articles ? (
          articles.data.map((item: ArticleProps) => (
            <ArticleCard {...item} key={item.id} />
          ))
        ) : (
          <HeroSkeleton />
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
      <Link href={"/article/[id]/[slug]"} as={`/article/${props.id}/${slug}`}>
        <motion.a
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
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
        </motion.a>
      </Link>
    </Grid.Span>
  );
};
