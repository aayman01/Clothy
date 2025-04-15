"use client";
import * as React from "react"
import * as ToggleGroupPrimitive from "@radix-ui/react-toggle-group"

import { cn } from "@/lib/utils"
import { toggleVariants } from "@/components/ui/toggle"

const ToggleGroupContext = React.createContext({
  size: "default",
  variant: "default",
})

function ToggleGroup({
  className,
  variant,
  size,
  children,
  ...props
}) {
  return (
    (<ToggleGroupPrimitive.Root
      data-slot="toggle-group"
      data-variant={variant}
      data-size={size}
      className={cn(
        "ygroup/toggle-group yflex yw-fit yitems-center yrounded-md data-[variant=outline]:yshadow-xs",
        className
      )}
      {...props}>
      <ToggleGroupContext.Provider value={{ variant, size }}>
        {children}
      </ToggleGroupContext.Provider>
    </ToggleGroupPrimitive.Root>)
  );
}

function ToggleGroupItem({
  className,
  children,
  variant,
  size,
  ...props
}) {
  const context = React.useContext(ToggleGroupContext)

  return (
    (<ToggleGroupPrimitive.Item
      data-slot="toggle-group-item"
      data-variant={context.variant || variant}
      data-size={context.size || size}
      className={cn(toggleVariants({
        variant: context.variant || variant,
        size: context.size || size,
      }), "ymin-w-0 yflex-1 yshrink-0 yrounded-none yshadow-none first:yrounded-l-md last:yrounded-r-md focus:yz-10 focus-visible:yz-10 data-[variant=outline]:yborder-l-0 data-[variant=outline]:first:yborder-l", className)}
      {...props}>
      {children}
    </ToggleGroupPrimitive.Item>)
  );
}

export { ToggleGroup, ToggleGroupItem }
