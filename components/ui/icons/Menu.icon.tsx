import { SVGProps } from "constants/types";

export default function MenuIcon({
  size = 24,
  color = "currentColor",
  ...props
}: SVGProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      role="img"
    >
      <title>Navigation menu</title>
      <path
        fill={color}
        d="M3 4h18v2H3V4zm0 7h18v2H3v-2zm0 7h18v2H3v-2z"
      ></path>
    </svg>
  );
}
