
import { LucideProps, icons } from "lucide-react";
import { cn } from "@/lib/utils";

type IconProps = {
  name: string;
  color?: string;
  size?: number;
  className?: string;
  fallback?: string;
} & LucideProps;

const Icon = ({ 
  name, 
  color, 
  size = 24, 
  className, 
  fallback = "CircleAlert", 
  ...props 
}: IconProps) => {
  // @ts-ignore - icons не типизирован
  const LucideIcon = icons[name] || icons[fallback];

  return (
    <LucideIcon
      color={color}
      size={size}
      className={cn("", className)}
      {...props}
    />
  );
};

export default Icon;
