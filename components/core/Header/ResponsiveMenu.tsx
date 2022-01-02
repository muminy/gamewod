import { Fragment, FC } from "react";
import Link from "next/link";
import Flexible from "components/ui/Flexible/flex";
import style from "./style.module.css";
import classNames from "classnames";
import { Dialog, Transition } from "@headlessui/react";
import { LinkCard } from "./MenuLists";

interface MenuProps {
  toggle: () => void;
  open: boolean;
}

const menus = [
  {
    title: "CS:GO",
  },
  {
    title: "Valorant",
  },
  {
    title: "Pubg",
  },
  {
    title: "Röportaj",
  },
  {
    title: "Turnuvalar",
  },
  {
    title: "Gelecek Güncellemeler",
  },
];

const ResponsiveMenu: React.FC<MenuProps> = (props) => {
  return (
    <Transition.Root show={props.open} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 overflow-hidden"
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
              <div className="relative w-screen max-w-[200px] ml-auto">
                <Transition.Child
                  as={Fragment}
                  enter="ease-in-out duration-500"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in-out duration-500"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="absolute top-0 left-0 -ml-8 pt-4 pr-2 flex sm:-ml-10 sm:pr-4">
                    <button
                      type="button"
                      className="rounded-md outline-none text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                      onClick={props.toggle}
                    >
                      x
                    </button>
                  </div>
                </Transition.Child>
                <div className="h-full flex flex-col py-6 bg-white shadow-xl overflow-y-scroll">
                  {menus.map((item) => (
                    <LinkCard {...item} key={item.title} />
                  ))}
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