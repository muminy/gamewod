import classNames from "classnames";
import Layout from "components/core/Layout";
import Grid from "components/ui/Grid";
import TeamTabs from "components/ui/Sections/Teams/Tabs";
import TeamHeader from "components/ui/Sections/Teams/TeamHeader";
import TeamRoster from "components/ui/Sections/Teams/TeamRoster";
import STYLE from "constants/style";

// ** team detail
const tDetail = {
  name: "Natus Vincere",
  logo: "https://img-cdn.hltv.org/teamlogo/yZ6Bpuui1rW3jocXQ68XgZ.svg?ixlib=java-2.1.0&s=f39be1d3e7baf30a4e7f0b1216720875",
  rank: "1",
  country: "Russia",
  social: [
    { name: "Twitter", url: "https://www.twitter.com/natusvincere" },
    {
      name: "Instagram",
      url: "https://www.instagram.com/natus_vincere_official",
    },
  ],
  players: [
    {
      id: "s1mple",
      name: "s1mple",
      logo: "https://static.gosugamers.net/d4/aa/a6/55c16dc502e5d49f452c9fc3789154fb1c0f0c817fa2bf5a6d47f5434d.png?w=80",
    },
    {
      id: "electronic",
      name: "electronic",
      logo: "https://static.gosugamers.net/85/67/c1/6daf789484c24ecb5be5e8b5fed5e8df3e0ea01536b1fab04e1ce334a5.png?w=80",
    },
    {
      id: "Boomble4",
      name: "Boomble4",
      logo: "https://static.gosugamers.net/84/53/2b/acbd51ff3528488cfe8c229280929a411290e35f78dd7b63613c393c5a.png?w=80",
    },
    {
      id: "Perfecto",
      name: "Perfecto",
      logo: "https://static.gosugamers.net/f5/79/70/2ea010f0ede8a644cd4de1852ecd3d7eebc7a1be535d75b633feb6da14.png?w=80",
    },
    {
      id: "B1T",
      name: "B1T",
      logo: "https://static.gosugamers.net/9e/a2/3c/3ea056436d9146895ae682c8c44a64533864d1def5662f1ddf9c88dbed.jpg?w=80",
    },
  ],
};

export default function TeamPage() {
  return (
    <div className={classNames(STYLE.paddingHorizontal)}>
      <TeamHeader {...tDetail} />
      <TeamTabs />
      {/* <Grid.Col>
        <Grid.Span span="col-span-2">
          <TeamRoster players={tDetail.players} />
        </Grid.Span>
      </Grid.Col> */}
    </div>
  );
}
