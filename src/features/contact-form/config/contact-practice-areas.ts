import { PRACTICE_AREAS } from "../../../config/contact/practice-areas";

export const CONTACT_PRACTICE_AREAS = [...PRACTICE_AREAS, "Other"] as const;

export type ContactPracticeArea = (typeof CONTACT_PRACTICE_AREAS)[number];
