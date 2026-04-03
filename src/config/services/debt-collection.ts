import banknotesIcon from "../../assets/icons/banknotesIcon.svg?raw";
import image from "../../assets/images/new/debt-collection.webp";
import { firm } from "../firm";

export const debtCollection = {
	// --- Identity ---
	title: "Debt Collection",
	tag: "Business Law",
	slug: "debt-collection",
	href: "/services/debt-collection",
	icon: banknotesIcon,
	image,
	imageClass: "object-[80%_60%]",
	description:
		"We assist businesses and individuals in recovering money owed to them, from initial demand letters through to court proceedings. We pursue debts efficiently and work to minimise the cost and time involved in recovery.",

	// --- SEO ---
	seo: {
		title: `Debt Collection Solicitors Kilkenny | ${firm.companyName}`,
		description:
			"Debt recovery solicitors in Kilkenny for businesses and individuals. We pursue outstanding debts from initial demand to court proceedings.",
		canonicalPath: "/services/debt-collection",
	},
	// --- Hero ---
	hero: {
		title: "Debt Collection",
		subtitle:
			"Recovering money owed to you can be time-consuming and frustrating. Our solicitors act swiftly and professionally to pursue outstanding debts, using the most cost-effective route available to achieve recovery.",
	},
	// --- Mid-page CTA (two lines rendered as <p> elements) ---
	midCta: ["Owed money that isn't being paid?", "We can help you recover it."],

	// --- Bottom CTA ---
	cta: {
		title: "Owed money? Let us help you recover it",
		description:
			"The sooner you act on an unpaid debt, the better your prospects of recovery. Contact our Kilkenny solicitors to discuss your situation and find out the most effective way to pursue what you are owed.",
	},
	// --- Trust strip (title, two 2-paragraph columns, stats) ---
	trustStrip: {
		title: "Efficient, proportionate debt recovery in Kilkenny",
		columns: [
			[
				"Chasing unpaid debts takes time and energy that most businesses cannot afford to spare. We take that burden off you — managing correspondence, court filings, and enforcement steps on your behalf while you focus on running your business.",
				"We handle debt recovery for businesses and individuals across all court jurisdictions, from small District Court claims to significant High Court proceedings. Our approach is always proportionate to the size and complexity of the debt.",
			],
			[
				"A solicitor's letter of demand is often all that is needed to prompt payment. Where it is not, we move quickly through the court process to obtain judgment and advise on the most effective enforcement options available.",
				"We give clear cost advice upfront so you can make an informed decision about whether and how to pursue a debt. Our aim is to recover what you are owed as efficiently as possible, with costs that are justified by the amount at stake.",
			],
		],
		stats: [
			{ label: "Years in practice", value: "46+" },
			{ label: "Established", value: "1979" },
			{ label: "Local base", value: "Kilkenny" },
			{ label: "Focus area", value: "Debt Recovery" },
		],
	},
	// --- Article (eyebrow, title, intro, blocks) ---
	// block types: "paragraph" | "heading" | "list" | "blockquote"
	article: {
		eyebrow: "Debt Recovery",
		title: "Recovering what you are owed",
		intro:
			"Unpaid invoices and outstanding debts place real pressure on businesses and individuals. Our Kilkenny solicitors take a structured, prompt approach to debt recovery — from formal demand letters through to court proceedings and enforcement — focused on getting you paid as efficiently as possible.",
		blocks: [
			{
				type: "paragraph",
				text: "A solicitor's letter of demand carries significantly more weight than a final invoice or a phone call. It puts the debtor on notice that legal proceedings will follow if payment is not made within a specified timeframe, and it signals that the creditor is serious. In many cases, a well-drafted demand letter is sufficient to prompt payment without any further action being required.",
			},
			{
				type: "paragraph",
				text: "Where payment is not made following a demand, we advise on the appropriate court to use depending on the amount of the debt — the District Court (up to €15,000), the Circuit Court (up to €75,000), or the High Court for larger amounts. For undisputed debts, judgment can often be obtained through a summary procedure without the need for a full hearing. Once judgment is obtained, a range of enforcement options becomes available.",
			},
			{
				type: "heading",
				text: "Enforcement options after judgment",
			},
			{
				type: "list",
				items: [
					{
						label: "Judgment mortgage",
						text: "A court judgment can be registered as a mortgage against any property owned by the debtor in Ireland. This secures the debt against the property and means the judgment cannot be ignored if the debtor wishes to sell or refinance.",
					},
					{
						label: "Sheriff enforcement",
						text: "A County Registrar can be instructed to seize goods belonging to the debtor to the value of the judgment. This is a practical option where the debtor has assets but is unwilling to pay voluntarily.",
					},
					{
						label: "Instalment orders",
						text: "Where a debtor has limited means, the court can order payment by instalments. Failure to comply with an instalment order can result in further enforcement action.",
					},
					{
						label: "Insolvency",
						text: "Where a debtor is genuinely unable to pay, we advise on whether bankruptcy proceedings (for individuals) or winding-up proceedings (for companies) are appropriate, and what this means for the prospect of recovery.",
					},
				],
			},
			{
				type: "paragraph",
				text: "We are conscious of the cost of debt recovery relative to the amount owed, and we always advise on the most proportionate approach. For smaller debts, a demand letter and a swift District Court application may be all that is needed. For larger or more complex matters, we develop a considered strategy aimed at achieving the best outcome as efficiently as possible.",
			},
		],
	},
	// --- Process steps (rendered as numbered timeline) ---
	process: [
		{
			title: "Letter of demand",
			description:
				"We issue a formal solicitor's letter to the debtor setting out the amount owed and a deadline for payment. This often prompts payment without the need for further action and puts the debtor on notice that legal proceedings will follow.",
		},
		{
			title: "Court proceedings",
			description:
				"If payment is not made, we issue court proceedings in the appropriate court based on the amount involved. For undisputed debts, we can seek judgment without the need for a full hearing through the summary judgment procedure.",
		},
		{
			title: "Judgment",
			description:
				"Once judgment is obtained, it becomes a formal court order confirming that the debt is owed. This opens up a range of enforcement options and can be registered as a judgment mortgage against any property owned by the debtor.",
		},
		{
			title: "Enforcement",
			description:
				"We advise on the most effective means of enforcement given the debtor's circumstances — including sheriff enforcement, judgment mortgage registration, or instalment orders — and take the necessary steps to secure recovery.",
		},
	],
	// --- FAQs ---
	faqs: [
		{
			question: "How much does it cost to pursue a debt through the courts?",
			answer:
				"Court fees vary depending on the amount of the debt and the court involved. We will advise you on the likely costs at the outset and discuss the most cost-effective approach given the size of the debt. In many cases, the debtor can be ordered to pay your legal costs if judgment is obtained.",
		},
		{
			question: "What if the debtor says they cannot pay?",
			answer:
				"Even if a debtor claims they cannot pay, it is worth taking legal advice. In some cases, assets may be available that are not immediately apparent, or an instalment arrangement may be achievable. If a debtor is genuinely insolvent, we can advise on the options available, including the possibility of a petition to wind up a company or issue bankruptcy proceedings against an individual.",
		},
		{
			question: "Is there a time limit for pursuing a debt?",
			answer:
				"Yes. In Ireland, the general limitation period for contract debts is six years from the date the debt became due. After this period, the debt may become statute-barred and unenforceable through the courts. It is important to act promptly if you are owed money.",
		},
		{
			question: "Can I recover interest on an unpaid debt?",
			answer:
				"You may be entitled to claim interest on the debt, depending on the terms of the original contract and the nature of the debt. Under the European Communities (Late Payment in Commercial Transactions) Regulations, businesses are entitled to statutory interest on late payments in commercial contracts. We will advise you on whether interest is recoverable in your case.",
		},
	],
} as const;
