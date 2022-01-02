import * as React from "react";
import Flexible from "components/ui/Flexible";
import style from "./style.module.css";
import MenuList from "./MenuLists";

// ** components
import Button, { WalletButton } from "components/ui/button/Button";
import Avatar from "components/ui/avatar";
import Flaticon from "components/ui/Flaticon";
import {
  BellFilledPaths,
  CrownFilledPaths,
  MenuIconPath,
} from "constants/flaticons";
import classNames from "classnames";
import F from "constants/style";
import Link from "next/link";
import ResponsiveMenu from "./ResponsiveMenu";
import { useAppSelector } from "store/hooks";
import { HeaderSkeleton } from "components/Skeleton/Header";

const Header: React.FC = (props) => {
  const [open, setOpen] = React.useState(false);

  const toggle = () => setOpen(!open);

  const user = useAppSelector((state) => state.user);

  return (
    <div className={classNames(style.header, F.paddingHorizontal)}>
      <Flexible
        justifyContent="justify-between"
        alignItem="items-center"
        className="w-full"
      >
        <Flexible alignItem="items-center">
          <Link href="/">
            <a className="font-black tracking-[10px] uppercase text-gray-900 text-xl">
              <span className="font-black">Game</span>wod
            </a>
          </Link>
        </Flexible>

        <MenuList />

        {user.loading ? (
          <HeaderSkeleton />
        ) : user ? (
          <Flexible alignItem="items-center">
            {/* <Button
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
      </Button> */}

            {/* <button className="border h-10 w-10 text-gray-600 dark:border-darkBorder dark:text-darkText dark:hover:text-white center-center rounded-full mr-4">
        <Flaticon color="currentColor" size={14} paths={Sun} />
      </button> */}
            <Link href={`/user/${user.user?.username}`}>
              <a>
                <Avatar
                  className="xl:ml-5 lg:ml-5 ml-2"
                  imageURL="https://cdn.dribbble.com/users/257709/avatars/small/c55d07ba8357667826532348f89a28f4.png?1614072057"
                />
              </a>
            </Link>

            <button className="block xl:hidden lg:hidden" onClick={toggle}>
              <Flaticon paths={MenuIconPath} viewBox="0 0 512 512" />
            </button>

            <ResponsiveMenu open={open} toggle={toggle} />
          </Flexible>
        ) : (
          <Flexible alignItem="items-center">
            <Link href="/login">
              <a className="whitespace-nowrap text-sm font-medium">Giriş yap</a>
            </Link>
            <Link href="/signup">
              <a className="hidden hover:bg-opacity-90 ml-3 xl:block lg:block bg-darkcolor text-white whitespace-nowrap px-4 text-sm font-medium py-2 rounded-md">
                Kayıt ol
              </a>
            </Link>
          </Flexible>
        )}
      </Flexible>
    </div>
  );
};

export default Header;
