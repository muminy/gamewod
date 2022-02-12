import Grid from "components/ui/Grid";
import { Fragment } from "react";

export default function ClipSkeletons() {
  return (
    <Grid.Col>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </Grid.Col>
  );
}

export const Card = () => {
  return (
    <Grid.Span
      span="2xl:col-span-2 xl:col-span-3 lg:col-span-4 col-span-6"
      className="2xl:col-span-2 xl:col-span-3 lg:col-span-4 col-span-6 bg-gray-100 dark:bg-dark-border flex flex-col justify-between rounded-md  w-full xl:h-[600px] lgh-[4600px] h-[240px] animate-pulse"
    >
      <div className="flex justify-end p-3">
        <div className="bg-gray-200 dark:bg-dark-borderlight rounded-md h-4 w-14" />
      </div>

      <div className="space-y-3 p-3">
        <div className="bg-gray-200 dark:bg-dark-borderlight rounded-md h-4 w-[80%]" />
        <div className="bg-gray-200 dark:bg-dark-borderlight rounded-md h-4 w-[30%]" />
      </div>
    </Grid.Span>
  );
};
