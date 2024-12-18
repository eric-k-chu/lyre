import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui'
import { useTheme } from '@/hooks'
import { MoonIcon, SunIcon } from '@radix-ui/react-icons'
import type { ReactElement } from 'react'

export function ThemeToggle(): ReactElement {
  const { set } = useTheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='ghost' size='icon'>
          <SunIcon className='dark:-rotate-90 h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:scale-0' />
          <MoonIcon className='absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100' />
          <span className='sr-only'>Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align='end'>
        <DropdownMenuItem
          className='text-xs'
          onClick={(): void => {
            set('light')
          }}
        >
          Light
        </DropdownMenuItem>
        <DropdownMenuItem
          className='text-xs'
          onClick={(): void => {
            set('dark')
          }}
        >
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem
          className='text-xs'
          onClick={(): void => {
            set('system')
          }}
        >
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
