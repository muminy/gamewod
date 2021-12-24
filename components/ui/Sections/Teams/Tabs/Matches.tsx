import classNames from "classnames";
import Flaticon from "components/ui/Flaticon";
import Flexible from "components/ui/Flexible";
import { RightArrowPath } from "constants/flaticons";
import { TabTitle } from ".";

// ** style
import style from "../teams.module.css";
export default function Matches() {
  return (
    <div className="py-10">
      <TabTitle>Genel İstatistikler</TabTitle>
      <GeneralStats />

      <TabTitle>Matches</TabTitle>
      <ListOfMatches />
    </div>
  );
}

export const GeneralStats = () => {
  return (
    <Flexible className="space-x-4 mb-10 flex-wrap">
      <div className={style.match_stats_card}>
        <div className={style.m_value}>18</div>
        <div className={style.m_title}>Toplam Maç</div>
      </div>
      <div className={style.match_stats_card}>
        <div className={style.m_value}>14</div>
        <div className={style.m_title}>Wins</div>
      </div>
      <div className={style.match_stats_card}>
        <div className={style.m_value}>4</div>
        <div className={style.m_title}>Loses</div>
      </div>
      <div className={style.match_stats_card}>
        <div className={style.m_value}>5</div>
        <div className={style.m_title}>Current Win Streak</div>
      </div>
      <div className={style.match_stats_card}>
        <div className={style.m_value}>52%</div>
        <div className={style.m_title}>Win Rate</div>
      </div>
      <div className={style.match_stats_card}>
        <div className={style.m_value}>WWWLW</div>
        <div className={style.m_title}>RECENT RESULTS</div>
      </div>
    </Flexible>
  );
};

export const ListOfMatches = () => {
  return (
    <div>
      <MatchCard isFinished={false} />
      <MatchCard isFinished={false} />
      <MatchCard isFinished={true} />
    </div>
  );
};

export interface CardProps {
  isFinished: boolean;
}

export const MatchCard = ({ isFinished }: CardProps) => {
  return (
    <Flexible
      alignItem="items-center"
      justifyContent="justify-between"
      className={classNames(style.match_card, "group")}
    >
      <div className={classNames(style.date, style.hide_div)}>
        19 Aralık, 2020
      </div>

      <Flexible
        justifyContent="justify-between"
        alignItem="items-center"
        className="space-x-10 xl:w-auto lg:w-auto md:w-auto w-full"
      >
        <div className={classNames(style.m_team, "float-right")}>
          Virtus.pro
        </div>

        <Flexible className="space-x-3 max-w-[200px]">
          <div className={style.score}>{isFinished ? 2 : ""}</div>
          <div className={style.vs}>{isFinished ? ":" : "VS"}</div>
          <div
            className={classNames(style.score, {
              [style.losed]: isFinished,
            })}
          >
            {isFinished ? 0 : ""}
          </div>
        </Flexible>

        <div className={classNames(style.m_team, style.losed)}>
          Eternal Fire
        </div>
      </Flexible>

      <Flexible
        className={classNames(
          style.hide_div,
          "text-gray-400 group-hover:text-gray-900"
        )}
        alignItem="items-center"
      >
        <div
          className={classNames(
            style.gotodetail,
            "group-hover:mr-[10px] duration-200 group-hover:text-gray-900"
          )}
        >
          Match
        </div>
        <Flaticon
          className="group-hover:mr-[-2px] duration-200"
          paths={RightArrowPath}
          size={12}
        />
      </Flexible>
    </Flexible>
  );
};
