import { Theme } from "./icons/Theme.jsx";

export function ThemeButton({ }) {
	return (
		<button className="transition-colors hover:text-[var(--hover-text-color)]">
			<Theme className="w-5" />
		</button>
	);
}