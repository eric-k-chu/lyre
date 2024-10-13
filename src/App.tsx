import { MantineProvider, createTheme } from '@mantine/core'
import type { ReactElement } from 'react'
import { ClientLayout } from './ClientLayout'

const theme = createTheme({})

export default function App(): ReactElement {
  return (
    <MantineProvider theme={theme} defaultColorScheme='dark'>
      <ClientLayout />
    </MantineProvider>
  )
}
