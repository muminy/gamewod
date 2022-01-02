import classNames from "classnames";
import Grid from "components/ui/Grid";
import style from "./style.module.css";

export function BlogSkeleton() {
  return (
    <>
      <Grid.Span span="xl:col-span-4 lg:col-span-6 md:col-span-6 col-span-12">
        <BlogCardSkeleton />
      </Grid.Span>
      <Grid.Span span="xl:col-span-4 lg:col-span-6 md:col-span-6 col-span-12">
        <BlogCardSkeleton />
      </Grid.Span>
      <Grid.Span span="xl:col-span-4 lg:col-span-6 md:col-span-6 col-span-12">
        <BlogCardSkeleton />
      </Grid.Span>
      <Grid.Span span="xl:col-span-4 lg:col-span-6 md:col-span-6 col-span-12">
        <BlogCardSkeleton />
      </Grid.Span>
      <Grid.Span span="xl:col-span-4 lg:col-span-6 md:col-span-6 col-span-12">
        <BlogCardSkeleton />
      </Grid.Span>
      <Grid.Span span="xl:col-span-4 lg:col-span-6 md:col-span-6 col-span-12">
        <BlogCardSkeleton />
      </Grid.Span>
      <Grid.Span span="xl:col-span-4 lg:col-span-6 md:col-span-6 col-span-12">
        <BlogCardSkeleton />
      </Grid.Span>
      <Grid.Span span="xl:col-span-4 lg:col-span-6 md:col-span-6 col-span-12">
        <BlogCardSkeleton />
      </Grid.Span>
    </>
  );
}

export const BlogCardSkeleton = () => {
  return (
    <div>
      <div
        className={classNames(
          "bg-gray-200 mb-2 animate-pulse w-full h-[220px] rounded-md"
        )}
      />
      <div
        className={classNames(
          "bg-gray-200 mb-4 animate-pulse w-20 h-2 rounded-md"
        )}
      />

      <div
        className={classNames(
          "bg-gray-200 mb-2 animate-pulse w-full h-4 rounded-md"
        )}
      />
      <div
        className={classNames(
          "bg-gray-200 mb-2 animate-pulse w-2/4 h-4 rounded-md"
        )}
      />
    </div>
  );
};
