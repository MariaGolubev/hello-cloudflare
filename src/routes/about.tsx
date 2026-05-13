import type { Context } from 'hono'
import { Nav, NavLink } from '../components'

export const about = (c: Context) => {
	return c.render(
		<>
			<Nav active={NavLink.About} />
			<main class="page-main">
				<section class="page-section">
					<h1 class="page-title">About</h1>
					<p class="page-lead">
						This is a simple About page rendered by Hono.
					</p>
				</section>
			</main>
		</>
	)
}
