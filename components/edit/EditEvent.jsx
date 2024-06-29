import PageWrapper from "../ui/PageWrapper";
import axios from "axios";
import { useEffect, useState } from "react";
import EditForm from "./EditForm";

export default function EditEvent({eventId}) {
    const [defaultData, setDefaultData] = useState(null);

    useEffect(() => {
        axios.get(`/api/events?eventId=${eventId}`).then((res) => {
            setDefaultData(res.data);
        })
    }, [eventId]);
    
	return (
		<PageWrapper>
			<div className="w-full flex flex-col items-center justify-center">
				<h1 className="text-6xl font-bold text-center tracking-[-1px] text-gradient-primary-tr">
					{"Edit Event"}
				</h1>
                <EditForm defaultData={defaultData?.events[0]}/>
			</div>
		</PageWrapper>
	);
}