import { MantineProvider, createTheme } from '@mantine/core'
import type { ReactElement } from 'react'
import { ClientLayout } from './ClientLayout'

const theme = createTheme({
  colors: {
    orange: [
      '#ffede5',
      '#ffdacf',
      '#fbb3a0',
      '#f78a6d',
      '#f36742',
      '#f15126',
      '#f14517',
      '#d6360b',
      '#c02e06',
      '#a82301',
    ],
  },
  fontFamily: 'Sora, sans-serif',
  primaryColor: 'orange',
})

export default function App(): ReactElement {
  return (
    <MantineProvider theme={theme}>
      <ClientLayout />
    </MantineProvider>
  )
}
