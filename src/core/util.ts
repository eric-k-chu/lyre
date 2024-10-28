export type SafeResolved<T> = Promise<
  | {
      data: T
      error: undefined
    }
  | {
      data: undefined
      error: string
    }
>

export async function safeAsync<T>(cb: Promise<T> | (() => Promise<T>)): SafeResolved<T> {
  try {
    const data = typeof cb === 'function' ? await cb() : await cb
    return { data, error: undefined }
  } catch (error) {
    return { data: undefined, error: parseError(error) }
  }
}

function parseError(error: unknown): string {
  if (error instanceof Error) {
    return error.message
  }
  return JSON.stringify(error)
}
