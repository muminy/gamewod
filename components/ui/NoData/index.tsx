import classNames from "classnames";
import STYLE from "constants/style";

interface IProps {
  title: string;
}

export default function NoData(props: IProps) {
  return (
    <div
      className={classNames(
        STYLE.paddingHorizontal,
        "bg-gray-100 py-10 rounded-xl text-center dark:bg-dark-border w-full"
      )}
    >
      {props.title}
    </div>
  );
}
