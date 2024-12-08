import type { ReactElement } from 'react'
import { Input, type InputProps, Label, type LabelProps } from './ui'

export function ArgsInput(): ReactElement {
  return (
    <section className='h-8 w-full space-y-4'>
      <FormInput
        label={{
          htmlFor: 'url',
          children: 'URL',
        }}
        input={{
          id: 'url',
          name: 'url',
          type: 'url',
          placeholder: 'https://youtube.com/@Google',
        }}
      />
      <FormInput
        label={{
          htmlFor: 'output',
          children: 'Output',
        }}
        input={{
          id: 'output',
          name: 'output',
          type: 'text',
          placeholder: 'output.mp4',
        }}
      />
    </section>
  )
}

type Props = {
  label: LabelProps
  input: InputProps
}

function FormInput({ label, input }: Props): ReactElement {
  return (
    <div className='flex size-full items-center'>
      <Label
        {...label}
        className='flex h-full w-16 place-content-center items-center justify-center rounded-l-sm border border-primary border-r bg-primary px-2 text-primary-foreground text-xs'
      />
      <Input
        {...input}
        className='size-full rounded-r-sm rounded-l-none border border-border border-l-none py-0 text-xs'
      />
    </div>
  )
}
