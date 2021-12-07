import style from "./style.module.css";
import Flexible from "components/ui/Flexible";
import Flaticon from "components/ui/Flaticon";
import { UpIconPath } from "constants/flaticons";

export default function Comment() {
  return (
    <Flexible>
      <div className="w-[32px] flex flex-col items-center">
        <img
          className={style.comment_user_icon}
          src="https://cdn.dribbble.com/users/143278/avatars/small/36a8ff027484f04de5fae18449830a9f.png?1634790221"
        />
        <div className={style.up_btn}>
          <Flaticon paths={UpIconPath} size={15} />
        </div>
      </div>
    </Flexible>
  );
}
