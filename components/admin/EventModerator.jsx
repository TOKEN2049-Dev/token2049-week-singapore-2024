"use client";
import { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import NoDataTableRow from "@/components/ui/Table/NoDataTableRow";
import DeleteToolConfirmModal from "./Modals/DeleteToolConfirmModal";
import VerifyToolConfirmModal from "./Modals/VerifyToolConfirmModal";
import UnverifyToolConfirmModal from "./Modals/UnverifyToolConfirmModal";
import verified_tick from "/public/verified_tick.svg";
import axios from "axios";
import ModeratorTable from "./ModeratorTable";
import { current_date, last_date } from "@/config/constants";

export default function EventModerator() {
	const [events, setEventCardData] = useState(null);

	useEffect(() => {
		axios.get("/api/events?allEvents=true").then((res) => {
			setEventCardData(res.data.events);
		});
	}, []);

	const router = useRouter();
	const [activeTable, setActiveTable] = useState("all");

	const [isDeleteToolModalOpen, setDeleteToolModalOpen] = useState(false);
	const [isVerifyToolModalOpen, setVerifyToolModalOpen] = useState(false);
	const [isUnverifyToolModalOpen, setUnverifyToolModalOpen] = useState(false);

	const [toolToDelete, setToolToDelete] = useState("");
	const [toolToVerify, setToolToVerify] = useState("");
	const [toolToUnverify, setToolToUnverify] = useState("");

	const headingMaping = {
		all: "All Events",
		unverified: "Unverified Events",
		verified: "Verified Events",
	};

	const editHandler = (event) => {
		router.push(`/admin/edit/event/${event.event_id}`);
	};

	const changeVerificationHandler = (event) => {
		if (event.verified === 1) {
			setToolToUnverify(event);
			setUnverifyToolModalOpen(true);
		}
		else{
			if(!isDateInInterval(event.event_date)){
				alert("This event is out of the scope of TOKEN2049 Week");
				return;
			}
			setToolToVerify(event);
			setVerifyToolModalOpen(true);
		}
	};

	function isDateInInterval(dateString) {
		// Parse the input date string
		const inputDate = new Date(dateString);
	  
		// Define the start and end dates of the interval
		const intervalStartDate = new Date(current_date);
		const intervalEndDate = new Date(last_date);
	  
		// Check if the input date is within the interval
		return inputDate >= intervalStartDate && inputDate <= intervalEndDate;
	}

	const deleteHandler = (tool) => {
		setToolToDelete(tool);
		setDeleteToolModalOpen(true);
	};

	const eventsToMod = useMemo(() => {
		if (events && events.length > 0) {
			if (activeTable === "all") return events;
			else if (activeTable === "verified") return events.filter((event) => event.verified === 1);
			else return events.filter((event) => event.verified === 0);
		} else return [];
	}, [events, activeTable]);
	const eventsCount = eventsToMod ? eventsToMod.length : 0;

	return (
		<div className="flex flex-col w-full font-primary items-center pt-[124px] mb-[4rem] px-32">
			<h1 className="font-primary font-semibold text-5xl mb-0 leading-none">{headingMaping[activeTable]}</h1>
			<div className="flex items-center my-[2rem] justify-between w-full">
				<div className="flex">
					<button
						onClick={() => setActiveTable("all")}
						className={
							"font-primary p-2 px-3 rounded-md text-sm font-semibold text-primary-500 " +
							(activeTable === "all" ? "bg-primary-200" : "bg-transparent")
						}
					>
						All Events
					</button>
					<button
						onClick={() => setActiveTable("unverified")}
						className={
							"font-primary p-2 px-3 rounded-md text-sm font-semibold text-primary-500 " +
							(activeTable === "unverified" ? "bg-primary-200" : "bg-transparent")
						}
					>
						Unverified
					</button>
					<button
						onClick={() => setActiveTable("verified")}
						className={
							"font-primary p-2 px-3 rounded-md text-sm font-semibold text-primary-500 " +
							(activeTable === "verified" ? "bg-primary-200" : "bg-transparent")
						}
					>
						Verified
					</button>
				</div>
				<p className="text-sm font-semibold m-0">Total Count: {eventsCount}</p>
			</div>

			<ModeratorTable
				editHandler={editHandler}
				deleteHandler={deleteHandler}
				changeVerificationHandler={changeVerificationHandler}
				events={eventsToMod}
				headingsArr={["Event", "Organiser", "Image", "Date", "Timings", "Registration Link", "Category", "Ticket type", "Price", "CTA"]}
			/>
			<DeleteToolConfirmModal isOpen={isDeleteToolModalOpen} setOpen={setDeleteToolModalOpen} toolToDelete={toolToDelete} />
			<VerifyToolConfirmModal isOpen={isVerifyToolModalOpen} setOpen={setVerifyToolModalOpen} toolToVerify={toolToVerify} />
			<UnverifyToolConfirmModal isOpen={isUnverifyToolModalOpen} setOpen={setUnverifyToolModalOpen} toolToUnverify={toolToUnverify} />
		</div>
	);
}
