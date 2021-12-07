import cn from "classnames";
import Grid from "components/ui/Grid";
import F from "constants/style";
import style from "./hero.module.css";

export default function Hero() {
  return (
    <div className={cn(style.section, F.paddingHorizontal)}>
      <Grid.Col cols="grid-rows-6 grid-cols-12">
        <Grid.Span span={style.big_card}>
          <div
            style={{
              backgroundImage:
                "url(https://img-cdn.hltv.org/gallerypicture/XBfOS6AGYwaMGkIrnTTMmz.jpg?ixlib=java-2.1.0&m=%2Fm.png&mw=107&mx=20&my=473&w=800&s=43730d33ad316dd6263e07e851b8d829)",
            }}
            className={style.gridContainer}
          >
            <div className="relative">
              <div className={style.title}>
                The Russians' adventure at the last DreamHack event ends in
                the semi-finals.
              </div>
            </div>
          </div>
        </Grid.Span>
        <Grid.Span span={style.alt_card}>
          <div
            style={{
              backgroundImage:
                "url(https://img-cdn.hltv.org/gallerypicture/LsEctROtRzI7bHOHamJG7r.jpg?ixlib=java-2.1.0&m=%2Fm.png&mw=107&mx=20&my=473&w=800&s=adfb18594f238a900700e4e567ae8d3c)",
            }}
            className={style.gridContainer}
          >
            <div className="relative">
              <div className={style.title}>
                The Spaniards live to play another day in Budapest after
                taking.
              </div>
            </div>
          </div>
        </Grid.Span>
        <Grid.Span span={style.alt_card}>
          <div
            style={{
              backgroundImage:
                "url(https://img-cdn.hltv.org/gallerypicture/P_ThMykEfuyiXl-YXlWzZ8.jpg?ixlib=java-2.1.0&w=800&s=4ea6d346dd44b608338ff2fe4df7e2ae)",
            }}
            className={style.gridContainer}
          >
            <div className="relative">
              <div className={style.title}>
                The Spaniards live to play another day in Budapest after
                taking.
              </div>
            </div>
          </div>
        </Grid.Span>
        <Grid.Span span={style.alt_card}>
          <div
            style={{
              backgroundImage:
                "url(https://img-cdn.hltv.org/gallerypicture/UXp_SPswgWsxYz_XyeQefk.jpg?ixlib=java-2.1.0&m=%2Fm.png&mw=107&mx=20&my=473&w=800&s=c76a17b84bb8ab0246a9855738685cd5)",
            }}
            className={style.gridContainer}
          >
            <div className="relative">
              <div className={style.title}>
                The Spaniards live to play another day in Budapest after
                taking.
              </div>
            </div>
          </div>
        </Grid.Span>
        <Grid.Span span={style.alt_card}>
          <div
            style={{
              backgroundImage:
                "url(https://img-cdn.hltv.org/gallerypicture/VpEDfviG-Cl0cy4NO4MDWv.jpg?ixlib=java-2.1.0&m=%2Fm.png&mw=107&mx=20&my=473&w=800&s=68175c17bd54505944cabf0f30b53505)",
            }}
            className={style.gridContainer}
          >
            <div className="relative">
              <div className={style.title}>
                The Spaniards live to play another day in Budapest after
                taking.
              </div>
            </div>
          </div>
        </Grid.Span>
      </Grid.Col>
    </div>
  );
}
