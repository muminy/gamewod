import cn from "classnames";
import { FunctionComponent, ReactNode } from "react";

interface FlexProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  alignItem?:
    | "items-start"
    | "items-end"
    | "items-center"
    | "items-baseline"
    | "items-stretch";
  justifyContent?:
    | "justify-start"
    | "justify-end"
    | "justify-center"
    | "justify-between"
    | "justify-around"
    | "justify-evenly";
  className?: string;
  id?: string;
}

const Flexible: FunctionComponent<FlexProps> = ({
  alignItem = "items-start",
  justifyContent = "justify-start",
  children,
  className,
  ...props
}) => {
  return (
    <div
      {...props}
      className={cn("flex", alignItem, justifyContent, className)}
    >
      {children}
    </div>
  );
};

export default Flexible;
