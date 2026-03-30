export const firm = {
	siteUrl: "https://test-mary-m.netlify.app/",
	companyName: "Mary Molloy Solicitor",
	county: "Kilkenny",

	phone: {
		display: "(056) 776 5829",
		phoneHref: "+353567765829",
	},
	// TODO: Replace with the real firm email address.
	email: "info@YOURDOMAIN.ie",

	address: {
		line1: "2 Rose Inn St",
		city: "Kilkenny",
		eircode: "R95 W58D",
		country: "Ireland",
		googleMapDirectionsHref:
			"https://www.google.com/maps/dir/?api=1&destination=2+Rose+Inn+St,+Kilkenny,+R95+W58D",
	},

	officeHours: {
		display: "Mon-Fri 9:00-17:30",
		weekly: [
			{ day: "Monday",    opens: "09:00", closes: "17:30" },
			{ day: "Tuesday",   opens: "09:00", closes: "17:30" },
			{ day: "Wednesday", opens: "09:00", closes: "17:30" },
			{ day: "Thursday",  opens: "09:00", closes: "17:30" },
			{ day: "Friday",    opens: "09:00", closes: "17:30" },
		],
	},

	socialLinks: [],

	seo: {
		defaultTitle: "Mary Molloy Solicitor | Kilkenny",
		defaultDescription:
			"Mary Molloy Solicitor is a solicitor's practice based in Kilkenny, providing legal services including conveyancing, probate, family law and litigation. Contact us to arrange an appointment.",
		defaultOgImage: "/images/open-graph/og-default.webp",
		defaultOgImageAlt: "Mary Molloy Solicitor - Legal Services in Kilkenny",
	},
} as const;
