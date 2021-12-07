import Flaticon from "components/ui/Flaticon";
import Flexible from "components/ui/Flexible";
import { IGIconPath, TwitterIconPath } from "constants/flaticons";
import style from "./style.module.css";

export default function Footer() {
  return (
    <Flexible justifyContent="justify-between" className="p-10">
      <div></div>
      <div></div>
      <Flexible>
        <button className={style.footer_icon}>
          <Flaticon
            size={24}
            viewBox="0 0 24 24"
            paths={TwitterIconPath}
          />
        </button>

        <button className={style.footer_icon}>
          <Flaticon size={24} viewBox="0 0 24 24" paths={IGIconPath} />
        </button>

        <button className={style.footer_icon}>
          <Flaticon
            size={24}
            viewBox="0 0 24 24"
            paths={TwitterIconPath}
          />
        </button>
      </Flexible>
    </Flexible>
  );
}
