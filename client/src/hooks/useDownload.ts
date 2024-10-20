import { useState } from 'react'

export function useDownload() {
  const [progress, setProgress] = useState(0)
  const [data, setData] = useState<string>()

  async function download(url: string): Promise<void> {
    const response = await fetch('api/download', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ url }),
    })

    const reader = response.body?.getReader()
    if (!reader) throw new Error('Failed to read response body')
    const decoder = new TextDecoder()

    while (true) {
      const { done, value } = await reader.read()

      if (done) break

      if (value) {
        const chunk = decoder.decode(value)
        const data = JSON.parse(chunk)

        if (data.progress < 100) {
          setProgress(data.progress)
        } else {
          setProgress(100)
          setData(data.url)
          break
        }
      }
    }
  }

  return {
    progress,
    data,
    download,
  }
}
