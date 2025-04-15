"use client"

import * as React from "react"
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu"
import { CheckIcon, ChevronRightIcon, CircleIcon } from "lucide-react"

import { cn } from "@/lib/utils"

function DropdownMenu({
  ...props
}) {
  return <DropdownMenuPrimitive.Root data-slot="dropdown-menu" {...props} />;
}

function DropdownMenuPortal({
  ...props
}) {
  return (<DropdownMenuPrimitive.Portal data-slot="dropdown-menu-portal" {...props} />);
}

function DropdownMenuTrigger({
  ...props
}) {
  return (<DropdownMenuPrimitive.Trigger data-slot="dropdown-menu-trigger" {...props} />);
}

function DropdownMenuContent({
  className,
  sideOffset = 4,
  ...props
}) {
  return (
    (<DropdownMenuPrimitive.Portal>
      <DropdownMenuPrimitive.Content
        data-slot="dropdown-menu-content"
        sideOffset={sideOffset}
        className={cn(
          "ybg-popover ytext-popover-foreground data-[state=open]:yanimate-in data-[state=closed]:yanimate-out data-[state=closed]:yfade-out-0 data-[state=open]:yfade-in-0 data-[state=closed]:yzoom-out-95 data-[state=open]:yzoom-in-95 data-[side=bottom]:yslide-in-from-top-2 data-[side=left]:yslide-in-from-right-2 data-[side=right]:yslide-in-from-left-2 data-[side=top]:yslide-in-from-bottom-2 yz-50 ymax-h-(--radix-dropdown-menu-content-available-height) ymin-w-[8rem] yorigin-(--radix-dropdown-menu-content-transform-origin) yoverflow-x-hidden yoverflow-y-auto yrounded-md yborder yp-1 yshadow-md",
          className
        )}
        {...props} />
    </DropdownMenuPrimitive.Portal>)
  );
}

function DropdownMenuGroup({
  ...props
}) {
  return (<DropdownMenuPrimitive.Group data-slot="dropdown-menu-group" {...props} />);
}

function DropdownMenuItem({
  className,
  inset,
  variant = "default",
  ...props
}) {
  return (
    (<DropdownMenuPrimitive.Item
      data-slot="dropdown-menu-item"
      data-inset={inset}
      data-variant={variant}
      className={cn(
        "focus:ybg-accent focus:ytext-accent-foreground data-[variant=destructive]:ytext-destructive data-[variant=destructive]:focus:ybg-destructive/10 dark:data-[variant=destructive]:focus:ybg-destructive/20 data-[variant=destructive]:focus:ytext-destructive data-[variant=destructive]:*:[svg]:y!text-destructive [&_svg:not([class*=text-])]:ytext-muted-foreground yrelative yflex ycursor-default yitems-center ygap-2 yrounded-sm ypx-2 ypy-1.5 ytext-sm youtline-hidden yselect-none data-[disabled]:ypointer-events-none data-[disabled]:yopacity-50 data-[inset]:ypl-8 [&_svg]:ypointer-events-none [&_svg]:yshrink-0 [&_svg:not([class*=size-])]:ysize-4",
        className
      )}
      {...props} />)
  );
}

function DropdownMenuCheckboxItem({
  className,
  children,
  checked,
  ...props
}) {
  return (
    (<DropdownMenuPrimitive.CheckboxItem
      data-slot="dropdown-menu-checkbox-item"
      className={cn(
        "focus:ybg-accent focus:ytext-accent-foreground yrelative yflex ycursor-default yitems-center ygap-2 yrounded-sm ypy-1.5 ypr-2 ypl-8 ytext-sm youtline-hidden yselect-none data-[disabled]:ypointer-events-none data-[disabled]:yopacity-50 [&_svg]:ypointer-events-none [&_svg]:yshrink-0 [&_svg:not([class*=size-])]:ysize-4",
        className
      )}
      checked={checked}
      {...props}>
      <span
        className="ypointer-events-none yabsolute yleft-2 yflex ysize-3.5 yitems-center yjustify-center">
        <DropdownMenuPrimitive.ItemIndicator>
          <CheckIcon className="ysize-4" />
        </DropdownMenuPrimitive.ItemIndicator>
      </span>
      {children}
    </DropdownMenuPrimitive.CheckboxItem>)
  );
}

function DropdownMenuRadioGroup({
  ...props
}) {
  return (<DropdownMenuPrimitive.RadioGroup data-slot="dropdown-menu-radio-group" {...props} />);
}

function DropdownMenuRadioItem({
  className,
  children,
  ...props
}) {
  return (
    (<DropdownMenuPrimitive.RadioItem
      data-slot="dropdown-menu-radio-item"
      className={cn(
        "focus:ybg-accent focus:ytext-accent-foreground yrelative yflex ycursor-default yitems-center ygap-2 yrounded-sm ypy-1.5 ypr-2 ypl-8 ytext-sm youtline-hidden yselect-none data-[disabled]:ypointer-events-none data-[disabled]:yopacity-50 [&_svg]:ypointer-events-none [&_svg]:yshrink-0 [&_svg:not([class*=size-])]:ysize-4",
        className
      )}
      {...props}>
      <span
        className="ypointer-events-none yabsolute yleft-2 yflex ysize-3.5 yitems-center yjustify-center">
        <DropdownMenuPrimitive.ItemIndicator>
          <CircleIcon className="ysize-2 yfill-current" />
        </DropdownMenuPrimitive.ItemIndicator>
      </span>
      {children}
    </DropdownMenuPrimitive.RadioItem>)
  );
}

function DropdownMenuLabel({
  className,
  inset,
  ...props
}) {
  return (
    (<DropdownMenuPrimitive.Label
      data-slot="dropdown-menu-label"
      data-inset={inset}
      className={cn("ypx-2 ypy-1.5 ytext-sm yfont-medium data-[inset]:ypl-8", className)}
      {...props} />)
  );
}

function DropdownMenuSeparator({
  className,
  ...props
}) {
  return (
    (<DropdownMenuPrimitive.Separator
      data-slot="dropdown-menu-separator"
      className={cn("ybg-border y-mx-1 ymy-1 yh-px", className)}
      {...props} />)
  );
}

function DropdownMenuShortcut({
  className,
  ...props
}) {
  return (
    (<span
      data-slot="dropdown-menu-shortcut"
      className={cn("ytext-muted-foreground yml-auto ytext-xs ytracking-widest", className)}
      {...props} />)
  );
}

function DropdownMenuSub({
  ...props
}) {
  return <DropdownMenuPrimitive.Sub data-slot="dropdown-menu-sub" {...props} />;
}

function DropdownMenuSubTrigger({
  className,
  inset,
  children,
  ...props
}) {
  return (
    (<DropdownMenuPrimitive.SubTrigger
      data-slot="dropdown-menu-sub-trigger"
      data-inset={inset}
      className={cn(
        "focus:ybg-accent focus:ytext-accent-foreground data-[state=open]:ybg-accent data-[state=open]:ytext-accent-foreground yflex ycursor-default yitems-center yrounded-sm ypx-2 ypy-1.5 ytext-sm youtline-hidden yselect-none data-[inset]:ypl-8",
        className
      )}
      {...props}>
      {children}
      <ChevronRightIcon className="yml-auto ysize-4" />
    </DropdownMenuPrimitive.SubTrigger>)
  );
}

function DropdownMenuSubContent({
  className,
  ...props
}) {
  return (
    (<DropdownMenuPrimitive.SubContent
      data-slot="dropdown-menu-sub-content"
      className={cn(
        "ybg-popover ytext-popover-foreground data-[state=open]:yanimate-in data-[state=closed]:yanimate-out data-[state=closed]:yfade-out-0 data-[state=open]:yfade-in-0 data-[state=closed]:yzoom-out-95 data-[state=open]:yzoom-in-95 data-[side=bottom]:yslide-in-from-top-2 data-[side=left]:yslide-in-from-right-2 data-[side=right]:yslide-in-from-left-2 data-[side=top]:yslide-in-from-bottom-2 yz-50 ymin-w-[8rem] yorigin-(--radix-dropdown-menu-content-transform-origin) yoverflow-hidden yrounded-md yborder yp-1 yshadow-lg",
        className
      )}
      {...props} />)
  );
}

export {
  DropdownMenu,
  DropdownMenuPortal,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
}
