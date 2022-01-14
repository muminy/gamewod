import classNames from "classnames";
import { NextSeo, NextSeoProps } from "next-seo";
import { useRouter } from "next/router";
import * as React from "react";
import Footer from "../Footer";
import Header from "../Header";
import initialseo from "constants/seo";

type MetaType = {
  title?: string;
  description?: string;
  type?: string;
  image?: string;
  date?: string;
};

export interface ILayout {
  seo?: NextSeoProps;
  children?: React.ReactNode;
  className?: string;
  disableContainer?: boolean;
}

const Layout: React.FC<ILayout> = (props) => {
  const router = useRouter();

  return (
    <div>
      <NextSeo
        {...props.seo}
        twitter={{ ...initialseo.twitter, ...props.seo?.twitter }}
        openGraph={{ ...initialseo.openGraph, ...props.seo?.openGraph }}
      />
      <Header />
      <main
        className={classNames(
          "min-h-screen 2xl:max-w-[1700px] mx-auto dark:bg-black mb-20",
          props.className,
          {
            "2xl:max-w-full": props.disableContainer,
          }
        )}
      >
        {props.children}
      </main>

      <Footer />
    </div>
  );
};

export default Layout;
