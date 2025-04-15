"use client"

import * as React from "react"
import * as TogglePrimitive from "@radix-ui/react-toggle"
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils"

const toggleVariants = cva(
  "yinline-flex yitems-center yjustify-center ygap-2 yrounded-md ytext-sm yfont-medium hover:ybg-muted hover:ytext-muted-foreground disabled:ypointer-events-none disabled:yopacity-50 data-[state=on]:ybg-accent data-[state=on]:ytext-accent-foreground [&_svg]:ypointer-events-none [&_svg:not([class*=size-])]:ysize-4 [&_svg]:yshrink-0 focus-visible:yborder-ring focus-visible:yring-ring/50 focus-visible:yring-[3px] youtline-none ytransition-[color,box-shadow] aria-invalid:yring-destructive/20 dark:aria-invalid:yring-destructive/40 aria-invalid:yborder-destructive ywhitespace-nowrap",
  {
    variants: {
      variant: {
        default: "ybg-transparent",
        outline:
          "yborder yborder-input ybg-transparent yshadow-xs hover:ybg-accent hover:ytext-accent-foreground",
      },
      size: {
        default: "yh-9 ypx-2 ymin-w-9",
        sm: "yh-8 ypx-1.5 ymin-w-8",
        lg: "yh-10 ypx-2.5 ymin-w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Toggle({
  className,
  variant,
  size,
  ...props
}) {
  return (
    (<TogglePrimitive.Root
      data-slot="toggle"
      className={cn(toggleVariants({ variant, size, className }))}
      {...props} />)
  );
}

export { Toggle, toggleVariants }
