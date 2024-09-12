"use client";

import React, { useState, useEffect, useCallback } from "react";
import { Box, ThemeProvider, useMediaQuery } from "@mui/material";
import InteractiveMap from "../../components/map/sections/InteractiveMap";
import HeroSection from "../../components/map/sections/HeroSection";
import { geocodeLocation, extractLatLongFromGMapLink } from "../../components/map/utils/geoCodeLocation";
// import "./index.css"; // Adjust the path if needed
import theme from "../../components/map/utils/theme";

const App = () => {
	const [events, setEvents] = useState([]);
	const [selectedTag, setSelectedTag] = useState("");
	const [selectedPrice, setSelectedPrice] = useState("");
	const [selectedDate, setSelectedDate] = useState("");
	const [searchQuery, setSearchQuery] = useState("");
	const isMobile = useMediaQuery("(max-width:980px)");

	// console.log(
	// 	extractLatLongFromGMapLink(
	// 		"https://www.google.com/maps/place/SkyPark+Observation+Deck/@1.2852098,103.8584564,829m/data=!3m3!1e3!4b1!5s0x31da190422da0b49:0x571df46076e0c318!4m6!3m5!1s0x27baf2df51fe139:0x82b824e6b7d4033!8m2!3d1.2852044!4d103.8610313!16s%2Fg%2F11c6v4y7rd?entry=ttu&g_ep=EgoyMDI0MDkwMy4wIKXMDSoASAFQAw%3D%3D"
	// 	)
	// );

	useEffect(() => {
		const fetchAndGeocodeEvents = async () => {
			const storedEvents = JSON.parse(sessionStorage.getItem("eventsWithCoordinates"));
			if (storedEvents) {
				setEvents(storedEvents);
			} else {
				const response = await fetch(process.env.NEXT_PUBLIC_DATA_SOURCE);
				const data = await response.json();

				const geocodedEvents = await Promise.all(
					data.events.map(async (event) => {
						let coordinates;

						// Attempt to extract coordinates from the Google Maps link
						if (event.gmap_link) {
							coordinates = extractLatLongFromGMapLink(event.gmap_link);
						}

						// If extraction fails or link is not provided, geocode the venue
						if (!coordinates) {
							coordinates = await geocodeLocation(event.venue);
						}

						return { ...event, latlong: [coordinates.longitude, coordinates.latitude] };
					})
				);

				// Sort events by event_date and start_time
				const sortedEvents = geocodedEvents.sort((a, b) => {
					const dateA = new Date(`${a.event_date.split("T")[0]}T${a.start_time}`);
					const dateB = new Date(`${b.event_date.split("T")[0]}T${b.start_time}`);
					return dateA - dateB;
				});

				sessionStorage.setItem("eventsWithCoordinates", JSON.stringify(sortedEvents));
				setEvents(sortedEvents);
			}
		};

		fetchAndGeocodeEvents();
	}, []);

	const filterEvents = useCallback(() => {
		let filtered = events;

		if (selectedDate && selectedDate.toLocaleLowerCase() !== "all") {
			filtered = filtered.filter((event) => event.event_date === selectedDate);
		}

		if (selectedTag && selectedTag.toLowerCase() !== "all") {
			filtered = filtered.filter((event) => event.event_category.toLowerCase() === selectedTag.toLowerCase());
		}

		if (selectedPrice && selectedPrice.toLowerCase() !== "all") {
			filtered = filtered.filter((event) => event.event_type.toLowerCase() === selectedPrice.toLowerCase());
		}

		if (searchQuery) {
			filtered = filtered.filter((event) => event.event_name.toLowerCase().includes(searchQuery.toLowerCase()));
		}

		return filtered;
	}, [events, selectedDate, selectedTag, selectedPrice, searchQuery]);

	const filteredEvents = filterEvents();

	const handleFilterChange = useCallback((filterType, value) => {
		if (filterType === "tag") {
			setSelectedTag(value);
		} else if (filterType === "price") {
			setSelectedPrice(value);
		} else if (filterType === "date") {
			setSelectedDate(value);
		}
	}, []);

	const handleSearch = useCallback((query) => {
		setSearchQuery(query);
	}, []);

	return (
		<ThemeProvider theme={theme}>
			<Box
				sx={{
					width: "100%",
					display: "flex",
					flexDirection: "column",
					scrollBehavior: "smooth",
					overflowY: "scroll",
					height: "100vh",
				}}
			>
				<section id="hero" style={{ height: "100vh" }}>
					<HeroSection ismobile={isMobile} />
				</section>
				<section id="map" style={{ height: "100vh" }}>
					<InteractiveMap
						events={filteredEvents}
						filters={{ tag: selectedTag, price: selectedPrice, searchQuery }}
						onFilterChange={handleFilterChange}
						onSearch={handleSearch}
						ismobile={isMobile}
					/>
				</section>
				<sction id="footer">{/* Add Your Footer Here */}</sction>
			</Box>
		</ThemeProvider>
	);
};

export default App;
