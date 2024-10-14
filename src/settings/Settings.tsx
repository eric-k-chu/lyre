import {
  FileInput,
  type MantineColorScheme,
  Select,
  Stack,
  useMantineColorScheme,
} from '@mantine/core'
import type { FormHTMLAttributes, PropsWithChildren, ReactElement } from 'react'

export function Settings(): ReactElement {
  const { setColorScheme, colorScheme } = useMantineColorScheme()

  return (
    <Stack gap='md' component={SettingsForm}>
      <Select
        label='Theme'
        defaultValue={colorScheme}
        data={[
          { value: 'light', label: 'Light' },
          { value: 'dark', label: 'Dark' },
          { value: 'auto', label: 'System' },
        ]}
        onChange={(value) => value && setColorScheme(value as MantineColorScheme)}
      />

      <FileInput label='Output Directory' placeholder='Select a directory' accept='directory' />
    </Stack>
  )
}

type SettingsFormProps = PropsWithChildren<FormHTMLAttributes<HTMLFormElement>>

function SettingsForm(props: SettingsFormProps): ReactElement {
  return <form {...props}>{props.children}</form>
}
