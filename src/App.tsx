import type { ReactElement } from 'react'
import { ThemeToggle } from './components'
import { ThemeProvider } from './components/provider'
import { Button, ScrollArea } from './components/ui'
import { useYtDlp } from './lib'

export function App(): ReactElement {
  const { logs, clear, download } = useYtDlp()

  const handleDownload = async () => {
    const url = ''
    await download(url)
  }

  return (
    <ThemeProvider>
      <div className='fixed top-4 right-4'>
        <ThemeToggle />
      </div>
      <main className='flex min-h-screen flex-col items-center justify-center gap-4 p-8'>
        <div className='flex gap-4'>
          <Button type='button' onClick={handleDownload}>
            Download
          </Button>
          <Button disabled={logs.length === 0} type='button' onClick={clear}>
            Clear logs
          </Button>
        </div>
        <ScrollArea className='h-72 w-full rounded-sm border border-border p-4 text-xs'>
          {logs.map((log, index) => (
            <p key={index}>{log}</p>
          ))}
          <div
            aria-hidden
            ref={(node) => {
              node?.scrollIntoView({ behavior: 'smooth' })
            }}
          />
        </ScrollArea>
      </main>
    </ThemeProvider>
  )
}
