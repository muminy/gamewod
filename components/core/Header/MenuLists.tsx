import * as React from "react";
import Link from "next/link";
import Flexible from "components/ui/Flexible/flex";
import classNames from "classnames";
import { menus } from "constants/datas";
import { useRouter } from "next/router";
import style from "./style.module.css";

const MenuList: React.FC = () => {
  return (
    <Flexible
      alignItem="items-center"
      className="hidden space-x-1 xl:flex ml-10 justify-center"
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
  const { asPath } = useRouter();
  return (
    <Link href={props.href}>
      <a
        className={classNames(style.menulink, {
          "!text-gray-900 dark:bg-dark-border dark:!text-white bg-gray-100":
            asPath === props.href,
        })}
      >
        {props.title}
      </a>
    </Link>
  );
};

export default MenuList;
