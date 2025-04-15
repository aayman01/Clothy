"use client"

import * as React from "react"

import { cn } from "@/lib/utils"

function Table({
  className,
  ...props
}) {
  return (
    (<div
      data-slot="table-container"
      className="yrelative yw-full yoverflow-x-auto">
      <table
        data-slot="table"
        className={cn("yw-full ycaption-bottom ytext-sm", className)}
        {...props} />
    </div>)
  );
}

function TableHeader({
  className,
  ...props
}) {
  return (
    (<thead
      data-slot="table-header"
      className={cn("[&_tr]:yborder-b", className)}
      {...props} />)
  );
}

function TableBody({
  className,
  ...props
}) {
  return (
    (<tbody
      data-slot="table-body"
      className={cn("[&_tr:last-child]:yborder-0", className)}
      {...props} />)
  );
}

function TableFooter({
  className,
  ...props
}) {
  return (
    (<tfoot
      data-slot="table-footer"
      className={cn("ybg-muted/50 yborder-t yfont-medium [&>tr]:last:yborder-b-0", className)}
      {...props} />)
  );
}

function TableRow({
  className,
  ...props
}) {
  return (
    (<tr
      data-slot="table-row"
      className={cn(
        "hover:ybg-muted/50 data-[state=selected]:ybg-muted yborder-b ytransition-colors",
        className
      )}
      {...props} />)
  );
}

function TableHead({
  className,
  ...props
}) {
  return (
    (<th
      data-slot="table-head"
      className={cn(
        "ytext-foreground yh-10 ypx-2 ytext-left yalign-middle yfont-medium ywhitespace-nowrap [&:has([role=checkbox])]:ypr-0 [&>[role=checkbox]]:ytranslate-y-[2px]",
        className
      )}
      {...props} />)
  );
}

function TableCell({
  className,
  ...props
}) {
  return (
    (<td
      data-slot="table-cell"
      className={cn(
        "yp-2 yalign-middle ywhitespace-nowrap [&:has([role=checkbox])]:ypr-0 [&>[role=checkbox]]:ytranslate-y-[2px]",
        className
      )}
      {...props} />)
  );
}

function TableCaption({
  className,
  ...props
}) {
  return (
    (<caption
      data-slot="table-caption"
      className={cn("ytext-muted-foreground ymt-4 ytext-sm", className)}
      {...props} />)
  );
}

export {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
}
