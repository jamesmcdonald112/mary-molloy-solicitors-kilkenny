import { SERVICES } from "../../../config/contact/services";

export const CONTACT_SERVICES = [...SERVICES, "Other"] as const;

export type ContactService = (typeof CONTACT_SERVICES)[number];
