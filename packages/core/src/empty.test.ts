import { isEmpty } from './empty'

describe('isEmpty', () => {
  it('should return true for undefined', () => {
    expect(isEmpty(undefined)).toBe(true)
  })
  it('should return true for null', () => {
    expect(isEmpty(null)).toBe(true)
  })
  it('should return true for an empty string', () => {
    expect(isEmpty('')).toBe(true)
  })
  it('should return true for a string with only whitespace', () => {
    expect(isEmpty(' ')).toBe(true)
  })
  it('should return true for 0', () => {
    expect(isEmpty(0)).toBe(true)
  })
  it('should return true for NaN', () => {
    expect(isEmpty(Number.NaN)).toBe(true)
  })
  it('should return true for an empty array', () => {
    expect(isEmpty([])).toBe(true)
  })
  it('should return true for an empty object', () => {
    expect(isEmpty({})).toBe(true)
  })
  it('should return false for a non-empty string', () => {
    expect(isEmpty('a')).toBe(false)
  })
  it('should return false for Infinity', () => {
    expect(isEmpty(Number.POSITIVE_INFINITY)).toBe(false)
  })
})
