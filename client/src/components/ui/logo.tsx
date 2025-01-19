import { cn } from "@/lib/utils";

interface LogoProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

export function Logo({ className, ...props }: LogoProps) {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 200 50"
      className={cn("h-8 w-auto", className)}
      {...props}
    >
      <text
        x="50%"
        y="50%"
        dominantBaseline="middle"
        textAnchor="middle"
        className="fill-primary font-bold text-2xl"
        style={{ fontFamily: 'system-ui' }}
      >
        FADEZ FACTORY
      </text>
    </svg>
  );
}
