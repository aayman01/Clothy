import * as React from "react"
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu"
import { cva } from "class-variance-authority"
import { ChevronDownIcon } from "lucide-react"

import { cn } from "@/lib/utils"

function NavigationMenu({
  className,
  children,
  viewport = true,
  ...props
}) {
  return (
    (<NavigationMenuPrimitive.Root
      data-slot="navigation-menu"
      data-viewport={viewport}
      className={cn(
        "ygroup/navigation-menu yrelative yflex ymax-w-max yflex-1 yitems-center yjustify-center",
        className
      )}
      {...props}>
      {children}
      {viewport && <NavigationMenuViewport />}
    </NavigationMenuPrimitive.Root>)
  );
}

function NavigationMenuList({
  className,
  ...props
}) {
  return (
    (<NavigationMenuPrimitive.List
      data-slot="navigation-menu-list"
      className={cn(
        "ygroup yflex yflex-1 ylist-none yitems-center yjustify-center ygap-1",
        className
      )}
      {...props} />)
  );
}

function NavigationMenuItem({
  className,
  ...props
}) {
  return (
    (<NavigationMenuPrimitive.Item
      data-slot="navigation-menu-item"
      className={cn("yrelative", className)}
      {...props} />)
  );
}

const navigationMenuTriggerStyle = cva(
  "ygroup yinline-flex yh-9 yw-max yitems-center yjustify-center yrounded-md ybg-background ypx-4 ypy-2 ytext-sm yfont-medium hover:ybg-accent hover:ytext-accent-foreground focus:ybg-accent focus:ytext-accent-foreground disabled:ypointer-events-none disabled:yopacity-50 data-[state=open]:hover:ybg-accent data-[state=open]:ytext-accent-foreground data-[state=open]:focus:ybg-accent data-[state=open]:ybg-accent/50 focus-visible:yring-ring/50 youtline-none ytransition-[color,box-shadow] focus-visible:yring-[3px] focus-visible:youtline-1"
)

function NavigationMenuTrigger({
  className,
  children,
  ...props
}) {
  return (
    (<NavigationMenuPrimitive.Trigger
      data-slot="navigation-menu-trigger"
      className={cn(navigationMenuTriggerStyle(), "ygroup", className)}
      {...props}>
      {children}{" "}
      <ChevronDownIcon
        className="yrelative ytop-[1px] yml-1 ysize-3 ytransition yduration-300 group-data-[state=open]:yrotate-180"
        aria-hidden="true" />
    </NavigationMenuPrimitive.Trigger>)
  );
}

function NavigationMenuContent({
  className,
  ...props
}) {
  return (
    (<NavigationMenuPrimitive.Content
      data-slot="navigation-menu-content"
      className={cn(
        "data-[motion^=from-]:yanimate-in data-[motion^=to-]:yanimate-out data-[motion^=from-]:yfade-in data-[motion^=to-]:yfade-out data-[motion=from-end]:yslide-in-from-right-52 data-[motion=from-start]:yslide-in-from-left-52 data-[motion=to-end]:yslide-out-to-right-52 data-[motion=to-start]:yslide-out-to-left-52 ytop-0 yleft-0 yw-full yp-2 ypr-2.5 md:yabsolute md:yw-auto",
        "ygroup-data-[viewport=false]/navigation-menu:bg-popover ygroup-data-[viewport=false]/navigation-menu:text-popover-foreground ygroup-data-[viewport=false]/navigation-menu:data-[state=open]:animate-in ygroup-data-[viewport=false]/navigation-menu:data-[state=closed]:animate-out ygroup-data-[viewport=false]/navigation-menu:data-[state=closed]:zoom-out-95 ygroup-data-[viewport=false]/navigation-menu:data-[state=open]:zoom-in-95 ygroup-data-[viewport=false]/navigation-menu:data-[state=open]:fade-in-0 ygroup-data-[viewport=false]/navigation-menu:data-[state=closed]:fade-out-0 ygroup-data-[viewport=false]/navigation-menu:top-full ygroup-data-[viewport=false]/navigation-menu:mt-1.5 ygroup-data-[viewport=false]/navigation-menu:overflow-hidden ygroup-data-[viewport=false]/navigation-menu:rounded-md ygroup-data-[viewport=false]/navigation-menu:border ygroup-data-[viewport=false]/navigation-menu:shadow ygroup-data-[viewport=false]/navigation-menu:duration-200 **:data-[slot=navigation-menu-link]:focus:yring-0 **:data-[slot=navigation-menu-link]:focus:youtline-none",
        className
      )}
      {...props} />)
  );
}

function NavigationMenuViewport({
  className,
  ...props
}) {
  return (
    (<div
      className={cn("yabsolute ytop-full yleft-0 yisolate yz-50 yflex yjustify-center")}>
      <NavigationMenuPrimitive.Viewport
        data-slot="navigation-menu-viewport"
        className={cn(
          "yorigin-top-center ybg-popover ytext-popover-foreground data-[state=open]:yanimate-in data-[state=closed]:yanimate-out data-[state=closed]:yzoom-out-95 data-[state=open]:yzoom-in-90 yrelative ymt-1.5 yh-[var(--radix-navigation-menu-viewport-height)] yw-full yoverflow-hidden yrounded-md yborder yshadow md:yw-[var(--radix-navigation-menu-viewport-width)]",
          className
        )}
        {...props} />
    </div>)
  );
}

function NavigationMenuLink({
  className,
  ...props
}) {
  return (
    (<NavigationMenuPrimitive.Link
      data-slot="navigation-menu-link"
      className={cn(
        "data-[active=true]:focus:ybg-accent data-[active=true]:hover:ybg-accent data-[active=true]:ybg-accent/50 data-[active=true]:ytext-accent-foreground hover:ybg-accent hover:ytext-accent-foreground focus:ybg-accent focus:ytext-accent-foreground focus-visible:yring-ring/50 [&_svg:not([class*=text-])]:ytext-muted-foreground yflex yflex-col ygap-1 yrounded-sm yp-2 ytext-sm ytransition-all youtline-none focus-visible:yring-[3px] focus-visible:youtline-1 [&_svg:not([class*=size-])]:ysize-4",
        className
      )}
      {...props} />)
  );
}

function NavigationMenuIndicator({
  className,
  ...props
}) {
  return (
    (<NavigationMenuPrimitive.Indicator
      data-slot="navigation-menu-indicator"
      className={cn(
        "data-[state=visible]:yanimate-in data-[state=hidden]:yanimate-out data-[state=hidden]:yfade-out data-[state=visible]:yfade-in ytop-full yz-[1] yflex yh-1.5 yitems-end yjustify-center yoverflow-hidden",
        className
      )}
      {...props}>
      <div
        className="ybg-border yrelative ytop-[60%] yh-2 yw-2 yrotate-45 yrounded-tl-sm yshadow-md" />
    </NavigationMenuPrimitive.Indicator>)
  );
}

export {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuContent,
  NavigationMenuTrigger,
  NavigationMenuLink,
  NavigationMenuIndicator,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
}
