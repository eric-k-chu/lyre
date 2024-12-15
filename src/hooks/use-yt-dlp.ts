import { open } from '@tauri-apps/plugin-dialog'
import { type Child, Command } from '@tauri-apps/plugin-shell'
import { useCallback, useState } from 'react'
import { useLocalStore } from './use-local-store'

type YtDlpState = {
  download: (url: string) => Promise<void>
  cancel: () => void
  isDownloading: boolean
  logs: string[]
  url: string
  setUrl: (url: string) => void
  output: string
  setOutput: () => Promise<void>
}

export function useYtDlp(): YtDlpState {
  const [process, setProcess] = useState<Child>()
  const [logs, setLogs] = useState<string[]>([])
  const [url, setUrl] = useState<string>('')
  const [output, set] = useLocalStore<string>({ key: 'lyre-output-dir', fallback: '' })
  const [isDownloading, setIsDownloading] = useState(false)

  const setOutput = useCallback(async () => {
    const selected = await open({
      directory: true,
    })
    if (selected) set(selected)
  }, [])

  const download = useCallback(
    async (url: string): Promise<void> => {
      setIsDownloading(true)
      const command = Command.create('yt-dlp', [
        url,
        '-P',
        output,
        '-S',
        'res:720',
        '--write-info-json',
        '--no-write-playlist-metafiles',
        '-o',
        '%(channel)s/%(id)s',
      ])
      setLogs(['Downloading...'])
      command.on('close', (data) => {
        setLogs((p) => [...p, `Command closed with code ${data.code}`])
        setIsDownloading(false)
      })
      command.on('error', (data) => {
        setLogs((p) => [...p, `Command errored with message ${data}`])
        setIsDownloading(false)
      })
      command.stdout.on('data', (data) => {
        setLogs((p) => [...p, data])
      })
      const child = await command.spawn()
      setProcess(child)
    },
    [output]
  )

  const cancel = useCallback(() => {
    if (!process) return
    setLogs((p) => [...p, 'Cancelling...'])
    process.kill()
    setProcess(undefined)
  }, [process])

  return {
    logs,
    download,
    output,
    setOutput,
    url,
    setUrl,
    isDownloading,
    cancel,
  }
}
