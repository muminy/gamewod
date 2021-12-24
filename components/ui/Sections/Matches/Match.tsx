import Flexible from "components/ui/Flexible";
import { FC } from "react";
import style from "./style.module.css";

// ** Team Props
export interface TeamProps {
  logo: string;
  name: string;
}
export default function MatchCard() {
  return (
    <div className={style.match_card}>
      <Flexible alignItem="items-center" className={style.team_info}>
        <Team
          name="Dignitas"
          logo="https://img-cdn.hltv.org/teamlogo/w2EJ4p_IcYGMu0Cs2G4ZUn.png?ixlib=java-2.1.0&w=100&s=e285954f5def874e2ea44d1547339657"
        />
        <div className={style.versus}>VS</div>
        <Team
          name="Movistar Riders"
          logo="https://img-cdn.hltv.org/teamlogo/Y37ZjhQhf-74eg44YCXe_m.png?ixlib=java-2.1.0&w=100&s=07c7f78adddce9861546f8facb29e5ba"
        />
      </Flexible>
    </div>
  );
}

export const Team: FC<TeamProps> = (props) => {
  return (
    <div className={style.team}>
      <img className={style.team_logo} src={props.logo} />
      <div className={style.team_name}>{props.name}</div>
    </div>
  );
};
