import type { NextPage } from "next";
// ** components
import Grid from "components/ui/Grid";
import BlogSection from "components/ui/Sections/Blogs";
import Hero from "components/ui/Sections/Hero";
import Forums from "components/ui/Sections/Forums";
import Layout from "components/core/Layout";

const Home: NextPage = () => {
  return (
    <Layout className="relative lx:pt-10 lg:pt-10 md:pt-6 xl:px-10 lg:px-8 md:px-6 px-0">
      {/* <TeamSection /> */}

      <div className="content-wrapper xl:gap-x-10 lg:gap-x-6 gap-y-0 gap-x-4">
        <Grid.Span span="2xl:col-span-4 xl:col-span-4 col-span-12">
          <Forums />
        </Grid.Span>
        {/* <Grid.Span span="2xl:col-span-3 xl:col-span-4 col-span-12">
          <Livescore />
        </Grid.Span> */}
        <Grid.Span span="2xl:col-span-8 xl:col-span-8 col-span-12">
          <Hero />
          <BlogSection />
        </Grid.Span>
      </div>
    </Layout>
  );
};

export default Home;
