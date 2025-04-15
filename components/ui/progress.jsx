"use client"

import * as React from "react"
import * as ProgressPrimitive from "@radix-ui/react-progress"

import { cn } from "@/lib/utils"

function Progress({
  className,
  value,
  ...props
}) {
  return (
    (<ProgressPrimitive.Root
      data-slot="progress"
      className={cn(
        "ybg-primary/20 yrelative yh-2 yw-full yoverflow-hidden yrounded-full",
        className
      )}
      {...props}>
      <ProgressPrimitive.Indicator
        data-slot="progress-indicator"
        className="ybg-primary yh-full yw-full yflex-1 ytransition-all"
        style={{ transform: `translateX(-${100 - (value || 0)}%)` }} />
    </ProgressPrimitive.Root>)
  );
}

export { Progress }
