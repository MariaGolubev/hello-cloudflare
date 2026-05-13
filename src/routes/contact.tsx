import type { Context } from 'hono'
import { Nav, NavLink, getOrder, LoadTransition, Direction } from '../components'


export const contact = (c: Context) => {
	const fromRaw = c.req.header("HX-Current-URL") ?? null;
	const fromUrl = fromRaw ? new URL(fromRaw).pathname : null;


	const fromOrder = getOrder(fromUrl);
	const toOrder = NavLink.Contact.order;


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
			<Nav active={NavLink.Contact} />

			<main>
				<LoadTransition direction={direction} class="page-section">
					<h1 class="page-title">Contact</h1>
					<p class="page-lead">
						Sample contact page for the app.
					</p>
				</LoadTransition>
			</main>

		</>
	)
}
