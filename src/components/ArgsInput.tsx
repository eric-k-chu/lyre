import type { ReactElement } from 'react'
import { Input, Label } from './ui'

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
      <div className='flex size-full items-center'>
        <Label
          htmlFor='url'
          className='flex h-full w-16 items-center justify-center rounded-l-sm border border-primary border-r bg-primary px-2 text-primary-foreground text-xs'
        >
          URL
        </Label>
        <Input
          disabled={isDownloading}
          name='url'
          type='url'
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder='https://youtube.com/@Google'
          className='h-full rounded-l-none text-xs'
        />
      </div>
      <div className='flex size-full items-center'>
        <Label className='flex h-full w-16 items-center justify-center rounded-l-sm border border-primary border-r bg-primary px-2 text-primary-foreground text-xs'>
          Output
        </Label>
        <button
          disabled={isDownloading}
          type='button'
          onClick={setOutput}
          className='h-full w-full rounded-r-sm rounded-l-none border border-border bg-transparent px-3 text-left text-muted-foreground text-xs'
        >
          {output || 'Select Output'}
        </button>
      </div>
    </section>
  )
}
