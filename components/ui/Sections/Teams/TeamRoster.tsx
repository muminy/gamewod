import Flexible from "components/ui/Flexible";
import { PlayerProps } from "./TeamHeader";

// ** styles
import style from "./teams.module.css";

export interface Props {
  players: PlayerProps[];
}

export default function TeamRoster(props: Props) {
  return (
    <div className={style.rosters}>
      {props.players.map((item) => (
        <div
          style={{ backgroundImage: `url(${item.logo})` }}
          className={style.player_area}
          key={item.id}
        >
          <Flexible alignItem="items-center" className={style.blur_area}>
            <img src={item.logo} />
            <div className={style.p_name}>{item.name}</div>
          </Flexible>
        </div>
      ))}
    </div>
  );
}
