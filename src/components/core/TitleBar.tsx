import { getCurrentWindow } from '@tauri-apps/api/window'
import { CopyIcon, MinusIcon, SquareIcon, XIcon } from 'lucide-react'
import { type ReactElement, useState } from 'react'
import { Button } from '../ui/button'

const app = getCurrentWindow()

export function TitleBar(): ReactElement {
  const [isMaximized, setIsMaximized] = useState(false)

  return (
    <header data-tauri-drag-region className='flex w-full flex-row-reverse'>
      <Button variant='ghost' size='icon' onClick={() => app.close()}>
        <XIcon size={16} />
      </Button>
      <Button
        variant='ghost'
        size='icon'
        onClick={() => {
          app.toggleMaximize()
          setIsMaximized(!isMaximized)
        }}
      >
        {isMaximized ? <CopyIcon size={16} className='scale-x-[-1]' /> : <SquareIcon size={16} />}
      </Button>
      <Button variant='ghost' size='icon' onClick={() => app.minimize()}>
        <MinusIcon size={16} />
      </Button>
    </header>
  )
}
