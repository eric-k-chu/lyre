import { useContext } from 'react'
import { SidebarContext, type SidebarState } from './context'

export function useSidebar(): SidebarState {
  const context = useContext(SidebarContext)
  if (!context) {
    throw new Error('useSidebar must be used within a Sidebar.')
  }
  return context
}
