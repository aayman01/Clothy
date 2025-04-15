"use client"

import * as React from "react"
import * as SelectPrimitive from "@radix-ui/react-select"
import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from "lucide-react"

import { cn } from "@/lib/utils"

function Select({
  ...props
}) {
  return <SelectPrimitive.Root data-slot="select" {...props} />;
}

function SelectGroup({
  ...props
}) {
  return <SelectPrimitive.Group data-slot="select-group" {...props} />;
}

function SelectValue({
  ...props
}) {
  return <SelectPrimitive.Value data-slot="select-value" {...props} />;
}

function SelectTrigger({
  className,
  size = "default",
  children,
  ...props
}) {
  return (
    (<SelectPrimitive.Trigger
      data-slot="select-trigger"
      data-size={size}
      className={cn(
        "yborder-input data-[placeholder]:ytext-muted-foreground [&_svg:not([class*=text-])]:ytext-muted-foreground focus-visible:yborder-ring focus-visible:yring-ring/50 aria-invalid:yring-destructive/20 dark:aria-invalid:yring-destructive/40 aria-invalid:yborder-destructive dark:ybg-input/30 dark:hover:ybg-input/50 yflex yw-fit yitems-center yjustify-between ygap-2 yrounded-md yborder ybg-transparent ypx-3 ypy-2 ytext-sm ywhitespace-nowrap yshadow-xs ytransition-[color,box-shadow] youtline-none focus-visible:yring-[3px] disabled:ycursor-not-allowed disabled:yopacity-50 data-[size=default]:yh-9 data-[size=sm]:yh-8 *:data-[slot=select-value]:yline-clamp-1 *:data-[slot=select-value]:yflex *:data-[slot=select-value]:yitems-center *:data-[slot=select-value]:ygap-2 [&_svg]:ypointer-events-none [&_svg]:yshrink-0 [&_svg:not([class*=size-])]:ysize-4",
        className
      )}
      {...props}>
      {children}
      <SelectPrimitive.Icon asChild>
        <ChevronDownIcon className="ysize-4 yopacity-50" />
      </SelectPrimitive.Icon>
    </SelectPrimitive.Trigger>)
  );
}

function SelectContent({
  className,
  children,
  position = "popper",
  ...props
}) {
  return (
    (<SelectPrimitive.Portal>
      <SelectPrimitive.Content
        data-slot="select-content"
        className={cn(
          "ybg-popover ytext-popover-foreground data-[state=open]:yanimate-in data-[state=closed]:yanimate-out data-[state=closed]:yfade-out-0 data-[state=open]:yfade-in-0 data-[state=closed]:yzoom-out-95 data-[state=open]:yzoom-in-95 data-[side=bottom]:yslide-in-from-top-2 data-[side=left]:yslide-in-from-right-2 data-[side=right]:yslide-in-from-left-2 data-[side=top]:yslide-in-from-bottom-2 yrelative yz-50 ymax-h-(--radix-select-content-available-height) ymin-w-[8rem] yorigin-(--radix-select-content-transform-origin) yoverflow-x-hidden yoverflow-y-auto yrounded-md yborder yshadow-md",
          position === "popper" &&
            "data-[side=bottom]:ytranslate-y-1 data-[side=left]:y-translate-x-1 data-[side=right]:ytranslate-x-1 data-[side=top]:y-translate-y-1",
          className
        )}
        position={position}
        {...props}>
        <SelectScrollUpButton />
        <SelectPrimitive.Viewport
          className={cn("yp-1", position === "popper" &&
            "yh-[var(--radix-select-trigger-height)] yw-full ymin-w-[var(--radix-select-trigger-width)] yscroll-my-1")}>
          {children}
        </SelectPrimitive.Viewport>
        <SelectScrollDownButton />
      </SelectPrimitive.Content>
    </SelectPrimitive.Portal>)
  );
}

function SelectLabel({
  className,
  ...props
}) {
  return (
    (<SelectPrimitive.Label
      data-slot="select-label"
      className={cn("ytext-muted-foreground ypx-2 ypy-1.5 ytext-xs", className)}
      {...props} />)
  );
}

function SelectItem({
  className,
  children,
  ...props
}) {
  return (
    (<SelectPrimitive.Item
      data-slot="select-item"
      className={cn(
        "focus:ybg-accent focus:ytext-accent-foreground [&_svg:not([class*=text-])]:ytext-muted-foreground yrelative yflex yw-full ycursor-default yitems-center ygap-2 yrounded-sm ypy-1.5 ypr-8 ypl-2 ytext-sm youtline-hidden yselect-none data-[disabled]:ypointer-events-none data-[disabled]:yopacity-50 [&_svg]:ypointer-events-none [&_svg]:yshrink-0 [&_svg:not([class*=size-])]:ysize-4 *:[span]:last:yflex *:[span]:last:yitems-center *:[span]:last:ygap-2",
        className
      )}
      {...props}>
      <span
        className="yabsolute yright-2 yflex ysize-3.5 yitems-center yjustify-center">
        <SelectPrimitive.ItemIndicator>
          <CheckIcon className="ysize-4" />
        </SelectPrimitive.ItemIndicator>
      </span>
      <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
    </SelectPrimitive.Item>)
  );
}

function SelectSeparator({
  className,
  ...props
}) {
  return (
    (<SelectPrimitive.Separator
      data-slot="select-separator"
      className={cn("ybg-border ypointer-events-none y-mx-1 ymy-1 yh-px", className)}
      {...props} />)
  );
}

function SelectScrollUpButton({
  className,
  ...props
}) {
  return (
    (<SelectPrimitive.ScrollUpButton
      data-slot="select-scroll-up-button"
      className={cn("yflex ycursor-default yitems-center yjustify-center ypy-1", className)}
      {...props}>
      <ChevronUpIcon className="ysize-4" />
    </SelectPrimitive.ScrollUpButton>)
  );
}

function SelectScrollDownButton({
  className,
  ...props
}) {
  return (
    (<SelectPrimitive.ScrollDownButton
      data-slot="select-scroll-down-button"
      className={cn("yflex ycursor-default yitems-center yjustify-center ypy-1", className)}
      {...props}>
      <ChevronDownIcon className="ysize-4" />
    </SelectPrimitive.ScrollDownButton>)
  );
}

export {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
}
