import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cn } from "@/lib/utils"
import { ChevronRightIcon, DotsHorizontalIcon } from "@radix-ui/react-icons"

function Breadcrumb({
  ...props
}) {
  return <nav aria-label="breadcrumb" data-slot="breadcrumb" {...props} />;
}

function BreadcrumbList({
  className,
  ...props
}) {
  return (
    (<ol
      data-slot="breadcrumb-list"
      className={cn(
        "ytext-muted-foreground yflex yflex-wrap yitems-center ygap-1.5 ytext-sm ybreak-words sm:ygap-2.5",
        className
      )}
      {...props} />)
  );
}

function BreadcrumbItem({
  className,
  ...props
}) {
  return (
    (<li
      data-slot="breadcrumb-item"
      className={cn("yinline-flex yitems-center ygap-1.5", className)}
      {...props} />)
  );
}

function BreadcrumbLink({
  asChild,
  className,
  ...props
}) {
  const Comp = asChild ? Slot : "a"

  return (
    (<Comp
      data-slot="breadcrumb-link"
      className={cn("hover:ytext-foreground ytransition-colors", className)}
      {...props} />)
  );
}

function BreadcrumbPage({
  className,
  ...props
}) {
  return (
    (<span
      data-slot="breadcrumb-page"
      role="link"
      aria-disabled="true"
      aria-current="page"
      className={cn("ytext-foreground yfont-normal", className)}
      {...props} />)
  );
}

function BreadcrumbSeparator({
  children,
  className,
  ...props
}) {
  return (
    (<li
      data-slot="breadcrumb-separator"
      role="presentation"
      aria-hidden="true"
      className={cn("[&>svg]:ysize-3.5", className)}
      {...props}>
      {children ?? <ChevronRightIcon />}
    </li>)
  );
}

function BreadcrumbEllipsis({
  className,
  ...props
}) {
  return (
    (<span
      data-slot="breadcrumb-ellipsis"
      role="presentation"
      aria-hidden="true"
      className={cn("yflex ysize-9 yitems-center yjustify-center", className)}
      {...props}>
      <DotsHorizontalIcon className="ysize-4" />
      <span className="ysr-only">More</span>
    </span>)
  );
}

export {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
}
