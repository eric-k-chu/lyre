import { cn } from '@/lib'
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu'
import { CheckIcon, ChevronRightIcon, CircleIcon } from '@radix-ui/react-icons'
import type { ComponentPropsWithRef, HTMLAttributes, ReactElement } from 'react'

const DropdownMenu = DropdownMenuPrimitive.Root

const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger

const DropdownMenuGroup = DropdownMenuPrimitive.Group

const DropdownMenuPortal = DropdownMenuPrimitive.Portal

const DropdownMenuSub = DropdownMenuPrimitive.Sub

const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup

type DropdownMenuSubTriggerProps = ComponentPropsWithRef<
  typeof DropdownMenuPrimitive.SubTrigger
> & {
  inset?: boolean
}

function DropdownMenuSubTrigger({
  className,
  inset,
  children,
  ...props
}: DropdownMenuSubTriggerProps): ReactElement {
  return (
    <DropdownMenuPrimitive.SubTrigger
      className={cn(
        'flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
        inset && 'pl-8',
        className
      )}
      {...props}
    >
      {children}
      <ChevronRightIcon className='ml-auto' />
    </DropdownMenuPrimitive.SubTrigger>
  )
}

type DropdownMenuSubContentProps = ComponentPropsWithRef<typeof DropdownMenuPrimitive.SubContent>

function DropdownMenuSubContent({
  className,
  ...props
}: DropdownMenuSubContentProps): ReactElement {
  return (
    <DropdownMenuPrimitive.SubContent
      className={cn(
        'data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] overflow-hidden rounded-sm border bg-popover p-1 text-popover-foreground shadow-lg data-[state=closed]:animate-out data-[state=open]:animate-in',
        className
      )}
      {...props}
    />
  )
}

type DropdownMenuContentProps = ComponentPropsWithRef<typeof DropdownMenuPrimitive.Content>

function DropdownMenuContent({
  className,
  sideOffset = 4,
  ...props
}: DropdownMenuContentProps): ReactElement {
  return (
    <DropdownMenuPrimitive.Portal>
      <DropdownMenuPrimitive.Content
        sideOffset={sideOffset}
        className={cn(
          'z-50 min-w-[8rem] overflow-hidden rounded-sm border bg-popover p-1 text-popover-foreground shadow-md',
          'data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[state=closed]:animate-out data-[state=open]:animate-in',
          className
        )}
        {...props}
      />
    </DropdownMenuPrimitive.Portal>
  )
}

type DropdownMenuItemProps = ComponentPropsWithRef<typeof DropdownMenuPrimitive.Item> & {
  inset?: boolean
}

function DropdownMenuItem({ className, inset, ...props }: DropdownMenuItemProps): ReactElement {
  return (
    <DropdownMenuPrimitive.Item
      className={cn(
        'relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&>svg]:size-4 [&>svg]:shrink-0',
        inset && 'pl-8',
        className
      )}
      {...props}
    />
  )
}

type DropdownMenuCheckboxItemProps = ComponentPropsWithRef<
  typeof DropdownMenuPrimitive.CheckboxItem
>

function DropdownMenuCheckboxItem({
  className,
  children,
  checked,
  ...props
}: DropdownMenuCheckboxItemProps): ReactElement {
  return (
    <DropdownMenuPrimitive.CheckboxItem
      className={cn(
        'relative flex cursor-default select-none items-center rounded-sm py-1.5 pr-2 pl-8 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
        className
      )}
      checked={checked}
      {...props}
    >
      <span className='absolute left-2 flex h-3.5 w-3.5 items-center justify-center'>
        <DropdownMenuPrimitive.ItemIndicator>
          <CheckIcon className='h-4 w-4' />
        </DropdownMenuPrimitive.ItemIndicator>
      </span>
      {children}
    </DropdownMenuPrimitive.CheckboxItem>
  )
}

type DropdownMenuRadioItemProps = ComponentPropsWithRef<typeof DropdownMenuPrimitive.RadioItem>

function DropdownMenuRadioItem({
  className,
  children,
  ...props
}: DropdownMenuRadioItemProps): ReactElement {
  return (
    <DropdownMenuPrimitive.RadioItem
      className={cn(
        'relative flex cursor-default select-none items-center rounded-sm py-1.5 pr-2 pl-8 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
        className
      )}
      {...props}
    >
      <span className='absolute left-2 flex h-3.5 w-3.5 items-center justify-center'>
        <DropdownMenuPrimitive.ItemIndicator>
          <CircleIcon className='h-2 w-2 fill-current' />
        </DropdownMenuPrimitive.ItemIndicator>
      </span>
      {children}
    </DropdownMenuPrimitive.RadioItem>
  )
}

type DropdownMenuLabelProps = ComponentPropsWithRef<typeof DropdownMenuPrimitive.Label> & {
  inset?: boolean
}

function DropdownMenuLabel({ className, inset, ...props }: DropdownMenuLabelProps): ReactElement {
  return (
    <DropdownMenuPrimitive.Label
      className={cn('px-2 py-1.5 font-semibold text-sm', inset && 'pl-8', className)}
      {...props}
    />
  )
}

type DropdownMenuSeparatorProps = ComponentPropsWithRef<typeof DropdownMenuPrimitive.Separator>

function DropdownMenuSeparator({ className, ...props }: DropdownMenuSeparatorProps): ReactElement {
  return (
    <DropdownMenuPrimitive.Separator
      className={cn('-mx-1 my-1 h-px bg-muted', className)}
      {...props}
    />
  )
}

type DropdownMenuShortcutProps = HTMLAttributes<HTMLSpanElement>

function DropdownMenuShortcut({ className, ...props }: DropdownMenuShortcutProps): ReactElement {
  return <span className={cn('ml-auto text-xs tracking-widest opacity-60', className)} {...props} />
}

export {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
}
