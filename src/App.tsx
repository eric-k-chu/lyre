import type { FormEvent, ReactElement } from 'react'
import { AppShell, ArgsInput, Logs } from './components'
import { Button } from './components/ui'
import { useYtDlp } from './hooks'

export function App(): ReactElement {
  const { logs, cancel, download, ...rest } = useYtDlp()

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    download(rest.url)
  }

  return (
    <AppShell>
      <form className='flex h-dvh w-screen flex-col gap-4 p-4' onSubmit={submit}>
        <div className='flex h-20 gap-4'>
          <ArgsInput {...rest} />
          <Button
            type='submit'
            className='h-full bg-gradient-to-b from-primary-2 to-primary'
            disabled={rest.isDownloading}
          >
            Download
          </Button>
        </div>
        <Logs logs={logs} />
        <Button
          type='button'
          variant='destructive'
          onClick={cancel}
          className='w-full'
          disabled={rest.isDownloading}
        >
          Cancel
        </Button>
      </form>
    </AppShell>
  )
}
