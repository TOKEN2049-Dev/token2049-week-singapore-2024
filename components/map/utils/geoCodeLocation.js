import { DEFAULT_COORDINATES } from "../const/coordinates";
// Function to geocode location names into coordinates
const geocodeLocation = async (locationName) => {
	try {
		const response = await fetch(
			`https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(locationName)}.json?access_token=${
				process.env.NEXT_PUBLIC_MAPBOX_API_KEY
			}&country=SG`
		);
		const data = await response.json();

		if (data.features && data.features.length > 0) {
			const [longitude, latitude] = data.features[0].center;
			return { latitude, longitude };
		}
	} catch (error) {
		console.error(`Geocoding failed for location: ${locationName}`, error);
	}
	return DEFAULT_COORDINATES;
};

// Function to extract latitude and longitude from a Google Maps link
const extractLatLongFromGMapLink = (gmapLink) => {
	try {
		const url = new URL(gmapLink);
		const pathSegments = url.pathname.split(",");

		// Check if the URL path contains '@' after a '/'
		const atIndex = url.pathname.lastIndexOf("@");
		if (atIndex !== -1 && url.pathname.lastIndexOf("/", atIndex) !== -1) {
			const coords = url.pathname.slice(atIndex + 1).split(",");
			if (coords.length >= 2) {
				const latitude = parseFloat(coords[0]);
				const longitude = parseFloat(coords[1]);

				if (latitude == "1.3146092" && longitude == "103.2202227") {
					return { latitude: "1.371149", longitude: "103.781536" };
				}
				if (latitude == "51.4497749" && longitude == "5.4908806") {
					return { latitude: "1.371149", longitude: "103.781536" };
				}
				if (latitude == "37.4960193" && longitude == "127.066239") {
					return { latitude: "1.371149", longitude: "103.781536" };
				}

				if (!isNaN(latitude) && !isNaN(longitude)) {
					return { latitude, longitude };
				}
			}
		}
	} catch (error) {
		console.error("Failed to extract lat/long from Google Maps link:", error);
	}
	return null; // Return null if extraction fails
};

export { geocodeLocation, extractLatLongFromGMapLink };
