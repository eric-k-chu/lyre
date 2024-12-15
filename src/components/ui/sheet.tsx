import { cn } from '@/lib'
import * as SheetPrimitive from '@radix-ui/react-dialog'
import { ExitIcon } from '@radix-ui/react-icons'
import { type VariantProps, cva } from 'class-variance-authority'
import type { ComponentPropsWithRef, HTMLAttributes, ReactElement } from 'react'

export const Sheet = SheetPrimitive.Root

export const SheetTrigger = SheetPrimitive.Trigger

export const SheetClose = SheetPrimitive.Close

export const SheetPortal = SheetPrimitive.Portal

type SheetOverlayProps = ComponentPropsWithRef<typeof SheetPrimitive.Overlay>

export function SheetOverlay({ className, ref, ...props }: SheetOverlayProps): ReactElement {
  return (
    <SheetPrimitive.Overlay
      className={cn(
        'data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/80 data-[state=closed]:animate-out data-[state=open]:animate-in',
        className
      )}
      ref={ref}
      {...props}
    />
  )
}

const sheetVariants = cva(
  'fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=closed]:animate-out data-[state=open]:animate-in data-[state=closed]:duration-300 data-[state=open]:duration-500',
  {
    variants: {
      side: {
        top: 'data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top inset-x-0 top-0 border-b',
        bottom:
          'data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom inset-x-0 bottom-0 border-t',
        left: 'data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm',
        right:
          'data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm',
      },
    },
    defaultVariants: {
      side: 'right',
    },
  }
)

type SheetContentProps = ComponentPropsWithRef<typeof SheetPrimitive.Content> &
  VariantProps<typeof sheetVariants>

export function SheetContent({
  side = 'right',
  className,
  children,
  ref,
  ...props
}: SheetContentProps): ReactElement {
  return (
    <SheetPortal>
      <SheetOverlay />
      <SheetPrimitive.Content
        ref={ref}
        className={cn(sheetVariants({ side }), className)}
        {...props}
      >
        <SheetPrimitive.Close className='absolute top-4 right-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary'>
          <ExitIcon className='size-4' />
          <span className='sr-only'>Close</span>
        </SheetPrimitive.Close>
        {children}
      </SheetPrimitive.Content>
    </SheetPortal>
  )
}

export function SheetHeader({ className, ...props }: HTMLAttributes<HTMLDivElement>): ReactElement {
  return (
    <div className={cn('flex flex-col space-y-2 text-center sm:text-left', className)} {...props} />
  )
}

export function SheetFooter({ className, ...props }: HTMLAttributes<HTMLDivElement>): ReactElement {
  return (
    <div
      className={cn('flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2', className)}
      {...props}
    />
  )
}

type SheetTitleProps = ComponentPropsWithRef<typeof SheetPrimitive.Title>

export function SheetTitle({ className, ref, ...props }: SheetTitleProps): ReactElement {
  return (
    <SheetPrimitive.Title
      ref={ref}
      className={cn('font-semibold text-foreground text-lg', className)}
      {...props}
    />
  )
}

type SheetDescriptionProps = ComponentPropsWithRef<typeof SheetPrimitive.Description>

export function SheetDescription({
  className,
  ref,
  ...props
}: SheetDescriptionProps): ReactElement {
  return (
    <SheetPrimitive.Description
      ref={ref}
      className={cn('text-muted-foreground text-sm', className)}
      {...props}
    />
  )
}