import classNames from "classnames";
import { ReactNode } from "react";

interface Props extends React.HTMLProps<HTMLSelectElement> {
  children: ReactNode;
  className?: string;
}

export default function Select(props: Props) {
  return (
    <select
      {...props}
      className={classNames(
        "border w-full px-2 py-1 rounded-md outline-none focus:ring-1 ring-offset-2 ring-gray-300",
        props.className
      )}
    >
      {props.children}
    </select>
  );
}
