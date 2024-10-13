import { Group, type GroupProps, UnstyledButton } from '@mantine/core'
import { getCurrentWindow } from '@tauri-apps/api/window'
import { CopyIcon, MinusIcon, SquareIcon, XIcon } from 'lucide-react'
import { type ReactElement, useState } from 'react'

const app = getCurrentWindow()

export function TitleBar(props: GroupProps): ReactElement {
  const [isMaximized, setIsMaximized] = useState(false)

  return (
    <Group {...props} h='100%' gap={0}>
      <UnstyledButton
        className='h-full rounded-none hover:bg-zinc-200'
        onClick={() => app.minimize()}
        px='md'
      >
        <MinusIcon size={14} />
      </UnstyledButton>
      <UnstyledButton
        className='h-full rounded-none hover:bg-zinc-200'
        onClick={() => {
          app.toggleMaximize()
          setIsMaximized(!isMaximized)
        }}
        px='md'
      >
        {isMaximized ? <CopyIcon className='scale-x-[-1]' size={12} /> : <SquareIcon size={12} />}
      </UnstyledButton>
      <UnstyledButton
        className='h-full rounded-none hover:bg-destructive'
        onClick={() => app.close()}
        px='md'
      >
        <XIcon size={12} />
      </UnstyledButton>
    </Group>
  )
}
