import classNames from "classnames";
import * as React from "react";
// ** components
import Footer from "../Footer";
import Header from "../Header";
import Seo from "../Seo";

import { ISeoMeta } from "constants/types";
import initialseo from "constants/seo";
import { motion } from "framer-motion";

export interface ILayout {
  seo?: ISeoMeta;
  children?: React.ReactNode;
  className?: string;
}

const Layout: React.FC<ILayout> = (props) => {
  const { seo, children, className } = props;
  return (
    <div className="flex flex-col min-h-screen">
      <Seo {...initialseo} {...seo} />
      <Header />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className={classNames("dark:bg-black h-full mb-20", className)}
      >
        {children}
      </motion.div>
      <Footer />
    </div>
  );
};

export default Layout;
