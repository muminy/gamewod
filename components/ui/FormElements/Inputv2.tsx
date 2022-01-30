interface IProps {
  label?: string;
  isRequired?: boolean;
  props: React.HTMLProps<HTMLInputElement>;
}

export default function InputV2({ label, isRequired, props }: IProps) {
  return (
    <label className="border mb-5 dark:focus-within:border-dark-borderlight dark:border-dark-border border-blue-200 overflow-hidden focus-within:border-gray-900 rounded-md block">
      {label && (
        <span className="px-3 rounded-md dark:bg-black dark:text-darktext-color bg-white py-2 block text-sm font-medium">
          {label} {isRequired && "*"}
        </span>
      )}
      <input
        {...props}
        className="w-full dark:placeholder-darktext-color resize-none mb-0 bg-opacity-50 dark:bg-opacity-10 dark:text-white bg-white outline-none px-4 py-3"
      />
    </label>
  );
}
