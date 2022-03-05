import style from "./style.module.css";

import moment from "moment";
import "moment/locale/tr";

export interface Props {
  title: string;
  date: string;
}

export default function Header(props: Props) {
  return (
    <div className={style.header}>
      <div className={style.title}>{props.title}</div>

      <div className="font-medium text-sm text-gray-600 shadow-text">
        {moment(props.date).format("DD MMMM, y")}
      </div>
    </div>
  );
}
