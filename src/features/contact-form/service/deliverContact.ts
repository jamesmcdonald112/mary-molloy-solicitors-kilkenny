import { Resend } from "resend";
import { RESEND_API_KEY } from "astro:env/server";
import type { ContactInput } from "../schema/contact.schema";

const resend = new Resend(RESEND_API_KEY);

const FROM = "onboarding@resend.dev";
const TO = "jamesmcdonald112@yahoo.ie";

export async function deliverContact(input: ContactInput): Promise<void> {
	await resend.emails.send({
		from: FROM,
		to: TO,
		subject: `New contact form submission — ${input.practiceArea}`,
		text: [
			`Name: ${input.name}`,
			`Email: ${input.email}`,
			`Phone: ${input.phone}`,
			`Practice Area: ${input.practiceArea}`,
			`Message: ${input.message || "(none)"}`,
		].join("\n"),
	});
}