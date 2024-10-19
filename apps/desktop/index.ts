import { inspect } from 'node:util'

const output = inspect(
  {
    foo: 'bar',
    abc: 123,
    foos: [
      {
        name: 'foo',
        bearer: 'Bearer 123',
      },
    ],
  },
  {
    depth: Number.POSITIVE_INFINITY,
    maxArrayLength: Number.POSITIVE_INFINITY,
    maxStringLength: Number.POSITIVE_INFINITY,
    sorted: true,
  }
)

console.log(output)
