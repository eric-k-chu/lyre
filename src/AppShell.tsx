import type { ReactElement } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { AppSidebar } from './AppSidebar'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
} from './components/ui/breadcrumb'
import { Separator } from './components/ui/separator'
import { SidebarInset, SidebarProvider, SidebarTrigger } from './components/ui/sidebar'
import { ThemeProvider } from './hooks/useTheme'

export function AppShell(): ReactElement {
  const { pathname } = useLocation()
  const crumbs = pathname.split('/').filter(Boolean)

  return (
    <ThemeProvider>
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset>
          <div className='flex items-center gap-2 p-4'>
            <SidebarTrigger />
            <Separator orientation='vertical' className='mr-2 h-4' />
            <Breadcrumb>
              <BreadcrumbList>
                {['Home', ...crumbs].map((crumb, i, arr) => (
                  <BreadcrumbItem key={crumb}>
                    <BreadcrumbLink href={arr.slice(0, i).join('/')}>{crumb}</BreadcrumbLink>
                  </BreadcrumbItem>
                ))}
              </BreadcrumbList>
            </Breadcrumb>
          </div>
          <section className='p-4 pt-0'>
            <Outlet />
          </section>
        </SidebarInset>
      </SidebarProvider>
    </ThemeProvider>
  )
}
