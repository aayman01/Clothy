"use client"

import * as React from "react"
import * as LabelPrimitive from "@radix-ui/react-label"

import { cn } from "@/lib/utils"

function Label({
  className,
  ...props
}) {
  return (
    (<LabelPrimitive.Root
      data-slot="label"
      className={cn(
        "yflex yitems-center ygap-2 ytext-sm yleading-none yfont-medium yselect-none group-data-[disabled=true]:ypointer-events-none group-data-[disabled=true]:yopacity-50 peer-disabled:ycursor-not-allowed peer-disabled:yopacity-50",
        className
      )}
      {...props} />)
  );
}

export { Label }
