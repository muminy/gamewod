import Flexible from "../Flexible";
import style from "./style.module.css";

export default function LogoSVG({ size }: { size: number }) {
  return (
    <Flexible alignItem="items-center">
      <div className={style.logo}>
        <span className={style.bg} />
        <div className="z-10 uppercase dark:text-white text-gray-900 dark:text-opacity-90 text-opacity-60">
          <span className="hidden px-4 xl:block lg:block">Gamewod</span>
          <span className="block px-2 xl:hidden lg:hidden">GW</span>
        </div>
      </div>
    </Flexible>
  );
}
