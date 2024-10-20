import { safeAsync } from '@lyre/core'
import { type Settings, db } from '@lyre/dexie'
import { useState } from 'react'
import type { AddHookResponse } from './model'

export function useAddMarkup(): AddHookResponse<Settings, Promise<void>> {
  const [isAdding, setIsAdding] = useState(false)
  const [error, setError] = useState<string>()

  async function add(settings: Settings): Promise<void> {
    setIsAdding(true)
    const { error } = await safeAsync(() =>
      db.markups.add({
        createdAt: Date.now(),
        updatedAt: Date.now(),
        settings: JSON.stringify(settings),
      })
    )
    setIsAdding(false)
    if (error) setError(error.message)
  }

  return { add, error, isAdding }
}
