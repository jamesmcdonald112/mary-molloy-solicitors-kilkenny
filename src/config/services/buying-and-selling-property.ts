import homeModernIcon from "../../assets/icons/homeModernIcon.svg?raw";
import image from "../../assets/images/new/house-key-and-figurine.webp";
import { firm } from "../firm";

export const buyingAndSellingProperty = {
	// --- Identity ---
	title: "Buying & Selling Property",
	tag: "Conveyancing",
	slug: "buying-and-selling-property",
	href: "/services/buying-and-selling-property",
	icon: homeModernIcon,
	image,
	imageClass: "object-center",
	description:
		"Our conveyancing service guides you through every step of buying or selling property in Ireland, from reviewing contracts to managing completion. We work to protect your interests and keep your transaction on track from start to finish.",
	// --- SEO ---
	seo: {
		title: `Buying & Selling Property in Kilkenny | ${firm.companyName}`,
		description:
			"Property solicitor services in Kilkenny for buying and selling property, with clear conveyancing support from first offer to final closing.",
		canonicalPath: "/services/buying-and-selling-property",
	},
	// --- Hero ---
	hero: {
		title: "Buying & Selling Property in Kilkenny",
		subtitle:
			"If you are buying or selling property in Kilkenny, we provide clear, practical legal advice from contract to completion. Our experienced property solicitors manage residential and commercial conveyancing, protect your interests, avoid delays and ensure your transaction progresses smoothly at every stage.",
	},
	// --- Mid-page CTA ---
	midCta: ["Ready to move your property matter forward?", "Get in touch today."],
	// --- Bottom CTA ---
	cta: {
		title: "Ready to move your property matter forward?",
		description:
			"Contact us for clear, practical support with your buying or selling process.",
	},
	// --- Trust strip ---
	trustStrip: {
		title: "A family-run firm focused on clear, practical legal advice",
		paragraphs: [
			"Our experienced team provides practical, straightforward legal guidance across property and private client matters.",
			"Clients choose us for clarity and communication. We explain each step in plain English, outline what is required early, and keep you informed as your matter progresses.",
			"Our work is centred on property and private client matters, including buying and selling homes, conveyancing, probate and estate administration. We prioritise straightforward advice and a steady, detail-focused approach on every file.",
			"Whether you are purchasing, selling, dealing with probate, or looking for general guidance, our aim is simple: keep the process clear, keep matters moving, and help you make confident decisions without unnecessary stress.",
		],
		stats: [
			{ label: "Years in practice", value: "46+" },
			{ label: "Established", value: "1979" },
			{ label: "Local base", value: "Kilkenny" },
			{ label: "Core focus", value: "Property & Probate" },
		],
	},
	// --- Article ---
	article: {
		eyebrow: "Conveyancing",
		title: "Support for buying and selling property",
		intro:
			"Focused legal support for each side of the transaction, with clear advice on contracts, timelines, and completion steps.",
		blocks: [
			{
				type: "heading" as const,
				text: "Buying a property",
			},
			{
				type: "paragraph" as const,
				text: "We act for residential and commercial buyers across Kilkenny, guiding the purchase from contract review through to closing and registration with clear, practical advice at every stage.",
			},
			{
				type: "list" as const,
				items: [
					{ text: "Reviewing contracts before signing." },
					{ text: "Advising on title, rights, and planning matters." },
					{ text: "Raising pre-contract enquiries with the seller's solicitor." },
					{ text: "Guiding you through mortgage and lender requirements." },
					{ text: "Managing signing and pre-completion formalities." },
					{ text: "Handling stamp duty and Land Registry registration." },
					{ text: "Explaining legal obligations in plain English before commitment." },
				],
			},
			{
				type: "heading" as const,
				text: "Selling a property",
			},
			{
				type: "paragraph" as const,
				text: "For residential and commercial sellers, we prepare documentation early, address enquiries efficiently, and manage the transaction through to completion.",
			},
			{
				type: "list" as const,
				items: [
					{ text: "Preparing contracts and supporting sale documentation." },
					{ text: "Responding to purchaser solicitor enquiries promptly." },
					{ text: "Reviewing title records and resolving issues early." },
					{ text: "Advising on conditions and timelines for completion." },
					{ text: "Managing contract signing and agreed completion date." },
					{ text: "Coordinating closing documentation and fund transfers." },
					{ text: "Supporting a smooth handover at final completion." },
				],
			},
			{
				type: "heading" as const,
				text: "What to prepare",
			},
			{
				type: "paragraph" as const,
				text: "A short checklist can help avoid delays once contracts and timelines start moving.",
			},
			{
				type: "list" as const,
				items: [
					{ label: "Buyers", text: "Photo ID, proof of address, mortgage approval details, deposit source information, PPS number, and property details from the estate agent." },
					{ label: "Sellers", text: "Photo ID, proof of address, title deeds or title information, planning or building compliance documents where relevant, mortgage lender details, and a BER certificate." },
				],
			},
		],
	},
	// --- Process steps ---
	process: [
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
	// --- FAQs ---
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
			question: "Can you do fixed-fee conveyancing?",
			answer:
				"In straightforward matters, a fixed-fee structure may be available. Where work is likely to vary, we explain the pricing basis clearly from the outset.",
		},
		{
			question: "What is different about new builds?",
			answer:
				"New builds can involve additional contract terms, strict timelines, and construction-related documentation that should be reviewed before commitment.",
		},
		{
			question: "Can you act if I am buying or selling outside Kilkenny?",
			answer:
				"Yes. We regularly act for clients in Kilkenny and nearby areas, and we can manage many steps remotely for transactions elsewhere in Ireland.",
		},
	],
} as const;
