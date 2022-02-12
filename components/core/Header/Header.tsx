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
  MoonIconPath,
  SearchIconPath,
  Sun,
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
import { useTheme } from "next-themes";

const Header: React.FC = (props) => {
  const [open, setOpen] = React.useState(false);

  const toggle = () => setOpen(!open);
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  const user = useAppSelector((state) => state.user);

  return (
    <div className={classNames(style.header, F.paddingHorizontal)}>
      <div className="flex w-full xl:space-x-2 lg:space-x-2 space-x-2">
        <Flexible
          className="w-full col-span-3 space-x-10"
          alignItem="items-center"
        >
          <Link href="/">
            <a className="dark:text-white">
              <Logo size={18} />
            </a>
          </Link>

          <input
            className="bg-gray-100 dark:bg-dark-border outline-none focus:ring-2 ring-offset-2 ring-gray-200 xl:block lg:block hidden py-2 rounded-md px-4"
            placeholder="Araa"
          />
        </Flexible>

        {user.loading ? (
          <HeaderSkeleton />
        ) : user.user ? (
          <Flexible
            alignItem="items-center"
            className="space-x-2 ml-2 xl:col-span-3 lg:col-span-3 col-span-9 justify-end"
          >
            <MenuList />
            {/* <Button
              color="icon"
              className="min-w-[40px] border items-center justify-center hidden xl:flex lg:flex"
            >
              <Flaticon
                paths={SearchIconPath}
                viewBox="0 0 511.786 511.786"
                size={14}
              />
            </Button> */}
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
              <a className="bg-blue-600 h-[38px] whitespace-nowrap rounded-xl text-sm font-semibold text-white px-6 flex items-center justify-center">
                Forum Aç
              </a>
            </Link>
            <button className={style.avatarDD}>
              <Avatar
                className="!rounded-xl"
                imageURL={
                  user.user.image &&
                  `${baseURLV2}/uploads/users/${user.user.image}`
                }
              />
              <Dropdown />
            </button>

            <button
              className={
                "dark:text-white dark:bg-dark-border h-[38px] rounded-xl w-[38px] flex items-center justify-center bg-gray-100 text-gray-600"
              }
              onClick={toggleTheme}
            >
              <Flaticon
                viewBox="0 0 32 32"
                size={24}
                paths={theme === "dark" ? MoonIconPath : Sun}
              />
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
          className="min-w-[38px] h-[38px] border !rounded-md ml-2 items-center justify-center flex xl:hidden lg:hidden"
        >
          <Flaticon paths={MenuIconPath} viewBox="0 0 512 512" size={14} />
        </Button>

        <ResponsiveMenu open={open} toggle={toggle} />
      </div>
    </div>
  );
};

export default Header;
