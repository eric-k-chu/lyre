import { SidebarContext, type SidebarState, useIsMobile, useKeyboard } from '@/hooks'
import { cn } from '@/lib'
import {
  type CSSProperties,
  type ComponentPropsWithRef,
  type PropsWithChildren,
  type ReactElement,
  useCallback,
  useMemo,
  useState,
} from 'react'

type SidebarProviderProps = PropsWithChildren<
  ComponentPropsWithRef<'div'> & {
    defaultOpen?: boolean
    open?: boolean
    onOpenChange?: (open: boolean) => void
  }
>

export function SidebarProvider({
  children,
  defaultOpen = true,
  open,
  onOpenChange,
  className,
  style,
  ...props
}: SidebarProviderProps): ReactElement {
  const isMobile = useIsMobile()
  const [openMobile, setOpenMobile] = useState(false)
  const [isOpen, setIsOpen] = useState(defaultOpen)
  const show = open ?? isOpen

  const setOpen = useCallback(
    (value: boolean | ((value: boolean) => boolean)) => {
      const openState = typeof value === 'function' ? value(show) : value
      if (onOpenChange) {
        onOpenChange(openState)
      } else {
        setIsOpen(openState)
      }

      document.cookie = `sidebar:state=${openState}; path=/; max-age=${60 * 60 * 24 * 7}`
    },
    [open, show]
  )

  const toggleSidebar = useCallback(() => {
    return isMobile ? setOpenMobile((open) => !open) : setOpen((open) => !open)
  }, [isMobile, setOpen, setOpenMobile])

  useKeyboard(
    ({ key, metaKey, ctrlKey, preventDefault }) => {
      if (key === 'b' && (metaKey || ctrlKey)) {
        preventDefault()
        toggleSidebar()
      }
    },
    [toggleSidebar]
  )

  const state = show ? 'expanded' : 'collapsed'

  const ctx = useMemo<SidebarState>(
    () => ({
      state,
      open: show,
      setOpen,
      openMobile,
      setOpenMobile,
      isMobile,
      toggleSidebar,
    }),
    [state, show, setOpen, openMobile, setOpenMobile, isMobile, toggleSidebar]
  )

  return (
    <SidebarContext.Provider value={ctx}>
      <div
        style={
          {
            '--sidebar-width': '3rem',
            '--sidebar-width-icon': '3rem',
            ...style,
          } as CSSProperties
        }
        className={cn(
          'group/sidebar-wrapper flex min-h-svh w-full has-[[data-variant=inset]]:bg-sidebar',
          className
        )}
        {...props}
      >
        {children}
      </div>
    </SidebarContext.Provider>
  )
}
