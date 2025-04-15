"use client"

import * as React from "react"
import * as TabsPrimitive from "@radix-ui/react-tabs"

import { cn } from "@/lib/utils"

function Tabs({
  className,
  ...props
}) {
  return (
    (<TabsPrimitive.Root
      data-slot="tabs"
      className={cn("yflex yflex-col ygap-2", className)}
      {...props} />)
  );
}

function TabsList({
  className,
  ...props
}) {
  return (
    (<TabsPrimitive.List
      data-slot="tabs-list"
      className={cn(
        "ybg-muted ytext-muted-foreground yinline-flex yh-9 yw-fit yitems-center yjustify-center yrounded-lg yp-[3px]",
        className
      )}
      {...props} />)
  );
}

function TabsTrigger({
  className,
  ...props
}) {
  return (
    (<TabsPrimitive.Trigger
      data-slot="tabs-trigger"
      className={cn(
        "data-[state=active]:ybg-background dark:data-[state=active]:ytext-foreground focus-visible:yborder-ring focus-visible:yring-ring/50 focus-visible:youtline-ring dark:data-[state=active]:yborder-input dark:data-[state=active]:ybg-input/30 ytext-foreground dark:ytext-muted-foreground yinline-flex yh-[calc(100%-1px)] yflex-1 yitems-center yjustify-center ygap-1.5 yrounded-md yborder yborder-transparent ypx-2 ypy-1 ytext-sm yfont-medium ywhitespace-nowrap ytransition-[color,box-shadow] focus-visible:yring-[3px] focus-visible:youtline-1 disabled:ypointer-events-none disabled:yopacity-50 data-[state=active]:yshadow-sm [&_svg]:ypointer-events-none [&_svg]:yshrink-0 [&_svg:not([class*=size-])]:ysize-4",
        className
      )}
      {...props} />)
  );
}

function TabsContent({
  className,
  ...props
}) {
  return (
    (<TabsPrimitive.Content
      data-slot="tabs-content"
      className={cn("yflex-1 youtline-none", className)}
      {...props} />)
  );
}

export { Tabs, TabsList, TabsTrigger, TabsContent }
