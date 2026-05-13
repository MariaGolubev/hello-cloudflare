import type {
	JSX,
	PropsWithChildren,
} from "hono/jsx";

export enum Direction {
	Forward,
	Backward,
}

type Props = {
	direction: Direction | null;
} & JSX.IntrinsicElements["section"];

export const LoadTransition = ({
	children,
	class: className,
	direction,
	...props
}: PropsWithChildren<Props>) => {
	const directionClass =
		direction === Direction.Forward
			? "page-transition-forward"
			: direction === Direction.Backward
				? "page-transition-backward"
				: "";

	return (
		<section
			{...props}
			class={[
				"load-transition",
				directionClass,
				className,
			]
				.filter(Boolean)
				.join(" ")}
		>
			{children}
		</section>
	);
};