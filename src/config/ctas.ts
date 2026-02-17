import phoneIcon from "../assets/phone/phoneIcon.svg?raw";
import { firm } from "./firm";

export const globalCtas = {
	call: {
		label: firm.phone.display,
		href: `tel:${firm.phone.phoneHref}`,
		icon: phoneIcon,
	},
	email: { label: "Contact Us", href: "/contact" },
} as const;
