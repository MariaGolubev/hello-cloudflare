import type { Context } from 'hono'
import { Nav, NavLink } from '../components'

export const home = (c: Context) => {
	return c.render(
		<>
			<Nav active={NavLink.Home} />
			<main>
				<section class="page-section">
					<h1 class="page-title">Hello, Worker</h1>
					<p class="page-lead">
						This is a simple Tailwind-styled page served from a Hono route.
					</p>
				</section>
			</main>

		</>
	)
}
