import { Command } from '@tauri-apps/plugin-shell'
import { type SetStateAction, useCallback, useState } from 'react'

type YtDlpState = {
  logs: string[]
  clear: () => void
  download: (url: string) => Promise<void>
}

export function useYtDlp(): YtDlpState {
  const [logs, setLogs] = useState<string[]>([])

  const download = useCallback(async (url: string): Promise<void> => {
    const cmd = Command.create('yt-dlp', [
      url,
      '-S',
      'res:720',
      '--write-info-json',
      '--no-write-playlist-meta-files',
      '-o',
      '"%(channel)s/%(id)s.%(ext)s"',
    ])
    await startCommand(cmd, setLogs, 'Starting Download...')
  }, [])

  const clear = useCallback(() => setLogs([]), [])

  return {
    logs,
    clear,
    download,
  }
}

async function startCommand(
  cmd: Command<string>,
  setLogs: (value: SetStateAction<string[]>) => void,
  startMsg = 'Downloading...'
): Promise<void> {
  setLogs([startMsg])
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
