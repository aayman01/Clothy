"use client"

import * as React from "react"
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group"
import { CircleIcon } from "lucide-react"

import { cn } from "@/lib/utils"

function RadioGroup({
  className,
  ...props
}) {
  return (
    (<RadioGroupPrimitive.Root
      data-slot="radio-group"
      className={cn("ygrid ygap-3", className)}
      {...props} />)
  );
}

function RadioGroupItem({
  className,
  ...props
}) {
  return (
    (<RadioGroupPrimitive.Item
      data-slot="radio-group-item"
      className={cn(
        "yborder-input ytext-primary focus-visible:yborder-ring focus-visible:yring-ring/50 aria-invalid:yring-destructive/20 dark:aria-invalid:yring-destructive/40 aria-invalid:yborder-destructive dark:ybg-input/30 yaspect-square ysize-4 yshrink-0 yrounded-full yborder yshadow-xs ytransition-[color,box-shadow] youtline-none focus-visible:yring-[3px] disabled:ycursor-not-allowed disabled:yopacity-50",
        className
      )}
      {...props}>
      <RadioGroupPrimitive.Indicator
        data-slot="radio-group-indicator"
        className="yrelative yflex yitems-center yjustify-center">
        <CircleIcon
          className="yfill-primary yabsolute ytop-1/2 yleft-1/2 ysize-2 y-translate-x-1/2 y-translate-y-1/2" />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>)
  );
}

export { RadioGroup, RadioGroupItem }
