import { Mail } from "./icons/Mail.jsx";

export function MailButton({ }) {
	const handleClick = (evt) => {
		evt.preventDefault();
		window.open("mailto:alvaromagu2002@gmail.com");
	}
	return (
		<button onClick={handleClick} class="hover:text-[var(--hover-text-color)]">
			<Mail className="w-8" />
		</button>
	);
}