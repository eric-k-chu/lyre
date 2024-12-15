import { useSyncExternalStore } from 'react'

type LocalStoreInput<T extends string> = {
  key: string
  fallback: T
}

type LocalStoreState<T extends string> = [T, (value: T) => void]

export function useLocalStore<T extends string>(input: LocalStoreInput<T>): LocalStoreState<T> {
  const item = useSyncExternalStore(subscribe, () =>
    getItemFromLocalStorage(input.key, input.fallback)
  )
  const set = (value: T): void => {
    localStorage.setItem(input.key, value)
    window.dispatchEvent(new Event('storage'))
  }
  return [item, set]
}

function subscribe(cb: () => void): () => void {
  window.addEventListener('storage', cb)
  return (): void => {
    window.removeEventListener('storage', cb)
  }
}

function getItemFromLocalStorage<T extends string>(key: string, fallback: T): T {
  return (localStorage.getItem(key) as T) || fallback
}
