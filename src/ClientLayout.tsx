import { TitleBar } from '@/components/core'
import { Settings } from '@/settings'
import { getCurrentWindow } from '@tauri-apps/api/window'
import type { ReactElement } from 'react'
import { Outlet, Route, Routes } from 'react-router-dom'
import { SideBar } from './components/core/SideBar'
import { Home } from './home'

const app = getCurrentWindow()

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
  return (
    <div className='flex items-center'>
      <SideBar />
      <main>
        <Outlet />
      </main>
      <TitleBar />
    </div>
  )
}
