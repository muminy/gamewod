// classnames
import cn from "classnames";

// ** style
import style from "./button.module.css";

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  color?: "dark" | "light" | "primary" | "icon" | "wallet" | "more";
  children?: React.ReactNode;
  className?: string;
}

export default function Button({
  children,
  className,
  color = "light",
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(style.btn, style[`btn-${color}`], className)}
      {...props}
    >
      {children}
    </button>
  );
}

export const WalletButton: React.FC<ButtonProps> = ({
  className,
  children,
  ...props
}) => {
  return (
    <button className={cn(style.wallet_btn, className)} {...props}>
      <span className={cn("relative")}>{children}</span>
    </button>
  );
};
