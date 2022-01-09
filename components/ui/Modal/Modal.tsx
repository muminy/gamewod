import classNames from "classnames";
import { motion } from "framer-motion";
import React, { useEffect } from "react";
import { ReactNode } from "react-markdown/lib/react-markdown";

interface Props {
  open: boolean;
  component: () => ReactNode;
  size?: "xl" | "lg" | "md" | "sm";
  toggle: () => void;
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
        className="w-full h-screen z-50 flex items-center justify-center dark:bg-gray-400 dark:bg-opacity-20 bg-gray-900 bg-opacity-20 fixed left-0 top-0"
      >
        <div
          className={classNames("dark:bg-black bg-white rounded-md", {
            "w-8/12": size === "xl",
            "w-6/12": size === "lg",
            "w-4/12": size === "md",
            "w-2/12": size === "sm",
          })}
        >
          {component()}
        </div>
      </motion.div>
    );
  }

  return null;
}
