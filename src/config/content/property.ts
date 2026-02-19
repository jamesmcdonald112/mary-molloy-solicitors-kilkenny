import documentIcon from "../../assets/icons/documentIcon.svg?raw";
import homeIcon from "../../assets/icons/homeIcon.svg?raw";
import { firm } from "../firm";

export const propertyPageContent = {
	seo: {
		title: `Buying & Selling Property in Kilkenny | ${firm.companyName}`,
		description:
			"Property solicitor services in Kilkenny for buying and selling property, with clear conveyancing support from first offer to final closing.",
		canonicalPath: "/buying-and-selling-property",
	},
	keywords: [
		"property solicitor Kilkenny",
		"buying a house solicitor",
		"house purchase solicitor",
		"selling a house solicitor",
		"conveyancing solicitor",
		"buying and selling property",
	],
	hero: {
		badge: {
			text: "Residential & Commercial Conveyancing in Kilkenny.",
			linkLabel: "Contact us",
			href: "/contact",
		},
		title: "Buying & Selling Property in Kilkenny",
		subtitle:
			"If you are buying or selling property in Kilkenny, we provide clear, practical legal advice from contract to completion. Our experienced property solicitors manage residential and commercial conveyancing, protect your interests, avoid delays and ensure your transaction progresses smoothly at every stage",
		image: {
			src: "src/assets/images/pages/property/property-hero.webp",
			alt: "A client signing a property contract with a solicitor, with a house model on the table.",
		},
	},
	trustStrip: {
		eyebrow: "Why clients choose us",
		title: "A practical approach to property work",
		columns: [
			[
				"We focus on clear communication from day one, so you know what is happening with your purchase or sale and what decisions need to be made next.",
				"Our team handles contracts, title checks, and transaction milestones with careful attention to detail, while keeping legal language straightforward.",
			],
			[
				"If issues arise during a property transaction, we explain your options in plain English and help you choose the most practical route forward.",
				"We work with buyers, sellers, lenders, and agents to keep momentum and reduce avoidable delays where possible.",
			],
		],
		stats: [
			{ label: "Local base", value: "Kilkenny" },
			{ label: "Service area", value: "Kilkenny + nearby counties" },
			{ label: "Focus", value: "Residential property" },
			{ label: "Communication", value: "Direct and clear" },
		],
	},
	servicesSection: {
		eyebrow: "Property services",
		title: "Support for buying and selling property",
		description:
			"Focused legal support for each side of the transaction, with clear advice on contracts, timelines, and completion steps.",
	},
	services: [
		{
			title: "Buying a Property",
			summary:
				"We act for residential and commercial buyers across Kilkenny, guiding the purchase from contract review through to closing and registration with clear, practical advice at every stage.",
			ctaLabel: "Contact Us",
			ctaHref: "/contact",
			points: [
				"Reviewing contracts before signing.",
				"Advising on title, rights, and planning matters.",
				"Raising pre-contract enquiries with the seller’s solicitor.",
				"Guiding you through mortgage and lender requirements.",
				"Managing signing and pre-completion formalities.",
				"Handling stamp duty and Land Registry registration.",
				"Explaining legal obligations in plain English before commitment.",
			],
			icon: homeIcon,
		},
		{
			title: "Selling a Property",
			summary:
				"For residential and commercial sellers, we prepare documentation early, address enquiries efficiently, and manage the transaction through to completion.",
			ctaLabel: "Contact Us",
			ctaHref: "/contact",
			points: [
				"Preparing contracts and supporting sale documentation.",
				"Responding to purchaser solicitor enquiries promptly.",
				"Reviewing title records and resolving issues early.",
				"Advising on conditions and timelines for completion.",
				"Managing contract signing and agreed completion date.",
				"Coordinating closing documentation and fund transfers.",
				"Supporting a smooth handover at final completion.",
			],
			icon: documentIcon,
		},
	],
	process: {
		eyebrow: "How it works",
		title: "How the process works",
		intro:
			"Every buying and selling matter is different, but most property files follow a clear sequence from instruction to completion.",
		body: "We keep each step practical and transparent, so you always know what is happening, what is needed from you, and what comes next.",
		image: {
			src: "/images/lady-justice3.webp",
			alt: "Solicitor reviewing property documents with clients",
		},
		steps: [
			{
				title: "Initial instruction",
				description:
					"We open your file, confirm key details, and explain the likely timeline for your transaction.",
			},
			{
				title: "Document gathering",
				description:
					"We collect identity documents and the core property paperwork needed to begin legal work.",
			},
			{
				title: "Contract stage",
				description:
					"We draft or review contracts and advise you clearly before any signature is made.",
			},
			{
				title: "Enquiries and checks",
				description:
					"We raise and respond to legal enquiries, and deal with title and compliance issues as they arise.",
			},
			{
				title: "Signing and pre-completion",
				description:
					"Once terms are agreed, we guide signing and confirm all pre-completion requirements.",
			},
			{
				title: "Completion day",
				description:
					"We handle closing documents and funds transfer so ownership can transfer correctly.",
			},
			{
				title: "Post-completion",
				description:
					"We complete final filings and registration steps and confirm when your matter is fully closed.",
			},
		],
		closing:
			"If you are buying a house or selling a house in Kilkenny, we can guide your property transaction from start to finish.",
	},
	prepare: {
		eyebrow: "Preparation",
		title: "What to prepare",
		description:
			"A short checklist can help avoid delays once contracts and timelines start moving.",
		buyers: [
			"Photo ID and proof of address.",
			"Mortgage approval details (if applicable).",
			"Deposit source information.",
			"PPS number and personal details.",
			"Property details from the estate agent.",
		],
		sellers: [
			"Photo ID and proof of address.",
			"Title deeds or title information available.",
			"Planning/building compliance documents, if relevant.",
			"Mortgage lender details for redemption figures.",
			"BER certificate and agent sale details.",
		],
	},
	localService: {
		title: "Serving Kilkenny and surrounding areas",
		body: [
			"We act for clients in Kilkenny City and across County Kilkenny, and we also assist clients moving to or from nearby counties.",
			"Where needed, much of the process can be handled remotely by phone, email, and document exchange.",
		],
	},
	finalCta: {
		eyebrow: "Next step",
		title: "Ready to move your property matter forward?",
		body: "Contact us for clear, practical support with your buying or selling process.",
		ctas: [
			{
				label: firm.phone.display,
				href: `tel:${firm.phone.phoneHref}`,
				variant: "primary",
			},
			{ label: "Book consultation", href: "/contact", variant: "secondary" },
		],
	},
	faqs: [
		{
			question: "What does a property solicitor do?",
			answer:
				"A property solicitor manages the legal side of your purchase or sale, including contracts, title checks, enquiries, completion, and registration steps.",
		},
		{
			question: "Do I need a solicitor before my offer is accepted?",
			answer:
				"It helps to speak to a solicitor early. You can prepare documents, understand likely timelines, and avoid delays once an offer is accepted.",
		},
		{
			question: "How long does conveyancing take in Ireland?",
			answer:
				"Timelines vary depending on title, funding, and how quickly documents are available. Many matters progress over a number of weeks to a few months.",
		},
		{
			question: "What documents do I need as a buyer?",
			answer:
				"Usually identification, proof of address, funding or mortgage information, and key property details. Additional documents may be needed depending on the property.",
		},
		{
			question: "What documents do I need as a seller?",
			answer:
				"Commonly title documents, identification, planning-related records where relevant, and mortgage details if there is an existing loan to clear.",
		},
		{
			question: "What affects solicitor fees when buying a house?",
			answer:
				"Fees can depend on transaction complexity, title issues, lender requirements, and whether extra legal work is needed during the matter.",
		},
		{
			question: "What are conveyancing costs and what do they cover?",
			answer:
				"Costs usually include legal fees and outlays such as registration and search-related items. We explain what is included before work proceeds.",
		},
		{
			question: "Can you do fixed-fee conveyancing?",
			answer:
				"In straightforward matters, a fixed-fee structure may be available. Where work is likely to vary, we explain the pricing basis clearly from the outset.",
		},
		{
			question: "What's different about new builds?",
			answer:
				"New builds can involve additional contract terms, strict timelines, and construction-related documentation that should be reviewed before commitment.",
		},
		{
			question: "Can you act if I'm buying or selling outside Kilkenny?",
			answer:
				"Yes. We regularly act for clients in Kilkenny and nearby areas, and we can manage many steps remotely for transactions elsewhere in Ireland.",
		},
	],
} as const;
