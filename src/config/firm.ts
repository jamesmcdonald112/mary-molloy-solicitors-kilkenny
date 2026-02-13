export const firm = {
	siteUrl: "https://test-mary-m.netlify.app/",
	companyName: "Mary Molloy Solicitors",
	county: "Kilkenny",

	phone: {
		display: "(056) 776 5829",
		phoneHref: "+353567765829",
	},

	address: {
		line1: "2 Rose Inn St",
		line2: "Dukesmeadows",
		city: "Kilkenny",
		eircode: "R95 W58D",
		country: "Ireland",
		googleMapDirectionsHref: "https://www.google.com/maps/dir/?api=1&destination=2+Rose+Inn+St,+Kilkenny,+R95+W58D"
	},



	officeHours: {
		display: "Mon–Fri 9:00–17:30",
		// optional for later, if you ever need structured data:
		weekly: {
			mon: "09:00-17:30",
			tue: "09:00-17:30",
			wed: "09:00-17:30",
			thu: "09:00-17:30",
			fri: "09:00-17:30",
			sat: "closed",
			sun: "closed",
		},
	},

	seo: {
   	defaultTitle: "Mary Molloy Solicitors | Kilkenny",
    defaultDescription:
      "Mary Molloy Solicitors is a solicitor’s practice based in Kilkenny, providing legal services including conveyancing, probate, family law and litigation. Contact us to arrange an appointment.",
		defaultOgImage: "/images/open-graph/og-default.webp",
		defaultOgImageAlt: "Mary Molloy Solicitors — Legal Services in Kilkenny",
  },
} as const;

