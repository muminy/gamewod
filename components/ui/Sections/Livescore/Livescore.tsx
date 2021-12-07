import cn from "classnames";
import Flexible from "components/ui/Flexible";
import CustomTitle from "components/ui/Title";
import matches from "./db.json";
import style from "./livescore.module.css";

export interface TeamProps {
  name: string;
  logoURL: string;
  score: number;
}

export interface EventProps {
  time: string;
  name: string;
}

export interface MatchContainerProps {
  home_team: TeamProps;
  away_team: TeamProps;
  event: EventProps;
}

export default function Livescore() {
  return (
    <div>
      <CustomTitle morable="/">Günün Maçları</CustomTitle>
      {matches.map((item) => (
        <MatchContainer
          key={`${item.away_team.name}_${item.home_team.name}`}
          {...item}
        />
      ))}
    </div>
  );
}

export const MatchContainer: React.FC<MatchContainerProps> = (props) => {
  return (
    <div className={style.container}>
      <Flexible
        className="mb-2"
        alignItem="items-center"
        justifyContent="justify-between"
      >
        <div className={style.date}>{props.event.time}</div>
        <div className={style.event_name}>{props.event.name}</div>
      </Flexible>
      <Flexible justifyContent="justify-between" alignItem="items-center">
        <div className={style.team}>
          <div className={style.team_logo}>
            <img
              className={style.team_logo}
              src={props.home_team.logoURL}
            />
          </div>
          <div className={cn(style.team_name, "ml-3")}>
            {props.home_team.name}
          </div>
        </div>
        <div className={style.team}>
          <div className={cn(style.team_name, "mr-3")}>
            {props.away_team.name}
          </div>
          <div className={style.team_logo}>
            <img
              className={style.team_logo}
              src={props.away_team.logoURL}
            />
          </div>
        </div>
      </Flexible>
    </div>
  );
};
