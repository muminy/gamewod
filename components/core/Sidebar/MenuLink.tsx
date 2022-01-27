import Flaticon from "components/ui/Flaticon";
import Flexible from "components/ui/Flexible";
import { LinkProps } from "constants/types";
import Link from "next/link";

export default function MenuLink(item: LinkProps) {
  return (
    <Link href={item.href}>
      <a className="flex flex-col group items-center">
        <div className="bg-gray-100 xl:rounded-full lg:rounded-full rounded-md dark:bg-dark-border dark:group-hover:text-white dark:text-gray-500 mb-2 group-hover:text-gray-700 w-10 h-10 flex items-center justify-center text-gray-400">
          <Flaticon paths={item.icon} />
        </div>
        <div className="text-sm xl:block lg:block hidden dark:group-hover:text-gray-300  dark:text-dark-borderlight font-medium text-center">
          {item.title}
        </div>
      </a>
    </Link>
  );
}
