import { Home } from '@/routes/Home'
import { Markup } from '@/routes/Markup'
import type { ReactElement } from 'react'
import { Route, Routes } from 'react-router-dom'
import { AppShell } from './AppShell'
import { Download } from './routes/Download'

export function App(): ReactElement {
  return (
    <Routes>
      <Route element={<AppShell />}>
        <Route index path='/' element={<Home />} />
        <Route path='/download' element={<Download />} />
        <Route path='/markup' element={<Markup />} />
        <Route path='*' element={<div>404</div>} />
      </Route>
    </Routes>
  )
}
