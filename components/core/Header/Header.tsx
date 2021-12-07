import * as React from "react";
import Flexible from "components/ui/Flexible";
import style from "./style.module.css";
import MenuList from "./MenuLists";

// ** components
import Button, { WalletButton } from "components/ui/button/Button";
import Avatar from "components/ui/avatar";
import Flaticon from "components/ui/Flaticon";
import { BellFilledPaths, CrownFilledPaths } from "constants/flaticons";
import classNames from "classnames";
import F from "constants/style";
import Link from "next/link";

const Header: React.FC = (props) => {
  return (
    <div className={classNames(style.header, F.paddingHorizontal)}>
      <Flexible
        justifyContent="justify-between"
        alignItem="items-center"
        className="w-full space-x-10"
      >
        <Flexible className="w-full" alignItem="items-center">
          <Link href="/">
            <a className="font-medium text-gray-900 text-xl">
              <span className="font-black">Game</span>wod
            </a>
          </Link>
        </Flexible>

        <Flexible alignItem="items-center">
          <MenuList />
          <Button
            color="icon"
            className="min-w-[40px] hover:bg-gray-200 flex items-center justify-center"
          >
            <Flaticon paths={CrownFilledPaths} size={16} />
          </Button>
          <Button
            color="icon"
            className="min-w-[40px] ml-1 hover:bg-gray-200 flex items-center justify-center"
          >
            <Flaticon paths={BellFilledPaths} size={16} />
          </Button>
          <WalletButton className="ml-2 hidden xl:block lg:block">
            Connect Wallet
          </WalletButton>
          {/* <button className="border h-10 w-10 text-gray-600 dark:border-darkBorder dark:text-darkText dark:hover:text-white center-center rounded-full mr-4">
            <Flaticon color="currentColor" size={14} paths={Sun} />
          </button> */}
          <Avatar
            className="xl:ml-5 lg:ml-5 ml-2"
            imageURL="https://cdn.dribbble.com/users/257709/avatars/small/c55d07ba8357667826532348f89a28f4.png?1614072057"
          />
        </Flexible>
      </Flexible>
    </div>
  );
};

export default Header;
