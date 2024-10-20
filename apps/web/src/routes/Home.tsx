import { Button } from '@/components/ui/button'
import { useAddMarkup } from '@/hooks/useAddMarkup'
import { useMarkups } from '@/hooks/useMarkups'
import type { ReactElement } from 'react'

export function Home(): ReactElement {
  const { add, error, isAdding } = useAddMarkup()
  const markups = useMarkups()

  return (
    <div>
      <h1>Recent</h1>
      <Button onClick={() => add({ crf: 1 })}>Add Markup</Button>
      {isAdding && <p>Adding...</p>}
      {markups?.map((m) => (
        <div key={m.markupId}>
          <pre>{JSON.stringify(m, null, 2)}</pre>
        </div>
      ))}
    </div>
  )
}
