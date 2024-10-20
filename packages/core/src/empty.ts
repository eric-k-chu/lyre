export function isEmpty(value: unknown): value is undefined | null {
  if (value === undefined) return true
  if (value === null) return true
  if (typeof value === 'string') {
    return value.trim().length === 0
  }
  if (typeof value === 'number') {
    if (Number.isNaN(value)) return true
    return value === 0
  }
  if (typeof value === 'boolean') {
    return false
  }
  if (Array.isArray(value)) {
    return value.length === 0
  }
  if (typeof value === 'object') {
    return Object.keys(value).length === 0
  }
  throw new Error(`Unknown value type: ${JSON.stringify(value)}`)
}

export function isNotEmpty<T>(value: T | unknown): value is T {
  return !isEmpty(value)
}
