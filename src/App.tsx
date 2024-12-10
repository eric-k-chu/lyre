import type { ReactElement } from 'react'
import { ArgsInput, Logs } from './components'
import { ThemeProvider } from './components/provider'
import { Button } from './components/ui'
import { useYtDlp } from './lib'

export function App(): ReactElement {
  const { logs, download, ...rest } = useYtDlp()
  return (
    <ThemeProvider>
      <form
        className='flex h-dvh flex-col gap-4 p-4'
        onSubmit={async (e) => {
          e.preventDefault()
          await download(rest.url)
        }}
      >
        <div className='flex h-20 gap-4'>
          <ArgsInput {...rest} />
          <Button type='submit' className='h-full' disabled={rest.isDownloading}>
            Download
          </Button>
        </div>
        <Logs logs={logs} />
      </form>
    </ThemeProvider>
  )
}
