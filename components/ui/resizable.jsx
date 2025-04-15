"use client"

import * as React from "react"
import { GripVerticalIcon } from "lucide-react"
import * as ResizablePrimitive from "react-resizable-panels"

import { cn } from "@/lib/utils"

function ResizablePanelGroup({
  className,
  ...props
}) {
  return (
    (<ResizablePrimitive.PanelGroup
      data-slot="resizable-panel-group"
      className={cn(
        "yflex yh-full yw-full data-[panel-group-direction=vertical]:yflex-col",
        className
      )}
      {...props} />)
  );
}

function ResizablePanel({
  ...props
}) {
  return <ResizablePrimitive.Panel data-slot="resizable-panel" {...props} />;
}

function ResizableHandle({
  withHandle,
  className,
  ...props
}) {
  return (
    (<ResizablePrimitive.PanelResizeHandle
      data-slot="resizable-handle"
      className={cn(
        "ybg-border focus-visible:yring-ring yrelative yflex yw-px yitems-center yjustify-center after:yabsolute after:yinset-y-0 after:yleft-1/2 after:yw-1 after:y-translate-x-1/2 focus-visible:yring-1 focus-visible:yring-offset-1 focus-visible:youtline-hidden data-[panel-group-direction=vertical]:yh-px data-[panel-group-direction=vertical]:yw-full data-[panel-group-direction=vertical]:after:yleft-0 data-[panel-group-direction=vertical]:after:yh-1 data-[panel-group-direction=vertical]:after:yw-full data-[panel-group-direction=vertical]:after:y-translate-y-1/2 data-[panel-group-direction=vertical]:after:ytranslate-x-0 [&[data-panel-group-direction=vertical]>div]:yrotate-90",
        className
      )}
      {...props}>
      {withHandle && (
        <div
          className="ybg-border yz-10 yflex yh-4 yw-3 yitems-center yjustify-center yrounded-xs yborder">
          <GripVerticalIcon className="ysize-2.5" />
        </div>
      )}
    </ResizablePrimitive.PanelResizeHandle>)
  );
}

export { ResizablePanelGroup, ResizablePanel, ResizableHandle }
