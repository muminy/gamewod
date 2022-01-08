import classNames from "classnames";

interface Props extends React.HTMLProps<HTMLTextAreaElement> {
  classes?: string;
}

export default function Textarea(props: Props) {
  return (
    <textarea
      className={classNames(
        props.classes,
        "border w-full px-2 py-1 dark:bg-transparent rounded-md resize-none outline-none focus:ring-1 ring-offset-2 ring-gray-300"
      )}
      {...props}
    />
  );
}
