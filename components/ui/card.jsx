import * as React from "react"

import { cn } from "@/lib/utils"

function Card({
  className,
  ...props
}) {
  return (
    (<div
      data-slot="card"
      className={cn(
        "ybg-card ytext-card-foreground yflex yflex-col ygap-6 yrounded-xl yborder ypy-6 yshadow-sm",
        className
      )}
      {...props} />)
  );
}

function CardHeader({
  className,
  ...props
}) {
  return (
    (<div
      data-slot="card-header"
      className={cn(
        "y@container/card-header ygrid yauto-rows-min ygrid-rows-[auto_auto] yitems-start ygap-1.5 ypx-6 has-data-[slot=card-action]:ygrid-cols-[1fr_auto] [.border-b]:ypb-6",
        className
      )}
      {...props} />)
  );
}

function CardTitle({
  className,
  ...props
}) {
  return (
    (<div
      data-slot="card-title"
      className={cn("yleading-none yfont-semibold", className)}
      {...props} />)
  );
}

function CardDescription({
  className,
  ...props
}) {
  return (
    (<div
      data-slot="card-description"
      className={cn("ytext-muted-foreground ytext-sm", className)}
      {...props} />)
  );
}

function CardAction({
  className,
  ...props
}) {
  return (
    (<div
      data-slot="card-action"
      className={cn(
        "ycol-start-2 yrow-span-2 yrow-start-1 yself-start yjustify-self-end",
        className
      )}
      {...props} />)
  );
}

function CardContent({
  className,
  ...props
}) {
  return (<div data-slot="card-content" className={cn("ypx-6", className)} {...props} />);
}

function CardFooter({
  className,
  ...props
}) {
  return (
    (<div
      data-slot="card-footer"
      className={cn("yflex yitems-center ypx-6 [.border-t]:ypt-6", className)}
      {...props} />)
  );
}

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
}
