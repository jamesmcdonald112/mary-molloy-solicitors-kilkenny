import { firm } from "./firm";

const weekdayMap: Record<string, string> = {
	mon: "Monday",
	tue: "Tuesday",
	wed: "Wednesday",
	thu: "Thursday",
	fri: "Friday",
	sat: "Saturday",
	sun: "Sunday",
};

type OpeningHoursSpec = {
	"@type": "OpeningHoursSpecification";
	dayOfWeek: string;
	opens: string;
	closes: string;
};

function getOpeningHoursSpecification() {
	const weekly = firm.officeHours.weekly;
	const specs: OpeningHoursSpec[] = [];

	for (const [shortDay, hours] of Object.entries(weekly)) {
		if (hours.toLowerCase() === "closed") {
			continue;
		}

		const [opens, closes] = hours.split("-");
		if (!opens || !closes) {
			continue;
		}

		const dayOfWeek = weekdayMap[shortDay];
		if (!dayOfWeek) {
			continue;
		}

		specs.push({
			"@type": "OpeningHoursSpecification",
			dayOfWeek,
			opens,
			closes,
		});
	}

	return specs.length > 0 ? specs : undefined;
}

export function getLawFirmStructuredData() {
	const siteUrl = new URL("/", firm.siteUrl).toString();
	const imageUrl = new URL(firm.seo.defaultOgImage, firm.siteUrl).toString();
	const openingHoursSpecification = getOpeningHoursSpecification();
	const sameAs = firm.socialLinks?.filter(Boolean);

	const baseEntity = {
		name: firm.companyName,
		url: siteUrl,
		telephone: firm.phone.phoneHref,
		image: imageUrl,
		address: {
			"@type": "PostalAddress",
			streetAddress: [firm.address.line1, firm.address.line2]
				.filter(Boolean)
				.join(", "),
			addressLocality: firm.address.city,
			postalCode: firm.address.eircode,
			addressCountry: firm.address.country,
		},
		areaServed: [
			{
				"@type": "Country",
				name: "Ireland",
			},
			{
				"@type": "AdministrativeArea",
				name: firm.county,
			},
		],
		...(openingHoursSpecification
			? { openingHoursSpecification }
			: { openingHours: firm.officeHours.display }),
		...(sameAs && sameAs.length > 0 ? { sameAs } : {}),
	};

	return {
		"@context": "https://schema.org",
		"@graph": [
			{
				"@type": "LegalService",
				"@id": `${siteUrl}#legalservice`,
				...baseEntity,
			},
			{
				"@type": "LocalBusiness",
				"@id": `${siteUrl}#localbusiness`,
				...baseEntity,
			},
		],
	};
}
