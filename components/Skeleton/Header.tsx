import Flexible from "components/ui/Flexible";

export function HeaderSkeleton() {
  return (
    <Flexible>
      <div className="w-8 h-8 rounded-full bg-gray-200 animate-pulse" />
    </Flexible>
  );
}
