import Flexible from "../Flexible";
import style from "./style.module.css";

export default function LogoSVG({ size }: { size: number }) {
  return (
    <div className={style.logo}>
      <span className={style.bg} />
      <span className="z-10"></span>
    </div>
  );
}
