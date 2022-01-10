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

const Home: NextPage = () => {
  return (
    <Layout className="relative">
      <Hero />
      {/* <TeamSection /> */}

      <Grid.Col
        gap="gap-y-10 xl:gap-x-10 lg:gap-x-6 gap-x-4"
        className={classNames(STYLE.paddingHorizontal, "mb-10")}
      >
        {/* <Grid.Span span="2xl:col-span-3 xl:col-span-4 col-span-12">
          <Livescore />
        </Grid.Span> */}
        <Grid.Span span="2xl:col-span-8 xl:col-span-8 lg:col-span-8 md:col-span-7 col-span-12">
          <BlogSection />
        </Grid.Span>
        <Grid.Span span="2xl:col-span-4 xl:col-span-4 lg:col-span-4 md:col-span-5 col-span-12">
          <Forums />
        </Grid.Span>
      </Grid.Col>
    </Layout>
  );
};

export default Home;
