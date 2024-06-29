import axios from "axios";
import { useEffect, useMemo, useState } from "react";
import EventCard from "./EventCard";
import CategoryFilter from "./CategoryFilters";

const EventFilters = ({ selectedDateFilter }) => {
	const [selectedCategory, setSelectedCategory] = useState("all");
	const [paymentFilterData, setPaymentFilterData] = useState(null);

	const [eventCardData, setEventCardData] = useState(null);

	useEffect(() => {
		axios.get("/api/events").then((res) => {
			setEventCardData(res.data.events);
		});
	}, [selectedDateFilter]);

	const constructedEventCardArr = useMemo(() => {
		if (eventCardData === null) return [];

		return eventCardData
			.filter((item) => {
				const date = new Date(item.event_date);
				const dateObject = new Date(date.toLocaleString("en-US", { timeZone: "Asia/Singapore" }));
				const year = dateObject.getFullYear();
				const month = String(dateObject.getMonth() + 1).padStart(2, "0");
				const day = String(dateObject.getDate()).padStart(2, "0");
				const formattedEventDate = `${year}-${month}-${day}`;

				if (paymentFilterData && item.event_type.toLowerCase() !== paymentFilterData) return false;
				if (selectedCategory !== "all" && selectedCategory !== item.event_category.split(" ")[0].toLowerCase()) return false;
				if (selectedDateFilter !== "alldates" && selectedDateFilter !== formattedEventDate) return false;
				return true;
			})
			.map((item) => {
				const date = new Date(item.event_date);
				const dayOfMonth = new Date(date.toLocaleString("en-US", { timeZone: "Asia/Singapore" })).getDate();
				const options = { weekday: "short" };
				const abbreviatedDayName = new Intl.DateTimeFormat("en-US", { ...options, timeZone: "Asia/Singapore" }).format(date);

				function getFormattedTime(timeString) {
					const timeParts = timeString.split(":");
					const hours = parseInt(timeParts[0], 10);
					const minutes = parseInt(timeParts[1], 10);

					const formattedTime = new Date(0, 0, 0, hours, minutes).toLocaleString("en-US", {
						hour: "numeric",
						minute: "numeric",
						hour12: true,
					});

					return formattedTime;
				}
				return (
					<EventCard
						key={item.event_id}
						eventName={item.event_name}
						day={abbreviatedDayName}
						date={dayOfMonth}
						eventCategory={item.event_category}
						eventType={item.price ?? "Free"}
						startTime={getFormattedTime(item.start_time)}
						endTime={getFormattedTime(item.end_time)}
						imgStr={item.thumbnail}
						registrationLink={item.registration_link}
						isFeatured={item.featured_event === 1}
						inviteOnly={item.invite_only === 1}
					/>
				);
			});
	}, [eventCardData, paymentFilterData, selectedCategory, selectedDateFilter]);

	return (
		<div className="alldata tabcontent" id="Su-n">
			<div className="fillers">
				<div className="row">
					<div className="col-lg-12 filter-btb d-flex">
						<div className="ma-in">
							<div id="all-buttons">
								<div id="function-buttons">
									<CategoryFilter selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
								</div>
								<div className="mobile">
									<div id="payment-buttons">
										<div className="ptm desk" id="ptm">
											<button
												onClick={() => {
													if (paymentFilterData !== "free") setPaymentFilterData("free");
													else setPaymentFilterData(null);
												}}
												data-but_id="free-div"
												className={"Free paymentbtn typebtn " + (paymentFilterData === "free" ? "active" : "")}
											>
												Free
											</button>
											<button
												onClick={() => {
													if (paymentFilterData !== "paid") setPaymentFilterData("paid");
													else setPaymentFilterData(null);
												}}
												data-but_id="paid-div"
												className={"Paid paymentbtn typebtn " + (paymentFilterData === "paid" ? "active" : "")}
											>
												Paid
											</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className={"e-divs all_div-parent mt-5"} id="events-div">
				{constructedEventCardArr && constructedEventCardArr.length > 0 ? (
					constructedEventCardArr
				) : (
					<div className="nodata no-events">
						<div className="col-sm-6 col-6 card-style col-md-2">No Data</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default EventFilters;
