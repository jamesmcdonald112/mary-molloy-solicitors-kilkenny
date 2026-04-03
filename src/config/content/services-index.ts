import { propertyCard } from "./property";
import { firm } from "../firm";
import {
	debtCollection,
	employmentLaw,
	familyAndChildcareLaw,
	leasesAndTenancyAgreements,
	personalInjuryLitigation,
	roadTrafficAccidents,
	willsAndEstateAdministration,
} from "../services";

// --- Services index page content (hero, cta) ---
export const servicesIndexContent = {
	seo: {
		title: `Services | ${firm.companyName}`,
		description:
			"Mary Molloy Solicitor specialises in buying and selling property in Kilkenny, and offers a full range of legal services including wills, family law, personal injury, employment law, and more.",
		canonicalPath: "/services",
	},
	hero: {
		eyebrow: "Legal Services in Kilkenny",
		title: "Services",
		subtitle:
			"We provide clear, practical legal advice across a range of personal and business matters. Whatever your legal need, our experienced team in Kilkenny is here to help.",
	},
	cta: {
		title: "Not sure which service you need?",
		body: "Our team in Kilkenny is happy to talk through your situation and point you in the right direction.",
	},
} as const;

// --- All services (used by ServiceCardsGrid on the services index page) ---
// order here controls the order the cards appear on the page
export const allServices = [
	propertyCard,
	willsAndEstateAdministration,
	familyAndChildcareLaw,
	personalInjuryLitigation,
	roadTrafficAccidents,
	leasesAndTenancyAgreements,
	employmentLaw,
	debtCollection,
] as const;
