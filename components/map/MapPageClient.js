"use client";

import React from "react";
import { Box, ThemeProvider } from "@mui/material";
import InteractiveMap from "./sections/InteractiveMapNew";
import HeroSection from "./sections/HeroSection";
import theme from "./utils/theme";

const MapPageClient = ({ initialEvents }) => {
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
					<HeroSection />
				</section>
				<section id="map" style={{ height: "100vh" }}>
					<InteractiveMap initialEvents={initialEvents} />
				</section>
				<section id="footer">{/* Add Your Footer Here */}</section>
			</Box>
		</ThemeProvider>
	);
};

export default MapPageClient;
