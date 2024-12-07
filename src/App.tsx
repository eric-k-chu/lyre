import { Command } from '@tauri-apps/plugin-shell'
import { type ReactElement, useState } from 'react'
import { Button, ScrollArea } from './components/ui'

function App(): ReactElement {
  const [logs, setLogs] = useState<string[]>([])

  const downloadYtVideo = async (): Promise<void> => {
    const cmd = Command.create('yt-dlp', ['https://www.youtube.com/shorts/ToDNDj5H-Qw'])

    setLogs((p) => [...p, 'Downloading video'])

    cmd.on('close', (data) => {
      setLogs((p) => [...p, `Command closed with code ${data.code}`])
    })

    cmd.on('error', (data) => {
      setLogs((p) => [...p, `Command errored with message ${data}`])
    })

    cmd.stdout.on('data', (data) => {
      setLogs((p) => [...p, data])
    })
    await cmd.spawn()
  }

  return (
    <main className='flex min-h-screen flex-col items-center justify-center gap-4 p-8'>
      <div className='flex gap-4'>
        <Button type='button' onClick={downloadYtVideo}>
          Download
        </Button>
        <Button
          disabled={logs.length === 0}
          type='button'
          onClick={() => {
            setLogs([])
          }}
        >
          Clear logs
        </Button>
      </div>
      <ScrollArea
        className={`h-72 border border-border ${logs.length === 0 ? 'invisible' : 'block'}`}
      >
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
  )
}

export default App
