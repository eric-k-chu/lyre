import { safe, safeAsync } from './safe'

describe('safeAsync', () => {
  it('should return a SafeResult with data when the promise resolves', async () => {
    const httpCall = async (val: string): Promise<string> => val
    const result = await safeAsync(() => httpCall('data'))
    expect(result).toEqual({ error: undefined, data: 'data' })
  })

  it('should return a SafeResult with error when the promise rejects', async () => {
    const httpCall = async (): Promise<string> => {
      throw new Error('error')
    }
    const result = await safeAsync(httpCall)
    expect(result.error).toBeInstanceOf(Error)
    expect(result.data).toBeUndefined()
  })
})

describe('safe', () => {
  it('should return a SafeResult with data when the function does not throw', () => {
    const fn = (): string => 'data'
    const result = safe(() => fn())
    expect(result).toEqual({ error: undefined, data: 'data' })
  })

  it('should return a SafeResult with error when the function throws', () => {
    const fn = (): string => {
      throw new Error('error')
    }
    const result = safe(fn)
    expect(result.error).toBeInstanceOf(Error)
    expect(result.data).toBeUndefined()
  })
})
