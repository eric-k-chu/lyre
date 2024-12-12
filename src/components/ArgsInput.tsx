import type { ReactElement } from 'react'
import { Button, Input } from './ui'

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
        variant='secondary'
        className='size-full rounded-sm px-2 text-xs hover:bg-secondary'
      >
        <Input
          disabled={isDownloading}
          autoComplete='off'
          id='url'
          type='url'
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder='https://youtube.com/@Google'
        />
      </Button>

      <Button
        id='output'
        disabled={isDownloading}
        variant='secondary'
        type='button'
        onClick={setOutput}
        className='size-full justify-start rounded-sm px-2 text-xs hover:bg-secondary'
      >
        {output || 'Select Output'}
      </Button>
    </section>
  )
}
