import * as React from "react";
import Link from "next/link";
import Flexible from "components/ui/Flexible/flex";
import style from "./style.module.css";
import classNames from "classnames";
import { menus } from "constants/datas";

const MenuList: React.FC = () => {
  return (
    <Flexible
      alignItem="items-center"
      className="hidden xl:flex lg:flex mr-4 col-span-6 justify-center"
    >
      {menus.map((item) => (
        <LinkCard key={item.title} {...item} />
      ))}
    </Flexible>
  );
};

interface LinkProps {
  title: string;
  href: string;
}

export const LinkCard = (props: LinkProps) => {
  return (
    <Link href={props.href}>
      <a
        className={classNames(
          style.menuLink,
          "dark:text-darktext-color dark:hover:text-white"
        )}
      >
        {props.title}
      </a>
    </Link>
  );
};

export default MenuList;
