import { SVGProps } from "constants/types";

export default function LogoIcon({
  size = 24,
  color = "currentColor",
  ...props
}: SVGProps) {
  return (
    <svg
      {...props}
      width={size}
      height={size}
      viewBox="0 0 512 512"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_b_10_35)">
        <rect width="512" height="512" fill="url(#paint0_linear_10_35)" />
      </g>
      <path
        d="M114 216C114 153.04 165.04 102 228 102V102V295C228 357.96 176.96 409 114 409V409V216Z"
        fill="white"
      />
      <path
        d="M399 235C399 217.534 395.56 200.239 388.876 184.103C382.192 167.967 372.395 153.305 360.045 140.955C347.695 128.605 333.033 118.808 316.897 112.124C300.761 105.44 283.466 102 266 102L266 235H399Z"
        fill="white"
      />
      <circle cx="332.5" cy="334.5" r="66.5" fill="white" />
      <defs>
        <filter
          id="filter0_b_10_35"
          x="-200"
          y="-200"
          width="912"
          height="912"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImage" stdDeviation="100" />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_10_35"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_backgroundBlur_10_35"
            result="shape"
          />
        </filter>
        <linearGradient
          id="paint0_linear_10_35"
          x1="501"
          y1="3.49999"
          x2="-68"
          y2="570.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#1A268D" stopOpacity="0.46" />
          <stop offset="0.21875" stopColor="#8B20A6" stopOpacity="0.578125" />
          <stop offset="0.504236" stopColor="#355DC3" stopOpacity="0.715937" />
          <stop offset="0.653197" stopColor="#34B0D7" stopOpacity="0.80875" />
          <stop offset="0.817708" stopColor="#4C9BE4" stopOpacity="0.901563" />
          <stop offset="1" stopColor="#33FFA9" />
        </linearGradient>
      </defs>
    </svg>
  );
}
