import style from "./style.module.css";
import Flexible from "components/ui/Flexible";
import Flaticon from "components/ui/Flaticon";
import { UpIconPath } from "constants/flaticons";

export interface Props {
  comment: string;
}

export default function Comment(props: Props) {
  return (
    <Flexible className="w-full mb-2 hover:border-gray-900 duration-300 border-2 border-b-4 border-r-4 shadow-sm rounded-xl p-3">
      <div className="flex flex-col items-center">
        <img
          className={style.comment_user_icon}
          src="https://cdn.dribbble.com/users/143278/avatars/small/36a8ff027484f04de5fae18449830a9f.png?1634790221"
        />
        <div className={style.up_vote}>
          <Flaticon paths={UpIconPath} size={16} />
        </div>
      </div>

      <div className="ml-5">
        <Flexible alignItem="items-center">
          <div className={style.comment_user}>Eren Yardımcı</div>
          <div className={style.comment_username}>@mmnyldrm</div>
        </Flexible>
        <div className={style.comment_date}>10 Haziran 2020</div>
        <div className={style.comment_text}>{props.comment}</div>
      </div>
    </Flexible>
  );
}
