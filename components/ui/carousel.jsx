"use client";
import * as React from "react"
import useEmblaCarousel from "embla-carousel-react";
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons"

const CarouselContext = React.createContext(null)

function useCarousel() {
  const context = React.useContext(CarouselContext)

  if (!context) {
    throw new Error("useCarousel must be used within a <Carousel />")
  }

  return context
}

function Carousel({
  orientation = "horizontal",
  opts,
  setApi,
  plugins,
  className,
  children,
  ...props
}) {
  const [carouselRef, api] = useEmblaCarousel({
    ...opts,
    axis: orientation === "horizontal" ? "x" : "y",
  }, plugins)
  const [canScrollPrev, setCanScrollPrev] = React.useState(false)
  const [canScrollNext, setCanScrollNext] = React.useState(false)

  const onSelect = React.useCallback((api) => {
    if (!api) return
    setCanScrollPrev(api.canScrollPrev())
    setCanScrollNext(api.canScrollNext())
  }, [])

  const scrollPrev = React.useCallback(() => {
    api?.scrollPrev()
  }, [api])

  const scrollNext = React.useCallback(() => {
    api?.scrollNext()
  }, [api])

  const handleKeyDown = React.useCallback((event) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault()
      scrollPrev()
    } else if (event.key === "ArrowRight") {
      event.preventDefault()
      scrollNext()
    }
  }, [scrollPrev, scrollNext])

  React.useEffect(() => {
    if (!api || !setApi) return
    setApi(api)
  }, [api, setApi])

  React.useEffect(() => {
    if (!api) return
    onSelect(api)
    api.on("reInit", onSelect)
    api.on("select", onSelect)

    return () => {
      api?.off("select", onSelect)
    };
  }, [api, onSelect])

  return (
    (<CarouselContext.Provider
      value={{
        carouselRef,
        api: api,
        opts,
        orientation:
          orientation || (opts?.axis === "y" ? "vertical" : "horizontal"),
        scrollPrev,
        scrollNext,
        canScrollPrev,
        canScrollNext,
      }}>
      <div
        onKeyDownCapture={handleKeyDown}
        className={cn("yrelative", className)}
        role="region"
        aria-roledescription="carousel"
        data-slot="carousel"
        {...props}>
        {children}
      </div>
    </CarouselContext.Provider>)
  );
}

function CarouselContent({
  className,
  ...props
}) {
  const { carouselRef, orientation } = useCarousel()

  return (
    (<div
      ref={carouselRef}
      className="yoverflow-hidden"
      data-slot="carousel-content">
      <div
        className={cn(
          "yflex",
          orientation === "horizontal" ? "y-ml-4" : "y-mt-4 yflex-col",
          className
        )}
        {...props} />
    </div>)
  );
}

function CarouselItem({
  className,
  ...props
}) {
  const { orientation } = useCarousel()

  return (
    (<div
      role="group"
      aria-roledescription="slide"
      data-slot="carousel-item"
      className={cn(
        "ymin-w-0 yshrink-0 ygrow-0 ybasis-full",
        orientation === "horizontal" ? "ypl-4" : "ypt-4",
        className
      )}
      {...props} />)
  );
}

function CarouselPrevious({
  className,
  variant = "outline",
  size = "icon",
  ...props
}) {
  const { orientation, scrollPrev, canScrollPrev } = useCarousel()

  return (
    (<Button
      data-slot="carousel-previous"
      variant={variant}
      size={size}
      className={cn("yabsolute ysize-8 yrounded-full", orientation === "horizontal"
        ? "ytop-1/2 y-left-12 y-translate-y-1/2"
        : "y-top-12 yleft-1/2 y-translate-x-1/2 yrotate-90", className)}
      disabled={!canScrollPrev}
      onClick={scrollPrev}
      {...props}>
      <ArrowLeftIcon />
      <span className="ysr-only">Previous slide</span>
    </Button>)
  );
}

function CarouselNext({
  className,
  variant = "outline",
  size = "icon",
  ...props
}) {
  const { orientation, scrollNext, canScrollNext } = useCarousel()

  return (
    (<Button
      data-slot="carousel-next"
      variant={variant}
      size={size}
      className={cn("yabsolute ysize-8 yrounded-full", orientation === "horizontal"
        ? "ytop-1/2 y-right-12 y-translate-y-1/2"
        : "y-bottom-12 yleft-1/2 y-translate-x-1/2 yrotate-90", className)}
      disabled={!canScrollNext}
      onClick={scrollNext}
      {...props}>
      <ArrowRightIcon />
      <span className="ysr-only">Next slide</span>
    </Button>)
  );
}

export { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext };
