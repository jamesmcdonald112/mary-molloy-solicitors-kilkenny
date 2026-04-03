import truckIcon from "../../assets/icons/truckIcon.svg?raw";
import { firm } from "../firm";

export const roadTrafficAccidents = {
	// --- Identity ---
	title: "Road Traffic Accidents",
	tag: "Personal Injury",
	slug: "road-traffic-accidents",
	href: "/services/road-traffic-accidents",
	icon: truckIcon,
	hoverImage: "/images/lady-justice4.webp",
	description:
		"We represent individuals injured in road traffic accidents, advising on liability, insurance claims, and compensation. From minor collisions to serious accidents, we work to ensure you receive what you are entitled to.",
	// --- SEO ---
	seo: {
		title: `Road Traffic Accident Claims Kilkenny | ${firm.companyName}`,
		description:
			"Road traffic accident solicitors in Kilkenny. We advise on liability, insurance claims, and compensation for injuries sustained in motor accidents.",
		canonicalPath: "/services/road-traffic-accidents",
	},
	// --- Hero ---
	hero: {
		title: "Road Traffic Accidents",
		subtitle:
			"Being involved in a road traffic accident can be a stressful and disorienting experience. We help injured parties understand their rights, deal with insurers, and secure appropriate compensation for their injuries and losses.",
	},
	// --- Mid-page CTA (two lines rendered as <p> elements) ---
	midCta: [
		"Injured in a road traffic accident?",
		"Don't deal with insurers alone.",
	],
	// --- Bottom CTA ---
	cta: {
		title: "Injured in a road traffic accident? Call us today",
		description:
			"Time limits apply to road traffic accident claims. Contact our Kilkenny team as soon as possible to protect your position and get clear advice on your next steps.",
	},
	// --- Trust strip (title, two 2-paragraph columns, stats) ---
	trustStrip: {
		title: "On your side from the moment you call",
		columns: [
			[
				"After a road traffic accident, you are dealing with insurers who handle hundreds of claims every day. We level the playing field — giving you the same quality of legal advice and representation that the other side's insurer has access to.",
				"We manage every aspect of your claim, from gathering medical evidence and dealing with PIAB to negotiating with insurers and, where necessary, issuing court proceedings. You are kept informed at every stage.",
			],
			[
				"Insurance companies are skilled at managing claims to minimise their exposure. Early settlement offers are rarely a reflection of the full value of your case. We advise you on what a fair outcome looks like and pursue it.",
				"Our aim is to secure the best possible outcome for you as efficiently as possible, without unnecessary delay. We give you a realistic view of your claim from the start and keep you fully informed throughout.",
			],
		],
		stats: [
			{ label: "Years in practice", value: "46+" },
			{ label: "Established", value: "1979" },
			{ label: "Local base", value: "Kilkenny" },
			{ label: "Focus area", value: "Road Traffic Claims" },
		],
	},
	// --- Article (eyebrow, title, intro, blocks) ---
	// block types: "paragraph" | "heading" | "list" | "blockquote"
	article: {
		eyebrow: "Road Traffic Accidents",
		title: "What to do after a road traffic accident",
		intro:
			"The steps you take in the immediate aftermath of a road traffic accident can have a significant impact on your ability to bring a successful claim. Our Kilkenny solicitors advise injured parties on liability, insurance claims, and compensation, and manage the full claims process on your behalf.",
		blocks: [
			{
				type: "paragraph",
				text: "After an accident, your priority is your safety and health. Once you are in a safe position, you should gather as much information as possible at the scene — the other driver's name, address, insurance details, and vehicle registration number. Photograph the vehicles, the road, and any visible injuries. If there are witnesses, ask for their contact details. Report the accident to An Garda Síochána if anyone is injured or if the other driver fails to stop or provide details.",
			},
			{
				type: "paragraph",
				text: "You should seek medical attention as soon as possible, even if you feel your injuries are minor. Injuries such as whiplash or soft tissue damage can take time to manifest, and having a contemporaneous medical record is important for your claim. Do not give a statement to the other driver's insurance company before taking legal advice — insurers are experienced at managing claims in their own interests, not yours.",
			},
			{
				type: "heading",
				text: "How compensation is calculated",
			},
			{
				type: "list",
				items: [
					{
						label: "General damages",
						text: "Compensation for the pain, suffering, and impact on your quality of life caused by your injuries. The amount is assessed by reference to the Book of Quantum and the specific circumstances of your case.",
					},
					{
						label: "Loss of earnings",
						text: "If your injuries prevented you from working, or affected your future earning capacity, you are entitled to claim for that loss. We gather payslips, medical evidence, and, where necessary, expert reports to establish and quantify this element of your claim.",
					},
					{
						label: "Medical and rehabilitation expenses",
						text: "The cost of treatment, physiotherapy, specialist appointments, and any aids or adaptations you required as a result of your injuries can be recovered as special damages.",
					},
					{
						label: "Out-of-pocket expenses",
						text: "Travel costs, care provided by family members, and other expenses reasonably incurred as a result of the accident can also form part of your claim.",
					},
				],
			},
			{
				type: "paragraph",
				text: "Insurance companies routinely make early settlement offers that do not reflect the full value of a claim. We advise on whether any offer is reasonable given the nature and extent of your injuries, and we are prepared to take the matter to court if a fair settlement cannot be reached through negotiation.",
			},
		],
	},
	// --- Process steps (rendered as numbered timeline) ---
	process: [
		{
			title: "Initial consultation",
			description:
				"We review the details of your accident, advise on liability, and explain the claims process. We will tell you what evidence to gather and what steps to take in the early stages.",
		},
		{
			title: "PIAB application",
			description:
				"We submit your claim to the Personal Injuries Assessment Board, supported by medical reports and evidence of your losses. We guide you through the assessment process and advise on any offer made.",
		},
		{
			title: "Negotiations with insurers",
			description:
				"If PIAB does not resolve the matter, we engage directly with the other party's insurer. We handle all correspondence and negotiate to achieve a settlement that reflects the full value of your claim.",
		},
		{
			title: "Court proceedings if needed",
			description:
				"Where a fair settlement cannot be reached, we issue court proceedings and represent you through to trial. We prepare all necessary documentation and ensure you are fully supported throughout.",
		},
	],
	// --- FAQs ---
	faqs: [
		{
			question: "What should I do immediately after a road traffic accident?",
			answer:
				"Report the accident to An Garda Síochána if required, exchange details with the other driver, take photographs of the scene and any damage, and seek medical attention even if you feel your injuries are minor. Contact a solicitor as soon as possible to protect your position.",
		},
		{
			question: "What if the other driver was uninsured or untraced?",
			answer:
				"If the driver responsible for your accident was uninsured or cannot be identified, you may be entitled to make a claim through the Motor Insurers' Bureau of Ireland (MIBI). The MIBI compensates victims of uninsured and untraced drivers. We can advise you on whether this applies to your case and manage the claim on your behalf.",
		},
		{
			question: "How long does a road traffic accident claim take?",
			answer:
				"The timeline depends on the severity of your injuries, the complexity of the liability issues, and whether the matter is resolved through PIAB or progresses to court. Many claims are settled within twelve to eighteen months. Claims involving serious or long-term injuries may take longer as it is important not to settle before the full extent of your injuries is known.",
		},
		{
			question:
				"Can I claim for damage to my vehicle as well as personal injury?",
			answer:
				"Yes. A personal injury claim covers your injuries and related losses, while a separate property damage claim can be made against the other driver's insurer for the cost of repairing or replacing your vehicle. We can advise on both aspects of your claim.",
		},
	],
} as const;
