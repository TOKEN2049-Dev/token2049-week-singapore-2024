const NewsLetter = () => {
	return (
		<div className="alldata subs_section">
			<div className="subs row" style={{ padding: 0, paddingTop: "50px", background: "#FAFAFA", minHeight: "none !important" }}>
				<div className="w-full md:p-0 px-[20px] relative md:flex-row  flex-col flex  md:items-center md:justify-center h-full  bg-[#FAFAFA]">
					<p className="leading-tight font-lassrietL max-w-sm md:max-w-xs text-2xl lg:text-[35px] md:mr-10 md:px-0 sm:px-16 px-6">
						Subscribe for the latest event updates
					</p>
					<div className="relative md:block flex flex-col md:px-0 sm:px-16 px-6 md:shadow-sm rounded-[18px]">
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
					</div>
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
