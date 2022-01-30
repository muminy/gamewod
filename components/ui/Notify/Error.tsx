import { motion } from "framer-motion";
import CancelIcon from "../icons/Cancel.icon";
import CheckIcon from "../icons/CheckIcon";
import style from "./style.module.css";

interface IProps {
  icon?: boolean;
  title: string;
}

export default function Error(props: IProps) {
  return (
    <div className="fixed bottom-0 w-full left-0 z-0 flex justify-center">
      <motion.div
        initial={{ marginBottom: 16 }}
        animate={{ marginBottom: 30 }}
        className={style.notify}
      >
        {!props.icon && (
          <span className="p-1 bg-red-400 dark:bg-opacity-20 text-gray-100 rounded-full">
            <CancelIcon />
          </span>
        )}
        <span>{props.title}</span>
      </motion.div>
    </div>
  );
}
