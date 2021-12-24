import classNames from "classnames";
import Flexible from "components/ui/Flexible";
import { FC } from "react";
import style from "./style.module.css";

export default function Lineups() {
  return (
    <Flexible className="mb-2 border bg-white rounded-md">
      <div className={style.team_lineup}>
        <Player
          name="alex"
          image="https://img-cdn.hltv.org/playerbodyshot/uM6PqVJy_HLLMHzR5_HWjy.png?bg=3e4c54&h=200&ixlib=java-2.1.0&rect=124%2C8%2C463%2C463&w=200&s=f2ef29d005dd78433a0c0066d657dcd9"
        />
        <Player
          name="alex"
          image="https://img-cdn.hltv.org/playerbodyshot/uM6PqVJy_HLLMHzR5_HWjy.png?bg=3e4c54&h=200&ixlib=java-2.1.0&rect=124%2C8%2C463%2C463&w=200&s=f2ef29d005dd78433a0c0066d657dcd9"
        />
        <Player
          name="alex"
          image="https://img-cdn.hltv.org/playerbodyshot/uM6PqVJy_HLLMHzR5_HWjy.png?bg=3e4c54&h=200&ixlib=java-2.1.0&rect=124%2C8%2C463%2C463&w=200&s=f2ef29d005dd78433a0c0066d657dcd9"
        />
        <Player
          name="alex"
          image="https://img-cdn.hltv.org/playerbodyshot/uM6PqVJy_HLLMHzR5_HWjy.png?bg=3e4c54&h=200&ixlib=java-2.1.0&rect=124%2C8%2C463%2C463&w=200&s=f2ef29d005dd78433a0c0066d657dcd9"
        />
      </div>
      <div className={classNames(style.team_lineup, style.away_lu)}>
        <Player
          name="alex"
          image="https://img-cdn.hltv.org/playerbodyshot/uM6PqVJy_HLLMHzR5_HWjy.png?bg=3e4c54&h=200&ixlib=java-2.1.0&rect=124%2C8%2C463%2C463&w=200&s=f2ef29d005dd78433a0c0066d657dcd9"
        />
        <Player
          name="alex"
          image="https://img-cdn.hltv.org/playerbodyshot/uM6PqVJy_HLLMHzR5_HWjy.png?bg=3e4c54&h=200&ixlib=java-2.1.0&rect=124%2C8%2C463%2C463&w=200&s=f2ef29d005dd78433a0c0066d657dcd9"
        />
        <Player
          name="alex"
          image="https://img-cdn.hltv.org/playerbodyshot/uM6PqVJy_HLLMHzR5_HWjy.png?bg=3e4c54&h=200&ixlib=java-2.1.0&rect=124%2C8%2C463%2C463&w=200&s=f2ef29d005dd78433a0c0066d657dcd9"
        />
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
    <Flexible alignItem="items-center" className={style.player}>
      <div className={style.p_image_cover}>
        <img className={style.player_image} src={props.image} />
      </div>
      <div className={style.player_info}>
        <div className="font-semibold text-gray-900">{props.name}</div>
      </div>
    </Flexible>
  );
};
