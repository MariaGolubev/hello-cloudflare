import { jsxRenderer } from 'hono/jsx-renderer'
import { Link, Script, ViteClient } from 'vite-ssr-components/hono'

export const renderer = jsxRenderer(
	({ children }) => {
		return (
			<html>
				<head>
					<ViteClient />
					<Script src="/node_modules/htmx.org/dist/htmx.min.js" />
					<Link href="/src/style.css" rel="stylesheet" />
					<Link rel="icon" type="image/x-icon" href="/src/favicon.ico" />
				</head>
				<body>{children}</body>
			</html>
		)
	},
	{ stream: true }
)


