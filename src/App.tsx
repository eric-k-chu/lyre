import type { ReactElement } from 'react'
import { ArgsInput, Logs } from './components'
import { ThemeProvider } from './components/provider'
import { Button } from './components/ui'

export function App(): ReactElement {
  return (
    <ThemeProvider>
      <form className='flex h-dvh flex-col gap-4 p-4'>
        <div className='flex h-20 gap-4'>
          <ArgsInput />
          <Button type='submit' className='h-full'>
            Download
          </Button>
        </div>
        <Logs logs={[]} />
      </form>
    </ThemeProvider>
  )
}
