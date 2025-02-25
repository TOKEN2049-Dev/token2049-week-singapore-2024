"use client";

import { useRouter, usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const Navbar = () => {
	const router = useRouter();
	const pathname = usePathname();
	const [collapsed, setCollapsed] = useState(true);

	useEffect(() => {
		const handleResize = () => {
			if (pathname === "/admin") {
				setCollapsed(true);
				return;
			}
			setCollapsed(window.innerWidth < 1026);
		};

		handleResize();

		window.addEventListener("resize", handleResize);

		return () => window.removeEventListener("resize", handleResize);
	}, [pathname]);

	const handleLogout = async () => {
		const response = await fetch("/api/auth/logout", {
			method: "post",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({}),
		});

		if (!response.ok) {
			throw await response.json();
		}

		const data = await response.json();
		if (data.success) {
			router.push("/auth");
		}
	};

	useEffect(() => {
		const agenda = document.querySelector(".agenda");
		const agendaSubmenu = document.querySelector(".agendaSubmenu");
		const experience = document.querySelector(".experience");
		const submenu = document.querySelector(".submenu");

		let timeoutId1;
		let timeoutId2;

		const handleAgendaMouseEnter = () => {
			submenu.style.display = "none";
			agendaSubmenu.style.display = "flex";
			agendaSubmenu.style.gap = "120px";
			agendaSubmenu.style.justifyContent = "center";
			agendaSubmenu.style.width = "100vw";
			agendaSubmenu.style.marginTop = "-30px";
			clearTimeout(timeoutId1);
		};

		const handleAgendaMouseLeave = () => {
			timeoutId1 = setTimeout(() => {
				agendaSubmenu.style.display = "none";
			}, 2000);
		};

		const handleAgendaSubmenuMouseEnter = () => {
			clearTimeout(timeoutId1);
		};

		const handleAgendaSubmenuMouseLeave = () => {
			agendaSubmenu.style.display = "none";
		};

		const handleExperienceMouseEnter = () => {
			agendaSubmenu.style.display = "none";
			submenu.style.display = "flex";
			submenu.style.gap = "120px";
			submenu.style.justifyContent = "center";
			submenu.style.width = "100vw";
			submenu.style.marginTop = "-30px";
			clearTimeout(timeoutId2);
		};

		const handleExperienceMouseLeave = () => {
			timeoutId2 = setTimeout(() => {
				submenu.style.display = "none";
			}, 2000);
		};

		const handleSubmenuMouseEnter = () => {
			clearTimeout(timeoutId2);
		};

		const handleSubmenuMouseLeave = () => {
			submenu.style.display = "none";
		};

		if (agenda) {
			agenda.addEventListener("mouseenter", handleAgendaMouseEnter);
			agenda.addEventListener("mouseleave", handleAgendaMouseLeave);
			agendaSubmenu.addEventListener("mouseenter", handleAgendaSubmenuMouseEnter);
			agendaSubmenu.addEventListener("mouseleave", handleAgendaSubmenuMouseLeave);
		}

		if (experience) {
			experience.addEventListener("mouseenter", handleExperienceMouseEnter);
			experience.addEventListener("mouseleave", handleExperienceMouseLeave);
			submenu.addEventListener("mouseenter", handleSubmenuMouseEnter);
			submenu.addEventListener("mouseleave", handleSubmenuMouseLeave);
		}

		// Cleanup function to remove event listeners when the component is unmounted
		return () => {
			if (agenda) {
				agenda.removeEventListener("mouseenter", handleAgendaMouseEnter);
				agenda.removeEventListener("mouseleave", handleAgendaMouseLeave);
				agendaSubmenu.removeEventListener("mouseenter", handleAgendaSubmenuMouseEnter);
				agendaSubmenu.removeEventListener("mouseleave", handleAgendaSubmenuMouseLeave);
			}
			if (experience) {
				experience.removeEventListener("mouseenter", handleExperienceMouseEnter);
				experience.removeEventListener("mouseleave", handleExperienceMouseLeave);
				submenu.removeEventListener("mouseenter", handleSubmenuMouseEnter);
				submenu.removeEventListener("mouseleave", handleSubmenuMouseLeave);
			}
		};
	}, []);

	return (
		<header className="header navbar-expand-lg" tw="exclude">
			<div className="t-global">
				<div className="container-lg">
					<a href="https://www.token2049.com">
						<span className="arrow">← </span>TOKEN2049 GLOBAL
					</a>
				</div>
			</div>
			<div className="main">
				<div className="container-lg">
					<div className="menu_dv">
						<div className="header-left">
							<a href="https://www.dubai.token2049.com">
								<img src="/Token-logo.png" alt="Token2049" className="nav-mobile-img" />
								{/*<img src="./token2049-sg.svg" width="150px" className="nav-img" />*/}
								<img src="./TOKENWEEK-DUBAI-LOGO.svg" width="130px" className="nav-img" />
							</a>
						</div>

						<button
							onClick={() => setCollapsed((prev) => !prev)}
							className="navbar-toggler collapsed"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#navbarSupportedContent"
							aria-controls="navbarSupportedContent"
							aria-expanded="false"
							aria-label="Toggle navigation"
						>
							<span className="navbar-toggler-icon">
								{collapsed ? (
									<i className="fa fa-bars" aria-hidden="true">
										<img className="burger-button" src="/menu-bar.png" />
									</i>
								) : (
									<img className="close-burger-btn w-[20px] h-[20px]" width={20} src="/close-icon.svg" />
								)}
							</span>
						</button>

						<div className={"header-right navbar-collapse lgCustom:block hidden " + (collapsed ? "collapse" : "")} id="navbarSupportedContent">
							<ul className="navbar-nav">
								<li className="nav-item">
									<a href="https://www.dubai.token2049.com/speakers" className="nav-link md:-ml-10 hover:text-[#DB90FF]">
										SPEAKERS
									</a>
								</li>
								<li className="nav-item">
									<a href="https://www.dubai.token2049.com/partners" className="nav-link md:-ml-10">
										PARTNERS
									</a>
								</li>
								<li className="nav-item">
									<a href="https://www.dubai.token2049.com/travel" className="nav-link md:-ml-10">
										TRAVEL
									</a>
								</li>
								
								<li className="nav-item">
									<a href="https://www.dubai.token2049.com/2024-report" className="nav-link md:-ml-10 whitespace-nowrap">
										2024 REPORT
									</a>
								</li>
								<li className="nav-item md:min-width-[110px]">
									<a href="https://www.week.token2049.com" className="nav-link md:-ml-10 whitespace-nowrap">
										SIDE EVENTS
									</a>
								</li>

								<div className="nav-item exhibt heder_btn">
									<a href="https://www.dubai.token2049.com/partners" className="btn nav-link">
										EXHIBIT
									</a>
									<a href="https://www.dubai.token2049.com/tickets" className="btn bttn nav-link">
										TICKETS
									</a>
								</div>
							</ul>
						</div>

						<div id="hamburger-background" className={`lgCustom:hidden ${collapsed ? 'hidden' : 'block'}`}></div>

						{!collapsed ? (
							<div id="hamburger-overlay" className="lgCustom:hidden block">
								<div className="navbar-navs">
									<span className="nav-item">
										<a href="https://www.dubai.token2049.com/tickets" className="nav-link-ham">
											TICKETS
										</a>
									</span>

									<span className="nav-item">
										<a href="https://www.dubai.token2049.com/speakers" className="nav-link-ham">
											SPEAKERS
										</a>
									</span>

									<span className="nav-item">
										<a href="https://www.dubai.token2049.com/partners" className="nav-link-ham">
											PARTNERS
										</a>
									</span>

									<span className="nav-item">
										<a href="https://www.dubai.token2049.com/travel" className="nav-link-ham">
											TRAVEL
										</a>
									</span>


									<span className="nav-item">
										<a href="https://www.dubai.token2049.com/students" className="nav-link-ham">
											STUDENTS
										</a>
									</span>

									<span className="nav-item">
										<a href="https://www.dubai.token2049.com/2024-report" className="nav-link-ham">
											2024 REPORT
										</a>
									</span>
								</div>
							</div>
						) : null}

						{pathname === "/admin" && (
							<div
								onClick={() => handleLogout()}
								className="flex items-center justify-center px-10 py-2 text-base font-semibold rounded-full bg-gray-100 hover:bg-gray-300 cursor-pointer"
							>
								Logout
							</div>
						)}
					</div>
				</div>
			</div>

			<div className="p-1 bg-transparent">
				<div className="agendaSubmenu">
					<a href="https://www.asia.token2049.com/agenda" className="agendaSubmenu-link">
						OKX MAIN STAGE
					</a>
					<a href="https://www.asia.token2049.com/sky-stage" className="agendaSubmenu-link">
						SKY STAGE
					</a>
					<a href="https://www.asia.token2049.com/zeebu-stage" className="agendaSubmenu-link">
						ZEEBU STAGE
					</a>
					<a href="https://www.asia.token2049.com/dwf-labs-stage" className="agendaSubmenu-link">
						DWF LABS STAGE
					</a>
				</div>
			</div>

			<div className="p-1 bg-transparent">
				<div className="submenu">
					<a href="https://www.asia.token2049.com/travel" className="submenu-link">
						TRAVEL
					</a>
					<a href="https://www.asia.token2049.com/mobile-app" className="submenu-link">
						MOBILE APP
					</a>
					<a href="https://week.token2049.com" className="submenu-link">
						TOKEN2049 WEEK
					</a>
					<a href="https://attending.token2049.com" className="submenu-link">
						I&apos;M ATTENDING
					</a>
				</div>
			</div>
		</header>
	);
};

export default Navbar;
