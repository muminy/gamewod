import classNames from "classnames";
import Layout from "components/core/Layout";
import Clip from "components/ui/Sections/Clips";
import F from "constants/style";

export default function Clips() {
  return (
    <Layout
      seo={{
        title: "Popüler klipler",
        description: "Günün önemli olaryları, clipleri sizlerle",
      }}
      className={classNames(F.paddingHorizontal, "py-10")}
    >
      {/* <Clip.Header /> */}

      <Clip.Clips />
    </Layout>
  );
}
