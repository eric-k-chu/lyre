import { open } from '@tauri-apps/plugin-dialog'
import { Command } from '@tauri-apps/plugin-shell'
import { useCallback, useState } from 'react'
import { useLocalStore } from './use-local-store'

type YtDlpState = {
  logs: string[]
  download: (url: string) => Promise<void>
  output: string
  setOutput: () => Promise<void>
  url: string
  setUrl: (url: string) => void
  isDownloading: boolean
}

export function useYtDlp(): YtDlpState {
  const [logs, setLogs] = useState<string[]>([])
  const [url, setUrl] = useState<string>('')
  const { item: output, set } = useLocalStore<string>({ key: 'lyre-output-dir', fallback: '' })
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
      const cmd = Command.create('yt-dlp', [
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
      cmd.on('close', (data) => {
        setLogs((p) => [...p, `Command closed with code ${data.code}`])
        setIsDownloading(false)
      })
      cmd.on('error', (data) => {
        setLogs((p) => [...p, `Command errored with message ${data}`])
        setIsDownloading(false)
      })
      cmd.stdout.on('data', (data) => {
        setLogs((p) => [...p, data])
      })
      await cmd.spawn()
    },
    [output]
  )

  return {
    logs,
    download,
    output,
    setOutput,
    url,
    setUrl,
    isDownloading,
  }
}
