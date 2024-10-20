import type { ReactElement } from 'react'
import { Route, Routes } from 'react-router-dom'
import { AppShell } from './AppShell'
import { Home } from './routes/Home'

export function App(): ReactElement {
  return (
    <Routes>
      <Route element={<AppShell />}>
        <Route index path='/' element={<Home />} />
      </Route>
    </Routes>
  )
}
