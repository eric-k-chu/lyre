type SafeResult<T> =
  | {
      error: Error
      data: undefined
    }
  | {
      error: undefined
      data: T
    }

function ok<T>(data: T): SafeResult<T> {
  return { error: undefined, data }
}

function error<T>(error: unknown): SafeResult<T> {
  if (error instanceof Error) {
    return { error, data: undefined }
  }
  return { error: new Error(`An unexpected error has occurred: ${error}`), data: undefined }
}

export async function safeAsync<T>(fn: () => Promise<T>): Promise<SafeResult<T>> {
  try {
    return ok(await fn())
  } catch (e) {
    return error(e)
  }
}

export function safe<T>(fn: () => T): SafeResult<T> {
  try {
    return ok(fn())
  } catch (e) {
    return error(e)
  }
}
