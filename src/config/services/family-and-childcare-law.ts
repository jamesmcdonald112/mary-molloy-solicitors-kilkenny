import userGroupIcon from "../../assets/icons/userGroupIcon.svg?raw";
import { firm } from "../firm";

export const familyAndChildcareLaw = {
	// --- Identity ---
	title: "Family & Childcare Law",
	tag: "Family & Child Law",
	slug: "family-and-childcare-law",
	href: "/services/family-and-childcare-law",
	icon: userGroupIcon,
	hoverImage: "/images/lady-justice2.webp",
	description:
		"We provide sensitive and experienced legal representation in family law matters, including separation, divorce, guardianship, and childcare proceedings. Our aim is to resolve disputes with as little conflict as possible.",
	// --- SEO ---
	seo: {
		title: `Family & Childcare Law Kilkenny | ${firm.companyName}`,
		description:
			"Experienced family law solicitors in Kilkenny handling separation, divorce, guardianship, and childcare matters with sensitivity and skill.",
		canonicalPath: "/services/family-and-childcare-law",
	},
	// --- Hero ---
	hero: {
		title: "Family & Childcare Law",
		subtitle:
			"Family law matters are often the most personal and emotionally difficult legal issues a person can face. We approach each case with discretion, empathy, and a clear focus on achieving the best outcome for you and your family.",
	},
	// --- Mid-page CTA (two lines rendered as <p> elements) ---
	midCta: [
		"Going through a separation or family law matter?",
		"Get confidential advice today.",
	],
	// --- Bottom CTA ---
	cta: {
		title: "Talk to a family law solicitor in Kilkenny",
		description:
			"Family law matters require prompt, confidential advice. Contact our team to discuss your situation in complete confidence — we will explain your options clearly and help you decide on the right next step.",
	},
	// --- Trust strip (title, two 2-paragraph columns, stats) ---
	trustStrip: {
		title: "Sensitive, experienced family law advice in Kilkenny",
		columns: [
			[
				"Family law matters require both legal expertise and genuine sensitivity. We approach every case with discretion, taking the time to understand your situation before advising on the best course of action.",
				"We have represented clients across the full range of family law proceedings — from straightforward consent separations to complex contested divorces involving significant assets and difficult custody disputes.",
			],
			[
				"Our aim is always to resolve matters with as little conflict as possible. Where agreement can be reached, we help clients get there. Where court proceedings are unavoidable, we prepare thoroughly and represent clients effectively.",
				"We understand that the decisions made in family law proceedings will shape your life and your children's lives for years to come. We take that responsibility seriously and focus on achieving outcomes that are fair, workable, and in the best interests of everyone involved.",
			],
		],
		stats: [
			{ label: "Years in practice", value: "46+" },
			{ label: "Established", value: "1979" },
			{ label: "Local base", value: "Kilkenny" },
			{ label: "Focus area", value: "Family Law" },
		],
	},
	// --- Article (eyebrow, title, intro, blocks) ---
	// block types: "paragraph" | "heading" | "list" | "blockquote"
	article: {
		eyebrow: "Family Law",
		title: "Legal support through life's most difficult moments",
		intro:
			"Family law matters involve decisions that will shape your life and the lives of your children for years to come. Our Kilkenny solicitors provide clear legal advice and steady support at every stage of separation, divorce, and childcare proceedings.",
		blocks: [
			{
				type: "paragraph",
				text: "Separation and divorce in Ireland involve resolving a range of interconnected issues — the family home, maintenance, custody of and access to children, pensions, and other assets. These matters can be agreed between the parties and made into a consent order, or decided by the court if agreement is not possible. We advise clients on both routes and help them understand what a fair outcome looks like before they commit to any position.",
			},
			{
				type: "paragraph",
				text: "Where children are involved, their welfare is always the primary concern — both in law and in our approach. We advise on guardianship, custody, and access arrangements with a focus on workable, child-centred solutions. Where a relationship has broken down but both parties are willing to engage constructively, we can help reach arrangements without the need for contested court proceedings.",
			},
			{
				type: "heading",
				text: "Separation, divorce and financial matters",
			},
			{
				type: "list",
				items: [
					{
						label: "Judicial separation",
						text: "A judicial separation legally recognises that a couple is living apart and resolves financial and parenting arrangements, without ending the marriage. It is an option for couples who do not yet meet the divorce criteria or who have religious or other reasons for remaining married.",
					},
					{
						label: "Divorce",
						text: "To obtain a divorce in Ireland, the parties must have lived apart for at least two of the previous three years. The court must be satisfied that proper provision has been made for all family members before granting a decree. We advise clients on what proper provision means in their specific circumstances.",
					},
					{
						label: "The family home",
						text: "The family home is often the most significant asset and one of the most contested issues in separation proceedings. We advise on the options — sale, one party buying out the other, or deferred transfer — and the tax and financial implications of each.",
					},
					{
						label: "Maintenance",
						text: "Either spouse can apply for maintenance from the other, and a parent can apply for maintenance for a dependent child. We advise on appropriate levels of maintenance and how to enforce a maintenance order if payments are not made.",
					},
				],
			},
			{
				type: "heading",
				text: "Childcare proceedings",
			},
			{
				type: "paragraph",
				text: "Childcare proceedings are brought by Tusla (the Child and Family Agency) where it has concerns about the welfare of a child. These proceedings can result in supervision orders, care orders, or, in the most serious cases, full care orders removing a child from the family home. We represent parents and other parties in these proceedings, ensuring their voice is heard and that the court has a full picture before making any order.",
			},
		],
	},
	// --- Process steps (rendered as numbered timeline) ---
	process: [
		{
			title: "Initial consultation",
			description:
				"We listen carefully to your situation and explain your legal options — whether that is judicial separation, divorce, mediation, or another route. We outline what to expect at each stage.",
		},
		{
			title: "Negotiation and settlement",
			description:
				"Where possible, we work to reach agreement on financial matters, custody, and access without going to court. A negotiated settlement is generally quicker, less costly, and less stressful for all involved.",
		},
		{
			title: "Court proceedings",
			description:
				"Where agreement cannot be reached, we prepare and issue the necessary court applications, gather evidence, and represent you at all hearings before the Circuit Court or High Court.",
		},
		{
			title: "Orders and follow-up",
			description:
				"Once a court order or consent order is in place, we explain its terms and advise on compliance. We remain available to assist if any issues arise with the implementation of the order.",
		},
	],
	// --- FAQs ---
	faqs: [
		{
			question:
				"What is the difference between judicial separation and divorce?",
			answer:
				"A judicial separation legally recognises that a couple is living apart and resolves issues such as maintenance, property, and custody, but the parties remain legally married. A divorce ends the marriage entirely, allowing both parties to remarry. In Ireland, you must be living apart for at least two of the previous three years before applying for a divorce.",
		},
		{
			question: "Do we have to go to court to separate?",
			answer:
				"Not necessarily. Many couples reach agreement through negotiation or mediation and then formalise that agreement as a consent order, which is made a rule of court. This avoids the need for a contested hearing and is generally quicker and less expensive.",
		},
		{
			question: "How are childcare arrangements decided?",
			answer:
				"If parents cannot agree, the court will make orders based on the best interests of the child. The court considers factors such as the child's relationship with each parent, their wishes (depending on age), and their need for stability. We advise on how to approach these proceedings in a way that prioritises the welfare of the children.",
		},
		{
			question: "What rights does an unmarried father have?",
			answer:
				"An unmarried father does not automatically have guardianship rights in Ireland, though he does have the right to apply for guardianship, custody, and access. Guardianship can be granted by agreement with the mother or by court order. We can advise fathers on the steps to take to secure their parental rights.",
		},
	],
} as const;
