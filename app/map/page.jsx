import { cache } from "react";
import MapPageClient from "../../components/map/MapPageClient";
import { geocodeLocation, extractLatLongFromGMapLink } from "../../components/map/utils/geoCodeLocation";

// Cache the fetch function
const getEvents = cache(async () => {
	try {
		const response = await fetch(process.env.NEXT_PUBLIC_DATA_SOURCE);
		const data = await response.json();

		const geocodedEvents = await Promise.all(
			data.events.map(async (event) => {
				let coordinates;

				if (event.gmap_link) {
					coordinates = extractLatLongFromGMapLink(event.gmap_link);
				}

				if (!coordinates) {
					coordinates = await geocodeLocation(event.venue);
				}

				return { ...event, latlong: [coordinates.longitude, coordinates.latitude] };
			})
		);

		const sortedEvents = geocodedEvents.sort((a, b) => {
			const dateA = new Date(`${a.event_date.split("T")[0]}T${a.start_time}`);
			const dateB = new Date(`${b.event_date.split("T")[0]}T${b.start_time}`);
			return dateA - dateB;
		});

		return sortedEvents;
	} catch (error) {
		console.error("Error fetching events:", error);
		return [];
	}
});

export async function generateStaticParams() {
	await getEvents();
	return [];
}

export default async function MapPage() {
	const events = await getEvents();

	return <MapPageClient initialEvents={events} />;
}
