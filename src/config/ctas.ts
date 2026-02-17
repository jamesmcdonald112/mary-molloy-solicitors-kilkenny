import { firm } from "./firm";

export const globalCtas = {
	call: {
		label: firm.phone.display,
		href: `tel:${firm.phone.phoneHref}`,
	},
	email: { label: "Email", href: `mailto:${firm.email}` },
} as const;
