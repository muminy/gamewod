import classNames from "classnames";
import STYLE from "constants/style";
import Head from "next/head";
import { useRouter } from "next/router";
import * as React from "react";
import Footer from "../Footer";
import Header from "../Header";

type MetaType = {
  title?: string;
  description?: string;
  type?: string;
  image?: string;
  date?: string;
};

type Props = {
  children?: React.ReactNode;
  metas?: MetaType;
  className?: string;
  disableContainer?: boolean;
};

const Layout: React.FC<Props> = (props) => {
  const { metas, className } = props;
  const router = useRouter();

  const meta = Object.assign(
    {
      title:
        "Gamewod.com | E-spor Haberleri, son gelişmeler ve takım analizleri",
      type: "website",
      description:
        "Csgo, valorant ve PUBG tarafından son dakika gelişmeler ve oyun analizleri.",
    },
    metas
  );

  return (
    <div className={classNames(className)}>
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta property="og:url" content={`https://leerob.io${router.asPath}`} />
        <link rel="canonical" href={`https://leerob.io${router.asPath}`} />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Gamewod.com" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@gamewodcom" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
        {meta.date && (
          <meta property="article:published_time" content={meta.date} />
        )}
      </Head>

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
