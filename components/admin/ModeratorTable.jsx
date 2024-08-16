import { useState } from "react";
import axios from "axios";
import Image from "next/image";
import verified_tick from "/public/verified_tick.svg";

const ModeratorTable = ({ headingsArr, events, editHandler, deleteHandler, changeVerificationHandler, activeTable }) => {
	const [selectedEvents, setSelectedEvents] = useState([]);

	const handleCheckboxChange = (event) => {
		setSelectedEvents((prevSelected) =>
			prevSelected.includes(event.event_id) ? prevSelected.filter((id) => id !== event.event_id) : [...prevSelected, event.event_id]
		);
	};

	const handleSelectAll = () => {
		if (selectedEvents.length === events.length) {
			setSelectedEvents([]);
		} else {
			setSelectedEvents(events.map((event) => event.event_id));
		}
	};

	const handleBulkVerify = async () => {
		if (selectedEvents.length === 0) return;

		const promises = selectedEvents.map(async (eventId) => {
			const event = events.find((e) => e.event_id === eventId);
			if (event) {
				const url = `/api/events?eventId=${eventId}&verify=${event.verified === 0}`;
				return axios.patch(url);
			}
		});

		await Promise.all(promises);
		setSelectedEvents([]); // Clear selections after verification
		location.reload();
	};

	const constructFormattedDate = (isoDateStr) => {
		const dateObject = new Date(isoDateStr);
		const options = { weekday: "short", day: "numeric", month: "short" };
		const formattedDateVal = new Intl.DateTimeFormat("en-US", options).format(dateObject);
		return formattedDateVal;
	};

	return (
		<>
			{(activeTable == "unverified" || activeTable == "verified") && (
				<button
					onClick={handleBulkVerify}
					className={
						"font-primary text-white px-4 py-2 mt-4 rounded-md self-end " +
						(selectedEvents.length === 0 ? "cursor-not-allowed bg-gray-400" : "bg-green-500 hover:bg-green-500/90 cursor-pointer")
					}
					disabled={selectedEvents.length === 0}
				>
					{activeTable == "unverified" ? "Bulk Verify" : "Bulk Unverify"}
				</button>
			)}

			<table className="w-full table table-auto text-gray-400 border-separate space-y-6 text-sm">
				<thead className="bg-dark-800">
					<tr>
						{(activeTable == "unverified" || activeTable == "verified") && (
							<th className="p-3 text-left text-light-200 pl-6">
								Select
								<input type="checkbox" checked={selectedEvents.length === events.length} onChange={handleSelectAll} />
							</th>
						)}
						{headingsArr.map((item, idx) => (
							<th key={`headings${idx}`} className={"p-3 text-left text-light-200 " + (idx === 0 ? "pl-6" : "")}>
								{item}
							</th>
						))}
					</tr>
				</thead>
				<tbody className="text-gray-900">
					{events?.map((event) => (
						<tr className="bg-light-100 text-dark-700" key={event.event_id}>
							{(activeTable == "unverified" || activeTable == "verified") && (
								<td className="p-3">
									<input
										className="cursor-pointer"
										type="checkbox"
										checked={selectedEvents.includes(event.event_id)}
										onChange={() => handleCheckboxChange(event)}
									/>
								</td>
							)}
							<td className="p-3">
								{event.verified === 1 && <Image src={verified_tick} width={14} height={14} alt="verified_tick" />}
								{event.event_name}
							</td>
							<td className="p-3">{event.organiser_name}</td>
							<td className="p-3">
								<img src={event.thumbnail} className="w-[55px] rounded-md" />
							</td>
							<td className="p-3">{constructFormattedDate(event.event_date)}</td>
							<td className="p-3">{`${event.start_time} to ${event.end_time}`}</td>
							<td className="p-3">
								{event.registration_link && event.registration_link.length > 0 ? (
									<a
										href={event.registration_link}
										target="_blank"
										rel="noopener noreferrer"
										className="hover:underline hover:text-primary-500"
									>
										{event.registration_link.length > 30 ? event.registration_link.slice(0, 30) + "..." : event.registration_link}
									</a>
								) : (
									"-"
								)}
							</td>
							<td className="p-3">{event.event_category}</td>
							<td className="p-3">{event.event_type}</td>
							<td className="p-3">{event.price ?? "-"}</td>
							<td className="p-3">
								<div className="flex flex-col gap-y-2">
									<button
										onClick={() => editHandler(event)}
										className="bg-primary-500 hover:bg-primary-500/90 font-primary text-white px-3 py-1 rounded-md"
									>
										Edit
									</button>
									<button
										onClick={() => changeVerificationHandler(event)}
										className="bg-green-500 hover:bg-green-500/90 font-primary text-white px-3 py-1 rounded-md"
									>
										{event.verified ? "Unverify" : "Verify"}
									</button>
									<button
										onClick={() => deleteHandler(event)}
										className="bg-red-500 hover:bg-red-500/90 font-primary text-white px-3 py-1 rounded-md"
									>
										{"Delete"}
									</button>
								</div>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</>
	);
};

export default ModeratorTable;
