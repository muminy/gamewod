import classNames from "classnames";
import Flaticon from "components/ui/Flaticon";
import Flexible from "components/ui/Flexible";
import Grid from "components/ui/Grid";
import {
  DCFilledIconPath,
  IGIconPath,
  MoonIconPath,
  Sun,
  TwitterIconPath,
} from "constants/flaticons";
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
    <div className={classNames("mt-auto mb-8", STYLE.paddingHorizontal)}>
      <div className="border dark:border-dark-border dark:bg-transparent rounded-2xl">
        <Grid.Col
          className={classNames(STYLE.paddingHorizontal, "w-full py-10")}
        >
          <Grid.Span
            className="flex flex-col xl:items-start lg:items-start items-center"
            span="xl:col-span-3 lg:col-span-3 md:col-span-4 col-span-12"
          >
            <div className="font-medium mb-5">Bültene Abone Ol</div>

            <Flexible
              alignItem="items-center"
              className="border dark:border-dark-border rounded-full relative max-w-[300px]"
            >
              <input
                placeholder="aaa@aa.com"
                className="border focus:ring-2 ring-offset-2 outline-none dark:border-dark-border dark:focus:ring-dark-border focus:ring-gray-200 w-full dark:bg-transparent rounded-full h-[50px] px-6"
              />
              <button className="absolute text-sm right-2 px-4 py-2 rounded-full dark:bg-dark-border bg-gray-900 text-white">
                Abone ol
              </button>
            </Flexible>
          </Grid.Span>

          <Grid.Span
            className="flex flex-col xl:items-start lg:items-start items-center"
            span="xl:col-span-3 xl:col-span-3 md:col-span-4 col-span-12"
          >
            <div className="font-medium mb-5">Yararlı Linkler</div>

            <Link href={"/about"}>
              <a className={style.footer_link}>Hakkımızda</a>
            </Link>
            <Link href={"/contact"}>
              <a className={style.footer_link}>İletişim</a>
            </Link>
            <Link href={"/bug"}>
              <a className={style.footer_link}>Bug Bildir</a>
            </Link>
            <Link href={"/privacy-policy"}>
              <a className={style.footer_link}>Gizlilik Politikası</a>
            </Link>
          </Grid.Span>

          <Grid.Span
            span="xl:col-span-3 lg:col-span-3 md:col-span-4 col-span-12"
            className="flex flex-col xl:items-start lg:items-start items-center"
          >
            <div className="font-medium mb-5">Aramıza Katılın</div>

            <Link href={"/"}>
              <a className={style.footer_link}>Twitter</a>
            </Link>
            <Link href={"/"}>
              <a className={style.footer_link}>Instagram</a>
            </Link>
            <Link href={"/"}>
              <a className={style.footer_link}>Facebook</a>
            </Link>
          </Grid.Span>

          <Grid.Span
            className="flex flex-col xl:items-start lg:items-start items-center"
            span="xl:col-span-3 lg:col-span-3 md:col-span-4 col-span-12"
          >
            <Flexible alignItem="items-center" className="space-x-2">
              <button
                className={"dark:text-dark-borderlight text-gray-900"}
                onClick={() => toggleTheme("light")}
              >
                <Flaticon viewBox="0 0 32 32" size={32} paths={Sun} />
              </button>
              <span className="text-gray-300">/</span>
              <button
                className={"dark:text-white text-gray-300"}
                onClick={() => toggleTheme("dark")}
              >
                <Flaticon viewBox="0 0 32 32" size={32} paths={MoonIconPath} />
              </button>
            </Flexible>
          </Grid.Span>
        </Grid.Col>
      </div>

      {/* <div className={classNames(STYLE.paddingHorizontal, "border-t py-3")}>
        © Gamewod.com Tüm hakları saklıdır
      </div> */}
    </div>
  );
}
