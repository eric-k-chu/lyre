import { cn } from '@/lib/utils'
import { Group, Text, useComputedColorScheme } from '@mantine/core'
import { getCurrentWindow } from '@tauri-apps/api/window'
import { CopyIcon, MinusIcon, SquareIcon, XIcon } from 'lucide-react'
import { type ReactElement, useState } from 'react'

const app = getCurrentWindow()

export function TitleBar(): ReactElement {
  const [isMaximized, setIsMaximized] = useState(false) // app.isMaximized returns a promise, using state instead
  const color = useComputedColorScheme()

  return (
    <Group h='100%' pl='md' data-tauri-drag-region>
      <Text size='xs' className='uppercase tracking-widest'>
        Lyre
      </Text>
      <Group ml='auto' h='100%' gap={0}>
        <button
          type='button'
          className={cn(
            'h-full rounded-none px-4',
            color === 'light' ? 'hover:bg-gray-300/50' : 'hover:bg-gray-700/50'
          )}
          onClick={() => app.minimize()}
        >
          <MinusIcon size={14} />
        </button>
        <button
          type='button'
          className={cn(
            'h-full rounded-none px-4',
            color === 'light' ? 'hover:bg-gray-300/50' : 'hover:bg-gray-700/50'
          )}
          onClick={() => {
            app.toggleMaximize()
            setIsMaximized(!isMaximized)
          }}
        >
          {isMaximized ? <CopyIcon className='scale-x-[-1]' size={12} /> : <SquareIcon size={12} />}
        </button>
        <button
          type='button'
          className='h-full rounded-none px-4 hover:bg-destructive'
          onClick={() => app.close()}
        >
          <XIcon size={12} />
        </button>
      </Group>
    </Group>
  )
}
