import type {
  variant,
  size,
  color,
  fullWidth,
  ripple,
  className,
  children,
} from "@material-tailwind/react/types/components/button";
export type ButtonType = "primary" | "secondary" | "primary-outline";
export interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: variant;
  size?: size;
  color?: color;
  fullWidth?: fullWidth;
  ripple?: ripple;
  className?: className;
  children: children;
  loading?: boolean;
  buttonType?: ButtonType;
}
