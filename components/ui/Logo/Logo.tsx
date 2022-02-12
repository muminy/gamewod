import Flexible from "../Flexible";
import LogoIcon from "../icons/Logo.icon";
import style from "./style.module.css";

export default function LogoSVG({ size }: { size: number }) {
  return (
    <Flexible alignItem="items-center">
      <div className={style.logo}>
        <LogoIcon className="rounded-md" size={38} />
      </div>
    </Flexible>
  );
}

export const LetterLogo = () => {
  return <div className={style.gw}>GW</div>;
};
