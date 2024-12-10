import { cn } from '@/lib'
import * as TooltipPrimitive from '@radix-ui/react-tooltip'
import type { ComponentPropsWithRef, ReactElement } from 'react'

export const TooltipProvider = TooltipPrimitive.Provider

export const Tooltip = TooltipPrimitive.Root

export const TooltipTrigger = TooltipPrimitive.Trigger

type TooltipContentProps = ComponentPropsWithRef<typeof TooltipPrimitive.Content>

export function TooltipContent({
  className,
  sideOffset = 4,
  ref,
  ...props
}: TooltipContentProps): ReactElement {
  return (
    <TooltipPrimitive.Portal>
      <TooltipPrimitive.Content
        ref={ref}
        sideOffset={sideOffset}
        className={cn(
          'fade-in-0 zoom-in-95 data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 animate-in overflow-hidden rounded-md bg-primary px-3 py-1.5 text-primary-foreground text-xs data-[state=closed]:animate-out',
          className
        )}
        {...props}
      />
    </TooltipPrimitive.Portal>
  )
}
