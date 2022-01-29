import Flexible from "../Flexible";
import style from "./style.module.css";

export default function LogoSVG({ size }: { size: number }) {
  return (
    <Flexible alignItem="items-center">
      <div className={style.logo}>Gamewod</div>
    </Flexible>
  );
}

export const LetterLogo = () => {
  return <div className={style.gw}>GW</div>;
};
