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
      <Flexible alignItem="items-center" className="w-full">
        <Flexible className="mr-auto" alignItem="items-center">
          <Link href="/">
            <a className="font-black tracking-[4px] uppercase text-gray-900 text-xl">
              GW
            </a>
          </Link>
        </Flexible>

        <div className="mx-4 w-full xl:block lg:block hidden">
          <input
            placeholder="Ara.."
            className="w-full bg-gray-100 rounded-md py-2 px-5 outline-none focus:ring-2 focus:bg-white focus:ring-gray-200"
          />
        </div>

        <MenuList />

        {user.loading ? (
          <HeaderSkeleton />
        ) : user.user ? (
          <Flexible alignItem="items-center" className="space-x-2 ml-2">
            <Button
              color="icon"
              className="min-w-[40px] border items-center justify-center hidden xl:flex lg:flex"
            >
              <Flaticon paths={CrownFilledPaths} size={14} />
            </Button>
            <Button
              color="icon"
              className="min-w-[40px] border  items-center justify-center hidden xl:flex lg:flex"
            >
              <Flaticon paths={BellFilledPaths} size={14} />
            </Button>

            <button className="rounded-full px-6 h-[40px] hover:border-gray-300 border whitespace-nowrap font-medium text-sm">
              Forum Aç
            </button>
            <Link href={`/user/${user.user?.username}`}>
              <a>
                <Avatar imageURL="https://cdn.dribbble.com/users/14190/avatars/small/b268425ca6ef849dc03cf2723a44a16f.png?1414231950" />
              </a>
            </Link>
          </Flexible>
        ) : (
          <Flexible className="xl:flex lg:flex hidden" alignItem="items-center">
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

        <Button
          color="icon"
          onClick={toggle}
          className="min-w-[40px] border ml-2 items-center justify-center flex xl:hidden lg:hidden"
        >
          <Flaticon paths={MenuIconPath} viewBox="0 0 512 512" size={14} />
        </Button>

        <ResponsiveMenu open={open} toggle={toggle} />
      </Flexible>
    </div>
  );
};

export default Header;
