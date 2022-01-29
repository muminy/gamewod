import type { NextPage, GetServerSideProps } from "next";
import { useEffect } from "react";

// ** components
import Grid from "components/ui/Grid";
import BlogSection from "components/ui/Sections/Blogs";
import Hero from "components/ui/Sections/Hero";
import Forums from "components/ui/Sections/Forums";
import STYLE from "constants/style";

// node packages
import classNames from "classnames";

import Layout from "components/core/Layout";
import NotFound from "components/ui/NotFound";

const NotFoundPage: NextPage = () => {
  return (
    <Layout className="relative">
      <NotFound />
    </Layout>
  );
};

export default NotFoundPage;
