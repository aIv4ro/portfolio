import { Theme } from "./icons/Theme.jsx";

export function ThemeButton({ }) {
	const handleClick = (evt) => {
		evt.preventDefault();
		document.documentElement.classList.toggle('dark')
	}
	return (
		<button onClick={handleClick} className="transition-colors hover:text-[var(--hover-text-color)]">
			<Theme className="w-5" />
		</button>
	);
}