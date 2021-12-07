import classNames from "classnames";
import { ReactNode } from "react";
import { FunctionComponent } from "react";

interface ColProps {
  className?: string;
  cols?: string;
  children: ReactNode;
  gap?: string;
}

const Col: FunctionComponent<ColProps> = (props) => {
  const { cols = "grid-cols-12", gap = "gap-5", className, children } = props;
  return <div className={classNames("grid", cols, gap, className)}>{children}</div>;
};

export default Col;
