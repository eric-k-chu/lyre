import type { ReactElement } from 'react'
import { ThemeToggle } from './ThemeToggle'
import { Sidebar, SidebarContent } from './ui'

export function AppSidebar(): ReactElement {
  return (
    <Sidebar variant='sidebar'>
      <SidebarContent className='flex flex-col items-center py-4'>
        <ThemeToggle />
      </SidebarContent>
    </Sidebar>
  )
}
