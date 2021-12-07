import classNames from "classnames";
import Flaticon from "components/ui/Flaticon";
import Flexible from "components/ui/Flexible";
import { IGIconPath, TwitterIconPath } from "constants/flaticons";

// ** style
import style from "./teams.module.css";

export interface SocialProps {
  name: string;
  url: string;
}

export interface PlayerProps {
  name: string;
  logo: string;
  id: string;
}

// ** roster props
export interface RosterProps {
  name: string;
  logo: string;
  rank: string;
  country: string;
  social: SocialProps[];
  players: PlayerProps[];
}

export default function TeamHeader(props: RosterProps) {
  return (
    <div className={style.team_roster}>
      <div className={style.header_bg} />

      <Flexible justifyContent="justify-between" className="px-6">
        <Flexible className={style.team_area}>
          <TeamLogo logo={props.logo} />
          <div className={style.team_info}>
            <div className={style.team_country_big}>{props.country}</div>
            <div className={style.team_big_name}>{props.name}</div>
          </div>
        </Flexible>

        <div className={style.team_r_info}>
          <Flexible className="space-x-2" alignItem="items-center">
            <div className={style.team_social_icons}>
              <Flaticon paths={TwitterIconPath} size={20} />
            </div>
            <div className={style.team_social_icons}>
              <Flaticon paths={IGIconPath} size={20} />
            </div>
          </Flexible>
        </div>
      </Flexible>
    </div>
  );
}

export const TeamLogo = ({ logo }: { logo: string }) => (
  <div
    style={{ backgroundImage: `url(${logo})` }}
    className={style.logo_area}
  >
    <div className={style.tlogo_area}>
      <img src={logo} className={classNames(style.rteam_logo)} />
    </div>
  </div>
);
