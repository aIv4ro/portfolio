import { Mail } from "./icons/Mail.jsx";

export function MailButton({ }) {
	const handleClick = (evt) => {
		evt.preventDefault();
		window.open("mailto:alvaromagu2002@gmail.com");
	}
	return (
		<button onClick={handleClick} className="hover:text-[var(--hover-text-color)]">
			<Mail width="30px" height="30px" />
		</button>
	);
}