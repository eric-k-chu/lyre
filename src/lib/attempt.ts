type Result<T> = [T, undefined] | [undefined, string]

export async function attempt<T>(fn: () => Promise<T>): Promise<Result<T>> {
  try {
    const res = await fn()
    return [res, undefined]
  } catch (error) {
    if (error instanceof Error) {
      return [undefined, error.message]
    }
    return [undefined, 'An unknown error occurred.']
  }
}
