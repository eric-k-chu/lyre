import { ThemeProviderContext, type ThemeProviderProps, useLocalStorage } from '@/lib'
import { type ReactElement, useEffect } from 'react'

export function ThemeProvider({
  children,
  defaultTheme = 'system',
  storageKey = 'lyre-ui-theme',
}: ThemeProviderProps): ReactElement {
  const { item: theme, set } = useLocalStorage({ key: storageKey, fallback: defaultTheme })

  useEffect(() => {
    const root = window.document.documentElement
    root.classList.remove('light', 'dark')
    if (theme === 'system') {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light'
      root.classList.add(systemTheme)
      return
    }
    root.classList.add(theme)
  }, [theme])

  return (
    <ThemeProviderContext.Provider value={{ theme, set }}>{children}</ThemeProviderContext.Provider>
  )
}
