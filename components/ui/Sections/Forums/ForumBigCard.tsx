// ** style
import Flexible from "components/ui/Flexible";
import { IForum } from "constants/types";
import { makeProfileImageURL } from "helpers/utils";
import moment from "moment";
import Link from "next/link";
import slugify from "slugify";
import style from "./forum.module.css";

export default function ForumBigCard(props: IForum) {
  const slug = slugify(props.title, {
    replacement: "-",
    locale: "tr",
    lower: true,
  });
  return (
    <Link href={`/forum/${props.id}/${slug}`}>
      <a className="flex border-b last:border-b-0 dark:border-dark-border py-4 px-4 items-center space-x-4">
        <div className="w-10">
          <img
            width={24}
            height={24}
            className="w-full h-full rounded-full"
            src={makeProfileImageURL(props.user?.image)}
          />
        </div>

        <div className="space-y-1 w-full">
          <div className="font-semibold text-lg">{props.title}</div>
          <Flexible className="text-sm font-semibold space-x-3 whitespace-nowrap">
            <div className="text-gray-900 dark:text-white dark:text-opacity-80 font-semibold">
              {props.user.name}
            </div>
            <div className={style.fbclighttext}>
              {moment(props.createdAt).local().format("DD MMMM, yy")}
            </div>
            <div className={style.fbclighttext}>
              {props.comments?.length} Cevap
            </div>
          </Flexible>
        </div>

        <div className="ml-auto 2xl:flex hidden">
          {props.comments.slice(0, 5).map((item) => (
            <div
              key={item.id}
              className="w-8 border-4 dark:border-black border-white rounded-full -ml-4 first:-ml-0"
            >
              <img
                className="rounded-xl"
                src={makeProfileImageURL(item.user?.image)}
              />
            </div>
          ))}
        </div>
      </a>
    </Link>
  );
}
