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

// packages
import slugify from "slugify";
import useSWR from "swr";

import { ArticleProps } from "constants/types";
import { baseURL } from "services/apis";
import { blog_posts } from "services/article/config";
import { fetcher } from "lib/fetcher";
import { BlogSkeleton } from "components/Skeleton/Blog";

export default function BlogSection() {
  const { data: articles, error } = useSWR(blog_posts, fetcher);

  if (error) {
    return <div>Lütfen bunu bize bildiriniz</div>;
  }

  return (
    <section>
      <CustomTitle morable="/">Son Gelişmeler</CustomTitle>
      <Grid.Col gap="xl:gap-x-10 lg:gap-x-6 gap-x-4 gap-y-5">
        {!articles ? (
          <BlogSkeleton />
        ) : (
          articles.data.map((item: ArticleProps) => (
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
    <Link href={"/article/[id]/[slug]"} as={`/article/${props.id}/${slug}`}>
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

        <div className="flex items-center text-gray-800 hover:text-black font-medium text-sm">
          <span className="mr-2">Devamını Oku</span>
          <Flaticon paths={RightArrowPath} size={14} />
        </div>
      </a>
    </Link>
  );
};
