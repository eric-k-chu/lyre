import { Settings } from '@/settings'
import { useDisclosure } from '@mantine/hooks'
import type { ReactElement } from 'react'
import { Outlet, Route, Routes } from 'react-router-dom'
import { AppSidebar } from './components/app-sidebar'
import { SidebarProvider } from './components/ui/sidebar'
import { Home } from './home'

export function ClientLayout(): ReactElement {
  return (
    <Routes>
      <Route element={<ClientShell />} path='/'>
        <Route index path='/' element={<Home />} />
        <Route path='settings' element={<Settings />} />
      </Route>
    </Routes>
  )
}

function ClientShell(): ReactElement {
  const [opened, { toggle }] = useDisclosure()

  return (
    <SidebarProvider>
      <AppSidebar />
      <Outlet />
    </SidebarProvider>
  )
}
