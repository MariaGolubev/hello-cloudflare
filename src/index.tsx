import { Hono } from 'hono'
import { BaseLayout } from './layouts'
import { routes } from './routes'


const app = new Hono()

app.use(BaseLayout)

app.route('/', routes)

export default app
