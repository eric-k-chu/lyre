import { type PropsWithChildren, createContext, useContext } from 'react'

type Theme = 'dark' | 'light' | 'system'

export type ThemeProviderProps = PropsWithChildren<{
  defaultTheme?: Theme
  storageKey?: string
}>

type ThemeProviderState = {
  theme: Theme
  set: (theme: Theme) => void
}

export const ThemeProviderContext = createContext<ThemeProviderState>({
  theme: 'system',
  set: () => undefined,
})

export function useTheme(): ThemeProviderState {
  const context = useContext(ThemeProviderContext)
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}
