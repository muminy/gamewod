import classNames from "classnames";
import { motion } from "framer-motion";
import React, { useEffect } from "react";
import { ReactNode } from "react-markdown/lib/react-markdown";

interface Props {
  open: boolean;
  size?: "xl" | "lg" | "md" | "sm";
  toggle: () => void;
  component: () => ReactNode;
}

export default function Modal(props: Props) {
  const { component, size, open, toggle } = props;

  useEffect(() => {
    document.getElementById("modal_area");
    onclick = (e: any) => {
      if (e.target.id === "modal_area") {
        toggle();
      }
    };
  }, [open]);

  if (open) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
        id="modal_area"
        className="w-full h-screen z-[1000] flex items-center justify-center dark:bg-gray-400 dark:bg-opacity-20 bg-gray-900 bg-opacity-20 fixed left-0 top-0"
      >
        <div
          className={classNames("dark:bg-black bg-white rounded-md", {
            "xl:w-8/12 lg:w-11/12 w-full": size === "xl",
            "xl:w-6/12 lg:w-10/12 w-full": size === "lg",
            "xl:w-4/12 lg:w-8/12 w-full": size === "md",
            "xl:w-2/12 lg:w-6/12 w-full": size === "sm",
          })}
        >
          {component()}
        </div>
      </motion.div>
    );
  }

  return null;
}
