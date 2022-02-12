import LogoIcon from "../icons/Logo.icon";
import style from "./style.module.css";

export default function LogoSVG({ size = 38 }: { size?: number }) {
  return (
    <div className={style.logo}>
      <LogoIcon className="rounded-md" size={size} />
    </div>
  );
}

export const LetterLogo = () => {
  return <div className={style.gw}>GW</div>;
};
