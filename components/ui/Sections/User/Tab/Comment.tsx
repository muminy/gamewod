import cn from "classnames";
import Flexible from "components/ui/Flexible";
import Grid from "components/ui/Grid";
import style from "../style.module.css";

export default function Comments() {
  return (
    <div className="xl:w-4/6 lg:w-4/6 mx-auto">
      <Grid.Col>
        <CommentCard />
        <CommentCard />
        <CommentCard />
        <CommentCard />
        <CommentCard />
      </Grid.Col>
    </div>
  );
}

export const CommentCard = () => {
  return (
    <Grid.Span
      span="xl:col-span-6 lg:col-span-6 col-span-12"
      className="rounded-md p-1 border"
    >
      <div className="bg-graypink text-gray-700 rounded-md px-3 py-2 mb-2">
        Bence eşitlik olsun hocam memur kesim oturark para kazanıyor işçi kesim
        bedenen niye fark ...
      </div>
      <div className="px-3">
        <div className="font-medium text-gray-300 mb-1">
          {'"'}
          <span className="text-gray-900 px-2">
            İşçilerde 5 sene okul okuyup 1-2 sene KPSS çalışıp memur olabilir.
            Hatta herkes okusun işçi kesimi ortadan yok edelim.
          </span>
          {'"'}
        </div>

        <div className="text-sm text-gray-400">10 Upvote</div>
      </div>
    </Grid.Span>
  );
};
