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
import Link from "next/link";
import style from "./style.module.css";

export default function Footer() {
  return (
    <Flexible justifyContent="justify-between" className="p-10 border-t">
      <Grid.Col className="container mx-auto">
        <Grid.Span
          className="flex flex-col xl:items-start lg:items-start items-center"
          span="xl:col-span-3 xl:col-span-3 col-span-12"
        >
          <div className="font-medium mb-5">Bültene Abone Ol</div>

          <Flexible
            alignItem="items-center"
            className="border rounded-full relative max-w-[300px]"
          >
            <input
              placeholder="aaa@aa.com"
              className="border focus:ring-2 ring-offset-2 outline-none ring-gray-200 w-full rounded-full h-[50px] px-6"
            />
            <button className="absolute text-sm right-2 px-4 py-2 rounded-full bg-gray-900 text-white">
              Abone ol
            </button>
          </Flexible>
        </Grid.Span>

        <Grid.Span
          className="flex flex-col xl:items-start lg:items-start items-center"
          span="xl:col-span-3 xl:col-span-3 col-span-12"
        >
          <div className="font-medium mb-5">Yararlı Linkler</div>

          <Link href={"/"}>
            <a className={style.footer_link}>Hakkımızda</a>
          </Link>
          <Link href={"/"}>
            <a className={style.footer_link}>İletişim</a>
          </Link>
          <Link href={"/"}>
            <a className={style.footer_link}>Bug & Görüş bidirimi</a>
          </Link>
        </Grid.Span>

        <Grid.Span
          span="xl:col-span-3 xl:col-span-3 col-span-12"
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
          <Link href={"/"}>
            <a className={style.footer_link}>Telegram</a>
          </Link>
          <Link href={"/"}>
            <a className={style.footer_link}>Discord</a>
          </Link>
        </Grid.Span>

        <Grid.Span
          className="flex flex-col xl:items-start lg:items-start items-center"
          span="xl:col-span-3 xl:col-span-3 col-span-12"
        >
          <Flexible alignItem="items-center" className="space-x-2">
            <button>
              <Flaticon viewBox="0 0 32 32" size={32} paths={Sun} />
            </button>
            <span className="text-gray-300">/</span>
            <button>
              <Flaticon viewBox="0 0 32 32" size={32} paths={MoonIconPath} />
            </button>
          </Flexible>
        </Grid.Span>
      </Grid.Col>
    </Flexible>
  );
}
