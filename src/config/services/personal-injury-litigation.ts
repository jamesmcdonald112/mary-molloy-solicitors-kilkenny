import shieldExclamationIcon from "../../assets/icons/shieldExclamationIcon.svg?raw";
import { firm } from "../firm";

export const personalInjuryLitigation = {
	// --- Identity ---
	title: "Personal Injury / Litigation",
	tag: "Personal Injury",
	slug: "personal-injury-litigation",
	href: "/services/personal-injury-litigation",
	icon: shieldExclamationIcon,
	hoverImage: "/images/lady-justice3.webp",
	description:
		"If you have suffered an injury as a result of another person's negligence, we can advise you on your rights and pursue a claim on your behalf. We handle personal injury litigation from initial assessment through to settlement or trial.",
	// --- SEO ---
	seo: {
		title: `Personal Injury Solicitors Kilkenny | ${firm.companyName}`,
		description:
			"Personal injury and litigation solicitors in Kilkenny. We pursue claims for injuries caused by negligence, from initial advice to settlement or court.",
		canonicalPath: "/services/personal-injury-litigation",
	},
	// --- Hero ---
	hero: {
		title: "Personal Injury & Litigation",
		subtitle:
			"If you have been injured through no fault of your own, you may be entitled to compensation. Our experienced litigation team will assess your case honestly, advise you on the best course of action, and represent your interests throughout the claims process.",
	},
	// --- Mid-page CTA (two lines rendered as <p> elements) ---
	midCta: ["Unsure whether you have a claim?", "Get an honest assessment."],
	// --- Bottom CTA ---
	cta: {
		title: "Get an honest assessment of your claim",
		description:
			"If you have been injured or are involved in a civil dispute, early legal advice is essential. Contact our Kilkenny litigation team to discuss your situation and find out where you stand.",
	},
	// --- Trust strip (title, two 2-paragraph columns, stats) ---
	trustStrip: {
		title: "A litigation team that gives you an honest assessment",
		columns: [
			[
				"Personal injury claims can be complex, and the process can feel daunting if you have never been through it before. We explain how things work in plain terms and give you a realistic view of your claim from the outset.",
				"We handle all types of personal injury claims, from workplace accidents and public liability to road traffic accidents and civil disputes. Our team has the experience to assess cases accurately and pursue them effectively.",
			],
			[
				"We deal directly with insurers, PIAB, and the courts on your behalf, so you can focus on your recovery rather than the legal process.",
				"We do not take a commission-based approach to litigation. Our advice is always focused on what is genuinely in your interest — including telling you honestly if we think a claim is unlikely to succeed. That approach builds trust and delivers better outcomes.",
			],
		],
		stats: [
			{ label: "Years in practice", value: "46+" },
			{ label: "Established", value: "1979" },
			{ label: "Local base", value: "Kilkenny" },
			{ label: "Focus area", value: "Litigation" },
		],
	},
	// --- Article (eyebrow, title, intro, blocks) ---
	// block types: "paragraph" | "heading" | "list" | "blockquote"
	article: {
		eyebrow: "Personal Injury",
		title: "Understanding your right to compensation",
		intro:
			"If you have been injured through the negligence of another person or organisation, Irish law entitles you to seek compensation. Our Kilkenny litigation team handles personal injury claims and civil disputes from initial assessment through to settlement or trial.",
		blocks: [
			{
				type: "paragraph",
				text: "A personal injury claim in Ireland covers general damages — compensation for the pain, suffering, and loss of enjoyment of life caused by your injury — as well as special damages for out-of-pocket expenses such as medical costs, loss of earnings, and travel. The Book of Quantum, published by PIAB, provides the framework courts and assessors use when valuing general damages for common injury types.",
			},
			{
				type: "paragraph",
				text: "Most claims must first go through the Personal Injuries Assessment Board before court proceedings can issue. PIAB assesses the claim and makes an award. If both parties accept it, the matter is resolved without litigation. If either party rejects the award, an authorisation is issued and proceedings can then be brought in the appropriate court. We manage this entire process on your behalf, from gathering medical evidence to advising on whether an offer is fair.",
			},
			{
				type: "heading",
				text: "Types of personal injury claims we handle",
			},
			{
				type: "list",
				items: [
					{
						label: "Workplace accidents",
						text: "Employers have a duty of care to provide a safe working environment. If you were injured at work due to inadequate training, faulty equipment, unsafe conditions, or a failure to follow safety protocols, you may have a claim against your employer.",
					},
					{
						label: "Public liability",
						text: "Occupiers of premises — including shops, restaurants, and public spaces — owe a duty of care to visitors. If you slipped, tripped, or were otherwise injured on someone else's property due to a hazard they failed to address, you may be entitled to compensation.",
					},
					{
						label: "Civil litigation",
						text: "Where a dispute cannot be resolved by negotiation, court proceedings may be necessary. We advise on breach of contract claims, property disputes, and other civil matters, and represent clients through all stages of litigation up to and including trial.",
					},
				],
			},
			{
				type: "paragraph",
				text: "We approach every case with honesty. If we do not believe a claim is strong enough to pursue, we will say so clearly rather than raise expectations that cannot be met. Our litigation team has the experience to assess cases accurately and to advise on the most effective strategy for each individual situation.",
			},
		],
	},
	// --- Process steps (rendered as numbered timeline) ---
	process: [
		{
			title: "Initial assessment",
			description:
				"We review the circumstances of your injury or dispute and advise honestly on the strength of your claim, the likely process, and what you can expect in terms of outcome and timeline.",
		},
		{
			title: "PIAB application",
			description:
				"For most personal injury claims, we submit an application to the Personal Injuries Assessment Board (PIAB) on your behalf, gathering medical evidence and supporting documentation to support your claim.",
		},
		{
			title: "Negotiation and settlement",
			description:
				"Many claims are resolved by agreement before trial. We negotiate with the other side's insurers or solicitors to secure the best possible settlement, and we advise you clearly on any offers made.",
		},
		{
			title: "Court proceedings",
			description:
				"If settlement is not possible, we issue court proceedings and represent you through all stages of the litigation, up to and including trial. We keep you informed throughout and prepare you fully for any hearing.",
		},
	],
	// --- FAQs ---
	faqs: [
		{
			question: "How long do I have to make a personal injury claim?",
			answer:
				"In Ireland, the general time limit for personal injury claims is two years from the date of the accident or from the date you became aware of the injury. There are some exceptions — for example, where the injured person is a minor. It is important to take advice promptly to avoid losing your right to claim.",
		},
		{
			question: "Do I have to go to PIAB before going to court?",
			answer:
				"In most personal injury cases, yes. The Personal Injuries Assessment Board must be given the opportunity to assess your claim before court proceedings can issue. PIAB will make an assessment of your damages, which you can accept or reject. If you reject it, or if the respondent does not consent, you can then proceed to court.",
		},
		{
			question: "How much compensation will I receive?",
			answer:
				"The amount depends on the nature and severity of your injuries, the impact on your daily life and ability to work, and any financial losses you have suffered. We will give you a realistic estimate based on the facts of your case and the Book of Quantum, which courts use as a guide to general damages.",
		},
		{
			question: "What if I was partly at fault for the accident?",
			answer:
				"You may still be entitled to compensation even if you were partly responsible. Under Irish law, damages can be apportioned based on contributory negligence — meaning your award is reduced by the percentage the court attributes to your own fault. We will advise you on how any contributory negligence argument might affect your claim.",
		},
	],
} as const;
