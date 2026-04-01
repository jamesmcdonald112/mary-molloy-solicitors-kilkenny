import { firm } from "../firm";

export const willsAndEstateAdministration = {
	// --- Identity ---
	title: "Wills and Estate Administration",
	slug: "wills-and-estate-administration",
	href: "/services/wills-and-estate-administration",
	description:
		"We advise on making a valid will, lasting powers of attorney, and the full administration of estates following bereavement. Our team guides executors and beneficiaries through the probate process with clarity and sensitivity.",
	// --- SEO ---
	seo: {
		title: `Wills & Estate Administration Kilkenny | ${firm.companyName}`,
		description:
			"Expert advice on wills, probate, and estate administration in Kilkenny. Mary Molloy Solicitor guides you through every step with care and clarity.",
		canonicalPath: "/services/wills-and-estate-administration",
	},
	// --- Hero ---
	hero: {
		title: "Wills and Estate Administration",
		subtitle:
			"Making a will is one of the most important steps you can take to protect your family's future. We also assist executors and beneficiaries with the full administration of estates, ensuring the process is handled carefully and efficiently.",
	},
	// --- Mid-page CTA (two lines rendered as <p> elements) ---
	midCta: ["Questions about a will or estate?", "We're here to help."],
	// --- Bottom CTA ---
	cta: {
		title: "Speak to a wills and probate solicitor today",
		description:
			"Whether you need to make or update a will, or you are dealing with the administration of an estate, we are here to help. Contact our Kilkenny team for clear, sensitive advice.",
	},
	// --- Trust strip (title, two 2-paragraph columns, stats) ---
	trustStrip: {
		title: "Experienced wills and probate solicitors in Kilkenny",
		columns: [
			[
				"Making a will or administering an estate requires careful attention to detail and a clear understanding of Irish succession law.",
				"We have handled wills and estates of all sizes and complexities, from straightforward family arrangements to multi-jurisdictional estates with significant assets. Every client receives the same thorough, considered approach.",
			],
			[
				"We understand that dealing with a bereavement is difficult, and we work to make the legal process as simple and stress-free as possible for executors and beneficiaries alike.",
				"From your first consultation through to the final distribution of the estate, we keep you informed at every stage and deal with all third parties — the Probate Office, Revenue, and financial institutions — on your behalf.",
			],
		],
		stats: [
			{ label: "Years in practice", value: "46+" },
			{ label: "Established", value: "1979" },
			{ label: "Local base", value: "Kilkenny" },
			{ label: "Focus area", value: "Wills & Probate" },
		],
	},
	// --- Article (eyebrow, title, intro, blocks) ---
	// block types: "paragraph" | "heading" | "list" | "blockquote"
	article: {
		eyebrow: "Wills & Probate",
		title: "Protecting your family's future",
		intro:
			"A valid, clearly drafted will is the single most effective step you can take to ensure your assets reach the right people and your wishes are respected after your death. Our Kilkenny solicitors advise individuals and families across the full range of wills and estate administration matters.",
		blocks: [
			{
				type: "paragraph",
				text: "Without a will, Irish law dictates who inherits your estate under the Succession Act 1965 — and the outcome may be very different from what you would have chosen. A will allows you to decide who benefits, in what shares, and on what terms. It also lets you appoint the executor you trust to carry out those wishes, and — if you have young children — to nominate guardians for them.",
			},
			{
				type: "paragraph",
				text: "Our solicitors take the time to understand your full circumstances before drafting anything. We consider the composition of your family, the nature of your assets, and any particular concerns you have — such as providing for a dependant with additional needs or structuring gifts to minimise tax exposure. The result is a will that is precise, legally sound, and built to last.",
			},
			{
				type: "heading",
				text: "Estate administration after bereavement",
			},
			{
				type: "paragraph",
				text: "When a person dies, their estate generally cannot be distributed until a grant of probate (where there is a will) or letters of administration (where there is no will) has been obtained from the Probate Office. This process involves lodging the original will, an Inland Revenue Affidavit, and other documentation, and can be complex where the estate includes property, business interests, or assets in multiple jurisdictions.",
			},
			{
				type: "paragraph",
				text: "We act for executors and administrators throughout this process. We deal with the Revenue Commissioners, financial institutions, and the Probate Office on your behalf, keep beneficiaries informed, and ensure that assets are distributed correctly and in accordance with the will or the rules of intestacy. Where disputes arise between beneficiaries or creditors make claims against the estate, we advise on how to resolve them.",
			},
			{
				type: "list",
				items: [
					{
						label: "Succession Act rights",
						text: "A surviving spouse or civil partner has a legal right share of the estate that cannot be removed by will. Children also have the right to apply to court if they feel inadequately provided for. We advise executors on these obligations and how to manage them.",
					},
					{
						label: "Capital Acquisitions Tax",
						text: "Inheritances above certain thresholds are subject to Capital Acquisitions Tax (CAT). The threshold depends on the relationship between the deceased and the beneficiary. We advise on the tax implications of your estate plan and help structure gifts and inheritances to make use of available reliefs.",
					},
					{
						label: "Foreign assets and property",
						text: "If the deceased owned property abroad or held assets in another jurisdiction, additional steps are often required. We advise on the Irish aspects and liaise with overseas advisers where needed.",
					},
				],
			},
		],
	},
	// --- Process steps (rendered as numbered timeline) ---
	process: [
		{
			title: "Initial consultation",
			description:
				"We meet with you to understand your family situation, assets, and wishes. We explain your options and what a valid will requires under Irish law.",
		},
		{
			title: "Drafting your will",
			description:
				"We prepare a draft will that clearly reflects your instructions, including the appointment of executors, guardians if relevant, and the distribution of your estate.",
		},
		{
			title: "Review and execution",
			description:
				"You review the draft and raise any queries. Once you are satisfied, we arrange for the will to be properly signed and witnessed to make it legally valid.",
		},
		{
			title: "Probate and estate administration",
			description:
				"Where required, we apply for a grant of probate or letters of administration, deal with all relevant institutions, and guide the executor through the full administration of the estate.",
		},
	],
	// --- FAQs ---
	faqs: [
		{
			question: "Do I need a solicitor to make a will?",
			answer:
				"You are not legally required to use a solicitor, but having one ensures your will is properly drafted, clearly expressed, and validly executed. A poorly worded or incorrectly signed will can be challenged or declared invalid, which can cause significant difficulties for your family.",
		},
		{
			question: "What happens if I die without a will in Ireland?",
			answer:
				"If you die without a will (known as dying intestate), your estate is distributed according to the Succession Act 1965, which sets out a fixed formula. This may not reflect your wishes — for example, an unmarried partner has no automatic entitlement under the intestacy rules.",
		},
		{
			question: "How long does probate take?",
			answer:
				"The timeline varies depending on the complexity of the estate and the current workload of the Probate Office. A straightforward estate can take four to six months from the date of instruction. More complex estates, or those involving disputes, can take considerably longer.",
		},
		{
			question: "Can a will be challenged?",
			answer:
				"Yes. A will can be challenged on grounds such as lack of testamentary capacity, undue influence, fraud, or improper execution. Certain family members also have statutory rights under the Succession Act that cannot be overridden by a will. We can advise you on how to reduce the risk of a successful challenge.",
		},
	],
} as const;
