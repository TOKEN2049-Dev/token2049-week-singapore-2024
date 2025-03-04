"use client";

const HeroSection = () => {
	return (
		<div className="ban-ner">
			{/* <div className="header-fix-bg"></div> */}
			<div className="inner-img">
				<div className="container flex items-center">
					<div className="inner-text">
						<img src={"/TOKEN2049-Week-Logo.svg"} className="desktop" alt="Banner" />
						{/* <img src={"/TOKEN2049-Week-Logo-Stacked.png"} className="mobile" /> */}
						<p className="event-date whitespace-nowrap">
							28 April - 4 May 2025{" "}
							<span className="dxtop flex">
								<span className="h-full flex justify-center items-center px-3">•</span> DUBAI
							</span>{" "}
						</p>
						<div className="own-event">
							{/* <p className="Drinks">
								Experience the year&apos;s widest range of meetups, workshops, networking drinks and parties, creating unparalleled networking
								opportunities.
							</p>

							<p className="updts">
								Watch this space for continuous updates, and join the conversation <br />
								by using <b>#TOKEN2049Week</b> on Twitter.
							</p> */}

							<div className="own-evnt-btn d-flex">
								<a className="cursor-pointer" href="https://forms.token2049.com/dubai/token2049-week-event-submission" target="_blank">
									<button className="min-w-[279px] side-evnt cursor-pointer">SUBMIT YOUR EVENT</button>
								</a>
								
								<a
									className="w-full cursor-pointer"
									href="https://docs.google.com/spreadsheets/d/1dz5m9JrPePk0fBl_HD6O8edwYaw-APBOGmcAF38gTUM/edit?gid=0#gid=0"
									target="__blank"
								>
									<button id="side-events-btn" className="min-w-[279px] hst-own cursor-pointer side-events-btn">
										SIDE EVENTS SHEET
									</button>
								</a>
							</div>

							<p>
								<span style={{fontFamily: "OpenSauceSansLight"}}>Want to host a side event and haven&apos;t found a space yet?&nbsp;</span>
								<>
									<a href="https://forms.token2049.com/dubai/hosting" target="_blank" className="host-link">
										Click here to get in touch
									</a>
									.
								</>
							</p>

							{/* <div className="flex justify-center items-center pt-16 chevron-desktop">
								<img src={"/chevron.svg"} className="" height="30" width="30" />
							</div> */}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HeroSection;
