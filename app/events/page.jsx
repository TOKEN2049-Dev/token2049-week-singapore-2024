import { cache } from "react";
import axios from "axios";
import EventsComp from "@/components/EventsComp";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import NewsLetter from "@/components/NewsLetter";

// Cache the fetch function
const fetchEvents = cache(async () => {
	try {
		const res = await axios.get(`https://week.token2049.com/api/events`);
		return res.data.events;
	} catch (error) {
		console.error("Error fetching events:", error);
		return [];
	}
});

export async function generateStaticParams() {
	// This function will be called at build time
	await fetchEvents();
	return [];
}

// Set the revalidation period (in seconds)
export const revalidate = 3600; // Revalidate every hour

export default async function HomePage() {
	const events = await fetchEvents();

	return (
		<>
			<Navbar />
			<HeroSection />
			<div className="t-events">
				<div className="container c-hack">
					<EventsComp initialEvents={events} />
				</div>
				<NewsLetter />
				<Footer />
			</div>
		</>
	);
}
