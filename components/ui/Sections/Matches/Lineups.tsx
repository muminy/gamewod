import Flexible from "components/ui/Flexible";
import { FC } from "react";
import style from "./style.module.css";

export default function Lineups() {
  return (
    <Flexible>
      <div className={style.team_lineup}>
        <Player
          name="alex"
          image="https://img-cdn.hltv.org/playerbodyshot/uM6PqVJy_HLLMHzR5_HWjy.png?bg=3e4c54&h=200&ixlib=java-2.1.0&rect=124%2C8%2C463%2C463&w=200&s=f2ef29d005dd78433a0c0066d657dcd9"
        />
      </div>
    </Flexible>
  );
}

// ** player props
export interface PlayerProps {
  name: string;
  image: string;
}

export const Player: FC<PlayerProps> = (props) => {
  return (
    <Flexible alignItem="items-center">
      <div className={style.p_image_cover}>
        <img className={style.player_image} src={props.image} />
      </div>
    </Flexible>
  );
};
