import { CancelFilledIconPath } from "constants/flaticons";
import { motion } from "framer-motion";
import { ReactNode } from "react-markdown/lib/react-markdown";
import Flaticon from "../Flaticon";
import Flexible from "../Flexible";

interface Props {
  open: boolean;
  onClose: () => void;
  title?: string;
  component: () => ReactNode;
}

export default function Modal(props: Props) {
  if (props.open) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
        className="w-full h-screen flex items-center justify-center bg-gray-900 bg-opacity-20 fixed left-0 top-0"
      >
        <div className="w-1/6 bg-white rounded-md">
          <Flexible
            className="p-4"
            justifyContent="justify-between"
            alignItem="items-center"
          >
            <div>{props.title || "Modal"}</div>
            <button
              className="p-2 bg-gray-100 rounded-md text-gray-500 hover:bg-gray-200 hover:text-gray-900 duration-200"
              onClick={props.onClose}
            >
              <Flaticon size={16} paths={CancelFilledIconPath} />
            </button>
          </Flexible>

          <div className="p-4">{props.component()}</div>
        </div>
      </motion.div>
    );
  }

  return null;
}
