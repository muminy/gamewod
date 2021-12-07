import cn from "classnames";
import Flaticon from "components/ui/Flaticon";
import Flexible from "components/ui/Flexible";
import Grid from "components/ui/Grid";
import {
  BookmarkIconPath,
  CommentIconPath,
  RightArrowPath,
  UpIconPath,
} from "constants/flaticons";
import Link from "next/link";

import style from "./blogs.module.css";
import blogs from "./db.json";

// ** moment js
import moment from "moment";
import "moment/locale/tr";
import CustomTitle from "components/ui/Title";

export interface BlogProps {
  title: string;
  description: string;
  date: string;
  image: string;
  id: string;
}

export default function BlogSection() {
  return (
    <section>
      <CustomTitle morable="/">Son Gelişmeler</CustomTitle>
      <Grid.Col gap="xl:gap-x-10 lg:gap-x-6 gap-x-4 gap-y-5">
        {blogs.map((item) => (
          <Grid.Span
            key={item.id}
            span="xl:col-span-6 lg:col-span-6 col-span-12"
          >
            <BlogCard {...item} />
          </Grid.Span>
        ))}
      </Grid.Col>
    </section>
  );
}

export const BlogCard: React.FC<BlogProps> = (props) => {
  return (
    <div className={style.blogcard}>
      <img className={style.blogImage} src={props.image} />
      <div className={style.date}>
        {moment(props.date).locale("tr").format("D MMMM, y")}
      </div>

      <h3 className={style.blogtitle}>{props.title}</h3>

      <Link href="/">
        <a className="flex items-center text-gray-800 hover:text-black font-medium text-sm">
          <span className="mr-2">Devamını Oku</span>
          <Flaticon paths={RightArrowPath} size={14} />
        </a>
      </Link>

      <Flexible
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
      </Flexible>
    </div>
  );
};
