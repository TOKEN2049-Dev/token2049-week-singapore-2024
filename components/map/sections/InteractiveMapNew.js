"use client";

import React, { useState, useCallback, useRef } from "react";
import { Box, CircularProgress, useMediaQuery } from "@mui/material";
import Map from "../components/Map/Map";
import FilterBar from "../components/Filters/Filters";
import MobileSidebar from "../components/Sidebar/MobileSidebar";
import DesktopSidebar from "../components/Sidebar/DesktopSidebar";
import ScrollToTopButton from "../components/Sidebar/ScrollToTop";

const InteractiveMap = ({ initialEvents }) => {
	const [events, setEvents] = useState(initialEvents);
	const [filteredEvents, setFilteredEvents] = useState(initialEvents);
	const [isLoading, setIsLoading] = useState(false);
	const [isLoadingMap, setIsLoadingMap] = useState(false);
	const [selectedEvent, setSelectedEvent] = useState(null);
	const [filters, setFilters] = useState({ tag: "", price: "", searchQuery: "" });
	const ismobile = useMediaQuery("(max-width:980px)");
	const sidebarRef = useRef(null);

	const handleEventClick = useCallback((event) => {
		setSelectedEvent(event);
	}, []);

	const handleZoomChange = useCallback((visibleEvents) => {
		setIsLoading(true);
		setTimeout(() => {
			setFilteredEvents(visibleEvents);
			setIsLoading(false);
		}, 500);
	}, []);

	const handleMarkerClick = useCallback(
		(eventId) => {
			setIsLoading(true);
			setTimeout(() => {
				const clickedEvent = events.find((event) => event.id === eventId);
				if (clickedEvent) {
					setFilteredEvents([clickedEvent]);
				}
				setIsLoading(false);

				if (sidebarRef.current) {
					sidebarRef.current.scrollToTop();
					sidebarRef.current.changePosition(50);
				}
			}, 500);
		},
		[events]
	);

	const handleClusterClick = useCallback(() => {
		if (sidebarRef.current) {
			sidebarRef.current.scrollToTop();
			sidebarRef.current.changePosition(50);
		}
	}, []);

	const onFilterChange = useCallback((filterType, value) => {
		setFilters((prevFilters) => ({ ...prevFilters, [filterType]: value }));
	}, []);

	const onSearch = useCallback((query) => {
		setFilters((prevFilters) => ({ ...prevFilters, searchQuery: query }));
	}, []);

	const filterEvents = useCallback(() => {
		let filtered = events;

		if (filters.tag && filters.tag.toLowerCase() !== "all") {
			filtered = filtered.filter((event) => event.event_category.toLowerCase() === filters.tag.toLowerCase());
		}

		if (filters.price && filters.price.toLowerCase() !== "all") {
			filtered = filtered.filter((event) => event.event_type.toLowerCase() === filters.price.toLowerCase());
		}

		if (filters.searchQuery) {
			filtered = filtered.filter((event) => event.event_name.toLowerCase().includes(filters.searchQuery.toLowerCase()));
		}

		setFilteredEvents(filtered);
	}, [events, filters]);

	React.useEffect(() => {
		filterEvents();
	}, [filterEvents]);

	return !ismobile ? (
		<Box position="relative">
			{/* Add a relative positioning container */}
			<Box display="flex" height="100vh" overflow="hidden">
				<Box display="flex" sx={{ flexDirection: "column", width: "50%" }}>
					<FilterBar onFilterChange={onFilterChange} onSearch={onSearch} ismobile={ismobile} />
					<DesktopSidebar events={filteredEvents} isLoading={isLoading} filters={filters} ismobile={ismobile} onEventClick={handleEventClick} />
				</Box>
				<Box flexGrow={1} position="relative">
					<Map
						events={events}
						onZoomChange={handleZoomChange}
						onMarkerClick={handleMarkerClick}
						onClusterClick={handleClusterClick}
						selectedEvent={selectedEvent}
						isMobile={false}
					/>
					{isLoadingMap && (
						<Box
							sx={{
								display: "flex",
								justifyContent: "center",
								alignItems: "center",
								position: "absolute",
								top: 0,
								bottom: 0,
								left: 0,
								right: 0,
								zIndex: 10,
								backgroundColor: "rgba(255, 255, 255, 0.8)",
								height: "100%",
							}}
						>
							<CircularProgress />
						</Box>
					)}
				</Box>
			</Box>
			<ScrollToTopButton target="hero" />
		</Box>
	) : (
		<Box
			sx={{
				flexGrow: 1,
				height: "100vh",
				position: "relative",
			}}
		>
			{isLoadingMap && (
				<Box
					sx={{
						display: "flex",
						justifyContent: "center",
						alignitems: "center",
						position: "absolute",
						top: 0,
						bottom: 0,
						left: 0,
						right: 0,
						zIndex: 10,
						backgroundColor: "rgba(255, 255, 255, 0.8)",
					}}
				>
					<CircularProgress />
				</Box>
			)}
			<FilterBar onFilterChange={onFilterChange} onSearch={onSearch} ismobile={ismobile} />
			<Map
				events={events}
				onZoomChange={handleZoomChange}
				onMarkerClick={handleMarkerClick}
				onClusterClick={handleClusterClick}
				selectedEvent={selectedEvent}
				isMobile={ismobile}
			/>
			<MobileSidebar
				ref={sidebarRef}
				events={filteredEvents}
				isLoading={isLoading}
				ismobile={ismobile}
				filters={filters}
				onEventClick={handleEventClick}
			/>
		</Box>
	);
};

export default InteractiveMap;
