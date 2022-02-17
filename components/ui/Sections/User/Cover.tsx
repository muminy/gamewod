import Flaticon from "components/ui/Flaticon";
import Flexible from "components/ui/Flexible";
import SocialLinks from "components/ui/SocialLinks";
import { HeartFilledIconPath } from "constants/flaticons";
import { IUser } from "constants/types";
import userRank from "helpers/levelnames";
import style from "./style.module.css";

export default function Cover(props: IUser) {
  return (
    <Flexible className="flex-col mb-10" alignItem="items-center">
      <div className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
        {props.name}
      </div>
      <div className={style.username}>@{props.username}</div>
      <div>{props.bio || "Henü bio eklemedi"}</div>

      <Flexible alignItem="items-center" className="mt-6 space-x-2">
        {Object.keys(props.socials).map((item) => (
          <SocialLinks key={item} value={props.socials[item]} id={item} />
        ))}

        <Flexible
          alignItem="items-center"
          className=" px-5 py-2 dark:text-gray-300 dark:border-dark-border border h-[40px] text-sm rounded-full font-medium leading-[18px]"
        >
          {userRank(props.level)}
        </Flexible>

        <Flexible
          alignItem="items-center"
          className="space-x-2 border dark:border-dark-border px-5 h-[40px] text-sm rounded-full leading-[18px]"
        >
          <div className="font-medium mt-0.5 dark:text-gray-300">
            {props.point}
          </div>
          <div className="text-red-500">
            <Flaticon paths={HeartFilledIconPath} />
          </div>
        </Flexible>
      </Flexible>
    </Flexible>
  );
}
