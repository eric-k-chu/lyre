import { type MarkupDb, db } from '@lyre/dexie'
import { useLiveQuery } from 'dexie-react-hooks'

export function useMarkups(): MarkupDb[] | undefined {
  return useLiveQuery(() => db.markups.toArray())
}
