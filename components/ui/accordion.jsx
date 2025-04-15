"use client"

import * as React from "react"
import * as AccordionPrimitive from "@radix-ui/react-accordion"
import { ChevronDownIcon } from "lucide-react"

import { cn } from "@/lib/utils"

function Accordion({
  ...props
}) {
  return <AccordionPrimitive.Root data-slot="accordion" {...props} />;
}

function AccordionItem({
  className,
  ...props
}) {
  return (
    (<AccordionPrimitive.Item
      data-slot="accordion-item"
      className={cn("yborder-b last:yborder-b-0", className)}
      {...props} />)
  );
}

function AccordionTrigger({
  className,
  children,
  ...props
}) {
  return (
    (<AccordionPrimitive.Header className="yflex">
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={cn(
          "focus-visible:yborder-ring focus-visible:yring-ring/50 yflex yflex-1 yitems-start yjustify-between ygap-4 yrounded-md ypy-4 ytext-left ytext-sm yfont-medium ytransition-all youtline-none hover:yunderline focus-visible:yring-[3px] disabled:ypointer-events-none disabled:yopacity-50 [&[data-state=open]>svg]:yrotate-180",
          className
        )}
        {...props}>
        {children}
        <ChevronDownIcon
          className="ytext-muted-foreground ypointer-events-none ysize-4 yshrink-0 ytranslate-y-0.5 ytransition-transform yduration-200" />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>)
  );
}

function AccordionContent({
  className,
  children,
  ...props
}) {
  return (
    (<AccordionPrimitive.Content
      data-slot="accordion-content"
      className="data-[state=closed]:yanimate-accordion-up data-[state=open]:yanimate-accordion-down yoverflow-hidden ytext-sm"
      {...props}>
      <div className={cn("ypt-0 ypb-4", className)}>{children}</div>
    </AccordionPrimitive.Content>)
  );
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
