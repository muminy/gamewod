import classNames from "classnames";

interface Props extends React.HTMLProps<HTMLInputElement> {
  className?: string;
}

export default function Input(props: Props) {
  return (
    <input
      {...props}
      className={classNames(
        "border w-full px-3 py-1 dark:bg-transparent dark:border-dark-border rounded-md outline-none focus:ring-1 ring-offset-2 ring-gray-300",
        props.className
      )}
    />
  );
}
