import classNames from "classnames";

interface Props extends React.HTMLProps<HTMLInputElement> {
  classes: string;
}

export default function Input(props: Props) {
  return (
    <input
      className={classNames(
        props.classes,
        "border w-full px-2 py-1 rounded-md outline-none focus:ring-1 ring-offset-2 ring-gray-300"
      )}
      {...props}
    />
  );
}
