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

      <div className="py-4 border-l-4 border-t-2 border-r-2 border-b-4 border-gray-900 text-2xl mb-10 rounded-md px-10 leading-[50px] tracking-wide font-black text-gray-900">
        Günün önemli ve kayda değer{" "}
        <span className="border-b-[4px] border-gray-900 pb-1">kliperini</span>{" "}
        sizler için derledik
      </div>
      <Clip.Clips />
    </Layout>
  );
}
