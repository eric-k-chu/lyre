import { Button } from '@/components/ui/button'
import { useDownload } from '@/hooks/useDownload'
import type { ReactElement } from 'react'

export function Home(): ReactElement {
  const { download, progress, data } = useDownload()

  return (
    <div>
      <h1>Recent</h1>
      <Button onClick={() => download('test url')}>Download</Button>
      <div>Progress: {progress}%</div>
      {data && <p>{data}</p>}
    </div>
  )
}
