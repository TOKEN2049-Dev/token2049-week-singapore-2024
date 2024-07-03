const HeroSection = () => {
	return (
		<div className="ban-ner">
			{/* <div className="header-fix-bg"></div> */}
			<div className="inner-img">
				<div className="container flex items-center">
					<div className="inner-text">
						<img src={"/TOKEN2049-Week-Logo.png"} className="desktop" alt="Banner" />
						{/* <img src={"/TOKEN2049-Week-Logo-Stacked.png"} className="mobile" /> */}
						<p className="event-date">
							16 - 22 SEPTEMBER 2024{" "}
							<span className="dxtop flex">
								<span className="h-full flex justify-center items-center px-3">|</span> SINGAPORE
							</span>{" "}
						</p>
						<div className="own-event">
							<p className="Drinks">
								Experience the year&apos;s widest range of meetups, workshops, networking drinks and parties, creating unparalleled networking
								opportunities.
							</p>

							<p className="updts">
								Watch this space for continuous updates, and join the conversation <br />
								by using <b>#TOKEN2049Week</b> on Twitter.
							</p>

							<div className="own-evnt-btn d-flex">
								<a className="w-full cursor-pointer" href="https://forms.token2049.com/singapore/week" target="_blank">
									<button className="min-w-[279px] side-evnt cursor-pointer">SUBMIT YOUR EVENT</button>
								</a>
								<a
									className="w-full cursor-pointer"
									href="https://docs.google.com/spreadsheets/d/1bWp6ENyhxaNnnCHvxrMRO8n1IRKq3lu891F7Y4zxfZk/edit?gid=0#gid=0"
									target="__blank"
								>
									<button id="side-events-btn" className="min-w-[279px] hst-own cursor-pointer side-events-btn">
										SIDE EVENTS SHEET
									</button>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HeroSection;
