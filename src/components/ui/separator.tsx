import { cn } from '@/lib'
import * as SeparatorPrimitive from '@radix-ui/react-separator'
import type { ComponentPropsWithRef, ReactElement } from 'react'

type SeparatorProps = ComponentPropsWithRef<typeof SeparatorPrimitive.Root>

export function Separator({
  className,
  orientation = 'horizontal',
  decorative = true,
  ref,
  ...props
}: SeparatorProps): ReactElement {
  return (
    <SeparatorPrimitive.Root
      ref={ref}
      decorative={decorative}
      orientation={orientation}
      className={cn(
        'shrink-0 bg-border',
        orientation === 'horizontal' ? 'h-[1px] w-full' : 'h-full w-[1px]',
        className
      )}
      {...props}
    />
  )
}
