import { SideBar, TitleBar } from '@/components/core'
import { Settings } from '@/settings'
import { AppShell, Group, Text } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import type { ReactElement } from 'react'
import { Outlet, Route, Routes } from 'react-router-dom'
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
    <AppShell
      header={{ height: 30 }}
      navbar={{ width: opened ? 200 : 52, breakpoint: 'xs' }}
      padding='md'
    >
      <AppShell.Header>
        <Group h='100%' pl='md' data-tauri-drag-region>
          <Text size='xs'>Hermes</Text>
          <TitleBar ml='auto' />
        </Group>
      </AppShell.Header>
      <AppShell.Navbar py='md'>
        <SideBar opened={opened} toggle={toggle} />
      </AppShell.Navbar>
      <AppShell.Main>
        <Outlet />
      </AppShell.Main>
    </AppShell>
  )
}
