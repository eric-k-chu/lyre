export function requireParam<T>(
  value: T | undefined | null,
  message = 'Required parameter is missing.'
): asserts value is T {
  if (value === undefined || value === null) throw new Error(message)
}
