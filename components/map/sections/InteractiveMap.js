import React, { useEffect, useState, useCallback, useRef } from "react";
import { Box, CircularProgress, useMediaQuery } from "@mui/material";
import Map from "../components/Map/Map";
import FilterBar from "../components/Filters/Filters";
import MobileSidebar from "../components/Sidebar/MobileSidebar";
import DesktopSidebar from "../components/Sidebar/DesktopSidebar";
import ScrollToTopButton from "../components/Sidebar/ScrollToTop";

const InteractiveMap = ({ events, filters, onFilterChange, onSearch }) => {
	const [filteredEvents, setFilteredEvents] = useState([]);
	const [isLoading, setIsLoading] = useState(true); // Loading state for Sidebar
	const [isLoadingMap, setIsLoadingMap] = useState(false); // Loading state for Map
	const [selectedEvent, setSelectedEvent] = useState(null); // Selected event for zooming and centering
	const ismobile = useMediaQuery("(max-width:980px)");
	const sidebarRef = useRef(null);

	const handleEventClick = useCallback((event) => {
		setSelectedEvent(event);
	}, []);

	useEffect(() => {
		setIsLoading(true);
		if (events && events.length > 0) {
			setIsLoadingMap(true); // Start map loading state
			setFilteredEvents(events); // Initialize with all events

			setTimeout(() => {
				setIsLoadingMap(false); // Stop map loading state after 2 seconds
				setIsLoading(false);
			}, 1500);
		} else {
			setIsLoading(false);
			setFilteredEvents([]);
		}
	}, [events]);

	const handleZoomChange = useCallback((visibleEvents) => {
		setIsLoading(true); // Start loading state for sidebar
		setTimeout(() => {
			setFilteredEvents(visibleEvents);
			setIsLoading(false); // Stop sidebar loading state after update
		}, 500); // Simulate loading delay
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

				// Scroll sidebar to top and change y position
				if (sidebarRef.current) {
					sidebarRef.current.scrollToTop();
					sidebarRef.current.changePosition(50);
				}
			}, 500);
		},
		[events]
	);

	const handleClusterClick = useCallback(() => {
		// Scroll sidebar to top and change y position
		if (sidebarRef.current) {
			sidebarRef.current.scrollToTop();
			sidebarRef.current.changePosition(50);
		}
	}, []);

	return !ismobile ? (
		<Box position="relative">
			{" "}
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
