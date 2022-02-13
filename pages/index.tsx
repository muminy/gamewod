import type { NextPage } from "next";
// ** components
import Grid from "components/ui/Grid";
import BlogSection from "components/ui/Sections/Blogs";
import Hero from "components/ui/Sections/Hero";
import Forums from "components/ui/Sections/Forums";
import Layout from "components/core/Layout";

const Home: NextPage = () => {
  return (
    <Layout className="relative xl:pt-10 lg:pt-10">
      {/* <TeamSection /> */}

      <Grid.Col
        className="xl:px-10 lg:px-8 md:px-6 px-0"
        gap="gap-y-10 xl:gap-x-10 lg:gap-x-6 gap-x-4"
      >
        {/* <Grid.Span span="2xl:col-span-3 xl:col-span-4 col-span-12">
          <Livescore />
        </Grid.Span> */}
        <Grid.Span span="2xl:col-span-8 xl:col-span-8 lg:col-span-8 col-span-12">
          <Hero />
          <BlogSection />
        </Grid.Span>
        <Grid.Span span="2xl:col-span-4 xl:col-span-4 lg:col-span-4 col-span-12">
          <Forums />
        </Grid.Span>
      </Grid.Col>
    </Layout>
  );
};

export default Home;
