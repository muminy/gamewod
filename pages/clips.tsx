import classNames from "classnames";
import Layout from "components/core/Layout";
import Clip from "components/ui/Sections/Clips";
import F from "constants/style";

export default function Clips() {
  return (
    <Layout
      seo={{
        title: "Popüler klipler",
        openGraph: { title: "Popüler klipler" },
      }}
      className={classNames(F.paddingHorizontal, "pt-5")}
    >
      <Clip.Header />
      <Clip.Clips />
    </Layout>
  );
}
