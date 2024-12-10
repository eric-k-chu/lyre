import type { ReactElement } from 'react'
import { Button, Input, Label } from './ui'

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
        <Button
          asChild
          className='h-full w-20 rounded-r-none px-0 hover:bg-secondary'
          variant='secondary'
        >
          <Label htmlFor='url'>URL</Label>
        </Button>
        <Button
          asChild
          variant='outline'
          className='size-full justify-start rounded-l-none text-muted-foreground text-xs shadow-none hover:bg-transparent'
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
      </div>
      <div className='flex size-full items-center'>
        <Button
          asChild
          className='h-full w-20 rounded-r-none px-0 hover:bg-secondary'
          variant='secondary'
        >
          <Label htmlFor='output'>Output</Label>
        </Button>
        <Button
          id='output'
          disabled={isDownloading}
          variant='outline'
          type='button'
          onClick={setOutput}
          className='size-full justify-start rounded-l-none text-muted-foreground text-xs shadow-none hover:bg-transparent'
        >
          {output || 'Select Output'}
        </Button>
      </div>
    </section>
  )
}
