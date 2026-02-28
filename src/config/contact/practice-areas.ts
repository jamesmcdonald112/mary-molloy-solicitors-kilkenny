export const PRACTICE_AREAS = [
	"Buying and Selling Property",
	"Wills and Estate Administration",
	"Family & Childcare Law",
	"Personal Injury / Litigation",
	"Road Traffic Accidents",
	"Leases and Tenancy Agreements",
	"Employment Law",
	"Debt Collection",
] as const;

export type PracticeArea = (typeof PRACTICE_AREAS)[number];
