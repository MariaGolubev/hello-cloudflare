
export enum NavLink {
	Home = '/home',
	About = '/about',
	Blog = '/blog',
	Contact = '/contact',
}

const NAV_LINKS = Object.entries(NavLink) as Array<[keyof typeof NavLink, NavLink]>

interface Props {
	active: NavLink
}


export const Nav = ({ active }: Props) => {
	return (
		<nav
			hx-boost:inherited="true"
			class="app-nav"
		>
			<div class="app-nav__inner">
				<a href={NavLink.Home} class="app-nav__brand">
					Hello Worker
				</a>
				<div class="app-nav__links">
					{NAV_LINKS.map(([label, href]) => (
						<a
							key={href}
							href={href}
							class={`app-nav__link ${active === href ? 'app-nav__link--active' : ''}`}
						>
							{label}
						</a>
					))}
				</div>
			</div>
		</nav>
	)
}
