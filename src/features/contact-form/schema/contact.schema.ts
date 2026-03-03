import { parsePhoneNumberFromString } from "libphonenumber-js";
import { z } from "zod";
import { CONTACT_PRACTICE_AREAS } from "../config/contact-practice-areas";

const IE_DEFAULT_REGION = "IE";

export const contactSchema = z.object({
	name: z
		.string()
		.trim()
		.min(2, "Name must be at least 2 characters.")
		.max(100, "Name must be 100 character maximum."),
	phone: z
		.string()
		.trim()
		.min(1, "Phone is required.")
		.refine((value) => {
			const phone = parsePhoneNumberFromString(value, IE_DEFAULT_REGION);
			return phone?.isValid() ?? false;
		}, "Enter a valid phone number.")
		.transform((value, ctx) => {
			const phone = parsePhoneNumberFromString(value, IE_DEFAULT_REGION);
			if (!phone || !phone.isValid()) {
				ctx.addIssue({
					code: z.ZodIssueCode.custom,
					message: "Enter a valid phone number.",
				});
				return z.NEVER;
			}
			return phone.number; // E.164 e.g. +353567765829
		}),
	practiceArea: z.enum(CONTACT_PRACTICE_AREAS, {
		errorMap: () => ({ message: "Please choose a practice area." }),
	}),
	message: z
		.string()
		.trim()
		.max(2000, "Message is too long.")
		.optional()
		.default(""),

	// Honeypot (bots fill it)
	website: z
		.string()
		.trim()
		.optional()
		.nullable()
		.transform((v) => v ?? ""),
});

export type ContactInput = z.infer<typeof contactSchema>;
