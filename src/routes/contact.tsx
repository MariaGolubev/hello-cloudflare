import type { Context } from 'hono'
import { Nav, NavLink } from '../components'

export const contact = (c: Context) => {
	return c.render(
		<>
			<Nav active={NavLink.Contact} />
			<main class="page-main">
				<section class="page-section">
					<h1 class="page-title">Contact</h1>
					<p class="page-lead">
						Sample contact page for the app.
					</p>
				</section>
			</main>
		</>
	)
}
