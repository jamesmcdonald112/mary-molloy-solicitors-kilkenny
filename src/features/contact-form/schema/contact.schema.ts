import { z } from "zod";
import { CONTACT_PRACTICE_AREAS } from "../config/contact-practice-areas";

const phoneRegex = /^[0-9+()\s-]{7,20}$/;

export const contactSchema = z.object({
	name: z
		.string()
		.trim()
		.min(2, "Name must be at least 2 characters.")
		.max(100, "Name must be 100 character maximum."),
	phone: z
		.string()
		.trim()
		.min(7, "Phone number looks too short.")
		.max(20, "Phone number looks too long.")
		.regex(phoneRegex, "Enter a valid phone number."),
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
