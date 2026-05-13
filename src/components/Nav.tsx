
export const NavLink = {
	Home: { url: "/home", order: 0 },
	About: { url: "/about", order: 1 },
	Blog: { url: "/blog", order: 2 },
	Contact: { url: "/contact", order: 3 },
} as const;

export type NavLinkItem = typeof NavLink[keyof typeof NavLink];
export type NavLinkKey = keyof typeof NavLink;

const ORDER_BY_URL = Object.fromEntries(
		Object.values(NavLink).map((item) => [item.url, item.order])
	) as Record<string, number>;

export const getOrder = (url: string | null) =>
		url ? ORDER_BY_URL[url] ?? null : null;



interface Props {
	active: NavLinkItem;
}


export const Nav = ({ active }: Props) => {
	return (
		<nav hx-boost:inherited="true" class="app-nav">
			<div class="app-nav__inner">
				<a href={NavLink.Home.url} class="app-nav__brand">
					Hello Worker
				</a>

				<div class="app-nav__links">
					{Object.entries(NavLink).map(([label, item]) => (
						<a
							key={item.order}
							href={item.url}
							class={`app-nav__link ${active.order === item.order ? "app-nav__link--active" : ""
								}`}
						>
							{label}
						</a>
					))}
				</div>
			</div>
		</nav>
	);
};