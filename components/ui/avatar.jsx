"use client"

import * as React from "react"
import * as AvatarPrimitive from "@radix-ui/react-avatar"

import { cn } from "@/lib/utils"

function Avatar({
  className,
  ...props
}) {
  return (
    (<AvatarPrimitive.Root
      data-slot="avatar"
      className={cn(
        "yrelative yflex ysize-8 yshrink-0 yoverflow-hidden yrounded-full",
        className
      )}
      {...props} />)
  );
}

function AvatarImage({
  className,
  ...props
}) {
  return (
    (<AvatarPrimitive.Image
      data-slot="avatar-image"
      className={cn("yaspect-square ysize-full", className)}
      {...props} />)
  );
}

function AvatarFallback({
  className,
  ...props
}) {
  return (
    (<AvatarPrimitive.Fallback
      data-slot="avatar-fallback"
      className={cn(
        "ybg-muted yflex ysize-full yitems-center yjustify-center yrounded-full",
        className
      )}
      {...props} />)
  );
}

export { Avatar, AvatarImage, AvatarFallback }
