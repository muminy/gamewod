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
import { useAppSelector } from "store/hooks";
import { ArticleProps } from "constants/types";
import slugify from "slugify";

export default function Hero() {
  const garticles = useAppSelector((state) => state.articles.grids);

  return (
    <div className={cn(style.section, F.paddingHorizontal)}>
      <Grid.Col cols="grid-cols-12">
        {garticles.map((item) => (
          <ArticleCard {...item} key={item.id} />
        ))}
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
