import * as React from "react";
import Link from "next/link";
import Flexible from "components/ui/Flexible/flex";
import style from "./style.module.css";
import classNames from "classnames";

const MenuList: React.FC = () => {
  return (
    <Flexible
      alignItem="items-center"
      className="mr-4 hidden xl:flex lg:flex"
    >
      <Link href="/">
        <a
          className={classNames(
            style.menuLink,
            "dark:text-[#ffffff80] dark:hover:text-white"
          )}
        >
          Marketplace
        </a>
      </Link>
      <div className="divider" />
      <Link href="/">
        <a
          className={classNames(
            style.menuLink,
            "dark:text-[#ffffff80] dark:hover:text-white"
          )}
        >
          How its work
        </a>
      </Link>
    </Flexible>
  );
};

export default MenuList;
