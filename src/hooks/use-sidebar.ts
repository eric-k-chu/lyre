import { requireParam } from '@/lib'
import { createContext, useContext } from 'react'

export type SidebarState = {
  state: 'expanded' | 'collapsed'
  open: boolean
  setOpen: (open: boolean) => void
  openMobile: boolean
  setOpenMobile: (open: boolean) => void
  isMobile: boolean
  toggleSidebar: () => void
}

export const SidebarContext = createContext<SidebarState | undefined>(undefined)

export function useSidebar(): SidebarState {
  const context = useContext(SidebarContext)
  requireParam(context, 'useSidebar must be used within a SidebarProvider')
  return context
}
