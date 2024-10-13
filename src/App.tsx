import { MantineProvider, createTheme } from '@mantine/core'
import type { ReactElement } from 'react'
import { ClientLayout } from './ClientLayout'

const theme = createTheme({
  colors: {
    blue: [
      '#a2acb4',
      '#8b97a2',
      '#74828f',
      '#5d6d7c',
      '#455969',
      '#2e4457',
      '#172F44',
      '#152a3d',
      '#122636',
      '#102130',
    ],
  },
  fontFamily: 'Sora, sans-serif',
})

export default function App(): ReactElement {
  return (
    <MantineProvider theme={theme}>
      <ClientLayout />
    </MantineProvider>
  )
}
