import { cn } from '@/lib'
import * as TabsPrimitive from '@radix-ui/react-tabs'
import type { ComponentPropsWithRef, ReactElement } from 'react'

const Tabs = TabsPrimitive.Root

type TabsListProps = ComponentPropsWithRef<typeof TabsPrimitive.List>

function TabsList({ className, ...props }: TabsListProps): ReactElement {
  return (
    <TabsList
      className={cn(
        'inline-flex h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground',
        className
      )}
      {...props}
    />
  )
}

type TabsTriggerProps = ComponentPropsWithRef<typeof TabsPrimitive.Trigger>

function TabsTrigger({ className, ...props }: TabsTriggerProps): ReactElement {
  return (
    <TabsTrigger
      className={cn(
        'inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1 font-medium text-sm ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow',
        className
      )}
      {...props}
    />
  )
}

type TabsContentProps = ComponentPropsWithRef<typeof TabsPrimitive.Content>

function TabsContent({ className, ...props }: TabsContentProps): ReactElement {
  return (
    <TabsContent
      className={cn(
        'mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
        className
      )}
      {...props}
    />
  )
}

export { Tabs, TabsContent, TabsList, TabsTrigger }
