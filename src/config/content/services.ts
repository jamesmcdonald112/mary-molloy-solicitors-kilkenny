import { firm } from "../firm";
import homeIcon from "../../assets/icons/homeIcon.svg?raw";
import documentTextIcon from "../../assets/icons/documentTextIcon.svg?raw";
import userGroupIcon from "../../assets/icons/userGroupIcon.svg?raw";
import shieldExclamationIcon from "../../assets/icons/shieldExclamationIcon.svg?raw";
import truckIcon from "../../assets/icons/truckIcon.svg?raw";
import buildingIcon from "../../assets/icons/buildingIcon.svg?raw";
import briefcaseIcon from "../../assets/icons/briefcaseIcon.svg?raw";
import banknotesIcon from "../../assets/icons/banknotesIcon.svg?raw";

export const servicesIndexContent = {
	seo: {
		title: `Services | ${firm.companyName}`,
		description:
			"Mary Molloy Solicitors offers a full range of legal services in Kilkenny, including wills, family law, personal injury, employment law, and more.",
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
	featured: {
		title: "Buying & Selling Property",
		description:
			"Our conveyancing service guides you through every step of buying or selling property in Ireland, from reviewing contracts to managing completion. We work to protect your interests and keep your transaction on track from start to finish.",
		href: "/buying-and-selling-property",
		badge: "Our specialist service",
	},
} as const;

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

export const services = [
	{
		title: "Wills and Estate Administration",
		slug: "wills-and-estate-administration",
		href: "/services/wills-and-estate-administration",
		description:
			"We advise on making a valid will, lasting powers of attorney, and the full administration of estates following bereavement. Our team guides executors and beneficiaries through the probate process with clarity and sensitivity.",
		seo: {
			title: `Wills & Estate Administration Kilkenny | ${firm.companyName}`,
			description:
				"Expert advice on wills, probate, and estate administration in Kilkenny. Mary Molloy Solicitors guides you through every step with care and clarity.",
			canonicalPath: "/services/wills-and-estate-administration",
		},
		hero: {
			title: "Wills and Estate Administration",
			subtitle:
				"Making a will is one of the most important steps you can take to protect your family's future. We also assist executors and beneficiaries with the full administration of estates, ensuring the process is handled carefully and efficiently.",
		},
		intro:
			"Preparing a will gives you control over how your assets are distributed after your death and provides peace of mind for those you leave behind. Our solicitors will take the time to understand your circumstances and ensure your wishes are clearly and legally expressed in a document that will stand up to scrutiny.\n\nWhen someone passes away, their estate must often go through the probate process before assets can be distributed. We act for executors and administrators throughout this process, dealing with the Revenue Commissioners, financial institutions, and the Probate Office on your behalf. We aim to make a difficult time as straightforward as possible.",
		keyPoints: [
			"Drafting and reviewing wills for individuals and couples",
			"Advice on appointing executors and guardians",
			"Grant of probate and letters of administration",
			"Administration of estates, including Revenue returns and asset distribution",
		],
		midCta: "Questions about a will or estate?\nWe're here to help.",
		cta: {
			title: "Speak to a wills and probate solicitor today",
			description:
				"Whether you need to make or update a will, or you are dealing with the administration of an estate, we are here to help. Contact our Kilkenny team for clear, sensitive advice.",
		},
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
	},
	{
		title: "Family & Childcare Law",
		slug: "family-and-childcare-law",
		href: "/services/family-and-childcare-law",
		description:
			"We provide sensitive and experienced legal representation in family law matters, including separation, divorce, guardianship, and childcare proceedings. Our aim is to resolve disputes with as little conflict as possible.",
		seo: {
			title: `Family & Childcare Law Kilkenny | ${firm.companyName}`,
			description:
				"Experienced family law solicitors in Kilkenny handling separation, divorce, guardianship, and childcare matters with sensitivity and skill.",
			canonicalPath: "/services/family-and-childcare-law",
		},
		hero: {
			title: "Family & Childcare Law",
			subtitle:
				"Family law matters are often the most personal and emotionally difficult legal issues a person can face. We approach each case with discretion, empathy, and a clear focus on achieving the best outcome for you and your family.",
		},
		intro:
			"We advise and represent clients across the full range of family law matters in Ireland. Whether you are considering separation, going through a divorce, or dealing with issues relating to children, our solicitors will explain your legal options clearly and support you at every stage of the process.\n\nIn childcare proceedings, protecting the welfare of children is always the central concern. We represent parents, guardians, and other parties in proceedings before the District Court and Circuit Court, working to ensure that the best interests of children are upheld throughout.",
		keyPoints: [
			"Judicial separation and divorce proceedings",
			"Consent orders and negotiated settlements",
			"Guardianship, custody, and access applications",
			"Representation in childcare and child welfare proceedings",
		],
		midCta: "Going through a separation or family law matter?\nGet confidential advice today.",
		cta: {
			title: "Talk to a family law solicitor in Kilkenny",
			description:
				"Family law matters require prompt, confidential advice. Contact our team to discuss your situation in complete confidence — we will explain your options clearly and help you decide on the right next step.",
		},
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
		faqs: [
			{
				question: "What is the difference between judicial separation and divorce?",
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
	},
	{
		title: "Personal Injury / Litigation",
		slug: "personal-injury-litigation",
		href: "/services/personal-injury-litigation",
		description:
			"If you have suffered an injury as a result of another person's negligence, we can advise you on your rights and pursue a claim on your behalf. We handle personal injury litigation from initial assessment through to settlement or trial.",
		seo: {
			title: `Personal Injury Solicitors Kilkenny | ${firm.companyName}`,
			description:
				"Personal injury and litigation solicitors in Kilkenny. We pursue claims for injuries caused by negligence, from initial advice to settlement or court.",
			canonicalPath: "/services/personal-injury-litigation",
		},
		hero: {
			title: "Personal Injury & Litigation",
			subtitle:
				"If you have been injured through no fault of your own, you may be entitled to compensation. Our experienced litigation team will assess your case honestly, advise you on the best course of action, and represent your interests throughout the claims process.",
		},
		intro:
			"Personal injury claims in Ireland must be assessed by the Personal Injuries Assessment Board (PIAB) before court proceedings can issue in most cases. We guide clients through this process and, where necessary, pursue the matter through the courts to achieve a fair outcome. We handle all types of personal injury claims, including accidents at work, public liability, and occupier's liability.\n\nOur litigation team also handles general civil disputes, including breach of contract claims and other matters that require resolution through the courts. We offer practical advice on whether litigation is the appropriate course of action and, where possible, explore settlement options that avoid the time and expense of a full trial.",
		keyPoints: [
			"Workplace accidents and employer liability claims",
			"Public liability and occupier's liability claims",
			"Personal Injuries Assessment Board (PIAB) applications",
			"Civil litigation and breach of contract disputes",
		],
		midCta: "Unsure whether you have a claim?\nGet an honest assessment.",
		cta: {
			title: "Get an honest assessment of your claim",
			description:
				"If you have been injured or are involved in a civil dispute, early legal advice is essential. Contact our Kilkenny litigation team to discuss your situation and find out where you stand.",
		},
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
	},
	{
		title: "Road Traffic Accidents",
		slug: "road-traffic-accidents",
		href: "/services/road-traffic-accidents",
		description:
			"We represent individuals injured in road traffic accidents, advising on liability, insurance claims, and compensation. From minor collisions to serious accidents, we work to ensure you receive what you are entitled to.",
		seo: {
			title: `Road Traffic Accident Claims Kilkenny | ${firm.companyName}`,
			description:
				"Road traffic accident solicitors in Kilkenny. We advise on liability, insurance claims, and compensation for injuries sustained in motor accidents.",
			canonicalPath: "/services/road-traffic-accidents",
		},
		hero: {
			title: "Road Traffic Accidents",
			subtitle:
				"Being involved in a road traffic accident can be a stressful and disorienting experience. We help injured parties understand their rights, deal with insurers, and secure appropriate compensation for their injuries and losses.",
		},
		intro:
			"If you have been injured in a road traffic accident that was caused by another driver's negligence, you are entitled to seek compensation for your injuries, loss of earnings, and other out-of-pocket expenses. Our solicitors will review the circumstances of your accident, advise you on liability, and manage the claims process on your behalf.\n\nDealing with insurance companies can be complex, and their initial offers are often lower than what you are entitled to. We act in your interests throughout negotiations and, where a fair settlement cannot be reached, we are prepared to pursue your claim through the courts.",
		keyPoints: [
			"Claims for injuries caused by negligent drivers",
			"Advice on Motor Insurers' Bureau of Ireland (MIBI) claims",
			"Negotiation with insurance companies on your behalf",
			"Court proceedings where settlement cannot be reached",
		],
		midCta: "Injured in a road traffic accident?\nDon't deal with insurers alone.",
		cta: {
			title: "Injured in a road traffic accident? Call us today",
			description:
				"Time limits apply to road traffic accident claims. Contact our Kilkenny team as soon as possible to protect your position and get clear advice on your next steps.",
		},
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
				question: "Can I claim for damage to my vehicle as well as personal injury?",
				answer:
					"Yes. A personal injury claim covers your injuries and related losses, while a separate property damage claim can be made against the other driver's insurer for the cost of repairing or replacing your vehicle. We can advise on both aspects of your claim.",
			},
		],
	},
	{
		title: "Leases and Tenancy Agreements",
		slug: "leases-and-tenancy-agreements",
		href: "/services/leases-and-tenancy-agreements",
		description:
			"We advise landlords and tenants on residential and commercial leases, reviewing and drafting agreements to protect your position. Whether you are entering a new tenancy or facing a dispute, we can help.",
		seo: {
			title: `Leases & Tenancy Agreements Kilkenny | ${firm.companyName}`,
			description:
				"Solicitors for residential and commercial leases and tenancy agreements in Kilkenny. We advise landlords and tenants on their legal rights and obligations.",
			canonicalPath: "/services/leases-and-tenancy-agreements",
		},
		hero: {
			title: "Leases and Tenancy Agreements",
			subtitle:
				"A well-drafted lease protects both landlord and tenant and helps prevent disputes from arising. We advise on residential and commercial tenancy matters, ensuring that your agreement reflects your intentions and complies with current Irish law.",
		},
		intro:
			"Whether you are a landlord letting a property or a tenant entering a new agreement, it is important to understand your rights and obligations under Irish landlord and tenant law. We review and draft lease agreements for residential and commercial properties, ensuring they are clear, enforceable, and suited to your circumstances.\n\nDisputes between landlords and tenants can arise over rent, maintenance obligations, deposits, and notice periods. We advise on how to resolve these issues, including representation before the Residential Tenancies Board (RTB) where necessary.",
		keyPoints: [
			"Drafting and reviewing residential and commercial leases",
			"Advice on landlord and tenant rights under the Residential Tenancies Act",
			"Representation in Residential Tenancies Board (RTB) disputes",
			"Commercial lease renewals and rent reviews",
		],
		midCta: "Questions about a lease or tenancy dispute?\nGet advice before you act.",
		cta: {
			title: "Need advice on a lease or tenancy dispute?",
			description:
				"Whether you are reviewing a new agreement or dealing with a dispute, our Kilkenny solicitors can advise you on your rights and the most effective way to resolve the matter.",
		},
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
	},
	{
		title: "Employment Law",
		slug: "employment-law",
		href: "/services/employment-law",
		description:
			"We advise employees and employers on a wide range of employment law matters, including unfair dismissal, redundancy, workplace rights, and employment contracts. We help you understand your position and take the right steps.",
		seo: {
			title: `Employment Law Solicitors Kilkenny | ${firm.companyName}`,
			description:
				"Employment law advice for employees and employers in Kilkenny. We handle unfair dismissal, redundancy, workplace disputes, and employment contract reviews.",
			canonicalPath: "/services/employment-law",
		},
		hero: {
			title: "Employment Law",
			subtitle:
				"Whether you have been dismissed from your job, are facing redundancy, or have concerns about your employment contract or workplace rights, we can advise you clearly on your options and represent your interests in any proceedings.",
		},
		intro:
			"Irish employment law provides significant protections for employees, but navigating those protections can be complicated. We advise employees who have been unfairly dismissed, made redundant without proper procedure, or subjected to workplace discrimination or harassment. We will assess your situation and advise on the most effective way to pursue your rights.\n\nWe also advise employers on their obligations under employment legislation, helping to ensure that contracts, policies, and dismissal procedures are legally compliant. Getting this right from the outset helps employers avoid costly disputes and Workplace Relations Commission (WRC) hearings.",
		keyPoints: [
			"Unfair dismissal and constructive dismissal claims",
			"Redundancy entitlements and disputes",
			"Review and drafting of employment contracts",
			"Representation at the Workplace Relations Commission (WRC)",
		],
		midCta: "Dismissed or treated unfairly at work?\nTime limits apply — act now.",
		cta: {
			title: "Facing a workplace dispute? Get advice now",
			description:
				"Most WRC complaints must be submitted within six months. If you have been dismissed, made redundant, or are dealing with a workplace issue, contact our Kilkenny employment team without delay.",
		},
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
	},
	{
		title: "Debt Collection",
		slug: "debt-collection",
		href: "/services/debt-collection",
		description:
			"We assist businesses and individuals in recovering money owed to them, from initial demand letters through to court proceedings. We pursue debts efficiently and work to minimise the cost and time involved in recovery.",
		seo: {
			title: `Debt Collection Solicitors Kilkenny | ${firm.companyName}`,
			description:
				"Debt recovery solicitors in Kilkenny for businesses and individuals. We pursue outstanding debts from initial demand to court proceedings.",
			canonicalPath: "/services/debt-collection",
		},
		hero: {
			title: "Debt Collection",
			subtitle:
				"Recovering money owed to you can be time-consuming and frustrating. Our solicitors act swiftly and professionally to pursue outstanding debts, using the most cost-effective route available to achieve recovery.",
		},
		intro:
			"Unpaid debts can place serious strain on a business or individual's finances. We act for creditors pursuing outstanding invoices, loans, and other sums owed, beginning with a formal demand letter and escalating to court proceedings where payment is not forthcoming. Our approach is focused on achieving recovery as quickly and cost-effectively as possible.\n\nWe handle debt recovery through the District Court, Circuit Court, and High Court depending on the amount involved. We can also advise on the enforcement of court judgments, including judgment mortgage registration and sheriff enforcement.",
		keyPoints: [
			"Formal demand letters and pre-litigation correspondence",
			"Court proceedings for recovery of liquidated debts",
			"Enforcement of court judgments",
			"Advice on insolvency and debtor inability to pay",
		],
		midCta: "Owed money that isn't being paid?\nWe can help you recover it.",
		cta: {
			title: "Owed money? Let us help you recover it",
			description:
				"The sooner you act on an unpaid debt, the better your prospects of recovery. Contact our Kilkenny solicitors to discuss your situation and find out the most effective way to pursue what you are owed.",
		},
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
	},
] as const;
