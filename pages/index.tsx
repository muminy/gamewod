import type { NextPage } from "next";

// ** components
import Grid from "components/ui/Grid";
import TeamSection from "components/ui/Sections/Teams";
import BlogSection from "components/ui/Sections/Blogs";
import Hero from "components/ui/Sections/Hero";
import Livescore from "components/ui/Sections/Livescore";
import Forums from "components/ui/Sections/Forums";
import STYLE from "constants/style";
import classNames from "classnames";

const Home: NextPage = () => {
  return (
    <div className="relative">
      <Hero />
      <TeamSection />

      <Grid.Col
        gap="gap-y-10 xl:gap-x-10 lg:gap-x-6 gap-x-4"
        className={classNames(STYLE.paddingHorizontal, "mb-10")}
      >
        <Grid.Span span="2xl:col-span-3 xl:col-span-4 col-span-12">
          <Livescore />
        </Grid.Span>
        <Grid.Span span="2xl:col-span-6 xl:col-span-8 col-span-12">
          <BlogSection />
        </Grid.Span>
        <Grid.Span span="2xl:col-span-3 xl:col-span-12 col-span-12">
          <Forums />
        </Grid.Span>
      </Grid.Col>
    </div>
  );
};

export default Home;
