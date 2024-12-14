import { useSyncExternalStore } from 'react'

type LocalStoreInput<T extends string> = {
  key: string
  fallback: T
}

type LocalStoreState<T extends string> = {
  item: T
  set: (value: T) => void
}

export function useLocalStore<T extends string>(input: LocalStoreInput<T>): LocalStoreState<T> {
  const item = useSyncExternalStore(subscribe, () =>
    getItemFromLocalStorage(input.key, input.fallback)
  )
  const set = (value: T): void => {
    localStorage.setItem(input.key, value)
    window.dispatchEvent(new Event('storage'))
  }
  return { item, set }
}

function subscribe(cb: VoidFunction): VoidFunction {
  window.addEventListener('storage', cb)
  return () => {
    window.removeEventListener('storage', cb)
  }
}

function getItemFromLocalStorage<T extends string>(key: string, fallback: T): T {
  return (localStorage.getItem(key) as T) || fallback
}
