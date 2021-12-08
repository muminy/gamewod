import classNames from "classnames";
import Grid from "components/ui/Grid";
import Matches from "components/ui/Sections/Matches";
import STYLE from "constants/style";

export default function Match() {
  return (
    <div className={classNames(STYLE.paddingHorizontal)}>
      <Grid.Col>
        <Grid.Span span="col-span-4">
          <Matches.MatchCard />

          <div className="font-semibold text-lg mb-4">Lineups</div>

          <Matches.Lineups />
        </Grid.Span>
      </Grid.Col>
    </div>
  );
}
