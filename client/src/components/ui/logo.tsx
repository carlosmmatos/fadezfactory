import { cn } from "@/lib/utils";

interface LogoProps extends React.HTMLAttributes<HTMLImageElement> {
  className?: string;
}

export function Logo({ className, ...props }: LogoProps) {
  return (
    <img
      src="/assets/logo.svg"
      alt="FADEZ FACTORY"
      className={cn("h-auto", className)}
      {...props}
    />
  );
}