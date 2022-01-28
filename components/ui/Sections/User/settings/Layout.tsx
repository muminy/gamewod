import Settings from "./";
import { ReactNode } from "react";
import Grid from "components/ui/Grid";

interface Props {
  children: ReactNode;
}

export default function SettingLayout(props: Props) {
  return (
    <Grid.Col className={"mx-auto xl:gap-x-10 lg:gap-x-8 gapx-5 max-w-5xl"}>
      <Grid.Span span="xl:col-span-3 lg:col-span-3 col-span-12">
        <Settings.Menu />
      </Grid.Span>
      <Grid.Span span="xl:col-span-9 lg:col-span-9 col-span-12">
        {props.children}
      </Grid.Span>
    </Grid.Col>
  );
}
