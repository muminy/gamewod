import { Fragment } from "react";

export default function ClipSkeletons() {
  return (
    <Fragment>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </Fragment>
  );
}

export const Card = () => {
  return (
    <div className="2xl:col-span-2 xl:col-span-3 lg:col-span-4 col-span-6 bg-gray-100 flex flex-col justify-between rounded-md  w-full xl:h-[600px] lgh-[4600px] h-[240px] animate-pulse">
      <div className="flex justify-end p-3">
        <div className="bg-gray-200 rounded-md h-4 w-14" />
      </div>

      <div className="space-y-3 p-3">
        <div className="bg-gray-200 rounded-md h-4 w-[80%]" />
        <div className="bg-gray-200 rounded-md h-4 w-[30%]" />
      </div>
    </div>
  );
};
