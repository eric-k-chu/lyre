import { ScrollArea } from '@radix-ui/react-scroll-area'
import type { ReactElement } from 'react'

type Props = {
  logs: string[]
}

export function Logs({ logs }: Props): ReactElement {
  return (
    <ScrollArea className='w-full flex-1 rounded-sm border border-border p-4 text-xs'>
      {logs.map((log, index) => (
        <p key={index}>{log}</p>
      ))}
      <div
        aria-hidden
        ref={(node) => {
          node?.scrollIntoView({ behavior: 'smooth' })
        }}
      />
    </ScrollArea>
  )
}
