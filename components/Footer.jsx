import Link from "next/link";

const Footer = () => {
	return (
		<footer className="bg">
			<div className="container-lg">
				<div className="row footer_inner_bg">
					<div className="col-sm-5 col-md-5 col-12 footerimg foot-left-section">
						<div className="foot-logo">
							<a href="https://www.asia.token2049.com">
								<img src="/TOKEN_Transparent.webp" />
							</a>
						</div>
					</div>

					<div className="col-sm-7 col-md-7 col-12 footer_ul">
						<div className="row">
							<div className="col-sm-5 col-md-5 col-3 footer-lft foot-cnt-left footer_ul_inner">
								<ul>
									<li>
										<a href="https://www.asia.token2049.com/speakers" target="blank">
											Speakers
										</a>
									</li>
									<li>
										<a href="https://www.asia.token2049.com/partners" target="blank">
											Sponsors
										</a>
									</li>
									<li>
										<a href="https://www.asia.token2049.com/partners" target="blank">
											Media
										</a>
									</li>
									<li>
										<Link href="/#newsletter">Newsletter</Link>
									</li>
									<li>
										<a href="mailto:info@token2049.com" target="_self">
											Contact Us
										</a>
									</li>
								</ul>
							</div>

							<div className="col-sm-6 col-md-6 col-3 footer-ryt foot-cnt-right">
								<ul>
									<li>
										<a href="https://www.token2049.com" target="blank">
											TOKEN2049 Global
										</a>
									</li>
									<li>
										<a href="http://www.asia.token2049.com" target="blank">
											TOKEN2049 Singapore
										</a>
									</li>
									<li>
										<a href="http://www.week.token2049.com" target="blank">
											TOKEN2049 Week
										</a>
									</li>
									<li>
										<a href="https://www.asia.token2049.com/terms-conditions" target="_blank">
											Terms & Conditions
										</a>
									</li>
									<li>
										<a href="https://www.asia.token2049.com/privacy-policy" target="_blank">
											Privacy Policy
										</a>
									</li>
								</ul>
							</div>
						</div>
					</div>

					<div className="social_icn">
						<h4 className="mb-2">Stay connected</h4>
						<ul>
							<li className="pt-[0.25rem] hidden sm:block">
								<a href="https://twitter.com/token2049" target="blank">
									<svg xmlns="http://www.w3.org/2000/svg" height="22" width="22" viewBox="0 0 512 512">
										<path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
									</svg>
									{/* <i className="text-[22px] mt-1 fa-brands fa-twitter"></i> */}
								</a>
							</li>
							<li className="pt-[0.25rem] block sm:hidden">
								<a href="https://twitter.com/token2049" target="blank">
									<svg xmlns="http://www.w3.org/2000/svg" height="28" width="28" viewBox="0 0 512 512">
										<path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
									</svg>
									{/* <i className="text-[22px] mt-1 fa-brands fa-twitter"></i> */}
								</a>
							</li>
							<li>
								<a href="https://www.instagram.com/token2049" target="blank">
									<i className="text-[28px] sm:text-[22px] mt-1 fa-brands fa-instagram"></i>
								</a>
							</li>
							<li>
								<a href="https://www.linkedin.com/company/token2049/" target="blank">
									<i className="text-[28px] sm:text-[22px] mt-1 fa-brands fa-linkedin-in"></i>
								</a>
							</li>
							<li>
								<a href="https://t.me/token2049official" target="blank">
									<i className="text-[28px] sm:text-[22px] mt-1 fa-brands fa-telegram"></i>
								</a>
							</li>
							<li>
								<a href="https://www.youtube.com/c/TOKEN2049" target="blank">
									<i className="mt-1 text-[28px] sm:text-[22px] fa-brands fa-youtube"></i>
								</a>
							</li>
							<li>
								<a href="https://www.flickr.com/photos/token2049/" target="blank">
									<i className="text-[28px] sm:text-[22px] mt-1 fa-brands fa-flickr"></i>
								</a>
							</li>
							{/* <li className="pt-[0.125rem]">
								<a href="https://www.threads.net/@token2049" target="blank">
									<svg xmlns="http://www.w3.org/2000/svg" height="24" width="22" viewBox="0 0 448 512">
										<path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM294.2 244.3c19.5 9.3 33.7 23.5 41.2 40.9c10.4 24.3 11.4 63.9-20.2 95.4c-24.2 24.1-53.5 35-95.1 35.3h-.2c-46.8-.3-82.8-16.1-106.9-46.8C91.5 341.8 80.4 303.7 80 256v-.1-.1c.4-47.7 11.5-85.7 33-113.1c24.2-30.7 60.2-46.5 106.9-46.8h.2c46.9 .3 83.3 16 108.2 46.6c12.3 15.1 21.3 33.3 27 54.4l-26.9 7.2c-4.7-17.2-11.9-31.9-21.4-43.6c-19.4-23.9-48.7-36.1-87-36.4c-38 .3-66.8 12.5-85.5 36.2c-17.5 22.3-26.6 54.4-26.9 95.5c.3 41.1 9.4 73.3 26.9 95.5c18.7 23.8 47.4 36 85.5 36.2c34.3-.3 56.9-8.4 75.8-27.3c21.5-21.5 21.1-47.9 14.2-64c-4-9.4-11.4-17.3-21.3-23.3c-2.4 18-7.9 32.2-16.5 43.2c-11.4 14.5-27.7 22.4-48.4 23.5c-15.7 .9-30.8-2.9-42.6-10.7c-13.9-9.2-22-23.2-22.9-39.5c-1.7-32.2 23.8-55.3 63.5-57.6c14.1-.8 27.3-.2 39.5 1.9c-1.6-9.9-4.9-17.7-9.8-23.4c-6.7-7.8-17.1-11.8-30.8-11.9h-.4c-11 0-26 3.1-35.6 17.6l-23-15.8c12.8-19.4 33.6-30.1 58.5-30.1h.6c41.8 .3 66.6 26.3 69.1 71.8c1.4 .6 2.8 1.2 4.2 1.9l.1 .5zm-71.8 67.5c17-.9 36.4-7.6 39.7-48.8c-8.8-1.9-18.6-2.9-29-2.9c-3.2 0-6.4 .1-9.6 .3c-28.6 1.6-38.1 15.5-37.4 27.9c.9 16.7 19 24.5 36.4 23.6l-.1-.1z" />
									</svg>
								</a>
							</li> */}
						</ul>
					</div>
					<div className="copyright">
						<p>&copy; 2024 TOKEN2049. All rights reserved.</p>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
