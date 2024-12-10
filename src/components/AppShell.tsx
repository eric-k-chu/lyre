import type { PropsWithChildren, ReactElement } from 'react'
import { AppSidebar } from './AppSidebar'
import { SidebarProvider, ThemeProvider } from './provider'

export function AppShell({ children }: PropsWithChildren): ReactElement {
  return (
    <SidebarProvider>
      <ThemeProvider>
        <AppSidebar />
        {children}
      </ThemeProvider>
    </SidebarProvider>
  )
}
