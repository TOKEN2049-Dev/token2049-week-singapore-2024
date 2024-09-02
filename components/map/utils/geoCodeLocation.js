import { DEFAULT_COORDINATES } from "../const/coordinates";
// Function to geocode location names into coordinates
const geocodeLocation = async (locationName) => {
	try {
		const response = await fetch(
			`https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(locationName)}.json?access_token=${process.env.NEXT_PUBLIC_MAPBOX_API_KEY}`
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

		// Check if the URL path contains the '@' sign and valid coordinates
		if (pathSegments.length > 1 && pathSegments[0].includes("@")) {
			const latitude = parseFloat(pathSegments[0].split("@")[1]);
			const longitude = parseFloat(pathSegments[1]);

			if (!isNaN(latitude) && !isNaN(longitude)) {
				return { latitude, longitude };
			}
		}
	} catch (error) {
		console.error("Failed to extract lat/long from Google Maps link:", error);
	}
	return null; // Return null if extraction fails
};

export { geocodeLocation, extractLatLongFromGMapLink };
