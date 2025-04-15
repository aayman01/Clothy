"use client"

import * as React from "react"
import * as TooltipPrimitive from "@radix-ui/react-tooltip"

import { cn } from "@/lib/utils"

function TooltipProvider({
  delayDuration = 0,
  ...props
}) {
  return (<TooltipPrimitive.Provider data-slot="tooltip-provider" delayDuration={delayDuration} {...props} />);
}

function Tooltip({
  ...props
}) {
  return (
    (<TooltipProvider>
      <TooltipPrimitive.Root data-slot="tooltip" {...props} />
    </TooltipProvider>)
  );
}

function TooltipTrigger({
  ...props
}) {
  return <TooltipPrimitive.Trigger data-slot="tooltip-trigger" {...props} />;
}

function TooltipContent({
  className,
  sideOffset = 0,
  children,
  ...props
}) {
  return (
    (<TooltipPrimitive.Portal>
      <TooltipPrimitive.Content
        data-slot="tooltip-content"
        sideOffset={sideOffset}
        className={cn(
          "ybg-primary ytext-primary-foreground yanimate-in yfade-in-0 yzoom-in-95 data-[state=closed]:yanimate-out data-[state=closed]:yfade-out-0 data-[state=closed]:yzoom-out-95 data-[side=bottom]:yslide-in-from-top-2 data-[side=left]:yslide-in-from-right-2 data-[side=right]:yslide-in-from-left-2 data-[side=top]:yslide-in-from-bottom-2 yz-50 yw-fit yorigin-(--radix-tooltip-content-transform-origin) yrounded-md ypx-3 ypy-1.5 ytext-xs ytext-balance",
          className
        )}
        {...props}>
        {children}
        <TooltipPrimitive.Arrow
          className="ybg-primary yfill-primary yz-50 ysize-2.5 ytranslate-y-[calc(-50%_-_2px)] yrotate-45 yrounded-[2px]" />
      </TooltipPrimitive.Content>
    </TooltipPrimitive.Portal>)
  );
}

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider }
