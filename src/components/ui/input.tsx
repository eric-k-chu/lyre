import { cn } from '@/lib'
import type { ComponentProps, ReactElement } from 'react'

export type InputProps = ComponentProps<'input'>

export function Input({ className, type, ...props }: InputProps): ReactElement {
  return (
    <input
      type={type}
      className={cn(
        'flex h-9 w-full rounded-sm border border-input bg-transparent px-3 py-1 shadow-sm transition-colors file:border-0 file:bg-transparent file:font-medium file:text-foreground file:text-sm placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50',
        className
      )}
      {...props}
    />
  )
}
