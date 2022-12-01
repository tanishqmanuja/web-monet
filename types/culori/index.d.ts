declare module "culori" {
	type Optional<T, K extends keyof T> = Pick<Partial<T>, K> & Omit<T, K>;

	interface OklchColor {
		mode: "oklch";
		l: number;
		c: number;
		h: number;
	}
	export type Color = OklchColor;
	export function oklch(
		color: Optional<OklchColor, "mode"> | string
	): OklchColor;
	export function formatHex(color: Color | string): string;
}
