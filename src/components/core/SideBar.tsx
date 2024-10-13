import { cn } from '@/lib/utils'
import { Group, Stack, Text, UnstyledButton } from '@mantine/core'
import { ArrowLeftFromLineIcon, HomeIcon, type LucideProps, SettingsIcon } from 'lucide-react'
import type { ForwardRefExoticComponent, ReactElement, RefAttributes } from 'react'
import { Link, useLocation } from 'react-router-dom'

type Props = {
  opened: boolean
  toggle: () => void
}

export function SideBar({ opened, toggle }: Props): ReactElement {
  const { pathname } = useLocation()
  return (
    <Stack gap='md' h='100%' align='center'>
      <Group
        justify={opened ? 'flex-end' : 'center'}
        w='100%'
        className='group relative'
        px={opened ? 'md' : 0}
      >
        <UnstyledButton onClick={() => toggle()}>
          <ArrowLeftFromLineIcon className={opened ? 'scale-x-[1]' : 'scale-x-[-1]'} size={20} />
        </UnstyledButton>
      </Group>
      <NavLink currentPath={pathname} icon={HomeIcon} label='Home' opened={opened} to='/' />
      <NavLink
        bottom
        currentPath={pathname}
        icon={SettingsIcon}
        label='Settings'
        opened={opened}
        to='/settings'
      />
    </Stack>
  )
}

type NavLinkProps = {
  to: string
  icon: ForwardRefExoticComponent<Omit<LucideProps, 'ref'> & RefAttributes<SVGSVGElement>>
  label: string
  bottom?: boolean
  opened: boolean
  currentPath: string
}

function NavLink({
  to,
  icon: Icon,
  label,
  bottom,
  opened,
  currentPath,
}: NavLinkProps): ReactElement {
  return (
    <Group
      justify={opened ? 'flex-start' : 'center'}
      px={opened ? 'md' : 0}
      w='100%'
      mt={bottom ? 'auto' : 0}
      className='group relative'
    >
      <Link to={to}>
        <Icon className='transition-colors group-hover:stroke-[#172F44]' size={20} />
        <Text hidden={!opened}>{label}</Text>
      </Link>
      <div
        className={cn(
          'absolute right-0 h-full w-1 rounded-l-lg bg-[#102130] transition-opacity',
          currentPath.startsWith(to) ? 'opacity-100' : 'opacity-0'
        )}
      />
    </Group>
  )
}
