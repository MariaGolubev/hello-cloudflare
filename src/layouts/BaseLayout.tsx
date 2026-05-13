import { jsxRenderer } from 'hono/jsx-renderer'
import { PropsWithChildren } from 'hono/jsx'
import { Link, Script, ViteClient } from 'vite-ssr-components/hono'

interface Props {
	title?: string
}

export const BaseLayout = jsxRenderer(
	({ children, title = 'Hello Worker' }: PropsWithChildren<Props>, c) => {
		if (c.req.header('HX-Boosted') === 'true') {
			return <>{children}</>
		}

		return (
			<html lang='en'>
				<head>
					<title>{title}</title>
					<ViteClient />
					<Script src="/node_modules/htmx.org/dist/htmx.min.js" />
					<Link href="/src/style.css" rel="stylesheet" />
					<Link rel="icon" type="image/x-icon" href="/src/favicon.ico" />
				</head>
				<body>
					{children}
				</body>
			</html>
		)
	},
	{ stream: true }
)


