import * as React from "react";
import Link from "next/link";
import Flexible from "components/ui/Flexible/flex";
import style from "./style.module.css";
import classNames from "classnames";
import { menus } from "constants/datas";
import { useRouter } from "next/router";

const MenuList: React.FC = () => {
  return (
    <Flexible
      alignItem="items-center"
      className="hidden space-x-1 xl:flex lg:flex mr-4 col-span-6 justify-center"
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
        className={classNames(
          style.menuLink,
          "dark:text-darktext-color dark:hover:text-white",
          {
            "bg-gray-100 dark:bg-dark-borderlight dark:!text-gray-300 !text-gray-900":
              asPath === props.href,
          }
        )}
      >
        {props.title}
      </a>
    </Link>
  );
};

export default MenuList;
