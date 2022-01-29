import classNames from "classnames";
import { NextSeo, NextSeoProps } from "next-seo";
import * as React from "react";
import Footer from "../Footer";
import Header from "../Header";
import initialseo from "constants/seo";
import { ReactNode } from "react-markdown/lib/react-markdown";

export interface ILayout {
  seo?: NextSeoProps;
  children?: React.ReactNode;
  layout?: "HORIZONTAL" | "VERTICAL" | "ARTICLE";
  className?: string;
}

const Layout: React.FC<ILayout> = (props) => {
  const { seo, children, className } = props;
  return (
    <div>
      <NextSeo
        {...initialseo}
        {...seo}
        twitter={{ ...initialseo.twitter, ...seo?.twitter }}
        openGraph={{ ...initialseo.openGraph, ...seo?.openGraph }}
      />
      <div>
        <Header />
        <main className={classNames("dark:bg-black mb-20 ", className)}>
          {children}
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
