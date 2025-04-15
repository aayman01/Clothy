"use client"

import * as React from "react"
import { Drawer as DrawerPrimitive } from "vaul"

import { cn } from "@/lib/utils"

function Drawer({
  ...props
}) {
  return <DrawerPrimitive.Root data-slot="drawer" {...props} />;
}

function DrawerTrigger({
  ...props
}) {
  return <DrawerPrimitive.Trigger data-slot="drawer-trigger" {...props} />;
}

function DrawerPortal({
  ...props
}) {
  return <DrawerPrimitive.Portal data-slot="drawer-portal" {...props} />;
}

function DrawerClose({
  ...props
}) {
  return <DrawerPrimitive.Close data-slot="drawer-close" {...props} />;
}

function DrawerOverlay({
  className,
  ...props
}) {
  return (
    (<DrawerPrimitive.Overlay
      data-slot="drawer-overlay"
      className={cn(
        "data-[state=open]:yanimate-in data-[state=closed]:yanimate-out data-[state=closed]:yfade-out-0 data-[state=open]:yfade-in-0 yfixed yinset-0 yz-50 ybg-black/50",
        className
      )}
      {...props} />)
  );
}

function DrawerContent({
  className,
  children,
  ...props
}) {
  return (
    (<DrawerPortal data-slot="drawer-portal">
      <DrawerOverlay />
      <DrawerPrimitive.Content
        data-slot="drawer-content"
        className={cn(
          "ygroup/drawer-content ybg-background yfixed yz-50 yflex yh-auto yflex-col",
          "data-[vaul-drawer-direction=top]:yinset-x-0 data-[vaul-drawer-direction=top]:ytop-0 data-[vaul-drawer-direction=top]:ymb-24 data-[vaul-drawer-direction=top]:ymax-h-[80vh] data-[vaul-drawer-direction=top]:yrounded-b-lg data-[vaul-drawer-direction=top]:yborder-b",
          "data-[vaul-drawer-direction=bottom]:yinset-x-0 data-[vaul-drawer-direction=bottom]:ybottom-0 data-[vaul-drawer-direction=bottom]:ymt-24 data-[vaul-drawer-direction=bottom]:ymax-h-[80vh] data-[vaul-drawer-direction=bottom]:yrounded-t-lg data-[vaul-drawer-direction=bottom]:yborder-t",
          "data-[vaul-drawer-direction=right]:yinset-y-0 data-[vaul-drawer-direction=right]:yright-0 data-[vaul-drawer-direction=right]:yw-3/4 data-[vaul-drawer-direction=right]:yborder-l data-[vaul-drawer-direction=right]:sm:ymax-w-sm",
          "data-[vaul-drawer-direction=left]:yinset-y-0 data-[vaul-drawer-direction=left]:yleft-0 data-[vaul-drawer-direction=left]:yw-3/4 data-[vaul-drawer-direction=left]:yborder-r data-[vaul-drawer-direction=left]:sm:ymax-w-sm",
          className
        )}
        {...props}>
        <div
          className="ybg-muted ymx-auto ymt-4 yhidden yh-2 yw-[100px] yshrink-0 yrounded-full ygroup-data-[vaul-drawer-direction=bottom]/drawer-content:block" />
        {children}
      </DrawerPrimitive.Content>
    </DrawerPortal>)
  );
}

function DrawerHeader({
  className,
  ...props
}) {
  return (
    (<div
      data-slot="drawer-header"
      className={cn("yflex yflex-col ygap-1.5 yp-4", className)}
      {...props} />)
  );
}

function DrawerFooter({
  className,
  ...props
}) {
  return (
    (<div
      data-slot="drawer-footer"
      className={cn("ymt-auto yflex yflex-col ygap-2 yp-4", className)}
      {...props} />)
  );
}

function DrawerTitle({
  className,
  ...props
}) {
  return (
    (<DrawerPrimitive.Title
      data-slot="drawer-title"
      className={cn("ytext-foreground yfont-semibold", className)}
      {...props} />)
  );
}

function DrawerDescription({
  className,
  ...props
}) {
  return (
    (<DrawerPrimitive.Description
      data-slot="drawer-description"
      className={cn("ytext-muted-foreground ytext-sm", className)}
      {...props} />)
  );
}

export {
  Drawer,
  DrawerPortal,
  DrawerOverlay,
  DrawerTrigger,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerFooter,
  DrawerTitle,
  DrawerDescription,
}
