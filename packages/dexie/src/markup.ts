import type { AuditFields } from './audit'

export type MarkupDb = AuditFields & {
  markupId: string
  /** JSON string */
  settings: string
}

export type Settings = {
  crf: number
  // TODO add more
}
