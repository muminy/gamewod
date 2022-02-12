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
        defaultTitle: "Popüler klipler",
        openGraph: {
          title: "Popüler klipler",
          url: "https://gamewod.com/clips",
          description: "Günün önemli olaryları, clipleri sizlerle",
        },
      }}
      className={classNames(F.paddingHorizontal)}
    >
      {/* <Clip.Header /> */}

      <Clip.Clips />
    </Layout>
  );
}
