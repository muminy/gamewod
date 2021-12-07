// ** style
import classNames from "classnames";
import Flexible from "components/ui/Flexible";
import Grid from "components/ui/Grid";
import { TabTitle } from ".";
import style from "../teams.module.css";

import Link from "next/link";
import Flaticon from "components/ui/Flaticon";
import { RightArrowPath } from "constants/flaticons";
export default function News() {
  return (
    <div className="py-10">
      <TabTitle>Haberler</TabTitle>

      <Grid.Col>
        <Grid.Span span="col-span-3">
          <NewsCard />
        </Grid.Span>
        <Grid.Span span="col-span-3">
          <NewsCard />
        </Grid.Span>
        <Grid.Span span="col-span-3">
          <NewsCard />
        </Grid.Span>
        <Grid.Span span="col-span-3">
          <NewsCard />
        </Grid.Span>
        <Grid.Span span="col-span-3">
          <NewsCard />
        </Grid.Span>
        <Grid.Span span="col-span-3">
          <NewsCard />
        </Grid.Span>
        <Grid.Span span="col-span-3">
          <NewsCard />
        </Grid.Span>
        <Grid.Span span="col-span-3">
          <NewsCard />
        </Grid.Span>
        <Grid.Span span="col-span-3">
          <NewsCard />
        </Grid.Span>
        <Grid.Span span="col-span-3">
          <NewsCard />
        </Grid.Span>
        <Grid.Span span="col-span-3">
          <NewsCard />
        </Grid.Span>
        <Grid.Span span="col-span-3">
          <NewsCard />
        </Grid.Span>
        <Grid.Span span="col-span-3">
          <NewsCard />
        </Grid.Span>
        <Grid.Span span="col-span-3">
          <NewsCard />
        </Grid.Span>
      </Grid.Col>
    </div>
  );
}

export const NewsCard = () => {
  return (
    <div className={classNames(style.news_card, "group")}>
      <img
        src={
          "https://img-cdn.hltv.org/gallerypicture/h7fgcVZFaVBLhdLKHD4fvl.jpg?ixlib=java-2.1.0&m=%2Fm.png&mw=107&mx=20&my=473&w=800&s=92c6ba6c766207b6dd8a2ed54032b8c4"
        }
      />
      <div className={style.news_title}>
        Gambit take down fnatic after anti-climactic finish to book last
        IEM Winter playoffs spot
      </div>

      <Link href="/news/asd">
        <a className={style.read_more}>
          <span>Devamını Oku</span>
          <Flaticon paths={RightArrowPath} size={14} />
        </a>
      </Link>
    </div>
  );
};
