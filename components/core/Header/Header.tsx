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
  SearchIconPath,
} from "constants/flaticons";
import classNames from "classnames";
import F from "constants/style";
import Link from "next/link";
import ResponsiveMenu from "./ResponsiveMenu";
import { useAppSelector } from "store/hooks";
import { HeaderSkeleton } from "components/Skeleton/Header";
import Dropdown from "./Dropdown";
import Logo from "components/ui/Logo";

const Header: React.FC = (props) => {
  const [open, setOpen] = React.useState(false);

  const toggle = () => setOpen(!open);

  const user = useAppSelector((state) => state.user);

  return (
    <div className={classNames(style.header, F.paddingHorizontal)}>
      <div className="grid grid-cols-12 w-full space-x-4">
        <Flexible className="mr-auto col-span-3" alignItem="items-center">
          <Link href="/">
            <a className="font-bold text-gray-900 text-2xl">
              <Logo size={18} />
            </a>
          </Link>
        </Flexible>

        <MenuList />

        {user.loading ? (
          <HeaderSkeleton />
        ) : user.user ? (
          <Flexible
            alignItem="items-center"
            className="space-x-2 ml-2 col-span-3 justify-end"
          >
            {" "}
            <Button
              color="icon"
              className="min-w-[40px] border items-center justify-center hidden xl:flex lg:flex"
            >
              <Flaticon
                paths={SearchIconPath}
                viewBox="0 0 511.786 511.786"
                size={14}
              />
            </Button>
            <Button
              color="icon"
              className="min-w-[40px] border items-center justify-center hidden xl:flex lg:flex"
            >
              <Flaticon paths={CrownFilledPaths} size={14} />
            </Button>
            <Button
              color="icon"
              className="min-w-[40px] border items-center justify-center hidden xl:flex lg:flex"
            >
              <Flaticon paths={BellFilledPaths} size={14} />
            </Button>
            <Link href={"/forum/new"}>
              <a className="rounded-full flex items-center px-6 h-[40px] dark:border-dark-border dark:hover:bg-dark-borderlight !dark:text-darktext-color hover:border-gray-300 border whitespace-nowrap font-medium text-sm">
                Forum Aç
              </a>
            </Link>
            <button className={style.avatarDD}>
              <Avatar imageURL="https://cdn.dribbble.com/users/14190/avatars/small/b268425ca6ef849dc03cf2723a44a16f.png?1414231950" />

              <Dropdown />
            </button>
          </Flexible>
        ) : (
          <Flexible
            className="xl:flex lg:flex hidden space-x-3 col-span-3 "
            alignItem="items-center"
          >
            <span className="w-[1px] h-6 bg-gray-200 block" />
            <Link href="/login">
              <a className="whitespace-nowrap text-sm font-medium">Giriş yap</a>
            </Link>
            <Link href="/signup">
              <a className="hidden hover:bg-opacity-90 xl:block lg:block bg-darkcolor text-white whitespace-nowrap px-4 text-sm font-medium py-2 rounded-md">
                Kayıt ol
              </a>
            </Link>
          </Flexible>
        )}

        <Button
          color="icon"
          onClick={toggle}
          className="min-w-[40px] border ml-2 items-center justify-center flex xl:hidden lg:hidden"
        >
          <Flaticon paths={MenuIconPath} viewBox="0 0 512 512" size={14} />
        </Button>

        <ResponsiveMenu open={open} toggle={toggle} />
      </div>
    </div>
  );
};

export default Header;
