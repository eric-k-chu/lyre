import { CopyIcon, SettingsIcon } from 'lucide-react'
import type { ReactElement } from 'react'

export function SideBar(): ReactElement {
  return (
    <aside className='h-full w-12 bg-red-400'>
      <CopyIcon />
      <SettingsIcon className='mt-auto' />
    </aside>
  )
}
