import { Elysia } from 'elysia'
import { download } from './download'

const app = new Elysia().use(download).listen(3000)

console.log(`🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`)
