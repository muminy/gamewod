import classNames from "classnames";
import React, { memo } from "react";

interface IProps extends React.HTMLProps<HTMLInputElement> {
  label?: string;
  isRequired?: boolean;
  labelClass?: string;
}

const AreEqual = (prev: IProps, next: IProps) => {
  return prev.value === next.value;
};

export default memo(({ label, isRequired, labelClass, ...props }: IProps) => {
  return (
    <label
      htmlFor={label}
      className={classNames(
        "border mb-5 dark:focus-within:border-dark-borderlight dark:border-dark-border overflow-hidden focus-within:border-gray-900 rounded-md block",
        labelClass
      )}
    >
      {label && (
        <span className="px-3 dark:bg-black dark:text-darktext-color bg-white py-2 block text-sm font-medium">
          {label} {isRequired && <span className="text-red-400">*</span>}
        </span>
      )}
      <input
        {...props}
        id={label}
        className="w-full dark:placeholder-darktext-color resize-none mb-0 bg-opacity-50 dark:bg-opacity-10 dark:text-white bg-white outline-none px-4 py-3"
      />
    </label>
  );
}, AreEqual);
