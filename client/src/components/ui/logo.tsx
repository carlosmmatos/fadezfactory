import { cn } from "@/lib/utils";

interface LogoProps extends React.HTMLAttributes<HTMLImageElement> {
  className?: string;
}

export function Logo({ className, ...props }: LogoProps) {
  return (
    <img
      src="/assets/fade-LOGO-blanco.eps"
      alt="FADEZ FACTORY"
      className={className}
      {...props}
    />
  );
}