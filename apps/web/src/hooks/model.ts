export type AddHookResponse<Input, Output> = {
  add: (input: Input) => Output
  isAdding: boolean
  error?: string
}
