import { SVGProps } from "constants/types";

interface Props extends SVGProps {
  paths: string[];
  viewBox?: string;
  className?: string;
}

export default function Flaticon({
  size = 18,
  color = "currentColor",
  paths = [],
  viewBox = "0 0 24 24",
  className = "",
}: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      viewBox={viewBox}
      width={size}
      height={size}
    >
      {paths.map((item) => (
        <path fill={color} key={item} d={item} />
      ))}
    </svg>
  );
}
