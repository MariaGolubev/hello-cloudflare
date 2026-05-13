import { Hono } from 'hono'
import { Home, About, Blog, Contact } from './pages'
import { BaseLayout } from './layouts'
import { Nav, NavLink } from './components'


const app = new Hono()

app.use(BaseLayout)

app.get('/', (c) => {
	return c.redirect('/home')
})

app.get('/home', (c) => {
	return c.render(
		<>
			<Nav active={NavLink.Home} />
			<Home />
		</>
	)
})

app.get('/about', (c) => {
	return c.render(
		<>
			<Nav active={NavLink.About} />
			<About />
		</>
	)
})

app.get('/blog', (c) => {
	return c.render(
		<>
			<Nav active={NavLink.Blog} />
			<Blog />
		</>
	)
})

app.get('/contact', (c) => {
	return c.render(
		<>
			<Nav active={NavLink.Contact} />
			<Contact />
		</>
	)
})

export default app
