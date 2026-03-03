import { defineAction } from "astro:actions";
import { contactSchema } from "../features/contact-form/schema/contact.schema";
import { deliverContact } from "../features/contact-form/service/deliverContact";

export const contact = defineAction({
	accept: "form",
	input: contactSchema,
	handler: async (input) => {
		// Honeypot: silently succeed while dropping bot submissions.
		if (input.website.trim()) {
			return { ok: true };
		}

		await deliverContact(input);
		return { ok: true };
	},
});
