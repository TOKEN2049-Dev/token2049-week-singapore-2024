"use client";

import { useState } from "react";
import EventsDate from "@/components/EventDates";
import EventFilters from "@/components/EventFilters";
import Events from "@/components/Events";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import NewsLetter from "@/components/NewsLetter";

const HomePage = () => {
	const [selectedDate, setSelectedDate] = useState("alldates");

	return (
		<>
			<Navbar />
			<HeroSection />
			<div className="t-events">
				<div className="container c-hack">
					<EventsDate selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
					<EventFilters selectedDateFilter={selectedDate} />
				</div>
				<NewsLetter />
				<Footer />
			</div>
		</>
	);
};

export default HomePage;
