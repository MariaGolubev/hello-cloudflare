import type { Context } from 'hono'
import { Nav, NavLink, getOrder, LoadTransition, Direction } from '../components'

export const blog = (c: Context) => {
	const fromRaw = c.req.header("HX-Current-URL") ?? null;
	const fromUrl = fromRaw ? new URL(fromRaw).pathname : null;


	const fromOrder = getOrder(fromUrl);
	const toOrder = NavLink.Blog.order;


	const direction =
		fromOrder == null || toOrder === fromOrder
			? null
			: toOrder > fromOrder
				? Direction.Forward
				: toOrder < fromOrder
					? Direction.Backward
					: null;

	return c.render(
		<>
			<Nav active={NavLink.Blog} />
			<main>
				<LoadTransition direction={direction} class="page-section">
					<h1 class="page-title">Blog</h1>
					<p class="page-lead">
						Example blog index page. Replace this with real posts.
					</p>
				</LoadTransition>
			</main>
		</>
	)
}
