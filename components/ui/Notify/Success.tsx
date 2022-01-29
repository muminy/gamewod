import { motion } from "framer-motion";
import CheckIcon from "../icons/CheckIcon";
import style from "./style.module.css";

interface IProps {
  icon?: boolean;
  title: string;
}

export default function Success(props: IProps) {
  return (
    <div className="fixed top-0 w-full left-0 z-0 flex justify-center">
      <motion.div
        initial={{ marginTop: 16 }}
        animate={{ marginTop: 30 }}
        className={style.notify}
      >
        {!props.icon && (
          <span className="p-1 bg-green-400 text-gray-100 rounded-full">
            <CheckIcon />
          </span>
        )}
        <span>{props.title}</span>
      </motion.div>
    </div>
  );
}
