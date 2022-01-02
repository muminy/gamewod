import Flaticon from "components/ui/Flaticon";
import Flexible from "components/ui/Flexible";
import Grid from "components/ui/Grid";
import {
  BookmarkIconPath,
  CommentIconPath,
  RightArrowPath,
  UpIconPath,
} from "constants/flaticons";
import CustomTitle from "components/ui/Title";

// packages
import Link from "next/link";
import Image from "next/image";
import cn from "classnames";

import style from "./blogs.module.css";

// ** moment js
import moment from "moment";
import "moment/locale/tr";

// store hook
import { useAppSelector } from "store/hooks";
import { ArticleProps } from "constants/types";
import { baseURL } from "services/apis";
import slugify from "slugify";
import { useEffect, useState } from "react";
import { handleGetArticles } from "services/article";
import { get_grid_posts } from "services/filters";
import { BlogSkeleton } from "components/Skeleton/Blog";

export default function BlogSection() {
  const [articles, setArticles] = useState<ArticleProps[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    handleGetArticles({ query: get_grid_posts() }).then((response) => {
      // get grid posts
      setArticles(response.data);
      setLoading(false);
    });
  }, []);

  return (
    <section>
      <CustomTitle morable="/">Son Gelişmeler</CustomTitle>
      <Grid.Col gap="xl:gap-x-10 lg:gap-x-6 gap-x-4 gap-y-5">
        {loading ? (
          <BlogSkeleton />
        ) : (
          articles.map((item) => (
            <Grid.Span
              key={item.id}
              span="xl:col-span-4 lg:col-span-6 md:col-span-6 col-span-12"
            >
              <BlogCard {...item} />
            </Grid.Span>
          ))
        )}
      </Grid.Col>
    </section>
  );
}

export const BlogCard: React.FC<ArticleProps> = (props) => {
  const articleImage = props.attributes.image.data;
  const blurDataURL = "/assets/images/default.webp";

  const slug = slugify(props.attributes.title, {
    replacement: "-",
    lower: true,
  });

  return (
    <Link href={`/article/${props.id}/${slug}`}>
      <a className={style.blogcard}>
        {articleImage ? (
          <Image
            width={500}
            height={350}
            blurDataURL={blurDataURL}
            placeholder="blur"
            className={style.blogImage}
            src={`${baseURL}${articleImage.attributes.formats.medium.url}`}
          />
        ) : (
          <Image
            width={500}
            height={350}
            blurDataURL={blurDataURL}
            placeholder="blur"
            className={style.blogImage}
            src={blurDataURL}
          />
        )}
        <div className={style.date}>
          {moment(props.attributes.createdAt).locale("tr").format("DD MMMM, y")}
        </div>

        <h3 className={style.blogtitle}>{props.attributes.title}</h3>

        <Link href="/">
          <a className="flex items-center text-gray-800 hover:text-black font-medium text-sm">
            <span className="mr-2">Devamını Oku</span>
            <Flaticon paths={RightArrowPath} size={14} />
          </a>
        </Link>

        {/* <Flexible
        className={style.blog_action_panel}
        justifyContent="justify-between"
      >
        <button className="flex items-center group">
          <Flexible
            alignItem="items-center"
            justifyContent="justify-center"
            className={cn(
              style.blog_icon,
              "group-hover:bg-gray-100 group-hover:text-gray-700"
            )}
          >
            <Flaticon paths={UpIconPath} size={20} />
          </Flexible>
          <span className="font-bold text-sm text-gray-600 ml-2">14</span>
        </button>

        <button className="flex items-center group">
          <Flexible
            alignItem="items-center"
            justifyContent="justify-center"
            className={cn(
              style.blog_icon,
              "group-hover:bg-gray-100 group-hover:text-gray-700"
            )}
          >
            <Flaticon paths={CommentIconPath} size={20} />
          </Flexible>
        </button>

        <button className="flex items-center group">
          <Flexible
            alignItem="items-center"
            justifyContent="justify-center"
            className={cn(
              style.blog_icon,
              "group-hover:bg-gray-100 group-hover:text-gray-700"
            )}
          >
            <Flaticon paths={BookmarkIconPath} size={20} />
          </Flexible>
        </button>
      </Flexible> */}
      </a>
    </Link>
  );
};
