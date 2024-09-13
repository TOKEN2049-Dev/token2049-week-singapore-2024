"use client";

import { useState } from "react";
import EventsDate from "@/components/EventDates";
import EventFilters from "@/components/EventFilters";

const EventsComp = ({ initialEvents }) => {
	const [selectedDate, setSelectedDate] = useState("alldates");

	return (
		<>
			<EventsDate selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
			<EventFilters selectedDateFilter={selectedDate} initialEvents={initialEvents} />
		</>
	);
};

export default EventsComp;
