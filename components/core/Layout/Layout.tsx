import classNames from "classnames";
import { NextSeo, NextSeoProps } from "next-seo";
import * as React from "react";
import Footer from "../Footer";
import Header from "../Header";
import initialseo from "constants/seo";
import Flexible from "components/ui/Flexible";
import Sidebar from "../Sidebar";

export interface ILayout {
  seo?: NextSeoProps;
  children?: React.ReactNode;
  className?: string;
  disableContainer?: boolean;
}

const Layout: React.FC<ILayout> = (props) => {
  return (
    <div>
      <NextSeo
        {...initialseo}
        {...props.seo}
        twitter={{ ...initialseo.twitter, ...props.seo?.twitter }}
        openGraph={{ ...initialseo.openGraph, ...props.seo?.openGraph }}
      />
      <Header />
      <main className={classNames("dark:bg-black mb-20 ", props.className)}>
        {props.children}
      </main>

      <Footer />
    </div>
  );
};

export default Layout;
