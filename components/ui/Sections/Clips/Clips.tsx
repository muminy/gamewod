import Grid from "components/ui/Grid";

import ClipCard from "./Card";
import useSWR from "swr";

import { clip } from "services/clip/config";
import { fetcherV2 } from "lib/fetcher";
import { IClip } from "constants/types";

import ErrorFound from "components/ui/Error/ErrorFound";
import NotFound from "components/ui/NotFound";
import ClipSkeletons from "components/Skeleton/Clips";

export default function Clips() {
  const { data, error } = useSWR(clip, fetcherV2);

  if (error) return <ErrorFound />;
  if (!data) return <ClipSkeletons />;

  return (
    <Grid.Col>
      {data.clips.map((item: IClip) => (
        <Grid.Span
          key={item.id}
          span="2xl:col-span-2 xl:col-span-3 lg:col-span-4 col-span-6"
        >
          <ClipCard {...item} />
        </Grid.Span>
      ))}
    </Grid.Col>
  );
}
