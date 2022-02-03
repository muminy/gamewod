import { NextPageContext } from "next";
import { NextSeoProps } from "next-seo";

import useSWR from "swr";
import classNames from "classnames";

import { find_clip } from "services/clip/config";
import { fetcherV2 } from "lib/fetcher";
import F from "constants/style";

import Layout from "components/core/Layout";
import Comments from "components/ui/Clip/Comment";
import Media from "components/ui/Clip/Media";
import Grid from "components/ui/Grid";
import NotFound from "components/ui/NotFound";
import ClipMedia from "components/Skeleton/ClipMedia";

interface IProps {
  id: number;
}

const Clips = (props: IProps) => {
  const { data, error } = useSWR(find_clip(props.id), fetcherV2);

  const seo = data?.clip
    ? ({
        openGraph: {
          description: data.clip.title,
          title: `${data.clip.title} | Gamewod.com`,
          url: window.location.href,
        },
        description: data.clip.title,
        title: `${data.clip.title} | Gamewod.com`,
      } as NextSeoProps)
    : {};

  if (error) {
    return <NotFound />;
  }

  return (
    <Layout seo={seo} className={classNames(F.paddingHorizontal, "")}>
      {data ? (
        data.clip ? (
          <Grid.Col className="xl:gap-10 lg:gap-8 gap-5">
            <Grid.Span span="xl:col-span-8 lg:col-span-8 col-span-12">
              <Media {...data.clip} />
            </Grid.Span>
            <Grid.Span span="xl:col-span-4 lg:col-span-4 col-span-12">
              <Comments
                title={data.clip.title}
                comments={data.clip.comments}
                id={data.clip.id}
              />
            </Grid.Span>
          </Grid.Col>
        ) : (
          <NotFound />
        )
      ) : (
        <ClipMedia />
      )}
    </Layout>
  );
};

interface InitialProps extends NextPageContext {
  query: {
    id: string;
  };
}

Clips.getInitialProps = async (ctx: InitialProps) => {
  return { id: ctx.query.id };
};

export default Clips;
