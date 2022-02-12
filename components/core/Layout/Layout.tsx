import classNames from "classnames";
import { NextSeo, NextSeoProps } from "next-seo";
import * as React from "react";
import Footer from "../Footer";
import Header from "../Header";
import initialseo from "constants/seo";
import Head from "next/head";

export interface ILayout {
  seo?: NextSeoProps;
  children?: React.ReactNode;
  className?: string;
}

const Layout: React.FC<ILayout> = (props) => {
  const { seo, children, className } = props;
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        {seo?.title && <meta name="twitter:title" content={seo.title} />}
        {seo?.description && (
          <meta name="twitter:description" content={seo.description} />
        )}
      </Head>

      <NextSeo
        {...initialseo}
        {...seo}
        twitter={{ ...initialseo.twitter, ...seo?.twitter }}
        openGraph={{ ...initialseo.openGraph, ...seo?.openGraph }}
      />
      <Header />
      <main className={classNames("dark:bg-black h-full mb-20", className)}>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
