import { type SafeResolved, safeAsync } from '@/core'
import { invoke } from '@tauri-apps/api/core'

type GreetInput = {
  name: string
}

export function greet(input: GreetInput): SafeResolved<string> {
  return safeAsync(invoke<string>('greet', input))
}
