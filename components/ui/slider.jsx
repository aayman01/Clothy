"use client"

import * as React from "react"
import * as SliderPrimitive from "@radix-ui/react-slider"

import { cn } from "@/lib/utils"

function Slider({
  className,
  defaultValue,
  value,
  min = 0,
  max = 100,
  ...props
}) {
  const _values = React.useMemo(() =>
    Array.isArray(value)
      ? value
      : Array.isArray(defaultValue)
        ? defaultValue
        : [min, max], [value, defaultValue, min, max])

  return (
    (<SliderPrimitive.Root
      data-slot="slider"
      defaultValue={defaultValue}
      value={value}
      min={min}
      max={max}
      className={cn(
        "yrelative yflex yw-full ytouch-none yitems-center yselect-none data-[disabled]:yopacity-50 data-[orientation=vertical]:yh-full data-[orientation=vertical]:ymin-h-44 data-[orientation=vertical]:yw-auto data-[orientation=vertical]:yflex-col",
        className
      )}
      {...props}>
      <SliderPrimitive.Track
        data-slot="slider-track"
        className={cn(
          "ybg-muted yrelative ygrow yoverflow-hidden yrounded-full data-[orientation=horizontal]:yh-1.5 data-[orientation=horizontal]:yw-full data-[orientation=vertical]:yh-full data-[orientation=vertical]:yw-1.5"
        )}>
        <SliderPrimitive.Range
          data-slot="slider-range"
          className={cn(
            "ybg-primary yabsolute data-[orientation=horizontal]:yh-full data-[orientation=vertical]:yw-full"
          )} />
      </SliderPrimitive.Track>
      {Array.from({ length: _values.length }, (_, index) => (
        <SliderPrimitive.Thumb
          data-slot="slider-thumb"
          key={index}
          className="yborder-primary ybg-background yring-ring/50 yblock ysize-4 yshrink-0 yrounded-full yborder yshadow-sm ytransition-[color,box-shadow] hover:yring-4 focus-visible:yring-4 focus-visible:youtline-hidden disabled:ypointer-events-none disabled:yopacity-50" />
      ))}
    </SliderPrimitive.Root>)
  );
}

export { Slider }
