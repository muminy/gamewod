import classNames from "classnames";
import React from "react";

export default function Title(props: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      {...props}
      className={classNames(
        "dark:text-darktext-color font-semibold mb-5",
        props.className
      )}
    />
  );
}
