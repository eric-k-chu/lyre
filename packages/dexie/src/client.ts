import Dexie, { type EntityTable } from 'dexie'
import type { MarkupDb } from './markup'

export const db = new Dexie('Lyre') as Dexie & {
  markups: EntityTable<MarkupDb, 'markupId'>
}

db.version(1).stores({
  markups: '++markupId, createdAt, updatedAt, settings',
})
