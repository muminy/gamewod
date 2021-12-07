import classNames from "classnames";
import { ReactNode } from "react";
import { FunctionComponent } from "react";

interface SpanProps {
  className?: string;
  span?: string;
  children?: ReactNode;
  onClick?: () => void;
}

const Span: FunctionComponent<SpanProps> = (props) => {
  const { span = "col-span-2", className, children } = props;
  return (
    <div onClick={props.onClick} className={classNames(span, className)}>
      {children}
    </div>
  );
};

export default Span;
