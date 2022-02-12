import { IUser } from "constants/types";
import userRank from "helpers/levelnames";
import { handleSocialLinks, makeProfileImageURL } from "helpers/utils";
import Link from "next/link";
import { ReactNode } from "react";
import TwitterIcon from "../icons/Twitter.icon";
import SocialLinks from "./SocialLinks";

export default function UserCard(props: IUser) {
  return (
    <div>
      <div className="bg-gray-100 dark:bg-dark-border h-40 w-full rounded-xl">
        {props.headerImage && <img alt="user header" src={props.headerImage} />}
      </div>

      <div className="flex space-x-4 mb-4">
        <div className="w-[100px] mb-4 ml-10 h-[100px] border-2 dark:border-black border-white rounded-full overflow-hidden mt-[-40px]">
          <img alt="User profile" src={makeProfileImageURL(props.image)} />
        </div>

        <div className="pt-3">
          <div className="text-xl font-semibold dark:text-white">
            {props.name}
          </div>
          <div className="text-sm text-gray-500 dark:text-darktext-color text-opacity-75 font-semibold">
            @{props.username}
          </div>
        </div>
      </div>

      <div className="2xl:flex block mb-6 2xl:space-x-2 2xl:space-y-0 space-y-2">
        {Object.keys(props.socials || {}).map((item) => (
          <SocialLinks key={item} id={item} value={props.socials[item]} />
        ))}

        <div className="flex font-semibold text-sm items-center space-x-2 bg-green-100 dark:bg-dark-border dark:text-white rounded-xl px-3 py-2">
          Modaratör
        </div>
      </div>

      <div className="mb-4">{props.bio || "Henüz bio eklemedi"}</div>
    </div>
  );
}
