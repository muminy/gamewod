import * as React from "react";
import Link from "next/link";
import Flexible from "components/ui/Flexible/flex";
import style from "./style.module.css";
import classNames from "classnames";

const menus = [
  {
    title: "CS:GO",
  },
  {
    title: "Valorant",
  },
  {
    title: "Pubg",
  },
  {
    title: "Röportaj",
  },
  {
    title: "Turnuvalar",
  },
  {
    title: "Gelecek Güncellemeler",
  },
];

const MenuList: React.FC = () => {
  return (
    <Flexible alignItem="items-center" className="hidden xl:flex lg:flex">
      {menus.map((item) => (
        <Link key={item.title} href="/">
          <a
            className={classNames(
              style.menuLink,
              "dark:text-[#ffffff80] dark:hover:text-white"
            )}
          >
            {item.title}
          </a>
        </Link>
      ))}
    </Flexible>
  );
};

export default MenuList;
