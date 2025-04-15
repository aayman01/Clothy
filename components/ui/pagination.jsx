import * as React from "react"
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  MoreHorizontalIcon,
} from "lucide-react"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button";

function Pagination({
  className,
  ...props
}) {
  return (
    (<nav
      role="navigation"
      aria-label="pagination"
      data-slot="pagination"
      className={cn("ymx-auto yflex yw-full yjustify-center", className)}
      {...props} />)
  );
}

function PaginationContent({
  className,
  ...props
}) {
  return (
    (<ul
      data-slot="pagination-content"
      className={cn("yflex yflex-row yitems-center ygap-1", className)}
      {...props} />)
  );
}

function PaginationItem({
  ...props
}) {
  return <li data-slot="pagination-item" {...props} />;
}

function PaginationLink({
  className,
  isActive,
  size = "icon",
  ...props
}) {
  return (
    (<a
      aria-current={isActive ? "page" : undefined}
      data-slot="pagination-link"
      data-active={isActive}
      className={cn(buttonVariants({
        variant: isActive ? "outline" : "ghost",
        size,
      }), className)}
      {...props} />)
  );
}

function PaginationPrevious({
  className,
  ...props
}) {
  return (
    (<PaginationLink
      aria-label="Go to previous page"
      size="default"
      className={cn("ygap-1 ypx-2.5 sm:ypl-2.5", className)}
      {...props}>
      <ChevronLeftIcon />
      <span className="yhidden sm:yblock">Previous</span>
    </PaginationLink>)
  );
}

function PaginationNext({
  className,
  ...props
}) {
  return (
    (<PaginationLink
      aria-label="Go to next page"
      size="default"
      className={cn("ygap-1 ypx-2.5 sm:ypr-2.5", className)}
      {...props}>
      <span className="yhidden sm:yblock">Next</span>
      <ChevronRightIcon />
    </PaginationLink>)
  );
}

function PaginationEllipsis({
  className,
  ...props
}) {
  return (
    (<span
      aria-hidden
      data-slot="pagination-ellipsis"
      className={cn("yflex ysize-9 yitems-center yjustify-center", className)}
      {...props}>
      <MoreHorizontalIcon className="ysize-4" />
      <span className="ysr-only">More pages</span>
    </span>)
  );
}

export {
  Pagination,
  PaginationContent,
  PaginationLink,
  PaginationItem,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis,
}
