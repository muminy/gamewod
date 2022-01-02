import classNames from "classnames";
import style from "./style.module.css";

export function HeroSkeleton() {
  return (
    <>
      <div
        className={classNames(style.card, "bg-gray-200 animate-pulse w-full")}
      />
      <div
        className={classNames(style.card, "bg-gray-200 animate-pulse w-full")}
      />
      <div
        className={classNames(style.card, "bg-gray-200 animate-pulse w-full")}
      />
      <div
        className={classNames(style.card, "bg-gray-200 animate-pulse w-full")}
      />
    </>
  );
}
