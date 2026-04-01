export { willsAndEstateAdministration } from "./wills-and-estate-administration";
export { familyAndChildcareLaw } from "./family-and-childcare-law";
export { personalInjuryLitigation } from "./personal-injury-litigation";
export { roadTrafficAccidents } from "./road-traffic-accidents";
export { leasesAndTenancyAgreements } from "./leases-and-tenancy-agreements";
export { employmentLaw } from "./employment-law";
export { debtCollection } from "./debt-collection";

import { willsAndEstateAdministration } from "./wills-and-estate-administration";
import { familyAndChildcareLaw } from "./family-and-childcare-law";
import { personalInjuryLitigation } from "./personal-injury-litigation";
import { roadTrafficAccidents } from "./road-traffic-accidents";
import { leasesAndTenancyAgreements } from "./leases-and-tenancy-agreements";
import { employmentLaw } from "./employment-law";
import { debtCollection } from "./debt-collection";

// Master list — order here controls the order on the services index page
export const services = [
	willsAndEstateAdministration,
	familyAndChildcareLaw,
	personalInjuryLitigation,
	roadTrafficAccidents,
	leasesAndTenancyAgreements,
	employmentLaw,
	debtCollection,
] as const;
