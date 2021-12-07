// classnames
import cn from "classnames";

// ** style
import style from "./avatar.module.css";

interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  imageURL?: string;
  className?: string;
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
