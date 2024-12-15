import type { ReactElement } from 'react'
import { Button } from './ui'

type Props = {
  setOutput: () => void
  setUrl: (url: string) => void
  url: string
  output: string
  isDownloading: boolean
}

export function ArgsInput({ url, setUrl, output, setOutput, isDownloading }: Props): ReactElement {
  return (
    <section className='h-8 w-full space-y-4'>
      <Button
        asChild
        disabled={isDownloading}
        variant='secondary'
        className='flex size-full items-center rounded-sm px-2 text-xs hover:bg-secondary'
      >
        <div>
          <span className='text-primary-foreground uppercase'>Url</span>
          <input
            disabled={isDownloading}
            className='size-full bg-transparent text-muted-foreground focus-within:outline-none'
            autoComplete='off'
            id='url'
            type='url'
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder='https://youtube.com/@Google'
          />
        </div>
      </Button>

      <Button
        disabled={isDownloading}
        variant='secondary'
        type='button'
        onClick={setOutput}
        className='size-full justify-start rounded-sm px-2 text-muted-foreground text-xs hover:bg-secondary'
      >
        <span className='text-primary-foreground uppercase'>Output</span>
        {output || 'Select Output'}
      </Button>
    </section>
  )
}
