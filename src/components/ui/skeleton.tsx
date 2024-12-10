import { cn } from '@/lib'
import type { HTMLAttributes, ReactElement } from 'react'

export function Skeleton({ className, ...props }: HTMLAttributes<HTMLDivElement>): ReactElement {
  return <div className={cn('animate-pulse rounded-md bg-primary/10', className)} {...props} />
}
