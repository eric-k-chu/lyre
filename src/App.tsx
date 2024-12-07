import { Command } from '@tauri-apps/plugin-shell'
import { type ReactElement, useState } from 'react'

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
    <main className='flex min-h-screen flex-col items-center justify-center gap-4'>
      <h1>Hello</h1>
      <div className='flex gap-4'>
        <button type='button' onClick={downloadYtVideo}>
          Download
        </button>
        <button
          disabled={logs.length === 0}
          type='button'
          onClick={() => {
            setLogs([])
          }}
        >
          Clear logs
        </button>
      </div>
      <div className='h-96 overscroll-auto'>
        {logs.map((log, index) => (
          <p key={index}>{log}</p>
        ))}
        <div
          aria-hidden
          ref={(node) => {
            node?.scrollIntoView({ behavior: 'smooth' })
          }}
        />
      </div>
    </main>
  )
}

export default App
