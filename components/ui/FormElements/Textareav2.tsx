import { memo } from "react";

interface IProps extends React.HTMLProps<HTMLTextAreaElement> {
  label?: string;
  isRequired?: boolean;
}

const AreEqual = (prev: IProps, next: IProps) => {
  return prev.value === next.value;
};

export default memo(function TextareaV2({
  label,
  isRequired,
  ...props
}: IProps) {
  return (
    <label className="border mb-5 dark:focus-within:border-dark-borderlight dark:border-dark-border overflow-hidden focus-within:border-gray-900 rounded-md block">
      {label && (
        <span className="px-3 dark:bg-black dark:text-darktext-color bg-white py-2 block text-sm font-medium">
          {label} {isRequired && "*"}
        </span>
      )}
      <textarea
        {...props}
        className="w-full h-full dark:placeholder-darktext-color resize-none mb-0 bg-opacity-50 dark:bg-opacity-10 dark:text-white bg-white outline-none px-4 py-3"
      />
    </label>
  );
},
AreEqual);
