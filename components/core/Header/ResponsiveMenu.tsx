import { Fragment, FC } from "react";
import Link from "next/link";
import Flexible from "components/ui/Flexible/flex";
import { Dialog, Transition } from "@headlessui/react";
import { LinkCard } from "./MenuLists";
import { menus } from "constants/datas";
import useUserdata from "hooks/useUserdata";

interface MenuProps {
  toggle: () => void;
  open: boolean;
}

const ResponsiveMenu: React.FC<MenuProps> = (props) => {
  const { data } = useUserdata();

  return (
    <Transition.Root show={props.open} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 overflow-hidden z-10"
        onClose={props.toggle}
      >
        <div className="absolute inset-0 overflow-hidden">
          <Transition.Child
            as={Fragment}
            enter="ease-in-out duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in-out duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>
          <div className="fixed inset-y-0 right-0 pl-10 max-w-full flex">
            <Transition.Child
              as={Fragment}
              enter="transform transition ease-in-out duration-500 sm:duration-700"
              enterFrom="translate-x-full"
              enterTo="translate-x-0"
              leave="transform transition ease-in-out duration-500 sm:duration-700"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full"
            >
              <div className="relative w-screen max-w-[300px] ml-auto">
                <Transition.Child
                  as={Fragment}
                  enter="ease-in-out duration-500"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in-out duration-500"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="absolute top-0 left-0 -ml-6 pt-2 pr-2 flex sm:-ml-10 sm:pr-4">
                    <button
                      type="button"
                      className="rounded-md outline-none text-gray-300 hover:text-white"
                      onClick={props.toggle}
                    >
                      x
                    </button>
                  </div>
                </Transition.Child>
                <div className="h-full flex flex-col py-3 dark:bg-black bg-white shadow-xl overflow-y-scroll">
                  {menus.map((item) => (
                    <LinkCard {...item} key={item.title} />
                  ))}

                  {!data.user && (
                    <Flexible className="mt-auto px-3" alignItem="items-center">
                      <Link href="/login">
                        <a className="hover:bg-gray-200 w-full text-center mr-3 dark:bg-dark-border dark:text-white bg-gray-100 text-gray-900 whitespace-nowrap px-4 text-sm font-medium py-2 rounded-md">
                          Giriş yap
                        </a>
                      </Link>
                      <Link href="/signup">
                        <a className="hover:bg-opacity-90 w-full text-center ml-3 dark:bg-dark-borderlight dark:text-white  bg-darkcolor text-white whitespace-nowrap px-4 text-sm font-medium py-2 rounded-md">
                          Kayıt ol
                        </a>
                      </Link>
                    </Flexible>
                  )}
                </div>
              </div>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default ResponsiveMenu;
