import Flexible from "components/ui/Flexible";
import { FC } from "react";
import style from "./style.module.css";

export default function Maps() {
  return (
    <div className="mb-2 border rounded-md w-full py-3 px-4">
      <div className="mb-1 font-semibold">Maps</div>
      <Mapcard
        name="Ancient"
        image="https://pbs.twimg.com/media/E0fzbvWX0AUnNZg.jpg"
      />

      <Mapcard
        name="Dust 2"
        image="https://upload.wikimedia.org/wikipedia/en/3/3e/Csgo_dust2.jpg"
      />

      <Mapcard
        name="Inferno"
        image="https://cdn.cloudflare.steamstatic.com/apps/csgo/images/inferno/mid1-2.jpg?v=1"
      />
    </div>
  );
}

// ** player props
export interface PlayerProps {
  name: string;
  image: string;
}

export const Mapcard: FC<PlayerProps> = (props) => {
  return (
    <Flexible className={style.maps}>
      <div className={style.map_image_area}>
        <img className={style.map_image} src={props.image} />
      </div>

      <div className={style.map_info}>{props.name}</div>
    </Flexible>
  );
};
