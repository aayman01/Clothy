"use client"

import * as React from "react"
import * as SwitchPrimitive from "@radix-ui/react-switch"

import { cn } from "@/lib/utils"

function Switch({
  className,
  ...props
}) {
  return (
    (<SwitchPrimitive.Root
      data-slot="switch"
      className={cn(
        "ypeer data-[state=checked]:ybg-primary data-[state=unchecked]:ybg-input focus-visible:yborder-ring focus-visible:yring-ring/50 dark:data-[state=unchecked]:ybg-input/80 yinline-flex yh-[1.15rem] yw-8 yshrink-0 yitems-center yrounded-full yborder yborder-transparent yshadow-xs ytransition-all youtline-none focus-visible:yring-[3px] disabled:ycursor-not-allowed disabled:yopacity-50",
        className
      )}
      {...props}>
      <SwitchPrimitive.Thumb
        data-slot="switch-thumb"
        className={cn(
          "ybg-background dark:data-[state=unchecked]:ybg-foreground dark:data-[state=checked]:ybg-primary-foreground ypointer-events-none yblock ysize-4 yrounded-full yring-0 ytransition-transform data-[state=checked]:ytranslate-x-[calc(100%-2px)] data-[state=unchecked]:ytranslate-x-0"
        )} />
    </SwitchPrimitive.Root>)
  );
}

export { Switch }
