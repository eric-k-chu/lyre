import { Elysia, t } from 'elysia'

export const download = new Elysia().post(
  '/api/download',
  async function* ({ body }) {
    const { url } = body

    for (let i = 0; i < 10; i++) {
      await new Promise((resolve) => setTimeout(resolve, 1000))
      yield { progress: (i / 10) * 100 }
    }

    yield { progress: 100, url }
  },
  {
    body: t.Object({
      url: t.String(),
    }),
  }
)
