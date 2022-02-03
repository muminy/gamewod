import { IClip } from "constants/types";
import Link from "next/link";
import slugify from "slugify";

import style from "./style.module.css";

export default function ClipCard(props: IClip) {
  const slug = slugify(props.title, { replacement: "-", lower: true });

  return (
    <Link href={`/clip/${props.id}/${slug}`}>
      <a className={style.card}>
        <img
          src={props.detail.thumbnail_url}
          className="w-full object-cover xl:h-[600px] lg:h-[400px] h-[240px]"
        />

        <div className={style.shadow}>
          <div className="text-white font-medium text-lg">{props.title}</div>
          <div className="text-white text-sm text-opacity-60">
            {props.username}
          </div>
        </div>

        <div className={style.time}>{props.detail.duration}</div>
      </a>
    </Link>
  );
}
