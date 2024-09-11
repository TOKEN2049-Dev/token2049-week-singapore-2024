import React from "react";
import { Box, Toolbar } from "@mui/material";
import HamburgerIcon from "./Hamburger";
import { LogoImage, NavButton, ToolbarOutlineButton, ToolbarContainedButton, LogoImageTop } from "./HeroComponents";
// import logoBottom from "/img/TokenLogoBottom.svg";
// import logoTop from "/img/TokenLogoTop.svg";
// import mobileLogo from "/img/TOKEN2049MobileHeadLogo.svg";

const HeroToolbar = ({ isMobile, isTablet, handleMouseEnter, handleMouseLeave, isAgendaOpen, isExperienceOpen, toggleDrawer, drawerOpen }) => (
	<Toolbar sx={{ justifyContent: isMobile ? "space-between" : "center", padding: isMobile ? "0px 30px" : "", gap: 4, alignItems: "center" }}>
		<Box
			sx={{
				display: "flex",
				flexDirection: "column",
				gap: 1,
				justifyContent: "flex-start",
				alignItems: "flex-start",
				marginLeft: isMobile && 1.5,
			}}
		>
			{!isMobile && (
				<a href="https://www.token2049.com/" rel="noopener noreferrer">
					<LogoImageTop src={"/img/TokenLogoBottom.svg"} alt="Logo" isMobile={isMobile} isTablet={isTablet} />
				</a>
			)}
			<a href="https://www.asia.token2049.com/" rel="noopener noreferrer">
				<LogoImage src={!isMobile ? "/img/TokenLogoTop.svg" : "/img/TOKEN2049MobileHeadLogo.svg"} alt="Logo" isMobile={isMobile} isTablet={isTablet} />
			</a>
		</Box>
		{isMobile ? (
			<HamburgerIcon isOpen={drawerOpen} toggleDrawer={toggleDrawer} />
		) : (
			<Box sx={{ display: "flex", gap: 1 }}>
				<NavButton href="https://www.asia.token2049.com/speakers" isMobile={isMobile} isTablet={isTablet} onMouseEnter={handleMouseLeave}>
					Speakers
				</NavButton>
				<NavButton
					isMobile={isMobile}
					isTablet={isTablet}
					isActive={isAgendaOpen}
					onMouseEnter={() =>
						handleMouseEnter("Agenda", [
							{ label: "OKX MAIN STAGE", link: "https://www.asia.token2049.com/agenda" },
							{ label: "SKY STAGE", link: "https://www.asia.token2049.com/sky-stage" },
							{ label: "ZEEBU STAGE", link: "https://www.asia.token2049.com/zeebu-stage" },
							{ label: "DWF LABS STAGE", link: "https://www.asia.token2049.com/dwf-labs-stage" },
						])
					}
				>
					Agenda
				</NavButton>
				<NavButton href="https://www.asia.token2049.com/partners" isMobile={isMobile} isTablet={isTablet} onMouseEnter={handleMouseLeave}>
					Partners
				</NavButton>
				<NavButton
					href="https://www.asia.token2049.com/nexus-startup-competition"
					isMobile={isMobile}
					isTablet={isTablet}
					onMouseEnter={handleMouseLeave}
				>
					Nexus
				</NavButton>
				<NavButton
					isMobile={isMobile}
					isTablet={isTablet}
					isActive={isExperienceOpen}
					onMouseEnter={() =>
						handleMouseEnter("Experience", [
							{ label: "TRAVEL", link: "https://www.asia.token2049.com/travel" },
							{ label: "MOBILE APP", link: "https://www.asia.token2049.com/mobile-app" },
							{ label: "TOKEN2049 WEEK", link: "https://week.token2049.com/" },
							// { label: "STUDENTS", link: "https://www.asia.token2049.com/students" },
							{ label: "I'M ATTENDING", link: "https://attending.token2049.com" },
						])
					}
				>
					Experience
				</NavButton>
			</Box>
		)}
		{!isMobile && (
			<Box sx={{ display: "flex", gap: 1 }}>
				<ToolbarOutlineButton href="https://www.asia.token2049.com/partners" isMobile={isMobile} isTablet={isTablet}>
					Exhibit
				</ToolbarOutlineButton>
				<ToolbarContainedButton href="https://www.asia.token2049.com/tickets" isMobile={isMobile} isTablet={isTablet}>
					Tickets
				</ToolbarContainedButton>
			</Box>
		)}
	</Toolbar>
);

export default HeroToolbar;
