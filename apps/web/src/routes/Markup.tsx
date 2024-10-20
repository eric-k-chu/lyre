import { Button } from '@/components/ui/button'
import { useAddMarkup } from '@/hooks/useAddMarkup'
import type { ReactElement } from 'react'

export function Markup(): ReactElement {
  const { add, error, isAdding } = useAddMarkup()

  return (
    <div>
      <Button onClick={() => add({ crf: 1 })} disabled={isAdding}>
        {isAdding ? 'Adding...' : 'Add Markup'}
      </Button>
    </div>
  )
}
