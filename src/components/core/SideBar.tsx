import { cn } from '@/lib/utils'
import { Group, type GroupProps, Stack, UnstyledButton } from '@mantine/core'
import { ArrowLeftFromLineIcon, HomeIcon, type LucideProps, SettingsIcon } from 'lucide-react'
import type { ForwardRefExoticComponent, ReactElement, RefAttributes } from 'react'
import { Link, type LinkProps, useLocation } from 'react-router-dom'

type Props = {
  opened: boolean
  toggle: () => void
}

export function SideBar({ opened, toggle }: Props): ReactElement {
  const { pathname } = useLocation()
  return (
    <Stack gap='md' h='100%' align='center'>
      <Group justify={opened ? 'flex-end' : 'center'} w='100%' px={opened ? 'md' : 0}>
        <UnstyledButton onClick={() => toggle()}>
          <ArrowLeftFromLineIcon
            className={cn('hover:stroke-secondary', opened ? 'scale-x-[1]' : 'scale-x-[-1]')}
            size={20}
          />
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
    <UnstyledButton
      justify={opened ? 'flex-start' : 'center'}
      px={opened ? 'md' : 0}
      w='100%'
      mt={bottom ? 'auto' : 0}
      className='group'
      component={LinkGroup}
      to={to}
    >
      <Icon
        size={20}
        className={currentPath === to ? 'stroke-primary' : 'group-hover:stroke-secondary'}
      />
      <p
        className={cn(
          'text-sm',
          !opened ? 'hidden' : 'block',
          currentPath === to ? 'text-primary' : 'group-hover:text-secondary'
        )}
      >
        {label}
      </p>
    </UnstyledButton>
  )
}

type LinkGroupProps = LinkProps & GroupProps

function LinkGroup(props: LinkGroupProps): ReactElement {
  return <Group component={Link} {...props} />
}
