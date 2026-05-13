
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
			class="w-full border-b border-slate-200 bg-white/80 backdrop-blur dark:border-slate-800 dark:bg-slate-950/80"
		>
			<div class="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
				<a href={NavLink.Home} class="text-base font-semibold tracking-tight text-slate-900 dark:text-slate-100">
					Hello Worker
				</a>
				<div class="flex gap-4 text-sm text-slate-600 dark:text-slate-300">
					{NAV_LINKS.map(([label, href]) => (
						<a
							key={href}
							href={href}
							class={`hover:text-slate-900 dark:hover:text-slate-100 ${active === href ? 'text-slate-900 dark:text-slate-100' : ''}`}
						>
							{label}
						</a>
					))}
				</div>
			</div>
		</nav>
	)
}
