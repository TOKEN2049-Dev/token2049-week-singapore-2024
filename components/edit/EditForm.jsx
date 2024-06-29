import { useEffect, useMemo, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import Dropdown from "./Dropdown";
import { current_date, last_date } from "@/config/constants";


const EditForm = ({defaultData}) => {
    const [editFields, setEditFields] = useState(null);
    const router = useRouter();

    useEffect(() => {
        function formatDate1(dateStr) {
            const date = new Date(dateStr);
            const year = date.getFullYear();
            const month = padZero(date.getMonth() + 1);
            const day = padZero(date.getDate());
          
            return `${year}-${month}-${day}`;
        }
    
        function padZero1(value) {
            return value < 10 ? `0${value}` : value;
        }

        if(defaultData){
            setEditFields({...defaultData, event_date: formatDate1(defaultData['event_date'])});
        }
    }, [defaultData])

    const constructedArray = [];

    const handleChangesSubmission = () => {
        axios.put(`/api/events`, {data: editFields}).then((res) => router.push('/admin')).catch(e => {alert(e.response.data.message);});
    }

    function formatDate(dateStr) {
        const date = new Date(dateStr);
        const year = date.getFullYear();
        const month = padZero(date.getMonth() + 1);
        const day = padZero(date.getDate());
      
        return `${year}-${month}-${day}`;
    }

    function padZero(value) {
        return value < 10 ? `0${value}` : value;
    }

    function isDateInInterval(dateString) {
		// Parse the input date string
		const inputDate = new Date(dateString);
	  
		// Define the start and end dates of the interval
		const intervalStartDate = new Date(current_date);
		const intervalEndDate = new Date(last_date);
	  
		// Check if the input date is within the interval
		return inputDate >= intervalStartDate && inputDate <= intervalEndDate;
	}

    for(let field in editFields){
        if(field === 'verified' || field === 'featured_event' || field === 'invite_only'){
            const defVal = editFields[field] === 1;

            constructedArray.push(
                <div key={`${field}`} className="flex flex-col font-primary">
                    <p className="font-semibold text-sm text-dark-400 capitalize">{field.replace(/_/g, ' ')}</p>
                    <Dropdown
                        variant="secondary"
                        id={field}
                        name={field}
                        options={[String(defVal), String(!defVal)]}
                        setChoice={(e) => {
                            // if(field === 'verified'){
                                if(!isDateInInterval(editFields.event_date)){
                                    alert("This event is out of the scope of TOKEN2049 Week");
                                    e.target.value = "false";
                                    return;
                                }
                            // }
                            setEditFields(prev => ({...prev, [field]:e.target.value === 'true'? 1:0}))
                        }}
                        classes={"w-full"}
                    />
                </div>
            );
        }
        else if(field === 'thumbnail'){
            constructedArray.push(
                <div key={`${field}`} className="flex flex-col font-primary">
                    <p className="font-semibold text-sm text-dark-400 capitalize">{field.replace(/_/g, ' ')}</p>
                    <input 
                        type="text" 
                        value={field==='event_date'? formatDate(editFields[field]):editFields[field]}
                        className={
                            "w-full text-dark-300 outline-none bg-light-200/70 focus:ring-primary-500 focus:border-primary-500 border border-gray-300 text-sm rounded-md cursor-text form-input block transition duration-300 py-[0.5rem] px-[0.75rem] " + 
                            (field === 'event_id'? 'cursor-not-allowed opacity-[75%]':'')
                        }
                        onChange={(e) => {
                            setEditFields(prev => ({...prev, [field]:e.target.value}))
                        }}
                        readOnly={field === 'event_id'}
                    />
                    <p className="font-medium mt-3 text-xs text-dark-400 capitalize">Preview</p>
                    <img key={`${editFields[field]}`} src={editFields[field]} width={128} alt="thumbnail"/>
                </div>
            );
        }
        else{
            constructedArray.push(
                <div key={`${field}`} className="flex flex-col font-primary">
                    <p className="font-semibold text-sm text-dark-400 capitalize">{field.replace(/_/g, ' ')}</p>
                    <input 
                        type="text" 
                        value={field==='event_date'? formatDate(editFields[field]):editFields[field]}
                        className={
                            "w-full text-dark-300 outline-none bg-light-200/70 focus:ring-primary-500 focus:border-primary-500 border border-gray-300 text-sm rounded-md cursor-text form-input block transition duration-300 py-[0.5rem] px-[0.75rem] " + 
                            (field === 'event_id'? 'cursor-not-allowed opacity-[75%]':'')
                        }
                        onChange={(e) => {
                            setEditFields(prev => ({...prev, [field]:e.target.value}))
                        }}
                        readOnly={field === 'event_id'}
                    />
                </div>
            );
        }
    }

    return (  
        <div className="flex flex-col items-center w-full">
            <div className="grid grid-cols-2 w-full my-[4rem] gap-x-32 p-10 gap-y-8 bg-light-100 rounded-2xl">
                {constructedArray}
            </div>
            <button onClick={handleChangesSubmission} className="w-64 font-primary text-white font-medium py-2 bg-primary-500 text-center rounded-md cursor-pointer">Submit Changes</button>
        </div>
    );
}
 
export default EditForm;