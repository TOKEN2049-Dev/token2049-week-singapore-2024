const NewsLetter = () => {
	return (
		<div id="newsletter" className="alldata subs_section">
			<div className="subs row" style={{ background: "#FAFAFA", minHeight: "none !important" }}>
				<div className="w-full md:p-0 px-[20px] relative flex-col flex  md:items-center md:justify-center h-full bg-[#FAFAFA]">
					<p className="leading-tight subscribe-head text-3xl md:text-4xl text-center lg:text-[35px] md:mr-10 md:px-0 sm:px-16 px-6 mb-6">
						Subscribe for the latest event updates
					</p>
					<form action="https://token2049.us17.list-manage.com/subscribe/post" method="POST">
						<input type="hidden" name="u" value="0a78eaa9e8ac8f5ee04b715d3" />
						<input type="hidden" name="id" value="5460c9b150" />

						<div className="form-div self-center">
							<div className="border-b-2 border-gray-700 self-center">
								<input
									className="form-div-inp bg-white rounded-[2px] font-lassrietL px-2 outline-none pt-[11px] pb-[6px] border-0 font-light text-gray-500"
									placeholder="Email Address"
									name="MERGE0"
									id="MERGE0"
									type="email"
								></input>
							</div>

							<button
								type="submit"
								className="form-div-btn self-center h-full bg-[#8247FF] hover:bg-[#5F2FC8] uppercase font-semibold text-white rounded-[5px] py-[10px] px-[32px] sm:w-fit w-fit"
							>
								Get Updates
							</button>
						</div>
					</form>

					{/* <div className="relative md:block flex flex-col md:px-0 sm:px-16 px-6 md:shadow-sm rounded-[18px]">
						<input
							className="bg-white border-none rounded-[18px] font-lassrietL px-3 md:max-w-none max-w-md md:w-[440px] outline-none py-[18px] shadow-sm md:shadow-none"
							placeholder="name@email.com"
						></input>
						<a
							className=""
							href="https://superai.us14.list-manage.com/subscribe/post?u=bcae48fc20de0ec8abc1a4d5f&id=82a8dd74fe&f_id=001a9ee0f0"
							target="_blank"
						>
							<button className="bg-[#8247FF] hover:bg-[#5F2FC8] newsletter-get-updates-btn hidden md:block absolute top-[50%] translate-y-[-50%] right-2 uppercase text-white rounded-[18px] py-[12px] px-[32px]">
								Get Updates
							</button>
						</a>
						<a href="https://superai.us14.list-manage.com/subscribe/post?u=bcae48fc20de0ec8abc1a4d5f&id=82a8dd74fe&f_id=001a9ee0f0" target="_blank">
							<button className="max-w-fit mt-3 bg-[#8247FF] hover:bg-[#5F2FC8] md:hidden uppercase text-white rounded-[18px] py-[12px] px-[32px]">
								Get Updates
							</button>
						</a>
					</div> */}
				</div>
			</div>
		</div>
	);
};

export default NewsLetter;

// const NewsLetter = () => {
//     return (
//         <div className="alldata subs_section">
//             <div className="subs row">
//                 <div className="container">
//                     <div className="col-md-9 col-sm-12 subs-mid">
//                         <div className="subs-heads">
//                             <h2 className="subs-txt">Subscribe for the latest event updates</h2>
//                         </div>
//                         <div className="subs-inpt d-flex">
//                             <input type="text" name="" className="email" placeholder="Email Address" />
//                             <a href="https://token2049.us17.list-manage.com/subscribe/post?u=0a78eaa9e8ac8f5ee04b715d3&id=5460c9b150">
//                                 <button>
//                                 GET UPDATES
//                                 </button>
//                                 </a>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default NewsLetter;
