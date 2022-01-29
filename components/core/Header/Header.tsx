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
import { baseURLV2 } from "services/apis";

const Header: React.FC = (props) => {
  const [open, setOpen] = React.useState(false);

  const toggle = () => setOpen(!open);

  const user = useAppSelector((state) => state.user);

  return (
    <div className={classNames(style.header, F.paddingHorizontal)}>
      <div className="xl:grid lg:grid flex grid-cols-12 w-full xl:space-x-4 lg:space-x-4 space-x-2">
        <Flexible className="mr-auto col-span-3" alignItem="items-center">
          <Link href="/">
            <a className="dark:text-white">
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
            className="space-x-2 ml-2 xl:col-span-3 lg:col-span-3 col-span-9 justify-end"
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
            {/* <Button
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
            </Button> */}
            <Link href={"/forum/new"}>
              <a className="rounded-full flex items-center px-6 h-[40px] dark:border-dark-border dark:hover:bg-white dark:hover:bg-opacity-10 !dark:text-darktext-color hover:border-gray-300 border whitespace-nowrap font-medium text-sm">
                Forum Aç
              </a>
            </Link>
            <button className={style.avatarDD}>
              <Avatar
                imageURL={
                  user.user.image &&
                  `${baseURLV2}/uploads/users/${user.user.image}`
                }
              />
              <Dropdown />
            </button>
          </Flexible>
        ) : (
          <Flexible
            className="xl:flex lg:flex hidden space-x-3 col-span-3 justify-end"
            alignItem="items-center"
          >
            <Link href="/login">
              <a className="whitespace-nowrap text-sm font-medium">Giriş yap</a>
            </Link>
            <Link href="/signup">
              <a className="hidden hover:bg-opacity-90 xl:block lg:block dark:bg-dark-border bg-darkcolor text-white whitespace-nowrap px-4 text-sm font-medium py-2 rounded-md">
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
