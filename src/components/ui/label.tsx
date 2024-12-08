import { cn } from '@/lib'
import * as LabelPrimitive from '@radix-ui/react-label'
import { type VariantProps, cva } from 'class-variance-authority'
import type { ComponentPropsWithRef, ReactElement } from 'react'

const labelVariants = cva(
  'font-medium text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
)

export type LabelProps = ComponentPropsWithRef<typeof LabelPrimitive.Root> &
  VariantProps<typeof labelVariants>

function Label({ className, ...props }: LabelProps): ReactElement {
  return <LabelPrimitive.Root className={cn(labelVariants(), className)} {...props} />
}

export { Label }
