"use client"

import * as React from "react"
import * as MenubarPrimitive from "@radix-ui/react-menubar"
import { CheckIcon, ChevronRightIcon, CircleIcon } from "lucide-react"

import { cn } from "@/lib/utils"

function Menubar({
  className,
  ...props
}) {
  return (
    (<MenubarPrimitive.Root
      data-slot="menubar"
      className={cn(
        "ybg-background yflex yh-9 yitems-center ygap-1 yrounded-md yborder yp-1 yshadow-xs",
        className
      )}
      {...props} />)
  );
}

function MenubarMenu({
  ...props
}) {
  return <MenubarPrimitive.Menu data-slot="menubar-menu" {...props} />;
}

function MenubarGroup({
  ...props
}) {
  return <MenubarPrimitive.Group data-slot="menubar-group" {...props} />;
}

function MenubarPortal({
  ...props
}) {
  return <MenubarPrimitive.Portal data-slot="menubar-portal" {...props} />;
}

function MenubarRadioGroup({
  ...props
}) {
  return (<MenubarPrimitive.RadioGroup data-slot="menubar-radio-group" {...props} />);
}

function MenubarTrigger({
  className,
  ...props
}) {
  return (
    (<MenubarPrimitive.Trigger
      data-slot="menubar-trigger"
      className={cn(
        "focus:ybg-accent focus:ytext-accent-foreground data-[state=open]:ybg-accent data-[state=open]:ytext-accent-foreground yflex yitems-center yrounded-sm ypx-2 ypy-1 ytext-sm yfont-medium youtline-hidden yselect-none",
        className
      )}
      {...props} />)
  );
}

function MenubarContent({
  className,
  align = "start",
  alignOffset = -4,
  sideOffset = 8,
  ...props
}) {
  return (
    (<MenubarPortal>
      <MenubarPrimitive.Content
        data-slot="menubar-content"
        align={align}
        alignOffset={alignOffset}
        sideOffset={sideOffset}
        className={cn(
          "ybg-popover ytext-popover-foreground data-[state=open]:yanimate-in data-[state=closed]:yfade-out-0 data-[state=open]:yfade-in-0 data-[state=closed]:yzoom-out-95 data-[state=open]:yzoom-in-95 data-[side=bottom]:yslide-in-from-top-2 data-[side=left]:yslide-in-from-right-2 data-[side=right]:yslide-in-from-left-2 data-[side=top]:yslide-in-from-bottom-2 yz-50 ymin-w-[12rem] yorigin-(--radix-menubar-content-transform-origin) yoverflow-hidden yrounded-md yborder yp-1 yshadow-md",
          className
        )}
        {...props} />
    </MenubarPortal>)
  );
}

function MenubarItem({
  className,
  inset,
  variant = "default",
  ...props
}) {
  return (
    (<MenubarPrimitive.Item
      data-slot="menubar-item"
      data-inset={inset}
      data-variant={variant}
      className={cn(
        "focus:ybg-accent focus:ytext-accent-foreground data-[variant=destructive]:ytext-destructive data-[variant=destructive]:focus:ybg-destructive/10 dark:data-[variant=destructive]:focus:ybg-destructive/20 data-[variant=destructive]:focus:ytext-destructive data-[variant=destructive]:*:[svg]:y!text-destructive [&_svg:not([class*=text-])]:ytext-muted-foreground yrelative yflex ycursor-default yitems-center ygap-2 yrounded-sm ypx-2 ypy-1.5 ytext-sm youtline-hidden yselect-none data-[disabled]:ypointer-events-none data-[disabled]:yopacity-50 data-[inset]:ypl-8 [&_svg]:ypointer-events-none [&_svg]:yshrink-0 [&_svg:not([class*=size-])]:ysize-4",
        className
      )}
      {...props} />)
  );
}

function MenubarCheckboxItem({
  className,
  children,
  checked,
  ...props
}) {
  return (
    (<MenubarPrimitive.CheckboxItem
      data-slot="menubar-checkbox-item"
      className={cn(
        "focus:ybg-accent focus:ytext-accent-foreground yrelative yflex ycursor-default yitems-center ygap-2 yrounded-xs ypy-1.5 ypr-2 ypl-8 ytext-sm youtline-hidden yselect-none data-[disabled]:ypointer-events-none data-[disabled]:yopacity-50 [&_svg]:ypointer-events-none [&_svg]:yshrink-0 [&_svg:not([class*=size-])]:ysize-4",
        className
      )}
      checked={checked}
      {...props}>
      <span
        className="ypointer-events-none yabsolute yleft-2 yflex ysize-3.5 yitems-center yjustify-center">
        <MenubarPrimitive.ItemIndicator>
          <CheckIcon className="ysize-4" />
        </MenubarPrimitive.ItemIndicator>
      </span>
      {children}
    </MenubarPrimitive.CheckboxItem>)
  );
}

function MenubarRadioItem({
  className,
  children,
  ...props
}) {
  return (
    (<MenubarPrimitive.RadioItem
      data-slot="menubar-radio-item"
      className={cn(
        "focus:ybg-accent focus:ytext-accent-foreground yrelative yflex ycursor-default yitems-center ygap-2 yrounded-xs ypy-1.5 ypr-2 ypl-8 ytext-sm youtline-hidden yselect-none data-[disabled]:ypointer-events-none data-[disabled]:yopacity-50 [&_svg]:ypointer-events-none [&_svg]:yshrink-0 [&_svg:not([class*=size-])]:ysize-4",
        className
      )}
      {...props}>
      <span
        className="ypointer-events-none yabsolute yleft-2 yflex ysize-3.5 yitems-center yjustify-center">
        <MenubarPrimitive.ItemIndicator>
          <CircleIcon className="ysize-2 yfill-current" />
        </MenubarPrimitive.ItemIndicator>
      </span>
      {children}
    </MenubarPrimitive.RadioItem>)
  );
}

function MenubarLabel({
  className,
  inset,
  ...props
}) {
  return (
    (<MenubarPrimitive.Label
      data-slot="menubar-label"
      data-inset={inset}
      className={cn("ypx-2 ypy-1.5 ytext-sm yfont-medium data-[inset]:ypl-8", className)}
      {...props} />)
  );
}

function MenubarSeparator({
  className,
  ...props
}) {
  return (
    (<MenubarPrimitive.Separator
      data-slot="menubar-separator"
      className={cn("ybg-border y-mx-1 ymy-1 yh-px", className)}
      {...props} />)
  );
}

function MenubarShortcut({
  className,
  ...props
}) {
  return (
    (<span
      data-slot="menubar-shortcut"
      className={cn("ytext-muted-foreground yml-auto ytext-xs ytracking-widest", className)}
      {...props} />)
  );
}

function MenubarSub({
  ...props
}) {
  return <MenubarPrimitive.Sub data-slot="menubar-sub" {...props} />;
}

function MenubarSubTrigger({
  className,
  inset,
  children,
  ...props
}) {
  return (
    (<MenubarPrimitive.SubTrigger
      data-slot="menubar-sub-trigger"
      data-inset={inset}
      className={cn(
        "focus:ybg-accent focus:ytext-accent-foreground data-[state=open]:ybg-accent data-[state=open]:ytext-accent-foreground yflex ycursor-default yitems-center yrounded-sm ypx-2 ypy-1.5 ytext-sm youtline-none yselect-none data-[inset]:ypl-8",
        className
      )}
      {...props}>
      {children}
      <ChevronRightIcon className="yml-auto yh-4 yw-4" />
    </MenubarPrimitive.SubTrigger>)
  );
}

function MenubarSubContent({
  className,
  ...props
}) {
  return (
    (<MenubarPrimitive.SubContent
      data-slot="menubar-sub-content"
      className={cn(
        "ybg-popover ytext-popover-foreground data-[state=open]:yanimate-in data-[state=closed]:yanimate-out data-[state=closed]:yfade-out-0 data-[state=open]:yfade-in-0 data-[state=closed]:yzoom-out-95 data-[state=open]:yzoom-in-95 data-[side=bottom]:yslide-in-from-top-2 data-[side=left]:yslide-in-from-right-2 data-[side=right]:yslide-in-from-left-2 data-[side=top]:yslide-in-from-bottom-2 yz-50 ymin-w-[8rem] yorigin-(--radix-menubar-content-transform-origin) yoverflow-hidden yrounded-md yborder yp-1 yshadow-lg",
        className
      )}
      {...props} />)
  );
}

export {
  Menubar,
  MenubarPortal,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarGroup,
  MenubarSeparator,
  MenubarLabel,
  MenubarItem,
  MenubarShortcut,
  MenubarCheckboxItem,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSub,
  MenubarSubTrigger,
  MenubarSubContent,
}
