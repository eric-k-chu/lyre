import { Stack } from '@mantine/core'
import { IconSettings, IconSquare1 } from '@tabler/icons-react'
import type { ReactElement } from 'react'

export function SideBar(): ReactElement {
  return (
    <aside className='h-full w-12 bg-red-400'>
      <Stack gap={5} align='center' h='100%' py={5}>
        <IconSquare1 />
        <IconSquare1 />
        <IconSettings className='mt-auto' />
      </Stack>
    </aside>
  )
}
