"use client";

import React, { useState, useEffect } from "react";
import { Box, Drawer, Typography, useMediaQuery, CircularProgress, IconButton } from "@mui/material";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { MdKeyboardArrowDown } from "react-icons/md";
// import backgroundImage from "/img/singapore.jpg";
// import heroImage from "/img/Token2049Logo.svg";
// import heroMobileImage from "/img/Token2049MobileLogo.svg";
import {
	BlurredButton,
	HeroButton,
	HeroImage,
	HeroSectionWrapper,
	ImageSubtitle,
	StyledAppBar,
	StyledLink,
	SubMenu,
	SubMenuButton,
} from "../components/Hero/HeroComponents";
import HeroToolbar from "../components/Hero/HeroToolbar";
import HeroDrawer from "../components/Hero/HeroDrawer";

const HeroSection = () => {
	const isMobile = useMediaQuery("(max-width:980px)");
	const [drawerOpen, setDrawerOpen] = useState(false);
	const [submenuItems, setSubmenuItems] = useState([]);
	const [isSubmenuVisible, setIsSubmenuVisible] = useState(false);
	const [isAgendaOpen, setIsAgendaOpen] = useState(false);
	const [isExperienceOpen, setIsExperienceOpen] = useState(false);
	const [isImageLoaded, setIsImageLoaded] = useState(false);

	const { scrollY } = useScroll();
	const backgroundY = useTransform(scrollY, [0, 500], ["0%", "50%"]);
	const heroImageY = useTransform(scrollY, [0, 500], ["0%", "20%"]);

	useEffect(() => {
		const img = new Image();
		img.src = "/img/singapore.jpg";
		img.onload = () => {
			setIsImageLoaded(true);
		};
	}, []);

	const toggleDrawer = () => {
		setDrawerOpen(!drawerOpen);
	};

	const handleMouseEnter = (menu, items) => {
		if (menu === "Agenda") setIsAgendaOpen(true);
		if (menu === "Experience") setIsExperienceOpen(true);
		setSubmenuItems(items);
		setIsSubmenuVisible(true);
	};

	const handleMouseLeave = () => {
		setIsAgendaOpen(false);
		setIsExperienceOpen(false);
		setIsSubmenuVisible(false);
	};

	const scrollToMap = () => {
		const mapSection = document.getElementById("map");
		if (mapSection) {
			mapSection.scrollIntoView({ behavior: "smooth" });
		}
	};

	const drawerContent = (
		<Box
			sx={{
				height: "100vh",
				backgroundColor: "white",
				padding: "20px",
				display: "flex",
				flexDirection: "column",
			}}
			role="presentation"
		>
			<HeroDrawer toggleDrawer={toggleDrawer} drawerOpen={drawerOpen} />
		</Box>
	);

	if (!isImageLoaded) {
		return (
			<Box
				sx={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					height: "100vh",
					backgroundColor: "#000",
				}}
			>
				<CircularProgress color="secondary" />
			</Box>
		);
	}

	return (
		<>
			<HeroSectionWrapper
				backgroundImage={"/img/singapore.jpg"}
				as={motion.div}
				style={{ y: backgroundY }}
				isMobile={isMobile}
				sx={{
					backgroundColor: isImageLoaded ? "transparent" : "#1E1E1E", // Set background color to black until image is loaded
				}}
			>
				<StyledAppBar position="absolute" isMobile={isMobile}>
					<HeroToolbar
						isMobile={isMobile}
						handleMouseEnter={handleMouseEnter}
						handleMouseLeave={handleMouseLeave}
						isAgendaOpen={isAgendaOpen}
						isExperienceOpen={isExperienceOpen}
						toggleDrawer={toggleDrawer}
						drawerOpen={drawerOpen}
					/>
					<AnimatePresence>
						{isSubmenuVisible && (
							<SubMenu
								onMouseEnter={() => setIsSubmenuVisible(true)}
								onMouseLeave={handleMouseLeave}
								initial={{ opacity: 0, y: -10 }}
								animate={{ opacity: 1, y: 0 }}
								exit={{ opacity: 0, y: -10 }}
								transition={{ duration: 0.4, ease: "easeOut" }}
							>
								{submenuItems.map((item, index) => (
									<SubMenuButton href={item.link} key={index} sx={{ color: "#FFFFFF", margin: "0 10px" }}>
										{item.label}
									</SubMenuButton>
								))}
							</SubMenu>
						)}
					</AnimatePresence>
				</StyledAppBar>
				<Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", paddingBottom: isMobile && 10 }}>
					<motion.div style={{ y: heroImageY }}>
						<HeroImage
							src={isMobile ? "/img/Token2049MobileLogo.svg" : "/img/Token2049Logo.svg"}
							alt="Hero"
							isMobile={isMobile}
							sx={{
								mb: isMobile ? 1 : 1.5,
							}}
						/>
						<ImageSubtitle isMobile={isMobile}>16 - 22 SEPTEMBER 2024 {!isMobile && "   | SINGAPORE"}</ImageSubtitle>
					</motion.div>
					<Box
						sx={{
							display: "flex",
							gap: isMobile ? 1 : 3,
							alignItems: "center",
							flexDirection: isMobile ? "column" : "row",
							mt: isMobile ? 5 : 5,
							justifyContent: "center",
							mb: isMobile ? 2 : 0,
						}}
					>
						<HeroButton href="https://forms.token2049.com/singapore/week" isMobile={isMobile}>
							SUBMIT YOUR EVENT
						</HeroButton>
						<BlurredButton
							href="https://docs.google.com/spreadsheets/d/1bWp6ENyhxaNnnCHvxrMRO8n1IRKq3lu891F7Y4zxfZk/edit?gid=0#gid=0"
							isMobile={isMobile}
						>
							SIDE EVENT SHEET
						</BlurredButton>
					</Box>

					<Typography
						sx={{
							marginTop: isMobile ? "16px" : "24px",
							fontSize: isMobile ? "14px" : "17px",
							textAlign: "center",
						}}
					>
						Want to host a side event and haven&apos;t found a space yet?{" "}
						<StyledLink href="https://tally.so/r/w4Lp9B">Click here to get in touch.</StyledLink>.
					</Typography>

					{/* Arrow Down Button */}
					<IconButton
						onClick={scrollToMap}
						sx={{
							position: "absolute",
							bottom: isMobile ? "25vh" : "10vh",
							color: "white",
							// mt: isMobile ? 3 : 5,
							fontSize: isMobile ? "2rem" : "3rem",
							"&:hover": {
								color: "lightgray",
							},
						}}
					>
						<MdKeyboardArrowDown fontSize="inherit" />
					</IconButton>
				</Box>
			</HeroSectionWrapper>
			<Drawer
				anchor="right"
				open={drawerOpen}
				onClose={toggleDrawer}
				transitionDuration={500}
				PaperProps={{
					sx: { width: "90%" },
				}}
			>
				{drawerContent}
			</Drawer>
		</>
	);
};

export default HeroSection;
