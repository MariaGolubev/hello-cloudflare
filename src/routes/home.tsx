import type { Context } from 'hono'
import { Nav, NavLink, getOrder, LoadTransition, Direction } from '../components'



export const home = (c: Context) => {
	const fromRaw = c.req.header("HX-Current-URL") ?? null;
	const fromUrl = fromRaw ? new URL(fromRaw).pathname : null;


	const fromOrder = getOrder(fromUrl);
	const toOrder = NavLink.Home.order;


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
			<Nav active={NavLink.Home} />
			<main>
				<LoadTransition direction={direction} class="page-section">
					<h1 class="page-title">Hello, Worker</h1>
					<p class="page-lead">
						This is a simple Tailwind-styled page served from a Hono route.
					</p>
				</LoadTransition>
			</main>

		</>
	)
}
