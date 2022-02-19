import { GetStaticPropsContext } from "next";
import classNames from "classnames";

import { find_clip } from "services/clip/config";
import F from "constants/style";

import Layout from "components/core/Layout";
import Comments from "components/ui/Clip/Comment";
import Media from "components/ui/Clip/Media";
import Grid from "components/ui/Grid";

import { ApiV2 } from "services/apis";
import { IClip } from "constants/types";
import { handleGetClips } from "services/clip";
import slugify from "slugify";
import { useRouter } from "next/router";

interface IProps {
  clip: IClip;
  clips: any;
}

const Clips = (props: IProps) => {
  const { clip } = props;
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading</div>;
  }

  return (
    <Layout
      seo={{
        description: clip.title,
        title: `${clip.title} | Gamewod.com`,
      }}
      className={classNames(F.paddingHorizontal, "pt-10")}
    >
      <Grid.Col className="xl:gap-10 lg:gap-8 gap-5">
        <Grid.Span span="xl:col-span-8 lg:col-span-8 col-span-12">
          <Media {...clip} />
        </Grid.Span>
        <Grid.Span span="xl:col-span-4 lg:col-span-4 col-span-12">
          <Comments title={clip.title} comments={clip.comments} id={clip.id} />
        </Grid.Span>
      </Grid.Col>
    </Layout>
  );
};

export async function getStaticProps(context: GetStaticPropsContext) {
  const apipath = find_clip(context.params?.id as unknown as number);
  const clip = await ApiV2.get(apipath);

  if (clip.data.clip) {
    return { props: { clip: clip.data.clip }, revalidate: 1 };
  }

  return {
    notFound: true,
  };
}

export async function getStaticPaths() {
  const data = await handleGetClips();
  const paths = data.clips.map((item: IClip) => {
    const slug = slugify(item.title, {
      replacement: "-",
      lower: true,
    });
    return `/clip/${item.id}/${slug}`;
  });
  return {
    paths: paths || [],
    fallback: true,
  };
}

export default Clips;
