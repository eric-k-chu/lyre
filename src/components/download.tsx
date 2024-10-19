import { invoke } from '@tauri-apps/api/core'
import { listen } from '@tauri-apps/api/event'
import React, { useState } from 'react'

export default function YouTubeDownloader() {
  const [url, setUrl] = useState('')
  const [progress, setProgress] = useState('')
  const [isDownloading, setIsDownloading] = useState(false)

  React.useEffect(() => {
    const unlisten = listen('download_progress', (event) => {
      setProgress(event.payload)
    })

    return () => {
      unlisten.then((f) => f())
    }
  }, [])

  const handleDownload = async () => {
    setIsDownloading(true)
    setProgress('')
    try {
      await invoke('download_video', { url })
      setProgress('Download completed successfully!')
    } catch (error) {
      setProgress(`Error: ${error}`)
    } finally {
      setIsDownloading(false)
    }
  }

  return (
    <div className='p-4'>
      <input
        type='text'
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder='Enter YouTube URL'
        className='mb-4 w-full rounded border p-2'
      />
      <button
        type='button'
        onClick={handleDownload}
        disabled={isDownloading}
        className='rounded bg-blue-500 px-4 py-2 text-white disabled:bg-gray-400'
      >
        {isDownloading ? 'Downloading...' : 'Download'}
      </button>
      <div className='mt-4'>
        <h3 className='font-bold'>Progress:</h3>
        <pre className='whitespace-pre-wrap'>{progress}</pre>
      </div>
    </div>
  )
}
