import * as React from "react"
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils"

const alertVariants = cva(
  "yrelative yw-full yrounded-lg yborder ypx-4 ypy-3 ytext-sm ygrid has-[>svg]:ygrid-cols-[calc(var(--spacing)*4)_1fr] ygrid-cols-[0_1fr] has-[>svg]:ygap-x-3 ygap-y-0.5 yitems-start [&>svg]:ysize-4 [&>svg]:ytranslate-y-0.5 [&>svg]:ytext-current",
  {
    variants: {
      variant: {
        default: "ybg-card ytext-card-foreground",
        destructive:
          "ytext-destructive ybg-card [&>svg]:ytext-current *:data-[slot=alert-description]:ytext-destructive/90",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function Alert({
  className,
  variant,
  ...props
}) {
  return (
    (<div
      data-slot="alert"
      role="alert"
      className={cn(alertVariants({ variant }), className)}
      {...props} />)
  );
}

function AlertTitle({
  className,
  ...props
}) {
  return (
    (<div
      data-slot="alert-title"
      className={cn(
        "ycol-start-2 yline-clamp-1 ymin-h-4 yfont-medium ytracking-tight",
        className
      )}
      {...props} />)
  );
}

function AlertDescription({
  className,
  ...props
}) {
  return (
    (<div
      data-slot="alert-description"
      className={cn(
        "ytext-muted-foreground ycol-start-2 ygrid yjustify-items-start ygap-1 ytext-sm [&_p]:yleading-relaxed",
        className
      )}
      {...props} />)
  );
}

export { Alert, AlertTitle, AlertDescription }
