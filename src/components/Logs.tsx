import type { ReactElement } from 'react'
import { ScrollArea } from './ui'

type Props = {
  logs: string[]
}

export function Logs({ logs }: Props): ReactElement {
  return (
    <ScrollArea id='logs' className='w-full flex-1 rounded-sm border border-border p-4 text-xs'>
      {logs.map((log, index) => (
        <p key={index}>{log}</p>
      ))}
      <div
        aria-hidden
        ref={(node): void => {
          node?.scrollIntoView({ behavior: 'smooth' })
        }}
      />
    </ScrollArea>
  )
}
