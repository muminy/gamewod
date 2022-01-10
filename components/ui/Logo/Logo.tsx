import Flexible from "../Flexible";
import style from "./style.module.css";

export default function LogoSVG({ size }: { size: number }) {
  return (
    <Flexible alignItem="items-center">
      <div className={style.logo}>
        <span className={style.bg} />
        <span className="z-10 uppercase px-4 dark:text-white text-gray-900 dark:text-opacity-90 text-opacity-60">
          Gamewod
        </span>
      </div>
    </Flexible>
  );
}
