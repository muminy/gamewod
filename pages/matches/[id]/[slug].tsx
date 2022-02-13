import classNames from "classnames";
import Layout from "components/core/Layout";
import Grid from "components/ui/Grid";
import Matches from "components/ui/Sections/Matches";
import STYLE from "constants/style";

export default function Match() {
  return (
    <Layout>
      <div className={classNames(STYLE.paddingHorizontal, "py-4")}>
        <Grid.Col className="py-2">
          <Grid.Span span="xl:block lg:block md:block hidden xl:col-span-3 col-span-5">
            <Matches.Chat />
          </Grid.Span>
          <Grid.Span span="xl:col-span-6 lg:col-span-7 md:col-span-7 col-span-12">
            <Matches.MatchCard />
            <Matches.Maps />
            <Matches.Lineups />
            <Matches.Poll />
          </Grid.Span>
          <Grid.Span span="xl:block lg:block md:block hidden xl:col-span-3 col-span-5">
            <Matches.Chat />
          </Grid.Span>
        </Grid.Col>
      </div>
    </Layout>
  );
}
