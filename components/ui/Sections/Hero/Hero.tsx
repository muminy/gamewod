import Grid from "components/ui/Grid";
import { HeroSkeleton } from "components/Skeleton/Hero";

// packages
import cn from "classnames";
import Link from "next/link";
import slugify from "slugify";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { lazy, Suspense } from "react";

// base url
import { baseURL } from "services/apis";

// style
import style from "./hero.module.css";
import F from "constants/style";

import { ArticleProps } from "constants/types";
import ArticleBlogs from "./Blogs";

export default function Hero() {
  return (
    <div className={cn(style.section, F.paddingHorizontal)}>
      <Grid.Col className="items-center" cols="grid-cols-12">
        <ArticleBlogs />
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
  );
};
