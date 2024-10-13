import { Button } from '@mantine/core'
import { IconMinus, IconSquare, IconSquares, IconX } from '@tabler/icons-react'
import { getCurrentWindow } from '@tauri-apps/api/window'
import { type ReactElement, useState } from 'react'

const app = getCurrentWindow()

export function TitleBar(): ReactElement {
  const [isMaximized, setIsMaximized] = useState(false)

  return (
    <header data-tauri-drag-region className='flex w-full flex-row-reverse'>
      <Button variant='subtle' size='compact-md' onClick={() => app.close()}>
        <IconX size={16} />
      </Button>
      <Button
        variant='subtle'
        size='compact-md'
        onClick={() => {
          app.toggleMaximize()
          setIsMaximized(!isMaximized)
        }}
      >
        {isMaximized ? (
          <IconSquares size={16} className='scale-x-[-1]' />
        ) : (
          <IconSquare size={16} />
        )}
      </Button>
      <Button variant='subtle' size='compact-md' onClick={() => app.minimize()}>
        <IconMinus size={16} />
      </Button>
    </header>
  )
}
