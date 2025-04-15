"use client"

import * as React from "react"
import * as HoverCardPrimitive from "@radix-ui/react-hover-card"

import { cn } from "@/lib/utils"

function HoverCard({
  ...props
}) {
  return <HoverCardPrimitive.Root data-slot="hover-card" {...props} />;
}

function HoverCardTrigger({
  ...props
}) {
  return (<HoverCardPrimitive.Trigger data-slot="hover-card-trigger" {...props} />);
}

function HoverCardContent({
  className,
  align = "center",
  sideOffset = 4,
  ...props
}) {
  return (
    (<HoverCardPrimitive.Portal data-slot="hover-card-portal">
      <HoverCardPrimitive.Content
        data-slot="hover-card-content"
        align={align}
        sideOffset={sideOffset}
        className={cn(
          "ybg-popover ytext-popover-foreground data-[state=open]:yanimate-in data-[state=closed]:yanimate-out data-[state=closed]:yfade-out-0 data-[state=open]:yfade-in-0 data-[state=closed]:yzoom-out-95 data-[state=open]:yzoom-in-95 data-[side=bottom]:yslide-in-from-top-2 data-[side=left]:yslide-in-from-right-2 data-[side=right]:yslide-in-from-left-2 data-[side=top]:yslide-in-from-bottom-2 yz-50 yw-64 yorigin-(--radix-hover-card-content-transform-origin) yrounded-md yborder yp-4 yshadow-md youtline-hidden",
          className
        )}
        {...props} />
    </HoverCardPrimitive.Portal>)
  );
}

export { HoverCard, HoverCardTrigger, HoverCardContent }
