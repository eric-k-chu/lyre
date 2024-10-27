import { invoke } from '@tauri-apps/api/core'

type GreetInput = {
  name: string
}

export async function greet(input: GreetInput): Promise<string> {
  return invoke('greet', input)
}
