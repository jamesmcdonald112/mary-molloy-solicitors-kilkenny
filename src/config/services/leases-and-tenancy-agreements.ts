import { firm } from "../firm";

export const leasesAndTenancyAgreements = {
	// --- Identity ---
	title: "Leases and Tenancy Agreements",
	slug: "leases-and-tenancy-agreements",
	href: "/services/leases-and-tenancy-agreements",
	description:
		"We advise landlords and tenants on residential and commercial leases, reviewing and drafting agreements to protect your position. Whether you are entering a new tenancy or facing a dispute, we can help.",
	// --- SEO ---
	seo: {
		title: `Leases & Tenancy Agreements Kilkenny | ${firm.companyName}`,
		description:
			"Solicitors for residential and commercial leases and tenancy agreements in Kilkenny. We advise landlords and tenants on their legal rights and obligations.",
		canonicalPath: "/services/leases-and-tenancy-agreements",
	},
	// --- Hero ---
	hero: {
		title: "Leases and Tenancy Agreements",
		subtitle:
			"A well-drafted lease protects both landlord and tenant and helps prevent disputes from arising. We advise on residential and commercial tenancy matters, ensuring that your agreement reflects your intentions and complies with current Irish law.",
	},
	// --- Mid-page CTA (two lines rendered as <p> elements) ---
	midCta: ["Questions about a lease or tenancy dispute?", "Get advice before you act."],
	// --- Bottom CTA ---
	cta: {
		title: "Need advice on a lease or tenancy dispute?",
		description:
			"Whether you are reviewing a new agreement or dealing with a dispute, our Kilkenny solicitors can advise you on your rights and the most effective way to resolve the matter.",
	},
	// --- Trust strip (title, two 2-paragraph columns, stats) ---
	trustStrip: {
		title: "Clear advice for landlords and tenants in Kilkenny",
		columns: [
			[
				"Irish landlord and tenant law has changed significantly in recent years, with new rules on rent increases, notice periods, and tenancy terminations. We keep up to date with those changes and advise clients on exactly where they stand.",
				"We act for both landlords and tenants — reviewing and drafting lease agreements, advising on rights and obligations, and representing clients in Residential Tenancies Board proceedings when disputes arise.",
			],
			[
				"Getting a lease right from the start is far less costly than dealing with a dispute after the fact. We review agreements carefully, identify problematic terms, and advise on what can and should be negotiated before you sign.",
				"Where disputes do arise, we take a practical approach — advising on the most cost-effective route to resolution, whether that is negotiation, RTB mediation, or formal adjudication proceedings.",
			],
		],
		stats: [
			{ label: "Years in practice", value: "46+" },
			{ label: "Established", value: "1979" },
			{ label: "Local base", value: "Kilkenny" },
			{ label: "Focus area", value: "Landlord & Tenant" },
		],
	},
	// --- Article (eyebrow, title, intro, blocks) ---
	// block types: "paragraph" | "heading" | "list" | "blockquote"
	article: {
		eyebrow: "Landlord & Tenant",
		title: "Know your rights before you sign",
		intro:
			"Whether you are a landlord letting a property for the first time or a tenant reviewing a new lease, getting proper legal advice before you sign can prevent significant problems later. Our Kilkenny solicitors advise landlords and tenants on residential and commercial leases and represent clients in Residential Tenancies Board disputes.",
		blocks: [
			{
				type: "paragraph",
				text: "A lease or tenancy agreement is a legally binding contract. The terms it contains — on rent, duration, permitted use, maintenance obligations, and termination — will govern the relationship between landlord and tenant for the life of the tenancy. Vague or poorly drafted clauses are a common source of disputes, and they are much harder to resolve once both parties have signed.",
			},
			{
				type: "paragraph",
				text: "We advise both landlords and tenants. For landlords, we draft clear, enforceable agreements that protect their property and their income stream. For tenants, we review proposed leases and identify terms that are unfair, unlawful, or inconsistent with the protections available under the Residential Tenancies Act. In either case, we aim to ensure that what is agreed is unambiguous and will hold up if it is ever challenged.",
			},
			{
				type: "heading",
				text: "Common issues for landlords and tenants",
			},
			{
				type: "list",
				items: [
					{
						label: "Rent increases",
						text: "In Rent Pressure Zones, increases are capped and subject to strict rules. Outside RPZs, rent can be reviewed annually. We advise landlords on compliant notice procedures and tenants on how to challenge an unlawful increase.",
					},
					{
						label: "Deposit disputes",
						text: "Disputes over the return of a deposit are one of the most frequent issues referred to the Residential Tenancies Board. We advise on what deductions are permissible and represent clients in RTB proceedings.",
					},
					{
						label: "Termination and notice",
						text: "The rules on terminating a tenancy in Ireland have become increasingly complex. Landlords must follow precise procedures and give valid grounds for termination where the tenant is not at fault. Errors in the notice procedure can invalidate an otherwise legitimate termination.",
					},
					{
						label: "Commercial leases",
						text: "Commercial tenancies are governed by different rules to residential ones and require careful drafting. Key issues include the permitted use of the premises, break clauses, rent review mechanisms, service charge obligations, and the tenant's right to renew at the end of the term.",
					},
				],
			},
			{
				type: "paragraph",
				text: "Where disputes cannot be resolved between the parties, the Residential Tenancies Board offers a dispute resolution service for residential tenancies. We represent both landlords and tenants in RTB proceedings and advise on enforcement of RTB determinations.",
			},
		],
	},
	// --- Process steps (rendered as numbered timeline) ---
	process: [
		{
			title: "Review your agreement",
			description:
				"We review the lease or tenancy agreement in detail, identify any terms that are unclear, unreasonable, or inconsistent with your legal rights, and advise you on what to negotiate or query before signing.",
		},
		{
			title: "Drafting and negotiation",
			description:
				"Where we are drafting the agreement, we prepare a clear and enforceable document tailored to the specific property and letting arrangement. We negotiate amendments on your behalf where required.",
		},
		{
			title: "Advice on rights and obligations",
			description:
				"We advise landlords and tenants on their ongoing obligations — including notice periods, rent increases, repairs, and deposit deductions — to help prevent disputes from arising.",
		},
		{
			title: "Dispute resolution",
			description:
				"Where a dispute has arisen, we advise on the options available, including referral to the Residential Tenancies Board, and represent you in any proceedings that follow.",
		},
	],
	// --- FAQs ---
	faqs: [
		{
			question: "Does a tenancy agreement have to be in writing?",
			answer:
				"There is no strict legal requirement for a residential tenancy agreement to be in writing in Ireland, but landlords are required to provide tenants with a written statement of the terms of the tenancy. Having a written lease is strongly advisable for both parties as it reduces the risk of disputes about what was agreed.",
		},
		{
			question: "What notice must a landlord give to end a tenancy?",
			answer:
				"The required notice period depends on the length of the tenancy. Under the Residential Tenancies Act, notice periods range from 90 days for tenancies of six months to two years, up to 224 days for tenancies of eight years or more. Specific grounds must also be given for terminating a tenancy where the tenant is not at fault.",
		},
		{
			question: "Can a landlord increase the rent at any time?",
			answer:
				"No. In Ireland, rent increases in Rent Pressure Zones (RPZs) are capped and can only occur once every twelve months. Outside RPZs, rent can be reviewed annually. Landlords must provide proper written notice of any rent increase. We can advise landlords on compliance and tenants on whether a proposed increase is lawful.",
		},
		{
			question: "What can I do if my landlord refuses to return my deposit?",
			answer:
				"If your landlord is wrongfully withholding your deposit, you can refer the dispute to the Residential Tenancies Board (RTB). The RTB operates an online dispute resolution service and can direct the return of a deposit where it finds in your favour. We can advise you on the process and represent you if necessary.",
		},
	],
} as const;
