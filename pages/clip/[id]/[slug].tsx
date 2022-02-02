import classNames from "classnames";
import Layout from "components/core/Layout";
import Comments from "components/ui/Clip/Comment";
import Media from "components/ui/Clip/Media";
import Grid from "components/ui/Grid";
import MakeComment from "components/ui/MakeComment";
import F from "constants/style";

export default function Clips() {
  return (
    <Layout
      seo={{
        title: "Popüler klipler",
        openGraph: { title: "Popüler klipler" },
      }}
      className={classNames(F.paddingHorizontal, "")}
    >
      <Grid.Col className="xl:gap-10 lg:gap-8 gap-5 2xl:max-w-[1700px] xl:max-w-7xl mx-auto">
        <Grid.Span span="xl:col-span-8 lg:col-span-8 col-span-12">
          <Media />
        </Grid.Span>
        <Grid.Span span="xl:col-span-4 lg:col-span-4 col-span-12">
          <Comments />
        </Grid.Span>
      </Grid.Col>
    </Layout>
  );
}
