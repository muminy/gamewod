import Flexible from "../Flexible";
import Link from "next/link";
import classNames from "classnames";

export interface Props extends React.HTMLAttributes<HTMLDivElement> {
  morable?: string;
}

export default function CustomTitle({ className, morable, ...props }: Props) {
  return (
    <div
      className={classNames("mb-2 flex text-center justify-between", className)}
      {...props}
    >
      <h4 className="font-bold text-lg dark:text-gray-300 text-gray-900 text-opacity-90">
        {props.children}
      </h4>

      {morable && (
        <Link href={morable}>
          <a className="text-xs font-medium text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 duration-300">
            Tümünü Gör
          </a>
        </Link>
      )}
    </div>
  );
}
