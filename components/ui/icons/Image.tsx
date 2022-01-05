import { SVGProps } from "constants/types";

export default function ImageFilledIcon({
  color = "currentColor",
  size = 16,
}: SVGProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      id="Filled"
      viewBox="0 0 24 24"
      width={size}
      height={size}
    >
      <path
        fill={color}
        d="M11.122,12.536a3,3,0,0,0-4.244,0l-6.84,6.84A4.991,4.991,0,0,0,5,24H19a4.969,4.969,0,0,0,2.753-.833Z"
      />
      <circle fill={color} cx="18" cy="6" r="2" />
      <path
        fill={color}
        d="M19,0H5A5.006,5.006,0,0,0,0,5V16.586l5.464-5.464a5,5,0,0,1,7.072,0L23.167,21.753A4.969,4.969,0,0,0,24,19V5A5.006,5.006,0,0,0,19,0ZM18,10a4,4,0,1,1,4-4A4,4,0,0,1,18,10Z"
      />
    </svg>
  );
}
