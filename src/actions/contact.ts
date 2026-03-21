import { ActionError, defineAction } from "astro:actions";
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

		try {
			await deliverContact(input);
			return { ok: true };
		} catch (err) {
			console.error("Contact delivery failed:", err);

			throw new ActionError({
				code: "INTERNAL_SERVER_ERROR",
				message: "Unable to send message. Please try again later.",
			});
		}
	},
});
