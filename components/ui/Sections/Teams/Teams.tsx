import style from "./teams.module.css";
import teams from "./db.json";
import Flexible from "components/ui/Flexible";
import CustomTitle from "components/ui/Title";
import classNames from "classnames";
import F from "constants/style";

import Link from "next/link";

export interface TeamProps {
  logo: string;
  name: string;
  id: string;
  country: string;
}

export default function TeamSection() {
  return (
    <section
      className={classNames(style.team_section, F.paddingHorizontal)}
    >
      <CustomTitle morable="/">Popüler Takımlar</CustomTitle>

      <div className="flex items-center space-x-5">
        {teams.map((item) => (
          <TeamCard key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
}

export const TeamCard: React.FC<TeamProps> = (props) => {
  return (
    <Link href={`/team/${props.id}`}>
      <a className={style.team}>
        <div className={style.team_header}>
          <span />
        </div>

        <Flexible alignItem="items-center" className="relative space-x-3">
          <div className={style.team_logo}>
            <img src={props.logo} />
          </div>

          <div className="space-y-2">
            <div className={style.team_name}>{props.name}</div>
            <div className={style.team_country}>{props.country}</div>
          </div>
        </Flexible>
      </a>
    </Link>
  );
};
