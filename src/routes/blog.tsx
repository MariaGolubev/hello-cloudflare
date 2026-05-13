import type { Context } from 'hono'
import { Nav, NavLink } from '../components'

export const blog = (c: Context) => {
	return c.render(
		<>
			<Nav active={NavLink.Blog} />
			<main>
				<section class="page-section">
					<h1 class="page-title">Blog</h1>
					<p class="page-lead">
						Example blog index page. Replace this with real posts.
					</p>
				</section>
			</main>
		</>
	)
}
