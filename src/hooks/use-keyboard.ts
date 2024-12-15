import { useEffect } from 'react'

export function useKeyboard(cb: (key: KeyboardEvent) => void, deps: unknown[]): void {
  useEffect(() => {
    const listener = (e: KeyboardEvent): void => {
      cb(e)
    }
    window.addEventListener('keydown', listener)
    return (): void => {
      window.removeEventListener('keydown', listener)
    }
  }, deps)
}
