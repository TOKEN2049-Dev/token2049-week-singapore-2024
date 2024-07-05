"use client";

import { useRouter, usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const Navbar = () => {
	const router = useRouter();
	const pathname = usePathname();
	const [collapsed, setCollapsed] = useState(pathname === "/admin");

	useEffect(() => {
		setCollapsed(window.innerWidth < 1026 || pathname === "/admin");
		window?.addEventListener("resize", (e) => {
			if (pathname === "/admin") {
				setCollapsed(true);
				return;
			}
			const windowWidth = window?.innerWidth;
			if (windowWidth < 1026) setCollapsed(true);
			else setCollapsed(false);
		});
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

	// window?.addEventListener('resize', (e) => {
	// 	if(pathname === "/admin"){
	// 		setCollapsed(true)
	// 		return;
	// 	}
	// 	const windowWidth = window?.innerWidth;
	// 	if(windowWidth < 769)
	// 		setCollapsed(true);
	// 	else
	// 		setCollapsed(false);
	// })

	useEffect(() => {
		const experience = document.querySelector(".experience");
		const submenu = document.querySelector(".submenu");

		let timeoutId2;

		const handleExperienceMouseEnter = () => {
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

		experience.addEventListener("mouseenter", handleExperienceMouseEnter);
		experience.addEventListener("mouseleave", handleExperienceMouseLeave);
		submenu.addEventListener("mouseenter", handleSubmenuMouseEnter);
		submenu.addEventListener("mouseleave", handleSubmenuMouseLeave);

		// Cleanup function to remove event listeners when the component is unmounted
		return () => {
			experience.removeEventListener("mouseenter", handleExperienceMouseEnter);
			experience.removeEventListener("mouseleave", handleExperienceMouseLeave);
			submenu.removeEventListener("mouseenter", handleSubmenuMouseEnter);
			submenu.removeEventListener("mouseleave", handleSubmenuMouseLeave);
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
							<a href="https://www.asia.token2049.com">
								<img src="/Token-logo.png" alt="Token2049" class="nav-mobile-img" />
								<img src="./token2049-sg.svg" width="150px" class="nav-img" />
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
								{/* <li className="nav-item onlymb">
									<a href="https://www.asia.token2049.com/tickets" className="nav-link">
										TICKETS
									</a>
								</li> */}
								<li className="nav-item">
									<a href="https://www.asia.token2049.com/speakers" className="nav-link md:-ml-10">
										SPEAKERS
									</a>
								</li>
								{/* <li className="nav-item"><a href="https://www.asia.token2049.com/agenda" className="nav-link">SIDE EVENTS</a></li> */}
								{/* <!-- <li className="nav-item age-nda dropdown">
                   <div className="agenda_new"> <span className="formbh" onclick="myfunction()" id="formbh"></span>
                <a href="https://www.asia.token2049.com/agenda" className="nav-link">AGENDA</a></div>
                  <div className="dropdown-content hide" id="dropdown-content">
                    <a href="https://www.asia.token2049.com/agenda">OKX MAINSTAGE</a>
                    <a href="https://www.asia.token2049.com/stage-2">STAGE 2</a>
                    <a href="https://www.asia.token2049.com/kucoin-stage">KUCOIN STAGE</a>
                  </div>
              </li> --> */}
								{/* <li className="nav-item">
									<a href="https://www.asia.token2049.com/agenda" className="nav-link md:-ml-10">
										AGENDA
									</a>
								</li> */}
								<li className="nav-item">
									<a href="https://www.asia.token2049.com/partners" className="nav-link md:-ml-10">
										PARTNERS
									</a>
								</li>

								<li className="nav-item">
									<a href="https://www.asia.token2049.com/startup-competition" className="nav-link md:-ml-8 whitespace-nowrap">
										STARTUP COMPETITION
									</a>
								</li>
								<li className="nav-item experience">
									<a href="#" className="nav-link md:ml-14">
										EXPERIENCE
									</a>
								</li>
								{/* <li className="nav-item md:-ml-[10px]">
									<a href="/" className="nav-link side-event-active-link">
										SIDE EVENTS
									</a>
								</li> */}

								<div className="nav-item exhibt heder_btn">
									<a href="https://www.asia.token2049.com/partners" className="btn nav-link">
										EXHIBIT
									</a>
									<a href="https://www.asia.token2049.com/tickets" className="btn bttn nav-link">
										TICKETS
									</a>
								</div>
							</ul>
						</div>

						{!collapsed && <div id="hamburger-background" className="lgCustom:hidden block"></div>}

						{!collapsed ? (
							<div id="hamburger-overlay" className="lgCustom:hidden block">
								<div class="navbar-navs">
									<span class="nav-item">
										<a href="https://www.asia.token2049.com/tickets" class="nav-link-ham">
											TICKETS
										</a>
									</span>

									<span class="nav-item">
										<a href="https://www.asia.token2049.com/speakers" class="nav-link-ham">
											SPEAKERS
										</a>
									</span>

									<span class="nav-item">
										<a href="https://www.asia.token2049.com/partners" class="nav-link-ham">
											PARTNERS
										</a>
									</span>

									<span class="nav-item">
										<a href="https://www.asia.token2049.com/startup-competition" class="nav-link-ham">
											STARTUP COMPETITION
										</a>
									</span>

									<span class="nav-item">
										<a href="https://www.asia.token2049.com/travel" class="nav-link-ham">
											TRAVEL
										</a>
									</span>

									{/* <span class="nav-item">
										<a href="https://www.asia.token2049.com/mobile-app" class="nav-link-ham">
											MOBILE APP
										</a>
									</span> */}

									{/* <span class="nav-item">
										<a href="https://week.token2049.com" class="nav-link-ham">
											TOKEN2049 WEEK
										</a>
									</span> */}

									{/* <span class="nav-item">
										<a href="https://pfp.token2049.com" class="nav-link-ham">
											I&apos;M ATTENDING
										</a>
									</span> */}
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
				<div class="submenu">
					<a href="https://www.asia.token2049.com/travel" class="submenu-link">
						TRAVEL
					</a>
					<a href="https://week.token2049.com" class="submenu-link">
						TOKEN2049 WEEK
					</a>
					{/* <a href="https://www.asia.token2049.com/mobile-app" class="submenu-link">
						MOBILE APP
					</a>
					<a href="https://pfp.token2049.com" class="submenu-link pfps">
						I&apos;M ATTENDING
					</a> */}
				</div>
			</div>
		</header>
	);
};

export default Navbar;
