// classnames
import cn from "classnames";
import { colors } from "constants/colors";
import { FC, useMemo } from "react";

// ** style
import style from "./avatar.module.css";

interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  imageURL?: string;
  className?: string;
}

interface RandomAvatarProps {
  size: number;
  id: number;
}

export default function Avatar({
  children,
  imageURL,
  className,
  ...props
}: AvatarProps) {
  return (
    <div className={cn(style.avatar, className)} {...props}>
      {children}
      {imageURL && <img src={imageURL} />}
    </div>
  );
}

export const RandomAvatar: FC<RandomAvatarProps> = (props) => {
  const theme = colors[props.id];

  return (
    <svg
      width={props.size}
      height={props.size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_7_44)">
        <rect
          width={props.size}
          height={props.size}
          rx="150"
          fill={theme.bgColor}
        />
        <circle stroke="black" strokeWidth="14" />
        <circle fill="#05C46B" stroke="black" strokeWidth="14" />
      </g>
      <defs>
        <clipPath id="clip0_7_44">
          <rect width={props.size} height={props.size} rx="150" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
