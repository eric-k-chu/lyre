import { requireParam } from '@/lib'
import { createContext, useContext } from 'react'

export type Theme = 'dark' | 'light' | 'system'

type ThemeProviderState = {
  theme: Theme
  set: (theme: Theme) => void
}

export const ThemeProviderContext = createContext<ThemeProviderState | undefined>(undefined)

export function useTheme(): ThemeProviderState {
  const context = useContext(ThemeProviderContext)
  requireParam(context, 'useTheme must be used within a ThemeProvider')
  return context
}
