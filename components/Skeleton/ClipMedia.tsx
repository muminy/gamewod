import { Fragment } from "react";

export default function ClipMedia() {
  return (
    <div className="grid grid-cols-12 xl:gap-10 lg:gap-8 gap-5 2xl:max-w-[1700px] xl:max-w-7xl mx-auto">
      <div className="xl:col-span-8 lg:col-span-8 col-span-12">
        <div className="rounded-2xl overflow-hidden mb-4 xl:h-[600px] lg:h-[500px] h-[300px] bg-gray-100 animate-pulse" />
        <div className="bg-gray-100 rounded-md mb-3 h-6 w-3/4 animate-pulse" />
        <div className="bg-gray-100 rounded-md h-6 w-2/4 animate-pulse" />
      </div>

      <div className="xl:col-span-4 lg:col-span-4 col-span-12">
        <div className="rounded-md overflow-hidden mb-4 h-10 bg-gray-100 animate-pulse" />
        <div className="bg-gray-100 rounded-md mb-2 h-3 w-3/4 animate-pulse" />
        <div className="bg-gray-100 rounded-md h-6 w-2/4 animate-pulse mb-10" />
        <div className="bg-gray-100 rounded-md mb-2 h-3 w-3/4 animate-pulse" />
        <div className="bg-gray-100 rounded-md mb-2 h-3 w-3/4 animate-pulse" />
        <div className="bg-gray-100 rounded-md mb-2 h-3 w-3/4 animate-pulse" />
      </div>
    </div>
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
