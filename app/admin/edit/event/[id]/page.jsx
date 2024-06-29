"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import EditEvent from "@/components/edit/EditEvent";

const EditEventPage = ({params}) => {
    return (  
        <>
            <Navbar/>
            <EditEvent eventId={params.id}/>
            <Footer/>
        </>
    );
}
 
export default EditEventPage;