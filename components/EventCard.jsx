import Tooltip from "./ui/Tooltip";

const EventCard = ({
	day = "Mon",
	date = 12,
	startTime = "02:00 PM",
	endTime = "09:00 PM",
	eventName = "Champ Medici x Gushcloud By REPUBLIK",
	eventCategory = "Other",
	eventType = "Paid",
	imgStr,
	registrationLink,
	isFeatured,
	inviteOnly = false,
}) => {
	return (
		<div className={isFeatured ? "p-1 featured-card-content-wrapper rounded-lg flex flex-col bg-[#410BB9]" : ""}>
			{isFeatured && 
				<div className="my-2 px-4 flex w-full justify-between items-center">
					<p className="font-semibold m-0 font-primary text-white uppercase">Featured Event</p>
					<Tooltip
						labelText={<i className="text-white text-lg fa-solid fa-circle-info"></i>}
						message={"This is a TOKEN2049 Week featured event. Email us at sponsors@token2049.com to upgrade your side event to featured event."}
					/>
				</div>
			}
			<div className="eventsWrappers workshop-btn free-div">
				<div className={"col-sm-6 col-6 card-style col-md-2 " + (isFeatured ? "featured-card-content-div" : "")}>
					<div className="col-md-3 ">
						<div className="onlydates  only-dates-show">
							<div className="week">{day}</div>
							<div className="day">{date}</div>
						</div>
						<h4>
							<span>
								<i className="fa fa-clock-o"></i>
								{startTime}
								<br /> {endTime}
							</span>
						</h4>
					</div>
					<div className="col-md-6 event_dv_inner">
						<div className="evnt-img">
							<img className="img" src={imgStr} alt="img" />
						</div>
						<div className="ryt-cntnt">
							<h3>{eventName}</h3>
							<h4>
								<span id="workshop"> {eventCategory} </span>
								<span id="price"> {eventType}</span>
							</h4>
						</div>
					</div>
                    {
						inviteOnly?
						<div className="col-md-3 pointer-events-none">
                            <a href="#">
                                <button>Invite Only</button>
                            </a>
                        </div>
						:(
                        (registrationLink && registrationLink.length > 0)?
                        <div className="col-md-3">
                            <a target="blank" href={registrationLink}>
                                <button>Register</button>
                            </a>
                        </div>
                        :
                        <div className="col-md-3 pointer-events-none">
                            <a href="#">
                                <button>Coming Soon</button>
                            </a>
                        </div>)
                    }
				</div>
			</div>
		</div>
	);
};

export default EventCard;
