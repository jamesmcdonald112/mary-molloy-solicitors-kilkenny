import { firm } from "../firm";
import homeIcon from "../../assets/icons/homeIcon.svg?raw";
import documentTextIcon from "../../assets/icons/documentTextIcon.svg?raw";
import userGroupIcon from "../../assets/icons/userGroupIcon.svg?raw";
import shieldExclamationIcon from "../../assets/icons/shieldExclamationIcon.svg?raw";
import truckIcon from "../../assets/icons/truckIcon.svg?raw";
import buildingIcon from "../../assets/icons/buildingIcon.svg?raw";
import briefcaseIcon from "../../assets/icons/briefcaseIcon.svg?raw";
import banknotesIcon from "../../assets/icons/banknotesIcon.svg?raw";

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
// each entry: title, tag, href, icon (raw SVG), hoverImage, description
// order here controls the order the cards appear on the page
export const allServices = [
	{
		title: "Buying & Selling Property",
		tag: "Conveyancing",
		href: "/buying-and-selling-property",
		icon: homeIcon,
		hoverImage: "/images/kilkenny-castle.webp",
		description:
			"Our conveyancing service guides you through every step of buying or selling property in Ireland, from reviewing contracts to managing completion. We work to protect your interests and keep your transaction on track from start to finish.",
	},
	{
		title: "Wills and Estate Administration",
		tag: "Wills & Probate",
		href: "/services/wills-and-estate-administration",
		icon: documentTextIcon,
		hoverImage: "/images/lady-justice.webp",
		description:
			"We advise on making a valid will, lasting powers of attorney, and the full administration of estates following bereavement. Our team guides executors and beneficiaries through the probate process with clarity and sensitivity.",
	},
	{
		title: "Family & Childcare Law",
		tag: "Family & Child Law",
		href: "/services/family-and-childcare-law",
		icon: userGroupIcon,
		hoverImage: "/images/lady-justice2.webp",
		description:
			"We provide sensitive and experienced legal representation in family law matters, including separation, divorce, guardianship, and childcare proceedings. Our aim is to resolve disputes with as little conflict as possible.",
	},
	{
		title: "Personal Injury / Litigation",
		tag: "Personal Injury",
		href: "/services/personal-injury-litigation",
		icon: shieldExclamationIcon,
		hoverImage: "/images/lady-justice3.webp",
		description:
			"If you have suffered an injury as a result of another person's negligence, we can advise you on your rights and pursue a claim on your behalf. We handle personal injury litigation from initial assessment through to settlement or trial.",
	},
	{
		title: "Road Traffic Accidents",
		tag: "Personal Injury",
		href: "/services/road-traffic-accidents",
		icon: truckIcon,
		hoverImage: "/images/lady-justice4.webp",
		description:
			"We represent individuals injured in road traffic accidents, advising on liability, insurance claims, and compensation. From minor collisions to serious accidents, we work to ensure you receive what you are entitled to.",
	},
	{
		title: "Leases and Tenancy Agreements",
		tag: "Conveyancing",
		href: "/services/leases-and-tenancy-agreements",
		icon: buildingIcon,
		hoverImage: "/images/johns-bridge.webp",
		description:
			"We advise landlords and tenants on residential and commercial leases, reviewing and drafting agreements to protect your position. Whether you are entering a new tenancy or facing a dispute, we can help.",
	},
	{
		title: "Employment Law",
		tag: "Employment & Equality",
		href: "/services/employment-law",
		icon: briefcaseIcon,
		hoverImage: "/images/leather.webp",
		description:
			"We advise employees and employers on a wide range of employment law matters, including unfair dismissal, redundancy, workplace rights, and employment contracts. We help you understand your position and take the right steps.",
	},
	{
		title: "Debt Collection",
		tag: "Business Law",
		href: "/services/debt-collection",
		icon: banknotesIcon,
		hoverImage: "/images/marble-texture.webp",
		description:
			"We assist businesses and individuals in recovering money owed to them, from initial demand letters through to court proceedings. We pursue debts efficiently and work to minimise the cost and time involved in recovery.",
	},
] as const;
