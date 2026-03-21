import { CONTACT_FIELD_LIMITS } from "../config/contact-field-limits";

const textarea = document.getElementById("message") as HTMLTextAreaElement | null;
const counter = document.getElementById("message-count");

if (textarea && counter) {
	const max = CONTACT_FIELD_LIMITS.message.max;

	const update = () => {
		const count = textarea.value.length;
		counter.textContent = `${count} / ${max}`;
		counter.classList.toggle("text-red-500", count >= max * 0.9);
		counter.classList.toggle("text-gray-400", count < max * 0.9);
	};

	textarea.addEventListener("input", update);
	update();
}
