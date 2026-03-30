import phoneIcon from "../assets/ctas/phoneIcon.svg?raw";
import { firm } from "./firm";

export const defaultCtaSection = {
	title: "Need legal guidance you can rely on?",
	body: "Speak with our team for clear, practical support tailored to your matter.",
} as const;

export const globalCtas = {
	call: {
		label: firm.phone.display,
		href: `tel:${firm.phone.phoneHref}`,
		icon: phoneIcon,
	},
	email: {
		label: "Contact Us",
		href: "/contact",
	},
} as const;
