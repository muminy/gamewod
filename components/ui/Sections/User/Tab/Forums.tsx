import cn from "classnames";
import Flexible from "components/ui/Flexible";
import Grid from "components/ui/Grid";
import style from "../style.module.css";

export default function Forums() {
  return (
    <div className="xl:w-4/6 lg:w-4/6  mx-auto">
      <Grid.Col>
        <ForumCard />
        <ForumCard />
        <ForumCard />
        <ForumCard />
        <ForumCard />
      </Grid.Col>
    </div>
  );
}

export const ForumCard = () => {
  return (
    <Grid.Span
      span="xl:col-span-6 lg:col-span-6 col-span-12"
      className="rounded-md border p-3"
    >
      <div className="font-medium">
        İşçilerde 5 sene okul okuyup 1-2 sene KPSS çalışıp memur olabilir. Hatta
        herkes okusun işçi kesimi ortadan yok edelim.
      </div>
      <div className="text-sm text-gray-400">10 Yorum</div>
    </Grid.Span>
  );
};
