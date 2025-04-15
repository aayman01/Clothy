import * as React from "react"

import { cn } from "@/lib/utils"

function Textarea({
  className,
  ...props
}) {
  return (
    (<textarea
      data-slot="textarea"
      className={cn(
        "yborder-input placeholder:ytext-muted-foreground focus-visible:yborder-ring focus-visible:yring-ring/50 aria-invalid:yring-destructive/20 dark:aria-invalid:yring-destructive/40 aria-invalid:yborder-destructive dark:ybg-input/30 yflex yfield-sizing-content ymin-h-16 yw-full yrounded-md yborder ybg-transparent ypx-3 ypy-2 ytext-base yshadow-xs ytransition-[color,box-shadow] youtline-none focus-visible:yring-[3px] disabled:ycursor-not-allowed disabled:yopacity-50 md:ytext-sm",
        className
      )}
      {...props} />)
  );
}

export { Textarea }
