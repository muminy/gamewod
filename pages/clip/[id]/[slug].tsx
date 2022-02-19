import { GetStaticPropsContext, NextPageContext } from "next";
import classNames from "classnames";

import { find_clip } from "services/clip/config";
import F from "constants/style";

import Layout from "components/core/Layout";
import Comments from "components/ui/Clip/Comment";
import Media from "components/ui/Clip/Media";
import Grid from "components/ui/Grid";
import NotFound from "components/ui/NotFound";

import { ApiV2 } from "services/apis";
import { IClip } from "constants/types";

interface IProps {
  clip: IClip;
  clips: any;
}

const Clips = ({ clip }: IProps) => {
  // if not found clip then return not found data
  if (!clip) return <NotFound />;

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

interface InitialProps extends NextPageContext {
  query: {
    id: string;
  };
}

Clips.getInitialProps = async (context: InitialProps) => {
  const apipath = find_clip(context.query?.id as unknown as number);
  const result = await ApiV2.get(apipath);
  return { clip: result.data.clip };
};

export default Clips;
