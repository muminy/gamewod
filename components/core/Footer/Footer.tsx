import classNames from "classnames";

import STYLE from "constants/style";
import { useTheme } from "next-themes";
import Link from "next/link";
import style from "./style.module.css";

export default function Footer() {
  const { setTheme } = useTheme();

  const toggleTheme = (set: "dark" | "light") => {
    setTheme(set);
  };

  return (
    <div
      className={classNames(
        "mt-auto flex items-center space-y-4 xl:flex-nowrap lg:flex-nowrap flex-wrap xl:justify-between lg:justify-between justify-center py-4 w-full mx-auto",
        STYLE.paddingHorizontal
      )}
    >
      <div className="font-semibold text-sm text-gray-900 text-opacity-50">
        © 2022 Gamewod{" "}
      </div>

      <div className="flex space-x-2">
        <Link href={"/bug"}>
          <a className={style.footer_link}>Bug form</a>
        </Link>
        <Link href={"/privacy-policy"}>
          <a className={style.footer_link}>Gizlilik Politikası</a>
        </Link>
        <Link href={"/about"}>
          <a className={style.footer_link}>Hakkımızda</a>
        </Link>
        <Link href={"/contact"}>
          <a className={style.footer_link}>İletişim</a>
        </Link>
      </div>
    </div>
  );
}
