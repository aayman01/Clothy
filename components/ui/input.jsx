import * as React from "react"

import { cn } from "@/lib/utils"

function Input({
  className,
  type,
  ...props
}) {
  return (
    (<input
      type={type}
      data-slot="input"
      className={cn(
        "file:ytext-foreground placeholder:ytext-muted-foreground selection:ybg-primary selection:ytext-primary-foreground dark:ybg-input/30 yborder-input yflex yh-9 yw-full ymin-w-0 yrounded-md yborder ybg-transparent ypx-3 ypy-1 ytext-base yshadow-xs ytransition-[color,box-shadow] youtline-none file:yinline-flex file:yh-7 file:yborder-0 file:ybg-transparent file:ytext-sm file:yfont-medium disabled:ypointer-events-none disabled:ycursor-not-allowed disabled:yopacity-50 md:ytext-sm",
        "focus-visible:yborder-ring focus-visible:yring-ring/50 focus-visible:yring-[3px]",
        "aria-invalid:yring-destructive/20 dark:aria-invalid:yring-destructive/40 aria-invalid:yborder-destructive",
        className
      )}
      {...props} />)
  );
}

export { Input }
