import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "yinline-flex yitems-center yjustify-center ygap-2 ywhitespace-nowrap yrounded-md ytext-sm yfont-medium ytransition-all disabled:ypointer-events-none disabled:yopacity-50 [&_svg]:ypointer-events-none [&_svg:not([class*=size-])]:ysize-4 yshrink-0 [&_svg]:yshrink-0 youtline-none focus-visible:yborder-ring focus-visible:yring-ring/50 focus-visible:yring-[3px] aria-invalid:yring-destructive/20 dark:aria-invalid:yring-destructive/40 aria-invalid:yborder-destructive",
  {
    variants: {
      variant: {
        default:
          "ybg-primary ytext-primary-foreground yshadow-xs hover:ybg-primary/90",
        destructive:
          "ybg-destructive ytext-white yshadow-xs hover:ybg-destructive/90 focus-visible:yring-destructive/20 dark:focus-visible:yring-destructive/40 dark:ybg-destructive/60",
        outline:
          "yborder ybg-background yshadow-xs hover:ybg-accent hover:ytext-accent-foreground dark:ybg-input/30 dark:yborder-input dark:hover:ybg-input/50",
        secondary:
          "ybg-secondary ytext-secondary-foreground yshadow-xs hover:ybg-secondary/80",
        ghost:
          "hover:ybg-accent hover:ytext-accent-foreground dark:hover:ybg-accent/50",
        link: "ytext-primary yunderline-offset-4 hover:yunderline",
      },
      size: {
        default: "yh-9 ypx-4 ypy-2 has-[>svg]:ypx-3",
        sm: "yh-8 yrounded-md ygap-1.5 ypx-3 has-[>svg]:ypx-2.5",
        lg: "yh-10 yrounded-md ypx-6 has-[>svg]:ypx-4",
        icon: "ysize-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}) {
  const Comp = asChild ? Slot : "button"

  return (
    (<Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props} />)
  );
}

export { Button, buttonVariants }
