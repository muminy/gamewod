import Flexible from "components/ui/Flexible";
import { clipmenu } from "constants/datas";
import Link from "next/link";

import style from "./style.module.css";

interface IProps {
  title: string;
  time: string;
  verified: boolean;
  username: string;
  image: string;
  id: string;
}

export default function ClipCard(props: IProps) {
  return (
    <Link href={"/clip/id/asd"}>
      <a className={style.card}>
        <img src={props.image} className="w-full object-cover h-[600px]" />

        <div className={style.shadow}>
          <div className="text-white font-medium text-lg">{props.title}</div>
          <div className="text-white text-sm text-opacity-60">
            {props.username}
          </div>
        </div>

        <div className={style.time}>{props.time}</div>
      </a>
    </Link>
  );
}
