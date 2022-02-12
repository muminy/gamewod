import { RandomAvatar } from "components/ui/avatar/Avatar";
import Flexible from "components/ui/Flexible";
import moment from "moment";
import style from "./style.module.css";

export interface Props {
  comment: string;
  name: string;
  date: string;
  id: number;
}

export default function CommentCard(props: Props) {
  return (
    <div className="w-full duration-300 last:mb-0 bg-white dark:bg-black rounded-xl mb-1 p-3">
      <div className="flex mb-3 items-center space-x-2 w-full">
        <RandomAvatar id={props.id % 8} size={40} />
        {/* <img
            className={style.comment_user_icon}
            src="https://cdn.dribbble.com/users/143278/avatars/small/36a8ff027484f04de5fae18449830a9f.png?1634790221"
          /> */}

        <div>
          <Flexible alignItem="items-center">
            <div className={style.comment_user}>{props.name}</div>
            {/* <div className={style.comment_username}>@mmnyldrm</div> */}
          </Flexible>
          <div className={style.comment_date}>
            {moment(props.date).format("DD MMMM, y")}
          </div>
        </div>
      </div>

      <div className="bg-gray-100 dark:bg-dark-border rounded-xl p-3">
        <div className={style.comment_text}>{props.comment}</div>
      </div>
    </div>
  );
}
