import briefcaseIcon from "../../assets/icons/briefcaseIcon.svg?raw";
import image from "../../assets/images/new/employment-law.webp";
import { firm } from "../firm";

export const employmentLaw = {
	// --- Identity ---
	title: "Employment Law",
	tag: "Employment & Equality",
	slug: "employment-law",
	href: "/services/employment-law",
	icon: briefcaseIcon,
	image,
	imageClass: "object-bottom",
	description:
		"We advise employees and employers on a wide range of employment law matters, including unfair dismissal, redundancy, workplace rights, and employment contracts. We help you understand your position and take the right steps.",
	// --- SEO ---
	seo: {
		title: `Employment Law Solicitors Kilkenny | ${firm.companyName}`,
		description:
			"Employment law advice for employees and employers in Kilkenny. We handle unfair dismissal, redundancy, workplace disputes, and employment contract reviews.",
		canonicalPath: "/services/employment-law",
	},
	// --- Hero ---
	hero: {
		title: "Employment Law",
		subtitle:
			"Whether you have been dismissed from your job, are facing redundancy, or have concerns about your employment contract or workplace rights, we can advise you clearly on your options and represent your interests in any proceedings.",
	},
	// --- Mid-page CTA (two lines rendered as <p> elements) ---
	midCta: [
		"Dismissed or treated unfairly at work?",
		"Time limits apply — act now.",
	],
	// --- Bottom CTA ---
	cta: {
		title: "Facing a workplace dispute? Get advice now",
		description:
			"Most WRC complaints must be submitted within six months. If you have been dismissed, made redundant, or are dealing with a workplace issue, contact our Kilkenny employment team without delay.",
	},
	// --- Trust strip (title, two 2-paragraph columns, stats) ---
	trustStrip: {
		title: "Employment law advice for employees and employers",
		columns: [
			[
				"Employment disputes are stressful and time-sensitive. Whether you have just been dismissed, are facing a redundancy process, or have received a WRC complaint, early legal advice makes a significant difference to the outcome.",
				"We advise employees on their rights under Irish employment legislation and represent them in WRC proceedings. We also advise employers on building compliant contracts and procedures that reduce the risk of disputes arising.",
			],
			[
				"Our approach is practical and direct. We assess the strength of your position honestly, advise on the most effective strategy, and move quickly given the tight timeframes that apply to most employment law claims.",
				"Whether you are an employee looking to understand your options or an employer trying to manage a difficult situation correctly, we give you clear advice and represent your interests effectively throughout.",
			],
		],
		stats: [
			{ label: "Years in practice", value: "46+" },
			{ label: "Established", value: "1979" },
			{ label: "Local base", value: "Kilkenny" },
			{ label: "Focus area", value: "Employment Law" },
		],
	},
	// --- Article (eyebrow, title, intro, blocks) ---
	// block types: "paragraph" | "heading" | "list" | "blockquote"
	article: {
		eyebrow: "Employment Law",
		title: "Your rights in the workplace",
		intro:
			"Irish employment law gives employees significant protections, but knowing when and how to use them is not straightforward. Our Kilkenny employment solicitors advise employees and employers on unfair dismissal, redundancy, workplace rights, and WRC proceedings.",
		blocks: [
			{
				type: "paragraph",
				text: "An employee who believes they have been unfairly dismissed, forced out of their job, or made redundant without proper process is entitled to bring a claim before the Workplace Relations Commission. The WRC adjudicates on complaints under employment legislation including the Unfair Dismissals Acts, the Redundancy Payments Acts, the Employment Equality Acts, and the Organisation of Working Time Act, among others. Awards can include reinstatement, re-engagement, or financial compensation.",
			},
			{
				type: "paragraph",
				text: "For employers, the cost of getting dismissals or redundancies wrong can be significant — both in terms of WRC awards and reputational damage. We advise employers on implementing compliant contracts, policies, and disciplinary procedures from the outset, and on managing performance and conduct issues in a way that is fair and legally defensible.",
			},
			{
				type: "heading",
				text: "Key employment law rights and issues",
			},
			{
				type: "list",
				items: [
					{
						label: "Unfair dismissal",
						text: "To succeed in an unfair dismissal claim, the dismissal must have been unfair either in the reason given or in the procedure followed. Common procedural failures include not giving the employee an opportunity to respond to allegations, not following a fair investigation process, or not offering a right of appeal.",
					},
					{
						label: "Constructive dismissal",
						text: "Where an employer's behaviour — such as a significant pay cut, bullying, or a fundamental change to job duties — forces an employee to resign, the employee may have a constructive dismissal claim. The bar is high, and taking legal advice before resigning is strongly recommended.",
					},
					{
						label: "Redundancy",
						text: "A genuine redundancy arises where a role no longer exists due to business changes. An employee with two or more years of service is entitled to a statutory redundancy payment. An employer cannot use redundancy as a cover for dismissing an employee for other reasons — this is known as a sham redundancy and is unlawful.",
					},
					{
						label: "Discrimination",
						text: "The Employment Equality Acts prohibit discrimination on nine grounds, including gender, age, disability, religion, and race. Complaints of workplace discrimination are heard by the WRC, which can award compensation of up to two years' remuneration in successful cases.",
					},
				],
			},
			{
				type: "paragraph",
				text: "Employment disputes are often stressful and time-sensitive. The six-month deadline for most WRC complaints means that early advice is essential. We move quickly, give you a clear view of your position, and represent your interests effectively through the process.",
			},
		],
	},
	// --- Process steps (rendered as numbered timeline) ---
	process: [
		{
			title: "Initial consultation",
			description:
				"We review your employment situation — your contract, correspondence, and the circumstances of your dismissal or dispute — and advise you clearly on whether you have a viable claim and what steps to take.",
		},
		{
			title: "Internal process and grievance",
			description:
				"Where possible, we advise on pursuing internal grievance or appeal procedures first. Exhausting internal routes is often a prerequisite for WRC claims and can sometimes lead to resolution without the need for formal proceedings.",
		},
		{
			title: "WRC complaint",
			description:
				"We prepare and submit your complaint to the Workplace Relations Commission, gather supporting evidence, and represent you at any WRC adjudication hearing. We advise on the strengths and weaknesses of your case throughout.",
		},
		{
			title: "Appeal and enforcement",
			description:
				"If the WRC decision is not in your favour, we advise on the right of appeal to the Labour Court. Where a decision is made in your favour, we assist with enforcement if the other party fails to comply.",
		},
	],
	// --- FAQs ---
	faqs: [
		{
			question: "What is constructive dismissal?",
			answer:
				"Constructive dismissal occurs when an employee resigns because their employer's conduct has made it unreasonable for them to remain in the job. This might involve a fundamental breach of contract by the employer, such as a significant reduction in pay, a demotion without justification, or a failure to address serious workplace harassment. You must generally have one year's continuous service to bring an unfair dismissal claim.",
		},
		{
			question: "How long do I have to make a WRC complaint?",
			answer:
				"Most WRC complaints must be submitted within six months of the date of the act complained of. This deadline can be extended to twelve months in exceptional circumstances where there is reasonable cause for the delay. It is important to take advice and act promptly.",
		},
		{
			question: "Am I entitled to redundancy pay?",
			answer:
				"If you have been continuously employed for at least two years and your position has been made genuinely redundant, you are entitled to a statutory redundancy payment. This is calculated at two weeks' pay per year of service, plus one additional week, subject to a weekly earnings cap. Employers cannot use redundancy as a pretext to dismiss an employee for another reason.",
		},
		{
			question: "Can my employer change my contract without my agreement?",
			answer:
				"In general, no. An employer cannot unilaterally make significant changes to the terms of your employment contract — such as reducing your pay, changing your hours, or altering your role — without your agreement. Doing so may constitute a breach of contract and could form the basis of a constructive dismissal claim. We can advise you on your options if this has happened.",
		},
	],
} as const;
