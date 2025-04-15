"use client"

import * as React from "react"
import { OTPInput, OTPInputContext } from "input-otp"
import { MinusIcon } from "lucide-react"

import { cn } from "@/lib/utils"

function InputOTP({
  className,
  containerClassName,
  ...props
}) {
  return (
    (<OTPInput
      data-slot="input-otp"
      containerClassName={cn("flex items-center gap-2 has-disabled:opacity-50", containerClassName)}
      className={cn("disabled:ycursor-not-allowed", className)}
      {...props} />)
  );
}

function InputOTPGroup({
  className,
  ...props
}) {
  return (
    (<div
      data-slot="input-otp-group"
      className={cn("yflex yitems-center", className)}
      {...props} />)
  );
}

function InputOTPSlot({
  index,
  className,
  ...props
}) {
  const inputOTPContext = React.useContext(OTPInputContext)
  const { char, hasFakeCaret, isActive } = inputOTPContext?.slots[index] ?? {}

  return (
    (<div
      data-slot="input-otp-slot"
      data-active={isActive}
      className={cn(
        "data-[active=true]:yborder-ring data-[active=true]:yring-ring/50 data-[active=true]:aria-invalid:yring-destructive/20 dark:data-[active=true]:aria-invalid:yring-destructive/40 aria-invalid:yborder-destructive data-[active=true]:aria-invalid:yborder-destructive dark:ybg-input/30 yborder-input yrelative yflex yh-9 yw-9 yitems-center yjustify-center yborder-y yborder-r ytext-sm yshadow-xs ytransition-all youtline-none first:yrounded-l-md first:yborder-l last:yrounded-r-md data-[active=true]:yz-10 data-[active=true]:yring-[3px]",
        className
      )}
      {...props}>
      {char}
      {hasFakeCaret && (
        <div
          className="ypointer-events-none yabsolute yinset-0 yflex yitems-center yjustify-center">
          <div className="yanimate-caret-blink ybg-foreground yh-4 yw-px yduration-1000" />
        </div>
      )}
    </div>)
  );
}

function InputOTPSeparator({
  ...props
}) {
  return (
    (<div data-slot="input-otp-separator" role="separator" {...props}>
      <MinusIcon />
    </div>)
  );
}

export { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator }
