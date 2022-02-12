import classNames from "classnames";

import STYLE from "constants/style";
import Link from "next/link";
import style from "./style.module.css";

export default function Footer() {
  return (
    <div
      className={classNames(
        "mt-auto flex items-center space-y-4 xl:flex-nowrap lg:flex-nowrap flex-wrap py-4 w-full mx-auto",
        STYLE.paddingHorizontal
      )}
    >
      <div className="font-semibold text-sm w-full text-gray-900 text-opacity-50">
        © 2022 Gamewod{" "}
      </div>

      <div className="flex xl:space-y-0 lg:space-y-0 space-y-2 xl:w-auto lg:w-auto w-full xl:flex-nowrap lg:flex-nowrap flex-wrap justify-between">
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
