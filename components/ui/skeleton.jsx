import { cn } from "@/lib/utils"

function Skeleton({
  className,
  ...props
}) {
  return (
    (<div
      data-slot="skeleton"
      className={cn("ybg-accent yanimate-pulse yrounded-md", className)}
      {...props} />)
  );
}

export { Skeleton }
