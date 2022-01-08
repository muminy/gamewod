import Flexible from "components/ui/Flexible";
import Grid from "components/ui/Grid";

export function ProfileSkeleton() {
  return (
    <div className="animate-pulse">
      <Flexible className="flex-col mb-20" alignItem="items-center">
        <div className="rounded-md w-full h-[260px] dark:bg-dark-border bg-gray-100"></div>
        <div className="w-[140px] h-[140px] dark:bg-dark-border bg-gray-200 rounded-full mt-[-100px] dark:border-black border-white border-4 mb-4" />
        <div className="w-32 h-4 dark:bg-dark-border bg-gray-200 rounded-md" />
      </Flexible>

      <Flexible justifyContent="justify-center" className="space-x-2 mb-10">
        <div className="w-32 h-4 dark:bg-dark-border bg-gray-200 rounded-sm mb-1" />
        <div className="w-32 h-4 dark:bg-dark-border bg-gray-200 rounded-sm mb-1" />
        <div className="w-32 h-4 dark:bg-dark-border bg-gray-200 rounded-sm mb-1" />
      </Flexible>

      <Grid.Col className="max-w-7xl mx-auto">
        <Grid.Span span="xl:col-span-6 lg:col-span-6 col-span-12">
          <div className="w-full h-[120px] dark:bg-dark-border bg-gray-200 rounded-md" />
        </Grid.Span>
        <Grid.Span span="xl:col-span-6 lg:col-span-6 col-span-12">
          <div className="w-full h-[120px] dark:bg-dark-border bg-gray-200 rounded-md" />
        </Grid.Span>
        <Grid.Span span="xl:col-span-6 lg:col-span-6 col-span-12">
          <div className="w-full h-[120px] dark:bg-dark-border bg-gray-200 rounded-md" />
        </Grid.Span>
        <Grid.Span span="xl:col-span-6 lg:col-span-6 col-span-12">
          <div className="w-full h-[120px] dark:bg-dark-border bg-gray-200 rounded-md" />
        </Grid.Span>
      </Grid.Col>
    </div>
  );
}
