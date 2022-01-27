import style from "./sidebar.module.css";
import Link from "next/link";
import Flaticon from "components/ui/Flaticon";
import {
  BellFilledPaths,
  CrownFilledPaths,
  CSGOFilledPaths,
  D2FilledPath,
  PlayFilledPaths,
  ValorantFilledPaths,
} from "constants/flaticons";
import Flexible from "components/ui/Flexible";
import { LinkProps } from "constants/types";
import MenuLink from "./MenuLink";

interface GameProps extends LinkProps {
  viewBox?: string;
  bgColor?: string;
}

const pure_links: LinkProps[] = [
  {
    title: "Gündem",
    href: "/",
    icon: BellFilledPaths,
  },
  {
    title: "Günün Maçları",
    href: "/matches",
    icon: CrownFilledPaths,
  },
  {
    title: "Popüler Clipler",
    href: "/clips",
    icon: PlayFilledPaths,
  },
];

const game_links: GameProps[] = [
  {
    title: "Valorant",
    href: "/",
    icon: ValorantFilledPaths,
    viewBox: "0 0 50 50",
    bgColor: "#000000",
  },
  {
    title: "Dota 2",
    href: "/",
    icon: D2FilledPath,
    viewBox: "0 0 48 48",
    bgColor: "red",
  },
  {
    title: "CS:GO",
    href: "/",
    icon: CSGOFilledPaths,
    viewBox: "0 0 48 48",
    bgColor: "#9CA3AF",
  },
];

export default function Sidebar() {
  return (
    <div className={style.sidebar}>
      <div className="xl:space-y-8 lg:space-y-6 space-y-2">
        {pure_links.map((item) => (
          <MenuLink key={item.href} {...item} />
        ))}
      </div>
    </div>
  );
}
