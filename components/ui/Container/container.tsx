import classNames from "classnames";
import { ReactNode, FC } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

const Container = (props: ContainerProps) => {
  return (
    <div
      className={classNames(
        "container max-w-6xl mx-auto px-4 xl:px-10",
        props.className
      )}
    >
      {props.children}
    </div>
  );
};

export default Container;
