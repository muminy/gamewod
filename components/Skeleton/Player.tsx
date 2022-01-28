import Flexible from "components/ui/Flexible";

export default function PlayerCardSkeleton() {
  return (
    <Flexible className="space-x-3 items-center group-hover:flex absolute top-[35px] border rounded-md px-3 py-2 w-[200px] bg-white">
      <div className="min-w-[40px] min-h-[40px] rounded-full animate-pulse bg-gray-200" />
      <div className="w-full space-y-1">
        <div className="w-full h-3 rounded-md animate-pulse bg-gray-200" />
        <div className="w-3/4 h-3 rounded-md animate-pulse bg-gray-200" />
      </div>
    </Flexible>
  );
}
