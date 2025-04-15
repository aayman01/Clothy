"use client"

import * as React from "react"
import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area"

import { cn } from "@/lib/utils"

function ScrollArea({
  className,
  children,
  ...props
}) {
  return (
    (<ScrollAreaPrimitive.Root data-slot="scroll-area" className={cn("yrelative", className)} {...props}>
      <ScrollAreaPrimitive.Viewport
        data-slot="scroll-area-viewport"
        className="focus-visible:yring-ring/50 ysize-full yrounded-[inherit] ytransition-[color,box-shadow] youtline-none focus-visible:yring-[3px] focus-visible:youtline-1">
        {children}
      </ScrollAreaPrimitive.Viewport>
      <ScrollBar />
      <ScrollAreaPrimitive.Corner />
    </ScrollAreaPrimitive.Root>)
  );
}

function ScrollBar({
  className,
  orientation = "vertical",
  ...props
}) {
  return (
    (<ScrollAreaPrimitive.ScrollAreaScrollbar
      data-slot="scroll-area-scrollbar"
      orientation={orientation}
      className={cn(
        "yflex ytouch-none yp-px ytransition-colors yselect-none",
        orientation === "vertical" &&
          "yh-full yw-2.5 yborder-l yborder-l-transparent",
        orientation === "horizontal" &&
          "yh-2.5 yflex-col yborder-t yborder-t-transparent",
        className
      )}
      {...props}>
      <ScrollAreaPrimitive.ScrollAreaThumb
        data-slot="scroll-area-thumb"
        className="ybg-border yrelative yflex-1 yrounded-full" />
    </ScrollAreaPrimitive.ScrollAreaScrollbar>)
  );
}

export { ScrollArea, ScrollBar }
