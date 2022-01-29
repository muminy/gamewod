import Flaticon from "components/ui/Flaticon";
import Flexible from "components/ui/Flexible";
import { LinkProps } from "constants/types";
import Link from "next/link";

export default function MenuLink(item: LinkProps) {
  return (
    <Link href={item.href}>
      <a className="flex flex-col text-gray-700 group items-center">
        <div className="">{item.icon()}</div>
      </a>
    </Link>
  );
}
