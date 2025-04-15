"use client"

import * as React from "react"
import * as SeparatorPrimitive from "@radix-ui/react-separator"

import { cn } from "@/lib/utils"

function Separator({
  className,
  orientation = "horizontal",
  decorative = true,
  ...props
}) {
  return (
    (<SeparatorPrimitive.Root
      data-slot="separator-root"
      decorative={decorative}
      orientation={orientation}
      className={cn(
        "ybg-border yshrink-0 data-[orientation=horizontal]:yh-px data-[orientation=horizontal]:yw-full data-[orientation=vertical]:yh-full data-[orientation=vertical]:yw-px",
        className
      )}
      {...props} />)
  );
}

export { Separator }
