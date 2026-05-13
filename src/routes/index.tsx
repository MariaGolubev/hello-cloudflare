import { Hono } from 'hono'
import { contact } from './contact'
import { about } from './about'
import { home } from './home'
import { blog } from './blog'


export const routes = new Hono()
	.get('/', (c) => {
		return c.redirect('/home')
	})
	.get('/home', home)
	.get('/about', about)
	.get('/blog', blog)
	.get('/contact', contact)